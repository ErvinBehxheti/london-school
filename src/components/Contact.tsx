import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.info.visit.title"),
      info: t("contact.info.visit.info"),
      description: t("contact.info.visit.description"),
    },
    {
      icon: Phone,
      title: t("contact.info.call.title"),
      info: t("contact.info.call.info"),
      description: t("contact.info.call.description"),
    },
    {
      icon: Mail,
      title: t("contact.info.email.title"),
      info: t("contact.info.email.info"),
      description: t("contact.info.email.description"),
    },
    {
      icon: Clock,
      title: t("contact.info.hours.title"),
      info: t("contact.info.hours.info"),
      description: t("contact.info.hours.description"),
    },
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t("contact.badge")}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t("contact.title")}
            <span className="block text-primary">{t("contact.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("contact.description")}
          </p>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card
                key={info.title}
                className="premium-card border-0 animate-fade-up hover-scale"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {info.title}
                  </h3>
                  <p className="font-medium text-primary mb-1">{info.info}</p>
                  <p className="text-sm text-muted-foreground">
                    {info.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA + Map Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* CTA */}
          <div className="animate-fade-up bg-gradient-to-r from-primary to-primary-glow rounded-3xl p-8 md:p-12 text-white text-center">
            <h3 className="font-heading font-bold text-3xl mb-4">
              {t("contact.cta.title")}
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              {t("contact.cta.description")}
            </p>
          </div>

          {/* Map */}
          <Card className="premium-card border-0 overflow-hidden animate-fade-up lg:[animation-delay:0.1s]">
            <CardContent className="p-0 h-full">
              <div className="h-[280px] md:h-[360px] lg:h-full">
                <iframe
                  title="London School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.26734455247!2d20.867624000000003!3d42.8883059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135345be74d29c69%3A0xd1d95ee51e5bafba!2sLondon%20School!5e0!3m2!1sen!2s!4v1763657972733!5m2!1sen!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
