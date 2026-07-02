import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import AnimatedCounter from "@/components/shared/AnimatedCounter";
import RevealImage from "@/components/shared/RevealImage";
import { FOUNDER_IMAGE } from "@/data/team";
import { fadeUp, stagger } from "@/lib/animations";

const AboutIntro = () => {
  const { t } = useTranslation();
  const yearsActive = new Date().getFullYear() - 2019;

  const counters = [
    { value: yearsActive, suffix: "+", label: t("aboutIntro.stats.years") },
    { value: 500, suffix: "+", label: t("aboutIntro.stats.graduates") },
    { value: 3, suffix: "", label: t("aboutIntro.stats.programs") },
    { value: 17, suffix: "", label: t("aboutIntro.stats.staff") },
  ];

  return (
    <section
      className="bg-background py-24 md:py-32"
      data-section-label={t("navigation.about")}
    >
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Full-bleed founder / school image */}
          <RevealImage
            src={FOUNDER_IMAGE}
            alt={t("team.founder.name")}
            caption={`${t("team.founder.name")} — ${t("team.founder.role")}`}
            className="aspect-[4/5] rounded-3xl shadow-premium lg:-ml-6"
            imgClassName="object-top"
          />

          {/* Editorial text */}
          <div>
            <motion.p
              className="eyebrow mb-4 text-primary/60"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("aboutIntro.eyebrow")}
            </motion.p>

            <SplitTextHeading
              text={t("aboutIntro.title")}
              className="display-sub mb-6 font-heading font-extrabold text-foreground"
            />

            <motion.p
              className="mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("aboutIntro.mission")}
            </motion.p>

            {/* Animated counters */}
            <motion.div
              className="mb-10 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {counters.map((counter) => (
                <motion.div key={counter.label} variants={fadeUp}>
                  <AnimatedCounter
                    value={counter.value}
                    suffix={counter.suffix}
                    className="font-heading text-4xl font-extrabold text-primary"
                  />
                  <p className="mt-1 text-sm text-muted-foreground">
                    {counter.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="nav-underline inline-flex items-center gap-2 font-heading text-lg font-bold text-primary"
              >
                {t("aboutIntro.readStory")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
