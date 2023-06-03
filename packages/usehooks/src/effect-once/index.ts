import React from "react";

export const useEffectOnce = function (effect: React.EffectCallback) {
  React.useEffect(effect, []);
};
