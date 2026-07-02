import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import { cardVariant, stagger } from "@/lib/animations";

interface ProgramCardDef {
  key: "english" | "german" | "programming";
  image: string;
  /** Grid placement — English is the oversized card. */
  className: string;
  badge?: string;
}

const PROGRAM_CARDS: ProgramCardDef[] = [
  {
    key: "english",
    image: "/photos/programs/english.jpg",
    className: "lg:row-span-2 min-h-[420px] lg:min-h-[640px]",
  },
  {
    key: "german",
    image: "/photos/programs/german.jpg",
    className: "min-h-[300px]",
  },
  {
    key: "programming",
    image: "/photos/programs/code.jpg",
    className: "min-h-[300px]",
    badge: "Logiscool",
  },
];

const FEATURE_KEYS: Record<ProgramCardDef["key"], string[]> = {
  english: ["kids", "exams", "communication"],
  german: ["allLevels", "exams", "certified"],
  programming: ["allAges", "games", "advanced"],
};

const Programs = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-gradient-subtle py-24 md:py-32"
      data-section-label={t("navigation.programs")}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4 text-primary/60">{t("programs.badge")}</p>
          <SplitTextHeading
            text={`${t("programs.title")} ${t("programs.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-foreground"
          />
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            {t("programs.description")}
          </motion.p>
        </div>

        {/* Staggered asymmetric grid: English oversized, German + Programming stacked */}
        <motion.div
          className="grid gap-6 lg:grid-cols-2"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {PROGRAM_CARDS.map((card) => (
            <motion.div
              key={card.key}
              variants={cardVariant}
              className={`group relative overflow-hidden rounded-3xl shadow-card transition-shadow duration-500 hover:shadow-premium ${card.className}`}
            >
              <img
                src={card.image}
                alt={t(`programs.${card.key}.title`)}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10 transition-colors duration-500 group-hover:from-ink group-hover:via-ink/70" />

              {card.badge && (
                <span className="absolute right-5 top-5 z-10 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
                  {card.badge}
                </span>
              )}

              <div className="relative z-10 flex h-full flex-col justify-end p-8">
                <h3 className="font-heading text-3xl font-extrabold text-ink-foreground md:text-4xl">
                  {t(`programs.${card.key}.title`)}
                </h3>
                <p className="mt-2 max-w-md text-ink-foreground/85">
                  {t(`programs.${card.key}.description`)}
                </p>

                {/* Extra detail slides open on hover */}
                <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out group-hover:grid-rows-[1fr]">
                  <ul className="mt-0 space-y-2 overflow-hidden group-hover:mt-4">
                    {FEATURE_KEYS[card.key].map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-ink-foreground/90"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
                        {t(`programs.${card.key}.features.${feature}`)}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/programs"
                  className="mt-5 inline-flex w-fit items-center gap-2 font-heading font-bold text-secondary transition-transform duration-300 group-hover:translate-x-1"
                >
                  {t("programs.explore")}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logiscool partnership strip */}
        <motion.div
          className="mt-14 rounded-3xl bg-gradient-primary p-8 text-center text-ink-foreground md:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          <p className="eyebrow mb-3 text-secondary">
            {t("programs.partnership.badge")}
          </p>
          <h3 className="font-heading text-3xl font-extrabold md:text-4xl">
            {t("programs.partnership.title")}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-ink-foreground/85">
            {t("programs.partnership.description")}
          </p>
          <Link
            to="/programs"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 font-heading font-bold text-secondary-foreground transition-transform duration-300 hover:scale-105"
          >
            {t("programs.partnership.exploreKids")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
