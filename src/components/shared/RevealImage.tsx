import { motion } from "framer-motion";
import { imageClipReveal, overlayWipe } from "@/lib/animations";

interface RevealImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  caption?: string;
}

/**
 * Images enter with a clip-path wipe: a navy overlay exits upward first,
 * revealing the photo underneath. Hovering scales the image and slides
 * an optional caption in.
 */
const RevealImage = ({
  src,
  alt,
  className = "",
  imgClassName = "",
  caption,
}: RevealImageProps) => {
  return (
    <motion.div
      className={`img-hover-reveal relative overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        variants={imageClipReveal}
        className={`h-full w-full object-cover ${imgClassName}`}
      />
      <motion.div
        variants={overlayWipe}
        className="absolute inset-0 z-10 bg-ink"
        aria-hidden
      />
      {caption && (
        <div className="reveal-caption z-20">
          <p className="text-sm font-medium">{caption}</p>
        </div>
      )}
    </motion.div>
  );
};

export default RevealImage;
