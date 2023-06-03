import React from "react";

export const useFirstRender = function () {
  const isFirstRender = React.useRef(true);

  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }

  return isFirstRender.current;
};
