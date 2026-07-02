import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Restores scroll position on navigation: jumps to top on route change,
 * or to the anchor element when the URL carries a hash (used by the
 * /activities section anchors).
 */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait for the lazy page chunk to render before resolving the anchor.
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 350);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
