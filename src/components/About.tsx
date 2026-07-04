import { motion } from "framer-motion";
import { Award, Globe, Heart, Target, Users, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import { cardVariant, fadeUp, stagger } from "@/lib/animations";

const TIMELINE = [
  { year: "2019", key: "2019" },
  { year: "2021", key: "2021" },
  { year: "2024", key: "2024" },
] as const;

const VALUES = [
  { icon: Target, titleKey: "about.values.excellence.title", descriptionKey: "about.values.excellence.description" },
  { icon: Heart, titleKey: "about.values.passion.title", descriptionKey: "about.values.passion.description" },
  { icon: Globe, titleKey: "about.values.global.title", descriptionKey: "about.values.global.description" },
  { icon: Zap, titleKey: "about.values.innovation.title", descriptionKey: "about.values.innovation.description" },
];

const IMPACT = [
  { value: 500, suffix: "+", labelKey: "about.impact.graduates", descriptionKey: "about.impact.graduatesDesc" },
  { value: 95, suffix: "%", labelKey: "about.impact.successRate", descriptionKey: "about.impact.successRateDesc" },
  { value: 17, suffix: "", labelKey: "about.impact.teachers", descriptionKey: "about.impact.teachersDesc" },
  { value: 6, suffix: "", labelKey: "about.impact.years", descriptionKey: "about.impact.yearsDesc" },
];

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="overflow-x-hidden bg-background py-24 md:py-32">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <p className="eyebrow mb-4 text-primary/60">{t("about.badge")}</p>
          <SplitTextHeading
            text={`${t("about.title")} ${t("about.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-foreground"
          />
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("about.description")}
          </motion.p>
        </div>

        {/* Story / Timeline */}
        <div className="mb-28">
          <div className="mb-14 max-w-2xl">
            <h3 className="font-heading text-3xl font-extrabold text-foreground">
              {t("about.history.title")}
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              {t("about.history.subtitle")}
            </p>
          </div>

          <motion.div
            className="relative mx-auto max-w-3xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Connecting line */}
            <div className="absolute bottom-8 left-8 top-8 hidden w-px bg-border md:block" aria-hidden />

            <div className="space-y-10">
              {TIMELINE.map(({ year, key }) => (
                <motion.div key={key} variants={cardVariant} className="relative flex gap-6">
                  <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-primary shadow-card">
                    <span className="font-heading text-base font-bold text-primary-foreground">
                      {year}
                    </span>
                  </div>
                  <div className="flex-1 pt-3">
                    <h4 className="font-heading text-xl font-bold text-foreground">
                      {t(`about.history.${key}.title`)}
                    </h4>
                    <p className="mt-2 text-muted-foreground">
                      {t(`about.history.${key}.description`)}
                    </p>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={cardVariant} className="relative flex gap-6">
                <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-accent shadow-card">
                  <Users className="h-7 w-7 text-accent-foreground" />
                </div>
                <div className="flex-1 pt-3">
                  <h4 className="font-heading text-xl font-bold text-foreground">
                    {t("about.history.today.title")}
                  </h4>
                  <p className="mt-2 text-muted-foreground">
                    {t("about.history.today.description")}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="mb-28 grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl font-extrabold text-foreground">
              {t("about.mission.title")}
            </h3>
            <p className="mt-5 text-lg text-muted-foreground">
              {t("about.mission.description")}
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Award className="h-7 w-7 text-primary" aria-hidden />
              <span className="font-heading font-semibold text-foreground">
                {t("about.mission.recognition")}
              </span>
            </div>
          </motion.div>

          <motion.div
            className="relative overflow-hidden rounded-3xl bg-gradient-primary p-10 text-ink-foreground"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 80, damping: 16 }}
          >
            <span
              className="pointer-events-none absolute -bottom-6 -right-4 font-heading text-[10rem] font-extrabold leading-none text-ink-foreground/10"
              aria-hidden
            >
              “
            </span>
            <h4 className="relative font-heading text-2xl font-extrabold">
              {t("about.whatWeOffer.title")}
            </h4>
            <p className="relative mt-4 text-lg text-ink-foreground/85">
              {t("about.whatWeOffer.description")}
            </p>
          </motion.div>
        </div>

        {/* Values */}
        <div className="mb-28">
          <div className="mb-14 max-w-2xl">
            <h3 className="font-heading text-3xl font-extrabold text-foreground">
              {t("about.values.title")}
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              {t("about.values.description")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 divide-y divide-border rounded-3xl border border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.titleKey} variants={cardVariant} className="p-8">
                  <Icon className="h-7 w-7 text-primary" aria-hidden />
                  <h4 className="mt-5 font-heading text-lg font-bold text-foreground">
                    {t(value.titleKey)}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(value.descriptionKey)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Impact */}
        <div>
          <div className="mb-14 max-w-2xl">
            <h3 className="font-heading text-3xl font-extrabold text-foreground">
              {t("about.impact.title")}
            </h3>
            <p className="mt-3 text-lg text-muted-foreground">
              {t("about.impact.description")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 divide-y divide-border rounded-3xl border border-border lg:grid-cols-4 lg:divide-y-0 lg:divide-x"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {IMPACT.map((item) => (
              <motion.div key={item.labelKey} variants={cardVariant} className="p-8 text-center">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-heading text-4xl font-extrabold text-primary md:text-5xl"
                />
                <h4 className="mt-3 font-heading font-bold text-foreground">
                  {t(item.labelKey)}
                </h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t(item.descriptionKey)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
