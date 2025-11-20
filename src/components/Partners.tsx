import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

// Small helper that prefers an image and gracefully falls back to the icon/emoji
function PartnerLogo({
  name,
  icon,
  image,
}: {
  name: string;
  icon: string;
  image?: string;
}) {
  const [error, setError] = useState(false);

  // If there is a provided image path and it hasn't errored, try to render it
  if (image && !error) {
    return (
      <div className="mb-4 w-24 h-16 md:w-28 md:h-20 flex items-center justify-center">
        {/* Using <img> for framework-agnostic compatibility. Swap to next/image if desired. */}
        <img
          src={image}
          alt={name}
          className="max-w-full max-h-full object-contain rounded-md shadow-sm"
          loading="lazy"
          onError={() => setError(true)}
        />
      </div>
    );
  }

  // Fallback to icon/emoji if no image or if the image failed to load
  return (
    <div className="text-5xl mb-4" aria-hidden>
      {icon}
    </div>
  );
}

const Partners = () => {
  const { t } = useTranslation();

  // Add an optional `image` property when you have a logo file.
  // If `image` is omitted or fails to load, the UI falls back to the `icon`.
  const partners: { name: string; icon: string; image?: string }[] = [
    { name: "IBCM", icon: "🏢", image: "/photos/logos/ibcm.png"},
    { name: "LOGISCOOL", icon: "💻", image: "/photos/logos/logiscool.png" },
    { name: "UMIB", icon: "🎓", image: "/photos/logos/umib.png" },
    { name: "AAB", icon: "🏛️", image: "/photos/logos/aab.gif" },
    { name: "LIBRARIA DUKAGJINI", icon: "📚", image: "/photos/logos/dukagjini.webp"  },
    { name: "GO TAXI", icon: "🚕", image: "/photos/logos/go.jpg"  },
    { name: "OLIVE CLINIC", icon: "🏥", image: "/photos/logos/olive.jpg"  },
    { name: "MGYM", icon: "💪", image: "/photos/logos/mgym.png" },
    { name: "Computer Service", icon: "🖥️", image: "/photos/logos/computer-service.png" },
    { name: "Klinika Syri im", icon: "👁️"},
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-up">
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            {t("partners.badge")}
          </Badge>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6">
            {t("partners.title")}
            <span className="block text-primary">{t("partners.titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t("partners.description")}
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
                >
                  <div className="premium-card p-8 text-center hover-scale h-full flex flex-col items-center justify-center">
                    <PartnerLogo name={partner.name} icon={partner.icon} image={partner.image} />
                    <p className="font-semibold text-sm" title={partner.name}>
                      {partner.name}
                    </p>
                  </div>
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

export default Partners;
