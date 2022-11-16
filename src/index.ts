import {
  NativeModulesProxy,
  EventEmitter,
  Subscription,
} from "expo-modules-core";

// Import the native module. On web, it will be resolved to Burnt.web.ts
// and on native platforms to Burnt.ts
import BurntModule from "./BurntModule";

export function alert(options: {
  title: string;
  message: string;
  preset: "heart" | "done" | "error" | "spinner";
}) {
  return BurntModule.alertAsync({ ...options });
}

// Get the native constant value.
export const PI = BurntModule.PI;

export function hello(): string {
  return BurntModule.hello();
}

export async function setValueAsync(value: string) {
  return await BurntModule.setValueAsync(value);
}

export function toast(title: string, message: string) {
  return BurntModule.toastAsync(title, message);
}

export function toastAsync(title: string, message: string) {
  return BurntModule.toastAsync(title, message, null);
}
