import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Briefcase,
  Cpu,
  Gift,
  MessageCircle,
  Sun,
  Trophy,
  Users,
  Wrench,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import { cardVariant, fadeUp, stagger } from "@/lib/animations";

const BENEFITS = [
  { icon: Award, titleKey: "benefits.scholarship.title", descriptionKey: "benefits.scholarship.description" },
  { icon: Briefcase, titleKey: "benefits.internship.title", descriptionKey: "benefits.internship.description" },
  { icon: Gift, titleKey: "benefits.partnerBenefits.title", descriptionKey: "benefits.partnerBenefits.description" },
  { icon: Trophy, titleKey: "benefits.competitions.title", descriptionKey: "benefits.competitions.description" },
  { icon: Sun, titleKey: "benefits.summerCamps.title", descriptionKey: "benefits.summerCamps.description" },
  { icon: Wrench, titleKey: "benefits.workshops.title", descriptionKey: "benefits.workshops.description" },
  { icon: Users, titleKey: "benefits.businessClass.title", descriptionKey: "benefits.businessClass.description" },
  { icon: BookOpen, titleKey: "benefits.readingClub.title", descriptionKey: "benefits.readingClub.description" },
  { icon: MessageCircle, titleKey: "benefits.speakingClub.title", descriptionKey: "benefits.speakingClub.description" },
  { icon: Cpu, titleKey: "benefits.techFest.title", descriptionKey: "benefits.techFest.description" },
];

const Benefits = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-ink py-24 md:py-32" data-section-label={t("benefits.badge")}>
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="eyebrow mb-4 text-secondary">{t("benefits.badge")}</p>
          <SplitTextHeading
            text={`${t("benefits.title")} ${t("benefits.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-ink-foreground"
          />
          <motion.p
            className="mt-6 text-lg text-ink-foreground/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("benefits.description")}
          </motion.p>
        </div>

        <motion.div
          className="grid grid-cols-2 border-b border-l border-ink-foreground/10 md:grid-cols-5"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.titleKey}
                variants={cardVariant}
                className="border-r border-t border-ink-foreground/10 p-6 md:p-7"
              >
                <Icon className="h-6 w-6 text-secondary" aria-hidden />
                <h4 className="mt-4 font-heading text-base font-bold text-ink-foreground">
                  {t(benefit.titleKey)}
                </h4>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-foreground/65">
                  {t(benefit.descriptionKey)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
