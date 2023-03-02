// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import { processColor } from "react-native";
import BurntModule from "./BurntModule";
import { AlertOptions, ToastOptions } from "./types";

export function alert({ duration = 5, ...options }: AlertOptions) {
  let iconColor;
  if (options.preset === "custom") {
    iconColor = options.iconColor ? processColor(options.iconColor) : null;
  }
  return BurntModule.alertAsync({ duration, ...options, iconColor });
}

export function toast({ duration = 5, ...options }: ToastOptions) {
  let iconColor;
  if (options.preset === "custom") {
    iconColor = options.iconColor ? processColor(options.iconColor) : null;
  }
  return BurntModule.toastAsync({ duration, ...options, iconColor });
}

export function dismissAllAlerts() {
  return BurntModule.dismissAllAlertsAsync();
}
