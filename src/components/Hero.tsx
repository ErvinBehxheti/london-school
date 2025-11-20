import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Users, BookOpen } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const date = Number(new Date().toISOString().slice(0, 4)) - 2019;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
      const [nextImageIndex, setNextImageIndex] = useState(1);
  
  const heroImages = [
    { src: "/photos/hero/conference.jpg", alt: "London School Staff", priority: true },
    { src: "/photos/hero/graduation.jpg", alt: "Students graduating from London School", priority: false },
    { src: "/photos/hero/techfest.jpg", alt: "Technology Festival made by London School", priority: false },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
      setNextImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen hero-gradient flex items-center relative overflow-hidden pt-20">
      {/* Background Image */}
<div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            loading={image.priority ? "eager" : "lazy"}
            fetchPriority={image.priority ? "high" : "low"}
            className={`absolute inset-0 w-full h-full object-cover object-[center_top] transition-transform duration-1000 ease-in-out ${
              index === currentImageIndex 
                ? "-translate-x-full" 
                : index === nextImageIndex
                  ? "translate-x-0"
                  : "translate-x-full"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary-glow/60"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <div className="animate-fade-up">
            <h1 className="font-heading font-bold text-5xl md:text-7xl leading-tight mb-6">
              <span className="bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
              <span className="block text-white mt-4">
                {t("hero.subtitle")}
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t("hero.description")}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="animate-fade-up flex flex-col sm:flex-row gap-4 justify-center mb-12"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              className="premium-button text-white font-semibold px-8 py-4 text-lg"
              onClick={() => navigate("/programs")}
            >
              {t("hero.explorePrograms")}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              // the redirect is not working we should probably use navigate or something
              onClick={() => navigate("/contact")}
              className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
            >
              {t("hero.scheduleVisit")}
            </Button>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-up grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto"
            style={{ animationDelay: "0.6s" }}
          >
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Award className="w-8 h-8 text-secondary mr-2" />
                <span className="font-heading font-bold text-3xl">{date}+</span>
              </div>
              <p className="text-white/80">{t("hero.yearsExcellence")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-8 h-8 text-secondary mr-2" />
                <span className="font-heading font-bold text-3xl">800+</span>
              </div>
              <p className="text-white/80">{t("hero.studentsGraduated")}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <BookOpen className="w-8 h-8 text-secondary mr-2" />
                <span className="font-heading font-bold text-3xl">3</span>
              </div>
              <p className="text-white/80">{t("hero.corePrograms")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
      <div
        className="absolute bottom-20 right-10 w-32 h-32 bg-primary-glow/20 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
    </section>
  );
};

export default Hero;
