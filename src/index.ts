// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import BurntModule from "./BurntModule";
import { AlertOptions, IconParams, ToastOptions } from "./types";

export function alert({ duration = 5, ...options }: AlertOptions) {
  return BurntModule.alertAsync({ duration, ...options });
}

export function toast({ duration = 5, ...options }: ToastOptions) {
  return BurntModule.toastAsync({ duration, ...options });
}

export function dismissAllAlerts() {
  return BurntModule.dismissAllAlertsAsync();
}
