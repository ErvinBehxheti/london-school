import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import ParticleBurst from "@/components/shared/ParticleBurst";
import CountdownTimer from "@/components/shared/CountdownTimer";
import { fadeUp, stagger, statPop } from "@/lib/animations";

/** Second edition of Tech Fest — the countdown flips to a "held" badge once passed. */
const TECH_FEST_SECOND_EDITION = "2026-05-15T10:00:00";

const TechFestFeature = () => {
  const { t } = useTranslation();

  return (
    <section
      className="tech-grid relative overflow-hidden bg-ink py-28 md:py-36"
      data-section-label={t("techFest.label")}
      id="tech-fest"
    >
      {/* Giant watermark */}
      <div
        className="watermark-text pointer-events-none absolute left-1/2 top-1/2 w-max -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-heading font-extrabold"
        aria-hidden
      >
        TECH FEST
      </div>

      <motion.div
        className="container relative z-10 mx-auto px-6 text-center text-ink-foreground"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.p variants={fadeUp} className="eyebrow mb-4 text-secondary">
          {t("techFest.eyebrow")}
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="display-heading mx-auto max-w-4xl font-heading font-extrabold"
        >
          {t("techFest.title")}
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mx-auto mt-6 max-w-2xl text-lg text-ink-foreground/80"
        >
          {t("techFest.description")}
        </motion.p>

        {/* Dramatic stats with particle burst */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          <ParticleBurst>
            <motion.div variants={statPop} className="text-center">
              <AnimatedCounter
                value={1000}
                suffix="+"
                duration={1800}
                className="font-heading text-6xl font-extrabold text-secondary md:text-8xl"
              />
              <p className="mt-2 text-sm uppercase tracking-widest text-ink-foreground/70">
                {t("techFest.stats.visitors")}
              </p>
            </motion.div>
          </ParticleBurst>
          <ParticleBurst>
            <motion.div variants={statPop} className="text-center">
              <span className="font-heading text-6xl font-extrabold text-secondary md:text-8xl">
                {t("techFest.stats.firstValue")}
              </span>
              <p className="mt-2 text-sm uppercase tracking-widest text-ink-foreground/70">
                {t("techFest.stats.first")}
              </p>
            </motion.div>
          </ParticleBurst>
        </div>

        {/* Quote */}
        <motion.blockquote
          variants={fadeUp}
          className="mx-auto mt-14 max-w-2xl border-l-2 border-secondary pl-6 text-left text-lg italic text-ink-foreground/85 md:text-xl"
        >
          “{t("techFest.quote")}”
          <footer className="mt-3 text-sm not-italic text-ink-foreground/60">
            — {t("techFest.quoteAuthor")}
          </footer>
        </motion.blockquote>

        {/* 2nd edition countdown / held badge */}
        <motion.div variants={fadeUp} className="mt-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-ink-foreground/60">
            {t("techFest.nextEdition")}
          </p>
          <CountdownTimer target={TECH_FEST_SECOND_EDITION} />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-12">
          <Link
            to="/activities#tech-fest"
            className="inline-flex items-center gap-2 rounded-full border border-secondary px-8 py-3 font-heading font-bold text-secondary transition-colors duration-300 hover:bg-secondary hover:text-secondary-foreground"
          >
            {t("techFest.cta")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default TechFestFeature;
