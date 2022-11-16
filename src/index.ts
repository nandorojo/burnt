// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import BurntModule from "./BurntModule.ios";

type AlertOptions = {
  title: string;
  message: string;
  preset: "heart" | "done" | "error";
  /**
   * Duration in seconds.
   */
  duration?: number;
  /**
   * Defaults to `true`.
   */
  shouldDismissByTap?: boolean;
  // | "spinner"; this is too dangerous for now since we haven't added dismiss
};

export function alert({ preset = "done", ...options }: AlertOptions) {
  return BurntModule.alertAsync({ ...options });
}

type ToastOptions = {
  title: string;
  message: string;
  preset: "done" | "error"; // TODO custom option
  /**
   * Duration in seconds.
   */
  duration?: number;
  haptic?: "success" | "warning" | "error" | "none";
  /**
   * Defaults to `true`.
   */
  shouldDismissByDrag?: boolean;
};

export function toast(options: ToastOptions) {
  return BurntModule.toastAsync(options);
}

export function dismissAllAlerts() {
  return BurntModule.dismissAllAlertsAsync();
}
