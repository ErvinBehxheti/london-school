import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Agron K.",
      role: "Prind",
      content: "Fëmija im ka përparuar jashtëzakonisht në anglisht falë London School. Mësuesit janë shumë profesionistë dhe të përkushtuar.",
      avatar: "AK",
      color: "bg-blue-500"
    },
    {
      name: "Valdete M.",
      role: "Studente Gjermanisht",
      content: "Kalova provimin Goethe B2 në përpjekjen e parë! Metoda e mësimdhënies është shumë efektive dhe interaktive.",
      avatar: "VM",
      color: "bg-purple-500"
    },
    {
      name: "Luan B.",
      role: "Prind",
      content: "Djali im ndoqi kursin e programimit dhe tani krijon lojëra të veta. Logiscool partnering është fantastik!",
      avatar: "LB",
      color: "bg-green-500"
    },
    {
      name: "Besarta S.",
      role: "Studente Anglisht",
      content: "Fitova TOEFL 105 pikë dhe u pranova në universitetin e ëndrrave të mia. Faleminderit London School!",
      avatar: "BS",
      color: "bg-yellow-500"
    },
    {
      name: "Arben D.",
      role: "Prind",
      content: "Vajza ime mori bursë studimi falë suksesit në konkurs. Jam shumë krenar për mbështetjen e London School.",
      avatar: "AD",
      color: "bg-red-500"
    },
    {
      name: "Mirela H.",
      role: "Studente Programim",
      content: "U punësova si developer pas kursit të programimit. Trajnimi ishte shumë praktik dhe i fokusuar në industri.",
      avatar: "MH",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t('testimonials.badge')}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t('testimonials.title')}
            <span className="block text-primary">{t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('testimonials.description')}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <Card className="premium-card h-full">
                    <CardContent className="p-8">
                      <Quote className="w-10 h-10 text-primary/20 mb-4" />
                      <p className="text-muted-foreground mb-6 italic leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      <div className="flex items-center space-x-4">
                        <Avatar className={`${testimonial.color} w-12 h-12`}>
                          <AvatarFallback className="text-white font-bold">
                            {testimonial.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
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

export default Testimonials;
