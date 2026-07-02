import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";

/**
 * Thin gold progress bar fixed to the top of the page, plus a small label
 * that fades in whenever the reader enters a new major section
 * (any element carrying data-section-label).
 */
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  const [label, setLabel] = useState<string | null>(null);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section-label]")
    );
    if (sections.length === 0) return;

    let hideTimer: ReturnType<typeof setTimeout>;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const next = (entry.target as HTMLElement).dataset.sectionLabel;
            if (next) {
              setLabel(next);
              clearTimeout(hideTimer);
              hideTimer = setTimeout(() => setLabel(null), 1800);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => {
      observer.disconnect();
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-secondary"
        style={{ scaleX }}
      />
      <AnimatePresence>
        {label && (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="fixed right-4 top-3 z-[60] hidden rounded-full bg-ink/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-ink-foreground backdrop-blur-sm md:block"
          >
            {label}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
