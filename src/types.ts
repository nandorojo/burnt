export type AlertOptions = {
  title: string;
  message: string;
  /**
   * Defaults to `true`.
   */
  shouldDismissByTap?: boolean;
} & (
  | {
      preset: "heart" | "done" | "error";

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
);

export type ToastOptions = {
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
  /**
   * Change the presentation side.
   * @platform ios
   */
  from?: "top" | "bottom";
};
