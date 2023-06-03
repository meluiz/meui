import React from "react";

export const useDebounce = function <T = any>(value: T, delay?: number) {
  const [debounce, updateDebounce] = React.useState<T>(value);

  React.useEffect(() => {
    const timing = setTimeout(() => updateDebounce(value), delay || 600);
    return () => {
      clearTimeout(timing);
    };
  }, [value, delay]);

  return debounce;
};
