import { motion } from "framer-motion";
import { Camera, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import PageHero from "@/components/shared/PageHero";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import RevealImage from "@/components/shared/RevealImage";
import TechFestFeature from "@/components/TechFestFeature";
import ContactCTA from "@/components/ContactCTA";
import { PHOTOS } from "@/data/photos";
import type { EventKey, PhotoItem } from "@/types";
import { cardVariant, fadeUp, stagger } from "@/lib/animations";

/** Styled placeholder shown until real photos land in src/data/photos.ts. */
const PhotoPlaceholder = ({ label }: { label: string }) => (
  <div className="relative flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 to-ink text-ink-foreground">
    <img
      src="/photos/logos/londonschool.png"
      alt=""
      aria-hidden
      className="absolute w-40 opacity-10"
    />
    <Camera className="h-8 w-8 text-secondary/70" aria-hidden />
    <p className="z-10 px-6 text-center text-sm text-ink-foreground/80">{label}</p>
  </div>
);

/** 2×2 photo grid; single elegant frame for one photo; placeholder for none. */
const PhotoCluster = ({ photos, alt }: { photos: PhotoItem[]; alt: string }) => {
  const { t } = useTranslation();

  if (photos.length === 0) {
    return <PhotoPlaceholder label={t("activities.photosComingSoon")} />;
  }
  if (photos.length === 1) {
    return (
      <RevealImage
        src={photos[0].src}
        alt={photos[0].alt || alt}
        caption={photos[0].caption}
        className="aspect-[4/3] rounded-2xl border-8 border-card shadow-premium"
      />
    );
  }
  return (
    <div className="grid grid-cols-2 gap-3">
      {photos.slice(0, 4).map((photo) => (
        <RevealImage
          key={photo.src}
          src={photo.src}
          alt={photo.alt || alt}
          caption={photo.caption}
          className="aspect-square rounded-xl"
        />
      ))}
    </div>
  );
};

interface ActivitySectionProps {
  anchor: string;
  i18nKey: string;
  eventKeys: EventKey[];
  flip?: boolean;
}

/** Alternating image/text layout with anchor id for deep links. */
const ActivitySection = ({ anchor, i18nKey, eventKeys, flip }: ActivitySectionProps) => {
  const { t } = useTranslation();
  const photos = eventKeys.flatMap((key) => PHOTOS.events[key]);

  return (
    <section id={anchor} className="scroll-mt-28 py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
            flip ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <PhotoCluster photos={photos} alt={t(`activities.${i18nKey}.title`)} />
          <div>
            <p className="eyebrow mb-3 text-primary/60">
              {t(`activities.${i18nKey}.badge`)}
            </p>
            <SplitTextHeading
              text={t(`activities.${i18nKey}.title`)}
              className="mb-5 font-heading text-3xl font-extrabold text-foreground md:text-4xl"
            />
            <motion.p
              className="mb-6 text-lg leading-relaxed text-muted-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t(`activities.${i18nKey}.description`)}
            </motion.p>
            <motion.ul
              className="space-y-3"
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((n) => (
                <motion.li
                  key={n}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-foreground/90"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-secondary" aria-hidden />
                  {t(`activities.${i18nKey}.point${n}`)}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const TRIP_KEYS: { key: string; eventKey: EventKey }[] = [
  { key: "rome", eventKey: "rome" },
  { key: "vienna", eventKey: "vienna" },
  { key: "jale", eventKey: "jale" },
  { key: "zoo", eventKey: "zoo" },
  { key: "cinema", eventKey: "cinema" },
];

const TRAINING_KEYS: { key: string; eventKey: EventKey }[] = [
  { key: "ibcmFair", eventKey: "ibcmFair" },
  { key: "kosict", eventKey: "kosict" },
  { key: "youthEmpowerment", eventKey: "youthEmpowerment" },
  { key: "aabFair", eventKey: "aabFair" },
];

const ActivitiesPage = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero
        eyebrow={t("activities.badge")}
        title={t("activities.pageTitle")}
        description={t("activities.pageDescription")}
      />

      <ActivitySection anchor="summer-camp" i18nKey="summerCamp" eventKeys={["summerCamp"]} />
      <ActivitySection anchor="bake-sale" i18nKey="bakeAndSale" eventKeys={["bakeAndSale"]} flip />
      <ActivitySection anchor="spelling-bee" i18nKey="spellingBee" eventKeys={["spellingBee"]} />
      <ActivitySection anchor="speed-typing" i18nKey="speedTyping" eventKeys={["speedTyping"]} flip />
      <ActivitySection anchor="quizzes" i18nKey="quizzes" eventKeys={["quizzes"]} />

      {/* Tech Fest — full showstopper treatment */}
      <TechFestFeature />

      {/* Educational trips */}
      <section id="trips" className="scroll-mt-28 bg-gradient-subtle py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-3 text-primary/60">
              {t("activities.trips.badge")}
            </p>
            <SplitTextHeading
              text={t("activities.trips.title")}
              className="display-sub font-heading font-extrabold text-foreground"
            />
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("activities.trips.description")}
            </motion.p>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {TRIP_KEYS.map(({ key, eventKey }) => {
              const photo = PHOTOS.events[eventKey][0];
              return (
                <motion.article
                  key={key}
                  variants={cardVariant}
                  className="premium-card overflow-hidden rounded-2xl"
                >
                  {photo ? (
                    <RevealImage
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-[16/10]"
                    />
                  ) : (
                    <div className="relative flex aspect-[16/10] items-center justify-center bg-gradient-to-br from-primary/90 to-ink">
                      <MapPin className="h-10 w-10 text-secondary/60" aria-hidden />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-extrabold text-foreground">
                      {t(`activities.trips.items.${key}.title`)}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {t(`activities.trips.items.${key}.description`)}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Training & participation */}
      <section id="training" className="scroll-mt-28 py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="mb-12 max-w-3xl">
            <p className="eyebrow mb-3 text-primary/60">
              {t("activities.training.badge")}
            </p>
            <SplitTextHeading
              text={t("activities.training.title")}
              className="display-sub font-heading font-extrabold text-foreground"
            />
            <motion.p
              className="mt-4 text-lg text-muted-foreground"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {t("activities.training.description")}
            </motion.p>
          </div>

          <motion.div
            className="grid gap-6 sm:grid-cols-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {TRAINING_KEYS.map(({ key, eventKey }) => {
              const photo = PHOTOS.events[eventKey][0];
              return (
                <motion.article
                  key={key}
                  variants={cardVariant}
                  className="premium-card flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center"
                >
                  {photo ? (
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className="h-24 w-24 shrink-0 rounded-xl object-cover"
                    />
                  ) : (
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/90 to-ink">
                      <Camera className="h-6 w-6 text-secondary/60" aria-hidden />
                    </div>
                  )}
                  <div>
                    <h3 className="font-heading text-lg font-extrabold text-foreground">
                      {t(`activities.training.items.${key}.title`)}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {t(`activities.training.items.${key}.description`)}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default ActivitiesPage;
