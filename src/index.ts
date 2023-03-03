// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import { Platform, processColor } from "react-native";
import BurntModule from "./BurntModule";
import { AlertOptions, IconParams, ToastOptions } from "./types";

const getPlatfomIconProps = (params: IconParams) => {
  if (Platform.OS === "ios") {
    const color = params.ios?.color ? processColor(params.ios?.color) : null;
    return { ...params.ios, color };
  }
  return null;
};

export function alert({ duration = 5, ...options }: AlertOptions) {
  let icon;
  if (options.preset === "custom") {
    icon = getPlatfomIconProps(options.icon);
  }
  return BurntModule.alertAsync({ duration, ...options, icon });
}

export function toast({ duration = 5, ...options }: ToastOptions) {
  let icon;
  if (options.preset === "custom") {
    icon = getPlatfomIconProps(options.icon);
  }
  return BurntModule.toastAsync({ duration, ...options, icon });
}

export function dismissAllAlerts() {
  return BurntModule.dismissAllAlertsAsync();
}
