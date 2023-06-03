import React from "react";

export const useMount = function () {
  const ref = React.useRef(false)

  React.useEffect(() => {
    ref.current = true

    return () => {
      ref.current = false
    }
  }, [])

  return  React.useCallback(() => ref.current, [])
};
