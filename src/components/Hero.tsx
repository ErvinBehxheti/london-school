import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { PHOTOS } from "@/data/photos";
import { fadeUp, stagger } from "@/lib/animations";

const ROTATE_INTERVAL = 5000;

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const yearsActive = new Date().getFullYear() - 2019;
  const [current, setCurrent] = useState(0);
  const [showBadge, setShowBadge] = useState(false);

  useEffect(() => {
    if (PHOTOS.hero.length < 2) return;
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % PHOTOS.hero.length),
      ROTATE_INTERVAL
    );
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: yearsActive, suffix: "+", label: t("hero.yearsExcellence") },
    { value: 800, suffix: "+", label: t("hero.studentsGraduated") },
    { value: 3, suffix: "", label: t("hero.corePrograms") },
  ];

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden bg-ink"
      data-section-label={t("navigation.home")}
    >
      {/* Background carousel with parallax depth */}
      <div className="absolute inset-0 z-0" data-parallax="0.6">
        <AnimatePresence>
          <motion.img
            key={PHOTOS.hero[current]?.src ?? "empty"}
            src={PHOTOS.hero[current]?.src}
            alt={PHOTOS.hero[current]?.alt ?? ""}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full object-cover object-[center_top]"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/70 to-ink" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-20">
        <motion.div
          className="mx-auto max-w-5xl text-center text-ink-foreground"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp} className="eyebrow mb-6 text-secondary">
            {t("hero.eyebrow")}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="display-heading font-heading font-extrabold"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-heading text-2xl font-bold text-secondary md:text-4xl"
            aria-label={t("hero.tagline")}
          >
            <Typewriter
              words={[t("hero.tagline")]}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={999999}
              delaySpeed={999999}
            />
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-foreground/80 md:text-xl"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <MagneticButton>
              <Button
                size="lg"
                onClick={() => navigate("/programs")}
                className="bg-secondary px-8 py-6 text-lg font-bold text-secondary-foreground shadow-glow hover:bg-secondary/90"
              >
                {t("hero.explorePrograms")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </MagneticButton>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => navigate("/contact")}
              className="border-ink-foreground/30 bg-transparent px-8 py-6 text-lg text-ink-foreground backdrop-blur-sm hover:bg-ink-foreground/10 hover:text-ink-foreground"
            >
              {t("hero.scheduleVisit")}
            </Button>
          </motion.div>

          {/* Stats with count-up */}
          <motion.div
            variants={fadeUp}
            className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="font-heading text-3xl font-extrabold text-secondary md:text-5xl"
                />
                <p className="mt-1 text-xs text-ink-foreground/70 md:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Carousel dots */}
      {PHOTOS.hero.length > 1 && (
        <div className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {PHOTOS.hero.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setCurrent(i)}
              aria-label={t("aria.showSlide", { number: i + 1 })}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? "w-8 bg-secondary" : "w-2 bg-ink-foreground/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-ink-foreground/70">
        <p className="mb-1 text-[11px] uppercase tracking-[0.3em]">
          {t("hero.scrollHint")}
        </p>
        <ChevronDown className="scroll-indicator mx-auto h-5 w-5" aria-hidden />
      </div>

      {/* Floating social-proof badge (appears after 3s) */}
      <AnimatePresence>
        {showBadge && (
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 14 }}
            className="absolute bottom-8 left-6 z-20 hidden max-w-xs items-center gap-3 rounded-2xl border border-secondary/30 bg-ink/80 p-4 backdrop-blur-md lg:flex"
          >
            <span className="text-2xl" aria-hidden>
              🏆
            </span>
            <p className="text-sm font-medium text-ink-foreground">
              {t("hero.badge")}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;
