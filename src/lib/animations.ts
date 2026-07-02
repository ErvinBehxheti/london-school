import type { Variants } from "framer-motion";

/** Shared motion language: everything enters from below with spring physics. */
export const springUp = {
  type: "spring" as const,
  stiffness: 90,
  damping: 16,
  mass: 0.9,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: springUp },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: springUp },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: springUp },
};

/** Word-level reveal used by SplitTextHeading: slides up out of a clip mask. */
export const wordReveal: Variants = {
  hidden: { y: "110%" },
  visible: {
    y: "0%",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const wordStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/** Clip-path wipe used by RevealImage. */
export const imageClipReveal: Variants = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export const overlayWipe: Variants = {
  hidden: { y: "0%" },
  visible: {
    y: "-101%",
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

/** Dramatic scale-up used by the Tech Fest stats. */
export const statPop: Variants = {
  hidden: { opacity: 0, scale: 0.4 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

/** Route-level page transition. */
export const pageTransition: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35, ease: "easeOut" } },
  exit: { opacity: 0, transition: { duration: 0.2, ease: "easeIn" } },
};
