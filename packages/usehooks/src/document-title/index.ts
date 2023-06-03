import React from "react";

import {useIsomorphicLayoutEffect} from "../isomorphic-layout-effect";

export const useDocumentTitle = function (title: string) {
  useIsomorphicLayoutEffect(() => {
    window.document.title = title
  }, [title])
};
