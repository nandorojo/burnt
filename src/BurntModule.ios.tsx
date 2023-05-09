import { requireNativeModule } from "expo-modules-core";

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
const BurntModule = requireNativeModule("Burnt");

import { processColor } from "react-native";
import { AlertOptions, IconParams, ToastOptions } from "./types";

const getPlatfomIconProps = (params: IconParams) => {
  const color = params.ios?.color ? processColor(params.ios?.color) : null;
  return { ...params.ios, color };
};
export default {
  toastAsync(options: ToastOptions) {
    BurntModule.toastAsync({
      ...options,
      icon:
        options.preset === "custom"
          ? getPlatfomIconProps(options.icon)
          : undefined,
    });
  },
  alertAsync(options: AlertOptions) {
    BurntModule.alertAsync({
      ...options,
      icon:
        options.preset === "custom"
          ? getPlatfomIconProps(options.icon)
          : undefined,
    });
  },
  dismissAllAlertsAsync() {
    BurntModule.dismissAllAlertsAsync();
  },
};
