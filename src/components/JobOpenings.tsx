import { motion } from "framer-motion";
import {
  ClipboardList,
  Code2,
  Copy,
  Languages,
  Mail,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { buildMailto, CONTACT_EMAIL } from "@/lib/mailto";
import { cardVariant, fadeUp, stagger } from "@/lib/animations";

interface Position {
  titleKey: string;
  requirementsKey: string;
  icon: LucideIcon;
}

const POSITIONS: Position[] = [
  { titleKey: "jobs.positions.englishTeacher.title", requirementsKey: "jobs.positions.englishTeacher.requirements", icon: Languages },
  { titleKey: "jobs.positions.germanTeacher.title", requirementsKey: "jobs.positions.germanTeacher.requirements", icon: Languages },
  { titleKey: "jobs.positions.programmingTeacher.title", requirementsKey: "jobs.positions.programmingTeacher.requirements", icon: Code2 },
  { titleKey: "jobs.positions.admin.title", requirementsKey: "jobs.positions.admin.requirements", icon: ClipboardList },
  { titleKey: "jobs.positions.maintenance.title", requirementsKey: "jobs.positions.maintenance.requirements", icon: Wrench },
];

const JobOpenings = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const handleApply = (title: string) => {
    const mailto = buildMailto(t("jobs.emailSubject", { title }), [
      `${t("contact.form.name")}: `,
      `${t("contact.form.phone")}: `,
      "",
      `${t("contact.form.message")}: `,
    ]);
    window.location.href = mailto;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(CONTACT_EMAIL).catch(() => undefined);
    }
    toast({
      title: t("jobs.applyToastTitle"),
      description: t("jobs.applyToastDesc", { email: CONTACT_EMAIL }),
    });
  };

  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4 text-primary/60">{t("jobs.badge")}</p>
          <SplitTextHeading
            text={`${t("jobs.title")} ${t("jobs.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-foreground"
          />
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("jobs.description")}
          </motion.p>
        </div>

        {/* Open positions — editorial list, not a card grid */}
        <motion.div
          className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {POSITIONS.map((position) => {
            const Icon = position.icon;
            const title = t(position.titleKey);
            return (
              <motion.div
                key={position.titleKey}
                variants={cardVariant}
                className="flex flex-col gap-5 border-b border-border p-6 last:border-b-0 sm:flex-row sm:items-center sm:justify-between md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-foreground">
                      {title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(position.requirementsKey)}
                    </p>
                  </div>
                </div>
                <MagneticButton className="shrink-0 self-start sm:self-center">
                  <Button
                    className="premium-button font-semibold text-white"
                    onClick={() => handleApply(title)}
                  >
                    {t("jobs.applyNow")}
                  </Button>
                </MagneticButton>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Prefer email directly */}
        <motion.div
          className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 text-center text-muted-foreground"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Mail className="h-4 w-4 text-primary/60" aria-hidden />
          <span>{t("jobs.applyEmail")}</span>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline"
          >
            {CONTACT_EMAIL}
            <Copy className="h-3.5 w-3.5" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobOpenings;
