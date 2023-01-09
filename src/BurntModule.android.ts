import { AlertOptions, ToastOptions } from "./types";
import { ToastAndroid } from "react-native";

export default {
  alertAsync({ message, title, preset, duration }: AlertOptions) {
    this.toastAsync({
      message,
      title,
      preset: preset == "done" ? "done" : preset == "error" ? "error" : "done",
      duration,
    });
  },
  toastAsync({ title, duration = 5, from = 'bottom' }: ToastOptions) {
    ToastAndroid.showWithGravityAndOffset(
      title,
      duration * 1000,
      from === 'bottom' ? ToastAndroid.BOTTOM : ToastAndroid.TOP,
      25,
      50
    );
  },
  dismissAllAlertsAsync() {},
};
