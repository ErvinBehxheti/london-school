import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Heart, Target, Zap, Globe, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      titleKey: "about.values.excellence.title",
      descriptionKey: "about.values.excellence.description",
    },
    {
      icon: Heart,
      titleKey: "about.values.passion.title",
      descriptionKey: "about.values.passion.description",
    },
    {
      icon: Globe,
      titleKey: "about.values.global.title",
      descriptionKey: "about.values.global.description",
    },
    {
      icon: Zap,
      titleKey: "about.values.innovation.title",
      descriptionKey: "about.values.innovation.description",
    },
  ];

  const achievements = [
    {
      number: "500+",
      labelKey: "about.impact.graduates",
      descriptionKey: "about.impact.graduatesDesc",
    },
    {
      number: "95%",
      labelKey: "about.impact.successRate",
      descriptionKey: "about.impact.successRateDesc",
    },
    {
      number: "17",
      labelKey: "about.impact.teachers",
      descriptionKey: "about.impact.teachersDesc",
    },
    {
      number: "6",
      labelKey: "about.impact.years",
      descriptionKey: "about.impact.yearsDesc",
    },
  ];

  return (
    <section className="py-24 bg-background overflow-x-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t("about.badge")}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t("about.title")}
            <span className="block text-primary">
              {t("about.titleHighlight")}
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("about.description")}
          </p>
        </div>

        {/* Story / Timeline */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fade-up">
            <h3 className="font-heading font-bold text-3xl mb-4">
              {t("about.history.title")}
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t("about.history.subtitle")}
            </p>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {/* 2019 */}
            <div className="flex gap-6 animate-fade-up">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2019</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-xl mb-2">
                  {t("about.history.2019.title")}
                </h4>
                <p className="text-muted-foreground">
                  {t("about.history.2019.description")}
                </p>
              </div>
            </div>

            {/* 2021 */}
            <div
              className="flex gap-6 animate-fade-up"
              style={{ animationDelay: "0.1s" }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2021</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-xl mb-2">
                  {t("about.history.2021.title")}
                </h4>
                <p className="text-muted-foreground">
                  {t("about.history.2021.description")}
                </p>
              </div>
            </div>

            {/* 2024 */}
            <div
              className="flex gap-6 animate-fade-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">2024</span>
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-xl mb-2">
                  {t("about.history.2024.title")}
                </h4>
                <p className="text-muted-foreground">
                  {t("about.history.2024.description")}
                </p>
              </div>
            </div>

            {/* Today */}
            <div
              className="flex gap-6 animate-fade-up"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h4 className="font-heading font-bold text-xl mb-2">
                  {t("about.history.today.title")}
                </h4>
                <p className="text-muted-foreground">
                  {t("about.history.today.description")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="animate-fade-up">
            <h3 className="font-heading font-bold text-3xl mb-6">
              {t("about.mission.title")}
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              {t("about.mission.description")}
            </p>
            <div className="flex items-center space-x-4">
              <Award className="w-8 h-8 text-primary" />
              <span className="font-semibold">
                {t("about.mission.recognition")}
              </span>
            </div>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gradient-primary rounded-3xl p-8 text-white">
              <h4 className="font-heading font-bold text-2xl mb-4">
                {t("about.whatWeOffer.title")}
              </h4>
              <p className="text-white/90 text-lg">
                {t("about.whatWeOffer.description")}
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-12 animate-fade-up">
            <h3 className="font-heading font-bold text-3xl mb-4">
              {t("about.values.title")}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t("about.values.description")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={value.titleKey}
                  className="premium-card border-0 text-center animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="font-heading font-bold text-xl mb-2">
                      {t(value.titleKey)}
                    </h4>
                    <p className="text-muted-foreground">
                      {t(value.descriptionKey)}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Impact */}
        <div className="animate-fade-up">
          <div className="text-center mb-12">
            <h3 className="font-heading font-bold text-3xl mb-4">
              {t("about.impact.title")}
            </h3>
            <p className="text-lg text-muted-foreground">
              {t("about.impact.description")}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((a, index) => (
              <div
                key={a.labelKey}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading font-bold text-2xl text-white">
                    {a.number}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-lg mb-2">
                  {t(a.labelKey)}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {t(a.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
