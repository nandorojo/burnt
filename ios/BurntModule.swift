import ExpoModulesCore
import SPIndicator
import SPAlert
 
enum AlertPreset: String, EnumArgument {
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


enum AlertHaptic: String, EnumArgument {
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

  @Field
  var from: ToastPresentSide = .top
}

enum ToastHaptic: String, EnumArgument {
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

enum ToastPreset: String, EnumArgument {
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

enum ToastPresentSide: String, EnumArgument {
  case top
  case bottom

  func toSPIndicatorPresentSide() -> SPIndicatorPresentSide {
    switch self {
    case .top:
      return .top
    case .bottom:
      return .bottom
    }
  }
}

public class BurntModule: Module {
  public func definition() -> ModuleDefinition {
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

      view.from = options.from;

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
