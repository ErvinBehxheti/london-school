import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import MagneticButton from "@/components/shared/MagneticButton";
import RegistrationModal from "@/components/RegistrationModal";
import { fadeUp, stagger } from "@/lib/animations";

const ContactCTA = () => {
  const { t } = useTranslation();
  const [showRegistration, setShowRegistration] = useState(false);

  const details = [
    { icon: MapPin, text: t("contact.info.visit.info") },
    { icon: Phone, text: t("contact.info.call.info") },
    { icon: Mail, text: t("contact.info.email.info") },
  ];

  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      data-section-label={t("navigation.contact")}
    >
      {/* Warm editorial photo background */}
      <div className="absolute inset-0" data-parallax="0.8">
        <img
          src="/photos/hero-background.jpg"
          alt=""
          aria-hidden
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-ink/85" />

      <motion.div
        className="container relative z-10 mx-auto px-6 text-center text-ink-foreground"
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.h2
          variants={fadeUp}
          className="display-sub mx-auto max-w-3xl font-heading font-extrabold"
        >
          {t("contactCta.title")}
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-5 max-w-xl text-lg text-ink-foreground/80"
        >
          {t("contactCta.description")}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton>
            <Button
              size="lg"
              onClick={() => setShowRegistration(true)}
              className="bg-secondary px-8 py-6 text-lg font-bold text-secondary-foreground hover:bg-secondary/90"
            >
              {t("contactCta.apply")}
            </Button>
          </MagneticButton>
          <Button
            asChild
            size="lg"
            variant="ghost"
            className="border-ink-foreground/30 bg-transparent px-8 py-6 text-lg text-ink-foreground hover:bg-ink-foreground/10 hover:text-ink-foreground"
          >
            <Link to="/contact">{t("contactCta.visit")}</Link>
          </Button>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-ink-foreground/75"
        >
          {details.map(({ icon: Icon, text }) => (
            <span key={text} className="inline-flex items-center gap-2">
              <Icon className="h-4 w-4 text-secondary" aria-hidden />
              {text}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <RegistrationModal
        open={showRegistration}
        onOpenChange={setShowRegistration}
      />
    </section>
  );
};

export default ContactCTA;
