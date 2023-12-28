import React from "react";
import { toast } from "sonner";
import { AlertOptions, ToastOptions } from "./types";
import { getHasMountedWebToaster } from "./web";

function getIcon(options: ToastOptions | AlertOptions) {
  return options.preset === "custom" ? (
    options.icon.web
  ) : options.preset === "done" ? (
    <DoneIcon />
  ) : options.preset === "error" ? (
    <XIcon />
  ) : undefined;
}

export default {
  toastAsync(options: ToastOptions) {
    if (!getHasMountedWebToaster()) {
      console.error(
        `[burnt] toast() error: You need to add the <Toaster /> component to the root of your app for toasts to display on Web. There was no <Toaster /> found.`
      );
    } else {
      toast(options.title, {
        description: options.message,
        icon: getIcon(options),
        duration: (options.duration ?? 5) * 1000,
      });
    }
  },
  alertAsync(options: AlertOptions) {
    if (!getHasMountedWebToaster()) {
      console.error(
        `[burnt] toast() error: You need to add the <Toaster /> component to the root of your app for toasts to display on Web. There was no <Toaster /> found.`
      );
    } else {
      if (options.preset === "spinner") {
        toast.promise(
          async () =>
            new Promise((resolve) =>
              setTimeout(resolve, options.duration * 1000)
            ),
          {
            // this behavior may be kinda weird, we don't have a success state with the ios alert() call...
            loading: options.title,
            description: options.message,
            error: options.title,
            success: options.title,
          }
        );
      } else {
        toast(options.title, {
          description: options.message,
          icon: getIcon(options),
          duration: (options.duration ?? 5) * 1000,
        });
      }
    }
  },
  dismissAllAlertsAsync() {
    toast.dismiss();
  },
};

const DoneIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className='lucide lucide-check'
    data-burnt-icon='check'
  >
    <style
      dangerouslySetInnerHTML={{
        __html: `[data-burnt-icon='check'] {
      stroke-dasharray: 50;
      stroke-dashoffset: -50;
      animation: burnt-draw-checkmark 400ms linear forwards;
    }

    @keyframes burnt-draw-checkmark {
      100% {
        stroke-dashoffset: 0;
      }
    }`,
      }}
    />
    <polyline points='20 6 9 17 4 12'></polyline>
  </svg>
);

const XIcon = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-x'
      data-burnt-icon='x'
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `[data-burnt-icon='x'] {
            stroke-dasharray: 34;
            stroke-dashoffset: 34;
    animation: draw-x 650ms ease forwards 250ms;
  }


  [data-burnt-icon='x'] line:nth-child(1) {
    transform-origin: 100% 0;
    transform: scaleX(-1);
  }

  [data-burnt-icon='x'] line:nth-child(2) {
    animation-delay: 400ms;
    transform-origin: 0 0;
  }

  @keyframes draw-x {
    100% {
      stroke-dashoffset: 0;
    }
  }`,
        }}
      />
      <line x1='18' x2='6' y1='6' y2='18'></line>
      <line x1='6' x2='18' y1='6' y2='18'></line>
    </svg>
  );
};
