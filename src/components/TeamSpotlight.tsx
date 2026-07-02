import { motion } from "framer-motion";
import { ArrowRight, Award, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import RevealImage from "@/components/shared/RevealImage";
import { FOUNDER_IMAGE, STAFF } from "@/data/team";
import { cardVariant, fadeUp, stagger } from "@/lib/animations";

const TeamSpotlight = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-background py-24 md:py-32"
      data-section-label={t("team.badge")}
      id="team"
    >
      <div className="container mx-auto px-6">
        {/* Editorial header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4 text-primary/60">{t("team.badge")}</p>
          <SplitTextHeading
            text={t("team.spotlightTitle")}
            className="display-sub font-heading font-extrabold text-foreground"
          />
        </div>

        {/* Founder — asymmetric full-width layout */}
        <motion.div
          className="mb-20 grid items-stretch gap-8 overflow-hidden rounded-3xl bg-gradient-primary lg:grid-cols-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          <RevealImage
            src={FOUNDER_IMAGE}
            alt={t("team.founder.name")}
            className="min-h-[360px] lg:col-span-2"
            imgClassName="object-top"
          />
          <div className="p-8 text-ink-foreground md:p-12 lg:col-span-3">
            <h3 className="font-heading text-3xl font-extrabold md:text-4xl">
              {t("team.founder.name")}
            </h3>
            <p className="mt-1 font-semibold text-secondary">
              {t("team.founder.role")}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-ink-foreground/85">
              {t("team.founder.bio")}
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-3">
                <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">
                    {t("team.founder.educationLabel")}
                  </p>
                  <p>{t("team.founder.education")}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Award className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-ink-foreground/60">
                    {t("team.founder.achievementsLabel")}
                  </p>
                  <p>{t("team.founder.achievements")}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team grid — 3D flip cards */}
        <motion.div
          className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STAFF.map((member) => (
            <motion.div
              key={member.key}
              variants={cardVariant}
              className="flip-card h-72 md:h-80"
              tabIndex={0}
            >
              <div className="flip-card-inner">
                <div className="flip-card-front overflow-hidden rounded-2xl shadow-card">
                  <img
                    src={member.image}
                    alt={t(`team.members.${member.key}.name`)}
                    loading="lazy"
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/90 to-transparent p-4 pt-10">
                    <p className="font-heading font-bold text-ink-foreground">
                      {t(`team.members.${member.key}.name`)}
                    </p>
                    <p className="text-xs text-secondary">
                      {t(`team.members.${member.key}.role`)}
                    </p>
                  </div>
                </div>
                <div className="flip-card-back flex flex-col items-center justify-center rounded-2xl bg-gradient-primary p-6 text-center text-ink-foreground">
                  <p className="font-heading text-lg font-bold">
                    {t(`team.members.${member.key}.name`)}
                  </p>
                  <p className="mb-4 text-xs text-secondary">
                    {t(`team.members.${member.key}.role`)}
                  </p>
                  <p className="text-sm italic leading-relaxed text-ink-foreground/85">
                    “{t(`team.members.${member.key}.fact`)}”
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join the team */}
        <motion.div
          className="mt-14 text-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Link
            to="/jobs"
            className="nav-underline inline-flex items-center gap-2 font-heading text-lg font-bold text-primary"
          >
            {t("team.joinTeam")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSpotlight;
