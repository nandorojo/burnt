import { AlertOptions, ToastOptions } from "./types";
import { ToastAndroid } from "react-native";

export default {
  alertAsync(_: AlertOptions) {
    console.warn(
      "[burnt] Burnt.alertAsync() is not implemented on this Android. Please try toastAsync()."
    );
  },
  toastAsync({ title, duration = 5 }: ToastOptions) {
    ToastAndroid.showWithGravityAndOffset(
      title,
      duration * 1000,
      ToastAndroid.BOTTOM,
      25,
      50
    );
  },
  dismissAllAlertsAsync() {},
};
