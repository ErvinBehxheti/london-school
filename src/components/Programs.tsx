import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Languages, Code, Trophy, Users, Clock, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Programs = () => {
  const { t } = useTranslation();

  const navigate = useNavigate()

  const programs = [
    {
      titleKey: "programs.english.title",
      descriptionKey: "programs.english.description",
      image: "/photos/programs/english.jpg",
      icon: Languages,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      featuresKeys: [
        "programs.english.features.kids",
        "programs.english.features.exams",
        "programs.english.features.communication",
        "programs.english.features.academic",
        "programs.english.features.allLevels"
      ],
      durationKey: "programs.english.duration",
      studentsKey: "programs.english.students"
    },
    {
      titleKey: "programs.german.title",
      descriptionKey: "programs.german.description",
      image: "/photos/programs/german.jpg",
      icon: Languages,
      color: "text-red-600", 
      bgColor: "bg-red-50",
      featuresKeys: [
        "programs.german.features.allLevels",
        "programs.german.features.exams",
        "programs.german.features.interactive",
        "programs.german.features.daily",
        "programs.german.features.certified"
      ],
      durationKey: "programs.german.duration",
      studentsKey: "programs.german.students"
    },
    {
      titleKey: "programs.programming.title",
      descriptionKey: "programs.programming.description",
      image: "/photos/programs/code.jpg",
      icon: Code,
      color: "text-green-600",
      bgColor: "bg-green-50",
      featuresKeys: [
        "programs.programming.features.allAges",
        "programs.programming.features.games",
        "programs.programming.features.webDev",
        "programs.programming.features.advanced",
        "programs.programming.features.certified"
      ],
      durationKey: "programs.programming.duration",
      studentsKey: "programs.programming.students"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t('programs.badge')}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t('programs.title')}
            <span className="block text-primary">{t('programs.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('programs.description')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => {
            const IconComponent = program.icon;
            return (
              <Card
                key={program.titleKey}
                className="premium-card border-0 overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={program.image}
                    alt={t(program.titleKey)}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className={`absolute top-4 left-4 p-3 rounded-xl ${program.bgColor}`}>
                    <IconComponent className={`w-6 h-6 ${program.color}`} />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="font-heading text-2xl">{t(program.titleKey)}</CardTitle>
                  <CardDescription className="text-base">
                    {t(program.descriptionKey)}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Features */}
                  <div className="space-y-3">
                    {program.featuresKeys.map((featureKey, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm font-medium">{t(featureKey)}</span>
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{t(program.durationKey)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{t(program.studentsKey)}</span>
                    </div>
                  </div>

                  {/* CTA */}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Logiscool Partnership Highlight */}
        <div className="animate-fade-up bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-8 md:p-12 text-white text-center">
          <div className="max-w-3xl mx-auto">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {t('programs.partnership.badge')}
            </Badge>
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              {t('programs.partnership.title')}
            </h3>
            <p className="text-xl text-white/90 mb-8">
              {t('programs.partnership.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate("/programs")} size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Target className="mr-2 w-5 h-5" />
                {t('programs.partnership.exploreKids')}
              </Button>
              <Button onClick={() => navigate("/programs")} size="lg" className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm">
                <Trophy className="mr-2 w-5 h-5" />
                {t('programs.partnership.successStories')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;