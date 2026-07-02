import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Global GSAP ScrollTrigger choreography. Imported once in App.tsx.
 *
 * - [data-parallax="0.6"] elements scroll at that fraction of scroll speed.
 * - Refreshes/clears triggers on every route change so pinned sections
 *   (Activities horizontal scroll) don't leak between pages.
 */
export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      document
        .querySelectorAll<HTMLElement>("[data-parallax]")
        .forEach((el) => {
          const speed = parseFloat(el.dataset.parallax || "0.8");
          const distance = (1 - speed) * 300;
          gsap.fromTo(
            el,
            { y: -distance },
            {
              y: distance,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement ?? el,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
    });

    // Lazy-loaded routes and images shift layout after mount.
    const refresh = setTimeout(() => ScrollTrigger.refresh(), 300);

    return () => {
      clearTimeout(refresh);
      ctx.revert();
    };
  }, [location.pathname]);
}

export { gsap, ScrollTrigger };
