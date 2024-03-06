import { RefObject, useEffect, useState } from "react";

export function useScrollActive(elementRef: RefObject<HTMLElement>) {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!(elementRef.current instanceof HTMLElement)) return;

      if (
        window.scrollY + window.innerHeight >
        elementRef.current.offsetTop + window.innerHeight / 10
      ) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, [elementRef]);

  return isActive;
}
