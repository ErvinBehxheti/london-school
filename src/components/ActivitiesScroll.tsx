import { useLayoutEffect, useRef } from "react";
import { ArrowRight, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import { PHOTOS } from "@/data/photos";
import type { EventKey } from "@/types";

gsap.registerPlugin(ScrollTrigger);

interface ActivityCard {
  eventKey: EventKey;
  i18nKey: string;
  anchor: string;
  badgeKey: string;
}

const CARDS: ActivityCard[] = [
  { eventKey: "summerCamp", i18nKey: "summerCamp", anchor: "summer-camp", badgeKey: "activities.summerCamp.badge" },
  { eventKey: "bakeAndSale", i18nKey: "bakeAndSale", anchor: "bake-sale", badgeKey: "activities.bakeAndSale.badge" },
  { eventKey: "spellingBee", i18nKey: "spellingBee", anchor: "spelling-bee", badgeKey: "activities.spellingBee.badge" },
  { eventKey: "speedTyping", i18nKey: "speedTyping", anchor: "speed-typing", badgeKey: "activities.speedTyping.badge" },
  { eventKey: "quizzes", i18nKey: "quizzes", anchor: "quizzes", badgeKey: "activities.quizzes.badge" },
  { eventKey: "rome", i18nKey: "trips", anchor: "trips", badgeKey: "activities.trips.badge" },
  { eventKey: "techFest", i18nKey: "techFest", anchor: "tech-fest", badgeKey: "activities.techFest.badge" },
];

/**
 * Pinned horizontal-scroll panel (desktop): vertical scrolling drives the
 * cards sideways. Collapses to a vertical stack below lg.
 */
const ActivitiesScroll = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 1024px)", () => {
      const distance = () => track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-ink py-20 lg:flex lg:min-h-screen lg:flex-col lg:justify-center lg:py-0"
      data-section-label={t("navigation.activities")}
    >
      <div className="container mx-auto px-6 lg:pt-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow mb-4 text-secondary">
              {t("activities.badge")}
            </p>
            <SplitTextHeading
              text={t("activities.title")}
              className="display-sub font-heading font-extrabold text-ink-foreground"
            />
          </div>
          <p className="hidden items-center gap-2 text-sm uppercase tracking-widest text-ink-foreground/50 lg:flex">
            {t("activities.dragHint")}
            <MoveRight className="h-4 w-4" aria-hidden />
          </p>
        </div>
      </div>

      {/* Track: horizontal on desktop (GSAP-driven), vertical stack on mobile */}
      <div
        ref={trackRef}
        className="flex flex-col gap-6 px-6 lg:w-max lg:flex-row lg:gap-8 lg:px-[8vw] lg:pb-24"
      >
        {CARDS.map((card) => {
          const photo = PHOTOS.events[card.eventKey][0];
          return (
            <Link
              key={card.anchor}
              to={`/activities#${card.anchor}`}
              className="img-hover-reveal group relative block h-[480px] w-full shrink-0 overflow-hidden rounded-3xl lg:h-[60vh] lg:w-[420px]"
            >
              {photo ? (
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                /* Branded placeholder until photos are dropped into /public/photos/events */
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-glow to-ink">
                  <img
                    src="/photos/logos/londonschool.png"
                    alt=""
                    aria-hidden
                    className="w-32 opacity-20"
                  />
                </div>
              )}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-secondary/90 px-3 py-1 text-xs font-bold uppercase tracking-wider text-secondary-foreground">
                {t(card.badgeKey)}
              </span>

              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="font-heading text-2xl font-extrabold text-ink-foreground md:text-3xl">
                  {t(`activities.${card.i18nKey}.title`)}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm text-ink-foreground/80">
                  {t(`activities.${card.i18nKey}.tagline`)}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 font-heading text-sm font-bold text-secondary transition-transform duration-300 group-hover:translate-x-1">
                  {t("activities.viewMore")}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default ActivitiesScroll;
