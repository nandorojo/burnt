import ExpoModulesCore
import SPIndicator
import SPAlert
 
enum AlertPreset: String, Enumerable {
  case done
  case error
  case heart
  case spinner

  func toSPAlertIconPreset() -> SPAlertIconPreset {
    switch self {
    case .done:
      return .done
    case .error:
      return .error
    case .heart:
      return .heart
    case .spinner:
      return .spinner
    }
  }
}


enum AlertHaptic: String, Enumerable {
  case success
  case warning
  case error
  case none

  func toSPAlertHaptic() -> SPAlertHaptic {
    switch self {
    case .success:
      return .success
    case .warning:
      return .warning
    case .error:
      return .error
    case .none:
      return .none
    }
  }
}

struct AlertOptions: Record {
  @Field
  var title: String = ""
  
  @Field
  var message: String?

  @Field
  var preset: AlertPreset = AlertPreset.done

  @Field
  var duration: TimeInterval?

  @Field
  var shouldDismissByTap: Bool = true

  @Field
  var haptic: AlertHaptic = .none
}

struct ToastIconSize: Record {
  @Field
  var width: Int

  @Field
  var height: Int
}

struct ToastMargins: Record {
  @Field
  var top: CGFloat?

  @Field
  var left: CGFloat?

  @Field
  var bottom: CGFloat?

  @Field
  var right: CGFloat?
}

struct ToastLayout: Record {
  @Field
  var iconSize: ToastIconSize?

  @Field
  var margins: ToastMargins?
}

struct ToastOptions: Record {
  @Field
  var title: String = ""
  
  @Field
  var message: String?

  @Field
  var preset: ToastPreset = ToastPreset.done

  @Field
  var duration: TimeInterval?

  @Field
  var layout: ToastLayout?

  @Field
  var shouldDismissByDrag: Bool = true

  @Field
  var haptic: ToastHaptic = .none
}

enum ToastHaptic: String, Enumerable {
  case success
  case warning
  case error
  case none

  func toSPIndicatorHaptic() -> SPIndicatorHaptic {
    switch self {
    case .success:
      return .success
    case .warning:
      return .warning
    case .error:
      return .error
    case .none:
      return .none
    }
  }
}

enum ToastPreset: String, Enumerable {
  case done
  case error

  func toSPIndicatorPreset() -> SPIndicatorIconPreset {
    switch self {
    case .done:
      return .done
    case .error:
      return .error
    }
  }
}

public class BurntModule: Module {
  // Each module class must implement the definition function. The definition consists of components
  // that describes the module's functionality and behavior.
  // See https://docs.expo.dev/modules/module-api for more details about available components.
  public func definition() -> ModuleDefinition {
    // Sets the name of the module that JavaScript code will use to refer to the module. Takes a string as an argument.
    // Can be inferred from module's class name, but it's recommended to set it explicitly for clarity.
    // The module will be accessible from `requireNativeModule('Burnt')` in JavaScript.
    Name("Burnt")

    AsyncFunction("toastAsync") { (options: ToastOptions) -> Void in
      let view = SPIndicatorView(title: options.title, message: options.message, preset: options.preset.toSPIndicatorPreset())

      if let duration = options.duration {
        view.duration = duration
      }

      if let icon = options.layout?.iconSize {
        view.layout.iconSize = .init(width: icon.width, height: icon.height)
      }

      view.dismissByDrag = options.shouldDismissByDrag

      view.present(haptic: options.haptic.toSPIndicatorHaptic())
    }.runOnQueue(.main) 

    AsyncFunction("alertAsync")  { (options: AlertOptions) -> Void in
      let view = SPAlertView(
        title: options.title, 
        message: options.message, 
        preset: options.preset.toSPAlertIconPreset())

        if let duration = options.duration {
          view.duration = duration
        }

        view.dismissByTap = options.shouldDismissByTap

        view.present(
          haptic: options.haptic.toSPAlertHaptic())
     }.runOnQueue(.main) 

    AsyncFunction("dismissAllAlertsAsync") {
      return SPAlert.dismiss()
    }.runOnQueue(.main) 
  }
}
