import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import { TESTIMONIALS } from "@/data/testimonials";
import { fadeUp } from "@/lib/animations";

const AUTO_ADVANCE_MS = 5000;

const Testimonials = () => {
  const { t } = useTranslation();
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const timer = setInterval(scrollNext, AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [emblaApi, scrollNext]);

  return (
    <section
      className="relative overflow-hidden bg-ink py-24 md:py-32"
      data-section-label={t("testimonials.badge")}
    >
      {/* Decorative quote mark */}
      <Quote
        className="pointer-events-none absolute -top-8 left-8 h-64 w-64 text-ink-foreground/5"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-6">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4 text-secondary">
            {t("testimonials.badge")}
          </p>
          <SplitTextHeading
            text={`${t("testimonials.title")} ${t("testimonials.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-ink-foreground"
          />
          <motion.p
            className="mt-4 text-lg text-ink-foreground/70"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("testimonials.description")}
          </motion.p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {TESTIMONIALS.map((item) => (
              <div
                key={item.key}
                className="min-w-0 shrink-0 grow-0 basis-full pr-8 md:basis-1/2"
              >
                <blockquote className="flex h-full flex-col justify-between">
                  <p className="text-xl italic leading-relaxed text-ink-foreground/90 md:text-[28px] md:leading-snug">
                    “{t(`testimonials.items.${item.key}.quote`)}”
                  </p>
                  <footer className="mt-8 flex items-center gap-4">
                    <Avatar className={`h-12 w-12 ${item.color}`}>
                      <AvatarFallback className="bg-transparent font-bold text-white">
                        {item.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-heading font-bold text-ink-foreground">
                        {t(`testimonials.items.${item.key}.name`)}
                      </p>
                      <p className="text-sm text-secondary">
                        {t(`testimonials.items.${item.key}.role`)}
                      </p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
