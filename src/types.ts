import type { SFSymbol } from "sf-symbols-typescript";

export type IconParams = {
  ios: {
    /**
     * The name of an iOS-only SF Symbol. For a full list, see https://developer.apple.com/sf-symbols/.
     * @platform ios
     */
    name: SFSymbol | (string & {});
    /**
     * Change the custom icon color, default is system blue.
     * @platform ios
     */
    color: string;
  };
  web?: JSX.Element;
};
export type AlertOptions = {
  title: string;
  message?: string;
  /**
   * Defaults to `true`.
   */
  shouldDismissByTap?: boolean;
  layout?: Layout;
} & (
  | {
      /**
       * Defaults to `done`.
       */
      preset?: "heart" | "done" | "error" | "none";

      /**
       * Duration in seconds.
       */
      duration?: number;
    }
  | {
      preset: "spinner";
      /**
       * Max timeout of the spinner in seconds. Required for this preset to avoid an infinite spinner.
       *
       * It's highly, highly recommended that you manually dismiss the alert using `Burnt.dismissAllAlerts()`.
       *
       * If you don't, then you risk having an infinite loading spinner for users.
       *
       * ```ts
       * Burnt.alert({
       *   preset: "spinner",
       *   title: 'Loading...',
       *   duration: 10, // Maximum of 10 seconds
       * })
       *
       * try {
       *   await createUser()
       * } finally {
       *   Burnt.dismissAllAlerts()
       * }
       * ```
       */
      duration: number;
    }
  | {
      preset: "custom";

      icon: IconParams;
      /**
       * Duration in seconds.
       */
      duration?: number;
    }
);

type Layout = {
  iconSize?: {
    width: number;
    height: number;
  };
};

export type BaseToastOptions = {
  title: string;
  message?: string;
  /**
   * Defaults to `done`.
   */
  preset?: "done" | "error" | "none"; // TODO custom option
  /**
   * Duration in seconds.
   */
  duration?: number;
  haptic?: "success" | "warning" | "error" | "none";
  /**
   * Defaults to `true`.
   */
  shouldDismissByDrag?: boolean;
  /**
   * Change the presentation side.
   * @platform ios
   */
  from?: "top" | "bottom";
  layout?: Layout;
};

export type CustomToastOptions = Omit<BaseToastOptions, "preset"> & {
  /**
   * Defaults to `done`.
   */
  preset?: "custom"; // TODO custom option
  icon: IconParams;
};

export type ToastOptions = BaseToastOptions | CustomToastOptions;
