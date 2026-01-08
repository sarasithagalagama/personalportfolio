import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Re-initialize WOW.js animations
    // We check if WOW is globally available (loaded via script tag)
    if (typeof window.WOW === "function") {
      new window.WOW().init();
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
