// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import { processColor } from "react-native";
import BurntModule from "./BurntModule";
import { AlertOptions, ToastOptions } from "./types";
import { Platform } from 'react-native'

export function alert({ duration = 5, ...options }: AlertOptions) {
  let iconColor = null;
  let iconName;
  if (options.preset === "custom") {
    const icon = options.icon[Platform.OS]
    if (icon) {
      iconName = icon.name;
      iconColor = icon.color && processColor(icon.color)
    }
  }
  return BurntModule.alertAsync({ duration, ...options, iconColor, iconName })
}

export function toast({ duration = 5, ...options }: ToastOptions) {
  let iconColor;
  let iconName;
  if (options.preset === "custom") {
    const icon = options.icon[Platform.OS]
    if (icon) {
      iconName = icon.name;
      iconColor = icon.color && processColor(icon.color)
    }
  }
  return BurntModule.toastAsync({ duration, ...options, iconColor, iconName })
}

export function dismissAllAlerts() {
  return BurntModule.dismissAllAlertsAsync()
}
