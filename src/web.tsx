import React, { useEffect } from "react";

import * as Sonner from "sonner";

let hasMountedToaster = false;

export function getHasMountedWebToaster() {
  return hasMountedToaster;
}

export const Toaster: (typeof Sonner)["Toaster"] = (props) => {
  hasMountedToaster = true;
  useEffect(() => {
    hasMountedToaster = true;
    return () => {
      hasMountedToaster = false;
    };
  }, []);
  return (
    <Sonner.Toaster
      {...props}
      style={{
        // show on top of RNW modals
        zIndex: 1000000,
        ...props.style,
      }}
    />
  );
};
