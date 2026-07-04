import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type gsap from "gsap";

/**
 * Global GSAP ScrollTrigger choreography. Imported once in App.tsx.
 *
 * GSAP itself loads on demand (dynamic import) so it's off the critical
 * render path — every route pays for it eventually, but asynchronously
 * after first paint instead of blocking the initial bundle.
 *
 * - [data-parallax="0.6"] elements scroll at that fraction of scroll speed.
 * - Refreshes/clears triggers on every route change so pinned sections
 *   (Activities horizontal scroll) don't leak between pages.
 */
export function useScrollAnimations() {
  const location = useLocation();

  useEffect(() => {
    let cancelled = false;
    let ctx: gsap.Context | undefined;
    let refresh: ReturnType<typeof setTimeout>;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([{ default: gsap }, { ScrollTrigger }]) => {
        if (cancelled) return;
        gsap.registerPlugin(ScrollTrigger);

        ctx = gsap.context(() => {
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
        refresh = setTimeout(() => ScrollTrigger.refresh(), 300);
      }
    );

    return () => {
      cancelled = true;
      clearTimeout(refresh);
      ctx?.revert();
    };
  }, [location.pathname]);
}
