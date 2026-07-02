import { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import PageHero from "@/components/shared/PageHero";
import ContactCTA from "@/components/ContactCTA";
import { PHOTOS } from "@/data/photos";
import type { GalleryCategory } from "@/types";

type Filter = "all" | GalleryCategory;

const FILTERS: { value: Filter; labelKey: string }[] = [
  { value: "all", labelKey: "gallery.filters.all" },
  { value: "summer-camp", labelKey: "gallery.filters.summerCamp" },
  { value: "tech-fest", labelKey: "gallery.filters.techFest" },
  { value: "trips", labelKey: "gallery.filters.trips" },
  { value: "activities", labelKey: "gallery.filters.activities" },
  { value: "training", labelKey: "gallery.filters.training" },
];

const CATEGORY_ICONS: Record<Filter, string> = {
  all: "📸",
  "summer-camp": "☀️",
  "tech-fest": "🚀",
  trips: "🌍",
  activities: "🎯",
  training: "🎓",
};

const GalleryPage = () => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<Filter>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const photos = useMemo(
    () =>
      filter === "all"
        ? PHOTOS.gallery
        : PHOTOS.gallery.filter((p) => p.category === filter),
    [filter]
  );

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPrev = useCallback(
    () =>
      setLightboxIndex((i) =>
        i === null ? null : (i - 1 + photos.length) % photos.length
      ),
    [photos.length]
  );
  const showNext = useCallback(
    () =>
      setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length)),
    [photos.length]
  );

  // Keyboard navigation: ← → Esc
  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIndex, closeLightbox, showPrev, showNext]);

  const current = lightboxIndex !== null ? photos[lightboxIndex] : null;

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero
        eyebrow={t("gallery.badge")}
        title={t("gallery.pageTitle")}
        description={t("gallery.pageDescription")}
      />

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          {/* Filter tabs */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                  filter === f.value
                    ? "bg-primary text-primary-foreground shadow-card"
                    : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {t(f.labelKey)}
              </button>
            ))}
          </div>

          {photos.length > 0 ? (
            <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4">
              <AnimatePresence mode="popLayout">
                {photos.map((photo, i) => (
                  <motion.button
                    layout
                    key={photo.src}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.92 }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setLightboxIndex(i)}
                    className="img-hover-reveal mb-4 block w-full overflow-hidden rounded-xl"
                    aria-label={photo.alt}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="w-full"
                    />
                    <span className="reveal-caption flex items-center justify-between text-left">
                      <span className="text-sm font-medium">
                        {photo.eventKey ? t(photo.eventKey) : photo.alt}
                      </span>
                      {photo.date && (
                        <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-bold text-secondary-foreground">
                          {photo.date}
                        </span>
                      )}
                    </span>
                  </motion.button>
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            /* Branded per-category empty state */
            <div className="mx-auto max-w-lg rounded-3xl bg-gradient-to-br from-primary/90 to-ink p-12 text-center text-ink-foreground">
              <span className="text-5xl" aria-hidden>
                {CATEGORY_ICONS[filter]}
              </span>
              <Camera className="mx-auto mt-6 h-8 w-8 text-secondary/70" aria-hidden />
              <h2 className="mt-4 font-heading text-2xl font-extrabold">
                {t("gallery.emptyTitle")}
              </h2>
              <p className="mt-2 text-ink-foreground/75">
                {t("gallery.emptyDescription")}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/95 p-6"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
          >
            <button
              onClick={closeLightbox}
              aria-label={t("aria.closeLightbox")}
              className="absolute right-6 top-6 rounded-full bg-ink-foreground/10 p-3 text-ink-foreground transition-colors hover:bg-ink-foreground/20"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label={t("aria.prevPhoto")}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-ink-foreground/10 p-3 text-ink-foreground transition-colors hover:bg-ink-foreground/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.alt}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label={t("aria.nextPhoto")}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-ink-foreground/10 p-3 text-ink-foreground transition-colors hover:bg-ink-foreground/20"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactCTA />
    </main>
  );
};

export default GalleryPage;
