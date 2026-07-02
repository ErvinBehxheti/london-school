import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import PageHero from "@/components/shared/PageHero";
import About from "@/components/About";
import Benefits from "@/components/Benefits";
import TeamSpotlight from "@/components/TeamSpotlight";
import Testimonials from "@/components/Testimonials";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero
        eyebrow={t("about.badge")}
        title={t("pages.about.title")}
        description={t("pages.about.description")}
      />

      <About />
      <Benefits />
      <TeamSpotlight />
      <Testimonials />

      {/* CTA */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl font-extrabold text-foreground md:text-4xl">
            {t("pages.about.ctaTitle")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {t("pages.about.ctaDescription")}
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <MagneticButton>
              <Button asChild size="lg" className="premium-button font-semibold text-white">
                <Link to="/programs">{t("pages.about.ctaPrograms")}</Link>
              </Button>
            </MagneticButton>
            <Button asChild size="lg" variant="ghost" className="border border-border">
              <Link to="/contact">{t("pages.about.ctaContact")}</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
