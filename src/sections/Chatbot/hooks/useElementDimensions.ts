/*
 * COPYRIGHT (C) 2024 Frederic Bahr
 *
 * The PROGRAM is protected by national and international copyright laws and conventions.
 * The copyright lies with Frederic Bahr, unless expressly stated otherwise.
 * All rights reserved.
 * Especially the reproduction and distribution of the PROGRAM without written permission of
 * the copyright owner is prohibited.
 *
 * See LICENSE for licensing information.
 */

import { useLayoutEffect, useState } from "react";

export interface ElementDimension {
  width: number;
  height: number;
}

function getElementDimension(element: HTMLElement | null) {
  if (element) {
    const width: number = element.offsetWidth;
    const height: number = element.offsetHeight;

    return {
      width,
      height,
    };
  }

  return {
    width: 0,
    height: 0,
  };
}

/**
 * Tracks the dimensions of an element
 * @param element - the element which dimensions should be tracked
 */
export function useElementDimensions(element: HTMLElement | null): ElementDimension {
  const [elementDimensions, setElementDimensions] = useState<ElementDimension>(getElementDimension(element));

  useLayoutEffect(() => {
    setElementDimensions(getElementDimension(element));

    function handleResize() {
      setElementDimensions(getElementDimension(element));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [element]);

  return elementDimensions;
}
