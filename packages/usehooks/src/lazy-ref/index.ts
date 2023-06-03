import React from "react";

export const useLazeRef = function (constructor: () => any) {
  const ref = React.useRef<(() => any) | null>(null);

  const get = React.useCallback(() => {
    if (ref.current === null) {
      ref.current = constructor()
    }

    return ref.current;
  }, [constructor]);

  return get;
};
