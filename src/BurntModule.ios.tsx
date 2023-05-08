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
  toast(options: ToastOptions) {
    BurntModule.toast({
      ...options,
      icon:
        options.preset === "custom"
          ? getPlatfomIconProps(options.icon)
          : undefined,
    });
  },
  alert(options: AlertOptions) {
    BurntModule.alert({
      ...options,
      icon:
        options.preset === "custom"
          ? getPlatfomIconProps(options.icon)
          : undefined,
    });
  },
  dismissAllAlerts() {
    BurntModule.dismissAllAlerts();
  },
};
