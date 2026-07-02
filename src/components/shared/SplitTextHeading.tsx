import { motion } from "framer-motion";
import { wordReveal, wordStagger } from "@/lib/animations";
import type { ElementType } from "react";

interface SplitTextHeadingProps {
  text: string;
  as?: ElementType;
  className?: string;
  /** Extra delay (s) before the first word appears. */
  delay?: number;
}

/**
 * Section-heading reveal: each word slides up out of a clip mask,
 * staggered 80ms per word, when the heading scrolls into view.
 */
const SplitTextHeading = ({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
}: SplitTextHeadingProps) => {
  const words = text.split(" ");

  return (
    <Tag className={className} aria-label={text}>
      <motion.span
        className="inline"
        variants={wordStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        transition={{ delayChildren: delay }}
        aria-hidden
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
            <motion.span className="inline-block" variants={wordReveal}>
              {word}
            </motion.span>
            {i < words.length - 1 ? " " : ""}
          </span>
        ))}
      </motion.span>
    </Tag>
  );
};

export default SplitTextHeading;
