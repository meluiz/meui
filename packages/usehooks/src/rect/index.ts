import React from "react";

const DEFAULT = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => "",
}

export const useRect = function () {
  const [rect, updateRect] = React.useState<DOMRect>(DEFAULT);
  const ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const rect= node.getBoundingClientRect()
    updateRect(rect)

    return () => {
      updateRect(DEFAULT)
    }
  }, []);

  return [ref, rect];
};
