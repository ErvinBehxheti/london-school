import { motion } from "framer-motion";
import { ArrowRight, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import RevealImage from "@/components/shared/RevealImage";
import { PHOTOS } from "@/data/photos";
import { cardVariant, stagger } from "@/lib/animations";

/** Masonry rhythm: first two tiles tall, the rest regular. */
const TILE_CLASSES = [
  "row-span-2",
  "row-span-2",
  "row-span-1",
  "row-span-1",
  "row-span-1",
  "row-span-1",
];

const GalleryPreview = () => {
  const { t } = useTranslation();
  const photos = PHOTOS.gallery.slice(0, 6);

  return (
    <section
      className="bg-background py-24 md:py-32"
      data-section-label={t("navigation.gallery")}
    >
      <div className="container mx-auto px-6">
        <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4 text-primary/60">
              {t("gallery.badge")}
            </p>
            <SplitTextHeading
              text={t("gallery.previewTitle")}
              className="display-sub font-heading font-extrabold text-foreground"
            />
          </div>
          <Link
            to="/gallery"
            className="nav-underline inline-flex items-center gap-2 font-heading font-bold text-primary"
          >
            {t("gallery.viewFull")}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>

        {photos.length > 0 ? (
          <motion.div
            className="grid auto-rows-[180px] grid-cols-2 gap-4 md:auto-rows-[220px] md:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {photos.map((photo, i) => (
              <motion.div
                key={photo.src}
                variants={cardVariant}
                className={TILE_CLASSES[i] ?? "row-span-1"}
              >
                <RevealImage
                  src={photo.src}
                  alt={photo.alt}
                  caption={photo.eventKey ? t(photo.eventKey) : photo.caption}
                  className="h-full rounded-2xl"
                />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          /* Branded empty state until photos land in src/data/photos.ts */
          <motion.div
            className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {TILE_CLASSES.map((tile, i) => (
              <motion.div
                key={i}
                variants={cardVariant}
                className={`${tile} flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-muted to-primary/5 text-muted-foreground`}
              >
                <Camera className="h-8 w-8 opacity-40" aria-hidden />
                <p className="px-4 text-center text-xs font-medium">
                  {t("gallery.comingSoon")}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GalleryPreview;
