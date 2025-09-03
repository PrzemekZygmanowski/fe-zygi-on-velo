import { useEffect, useState } from "react";

export const useMobileView = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, [breakpoint]);

  return isMobile;
};
