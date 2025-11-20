import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Award, 
  Briefcase, 
  Gift, 
  Trophy, 
  Sun, 
  Wrench, 
  Users, 
  BookOpen, 
  MessageCircle, 
  Cpu 
} from "lucide-react";
import { useTranslation } from "react-i18next";

const Benefits = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Award,
      titleKey: "benefits.scholarship.title",
      descriptionKey: "benefits.scholarship.description",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      icon: Briefcase,
      titleKey: "benefits.internship.title",
      descriptionKey: "benefits.internship.description",
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      icon: Gift,
      titleKey: "benefits.partnerBenefits.title",
      descriptionKey: "benefits.partnerBenefits.description",
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      icon: Trophy,
      titleKey: "benefits.competitions.title",
      descriptionKey: "benefits.competitions.description",
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      icon: Sun,
      titleKey: "benefits.summerCamps.title",
      descriptionKey: "benefits.summerCamps.description",
      color: "text-red-600",
      bgColor: "bg-red-50"
    },
    {
      icon: Wrench,
      titleKey: "benefits.workshops.title",
      descriptionKey: "benefits.workshops.description",
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      icon: Users,
      titleKey: "benefits.businessClass.title",
      descriptionKey: "benefits.businessClass.description",
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      icon: BookOpen,
      titleKey: "benefits.readingClub.title",
      descriptionKey: "benefits.readingClub.description",
      color: "text-pink-600",
      bgColor: "bg-pink-50"
    },
    {
      icon: MessageCircle,
      titleKey: "benefits.speakingClub.title",
      descriptionKey: "benefits.speakingClub.description",
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    },
    {
      icon: Cpu,
      titleKey: "benefits.techFest.title",
      descriptionKey: "benefits.techFest.description",
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t('benefits.badge')}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t('benefits.title')}
            <span className="block text-primary">{t('benefits.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('benefits.description')}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card
                key={benefit.titleKey}
                className="premium-card border-0 hover-scale animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto mb-4 p-4 rounded-xl ${benefit.bgColor} w-fit`}>
                    <IconComponent className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <CardTitle className="text-lg font-heading">{t(benefit.titleKey)}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-sm">
                    {t(benefit.descriptionKey)}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
