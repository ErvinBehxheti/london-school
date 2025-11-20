import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Award, Users } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Team = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { key: "adea", image: "/photos/staff/adea-baliu.jpg" }, // English Teacher
    { key: "aida", image: "/photos/staff/aida-topallaj.jpg" }, // English Teacher
    { key: "arbnora", image: "/photos/staff/arbnora-qorraj.jpg" }, // CEO & Founder
    {key: "ardita-ib", image: "/photos/staff/ardita-ib.jpg"}, // English Teacher
    {key: "ardita-jel", image: "/photos/staff/Ardita-jeliqi.jpg"}, // German Teacher
    {key: "arijana", image: "/photos/staff/arijanauka.jpg"}, // Financial Officer
    {key: "arta", image: "/photos/staff/arta-krasniqi.jpg"}, // English Teacher
    {key: "ela", image: "/photos/staff/ela-hoti.jpg"}, //  Manager & German Teacher
    {key: "ervin", image: "/photos/staff/ervin-behxheti-boss.jpg"}, // Coding Trainer
    {key: "fjolla", image: "/photos/staff/fjolla-c.jpg"}, // Graphic Designer
    {key: "granit", image: "/photos/staff/granit-durmishi.jpg"}, // English Teacher
    {key: "jona", image: "/photos/staff/jona-loxha.jpg"}, // Coding Trainer
    {key: "nora", image: "/photos/staff/Nora-Fazliu.jpg"}, // English Teacher
    {key: "rona", image: "/photos/staff/rona-peci.jpg"}, // Financial Officer
    {key: "valeriana", image: "/photos/staff/valeriana-fejzullahu.jpg"}, // German Teacher
    {key: "valon", image: "/photos/staff/Valon-sejdiu.jpg"}, // English Teacher
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 text-sm font-medium">
            {t("team.badge")}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t("team.title")}{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              {t("team.titleHighlight")}
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            {t("team.description")}
          </p>
        </div>

        {/* Founder Card */}
        <div className="max-w-5xl mx-auto mb-16 animate-fade-up">
          <Card className="premium-card overflow-hidden border-primary/20">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Avatar Section */}
                <div className="md:col-span-2 bg-gradient-primary p-8 md:p-12 flex flex-col items-center justify-center text-white">
                  <Avatar className="w-full h-[65%] mb-6 border-4 border-white/20">
                    <AvatarImage src="/photos/staff/albina-hoti.jpeg" alt={t("team.founder.name")} className="object-cover object-top" />
                    <AvatarFallback className="text-3xl font-bold bg-white/20">
                      AH
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-heading font-bold text-2xl mb-2 text-center">
                    {t("team.founder.name")}
                  </h3>
                  <p className="text-white/90 text-center mb-6">
                    {t("team.founder.role")}
                  </p>
                  <div className="flex gap-3">
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Award className="w-5 h-5" />
                    </div>
                    <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Users className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="md:col-span-3 p-8 md:p-12">
                  <p className="text-lg text-foreground/90 mb-6 leading-relaxed">
                    {t("team.founder.bio")}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <GraduationCap className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">
                          Education
                        </p>
                        <p className="text-foreground">
                          {t("team.founder.education")}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-1">
                          Key Achievements
                        </p>
                        <p className="text-foreground">
                          {t("team.founder.achievements")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Team Members Carousel - Swipable on all devices */}
        <div className="max-w-7xl mx-auto px-4">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={`${member.key}-${index}`} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3">
                  <Card className="premium-card hover-scale overflow-hidden h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={t(`team.members.${member.key}.name`)}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <CardContent className="p-6 text-center flex-grow flex flex-col justify-center">
                      <h3 className="font-heading font-bold text-lg mb-1">
                        {t(`team.members.${member.key}.name`)}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {t(`team.members.${member.key}.role`)}
                      </p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Team;
