import React from "react";

export const useHover = function () {
  const ref = React.useRef<any>(null);
  const [hovering, updateHover] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;

    if (!node) return;

    const handleMouseEnter = () => {
      updateHover(true);
    };

    const handleMouseLeave = () => {
      updateHover(false);
    };

    node.addEventListener("mouseenter", handleMouseEnter);
    node.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      node.removeEventListener("mouseenter", handleMouseEnter);
      node.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return [ref, hovering];
};
