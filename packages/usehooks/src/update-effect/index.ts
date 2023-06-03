import React from "react";

export const useUpdateEffect = function (
  cb: React.EffectCallback,
  deps: React.DependencyList
) {
  const renderCycle = React.useRef(false);
  const effectCycle = React.useRef(false);

  React.useEffect(() => {
    const isMounted = renderCycle.current;
    const canRun = isMounted && effectCycle.current;

    if (canRun) {
      return cb();
    }

    effectCycle.current = true;
  }, deps);

  React.useEffect(() => {
    renderCycle.current = true;

    return () => {
      renderCycle.current = false;
    };
  });
};
