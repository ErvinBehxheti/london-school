import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import { fadeUp, stagger } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
}

/** Dark editorial header shared by all subpages. */
const PageHero = ({ title, description, eyebrow }: PageHeroProps) => {
  const { t } = useTranslation();

  return (
    <section className="bg-ink pb-16 pt-32 md:pb-20 md:pt-40">
      <motion.div
        className="container mx-auto px-6"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <div className="mx-auto max-w-4xl text-center text-ink-foreground">
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="mb-6 inline-flex items-center text-sm text-ink-foreground/60 transition-colors hover:text-secondary"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t("common.backHome")}
            </Link>
          </motion.div>
          {eyebrow && (
            <motion.p variants={fadeUp} className="eyebrow mb-4 text-secondary">
              {eyebrow}
            </motion.p>
          )}
          <SplitTextHeading
            text={title}
            as="h1"
            className="display-heading font-heading font-extrabold"
          />
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-foreground/80 md:text-xl"
          >
            {description}
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
};

export default PageHero;
