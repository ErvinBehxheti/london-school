import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";

const JobOpenings = () => {
  const { t } = useTranslation();

  const positions = [
    {
      titleKey: "jobs.positions.englishTeacher.title",
      requirementsKey: "jobs.positions.englishTeacher.requirements",
      icon: "🇬🇧"
    },
    {
      titleKey: "jobs.positions.germanTeacher.title",
      requirementsKey: "jobs.positions.germanTeacher.requirements",
      icon: "🇩🇪"
    },
    {
      titleKey: "jobs.positions.programmingTeacher.title",
      requirementsKey: "jobs.positions.programmingTeacher.requirements",
      icon: "💻"
    },
    {
      titleKey: "jobs.positions.admin.title",
      requirementsKey: "jobs.positions.admin.requirements",
      icon: "📋"
    },
    {
      titleKey: "jobs.positions.maintenance.title",
      requirementsKey: "jobs.positions.maintenance.requirements",
      icon: "🔧"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t('jobs.badge')}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t('jobs.title')}
            <span className="block text-primary">{t('jobs.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            {t('jobs.description')}
          </p>
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <Mail className="w-5 h-5" />
            <p className="text-lg">
              {t('jobs.applyEmail')} <a href="mailto:hello@londonschool-ks.com" className="text-primary font-semibold hover:underline">hello@londonschool-ks.com</a>
            </p>
          </div>
        </div>

        {/* Job Openings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {positions.map((position, index) => (
            <Card
              key={position.titleKey}
              className="premium-card border-0 hover-scale animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-5xl mb-4">{position.icon}</div>
                <CardTitle className="font-heading text-xl">
                  {t(position.titleKey)}
                </CardTitle>
                <CardDescription>
                  {t(position.requirementsKey)}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full premium-button text-white font-semibold" asChild>
                  <a href="mailto:hello@londonschool-ks.com">
                    <Briefcase className="mr-2 w-4 h-4" />
                    {t('jobs.applyNow')}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
