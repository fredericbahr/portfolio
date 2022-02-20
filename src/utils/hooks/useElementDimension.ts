import { useEffect, useState } from "react";

function getElementDimension(element: HTMLElement | null) {
  if (element) {
    const width = element.offsetWidth;
    const height = element.offsetHeight;
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

export default function useElementDimensions(element: HTMLElement | null) {
  const [elementDimensions, setElementDimensions] = useState(getElementDimension(element));

  useEffect(() => {
    setElementDimensions(getElementDimension(element));

    function handleResize() {
      setElementDimensions(getElementDimension(element));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [element]);

  return elementDimensions;
}
