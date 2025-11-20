import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Partners from "@/components/Partners";
import Benefits from "@/components/Benefits";
import About from "@/components/About";
import Contact from "@/components/Contact";
import RegistrationModal from "@/components/RegistrationModal";
import { Users, BookOpen, ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

const Index = () => {
  const [showRegistration, setShowRegistration] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({top: 0, behavior: "smooth"})
  }, [])

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Programs />

      <Partners />
      <Benefits />
      <About />

      {/* Discover More Section */}
      <section className="py-20 bg-gradient-to-br from-background via-accent/5 to-background">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Meet Our Team Card */}
            <Link to="/about#team" className="group">
              <div className="relative h-full bg-card rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-4 group-hover:text-primary transition-colors">
                    {t("index.redirect.team.meet")}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {t("index.redirect.team.discover")}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-4 gap-2 transition-all">
                    {t("index.redirect.team.view")}{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Explore Programs Card */}
            <Link to="/programs" className="group">
              <div className="relative h-full bg-card rounded-2xl p-8 border-2 border-border hover:border-primary transition-all duration-500 hover:shadow-elegant overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary opacity-10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="relative z-10 item">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-3xl mb-4 group-hover:text-primary transition-colors">
                    {t("index.redirect.programs.explore")}
                  </h3>
                  <p className="text-muted-foreground text-lg mb-6">
                    {t("index.redirect.programs.discover")}
                  </p>
                  <div className="flex items-center text-primary font-semibold group-hover:gap-4 gap-2 transition-all">
                    {t("index.redirect.programs.view")}{" "}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Contact />

      <RegistrationModal
        open={showRegistration}
        onOpenChange={setShowRegistration}
      />
    </main>
  );
};

export default Index;
