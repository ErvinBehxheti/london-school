import { useRef } from "react";
import { useInView } from "framer-motion";

const BURST_PARTICLES = Array.from({ length: 14 }, (_, i) => {
  const angle = (i / 14) * Math.PI * 2;
  const distance = 55 + (i % 3) * 25;
  return {
    x: Math.cos(angle) * distance,
    y: Math.sin(angle) * distance,
    delay: (i % 4) * 60,
  };
});

/**
 * Pure-CSS particle burst that fires once when scrolled into view.
 * Wrap it around the element that should "arrive" with fireworks.
 */
const ParticleBurst = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className={`relative ${inView ? "burst-active" : ""} ${className}`}>
      {children}
      {BURST_PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={
            {
              "--burst-x": `${p.x}px`,
              "--burst-y": `${p.y}px`,
              animationDelay: `${p.delay}ms`,
            } as React.CSSProperties
          }
          aria-hidden
        />
      ))}
    </div>
  );
};

export default ParticleBurst;
