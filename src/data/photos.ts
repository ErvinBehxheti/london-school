import type { EventKey, GalleryPhoto, PhotoItem } from "@/types";

/**
 * Single source of truth for every photo on the site.
 *
 * To add photos: drop the file into the matching folder under /public/photos/
 * and add one object to the matching array below. Every section (hero
 * carousel, event galleries, gallery page, homepage preview) updates
 * automatically — no other code changes are needed.
 *
 * Folder layout:
 *   /public/photos/hero/               → PHOTOS.hero
 *   /public/photos/events/{event}/     → PHOTOS.events.{event}
 *   /public/photos/gallery/            → PHOTOS.gallery (or reuse event photos)
 */
export const PHOTOS: {
  hero: PhotoItem[];
  events: Record<EventKey, PhotoItem[]>;
  gallery: GalleryPhoto[];
} = {
  hero: [
    { src: "/photos/hero/conference.jpg", alt: "London School staff at a conference" },
    { src: "/photos/hero/graduation.jpg", alt: "Students graduating from London School" },
    { src: "/photos/hero/techfest.jpg", alt: "Tech Fest, the technology festival organized by London School" },
    { src: "/photos/hero/competition.jpg", alt: "London School students at a competition" },
    // Add a 5th hero photo (e.g. Bake & Sale) here — the carousel updates automatically:
    // { src: "/photos/hero/bake-and-sale.jpg", alt: "Bake & Sale at London School" },
  ],

  events: {
    summerCamp: [
      // { src: "/photos/events/summer-camp/1.jpg", alt: "Summer Camp", caption: "" },
    ],
    bakeAndSale: [
      // { src: "/photos/events/bake-and-sale/1.jpg", alt: "Bake & Sale", caption: "" },
    ],
    spellingBee: [
      // { src: "/photos/events/spelling-bee/1.jpg", alt: "Spelling Bee", caption: "" },
    ],
    speedTyping: [
      // { src: "/photos/events/speed-typing/1.jpg", alt: "Speed Typing", caption: "" },
    ],
    quizzes: [
      // { src: "/photos/events/quizzes/1.jpg", alt: "Quiz competition", caption: "" },
    ],
    techFest: [
      { src: "/photos/hero/techfest.jpg", alt: "Tech Fest 2025 in Mitrovica" },
      // { src: "/photos/events/tech-fest/1.jpg", alt: "Tech Fest", caption: "" },
    ],
    rome: [
      // { src: "/photos/events/rome/1.jpg", alt: "Educational trip to Rome", caption: "" },
    ],
    vienna: [
      // { src: "/photos/events/vienna/1.jpg", alt: "Educational trip to Vienna", caption: "" },
    ],
    zoo: [
      // { src: "/photos/events/zoo/1.jpg", alt: "Zoo trip", caption: "" },
    ],
    cinema: [
      // { src: "/photos/events/cinema/1.jpg", alt: "Cinema trip", caption: "" },
    ],
    jale: [
      // { src: "/photos/events/jale/1.jpg", alt: "Jale Wave Camp", caption: "" },
    ],
    ibcmFair: [
      // { src: "/photos/events/ibcm-fair/1.jpg", alt: "IBCM fair", caption: "" },
    ],
    kosict: [
      // { src: "/photos/events/kosict/1.jpg", alt: "KosICT", caption: "" },
    ],
    youthEmpowerment: [
      // { src: "/photos/events/youth-empowerment/1.jpg", alt: "Youth Empowerment", caption: "" },
    ],
    aabFair: [
      // { src: "/photos/events/aab-fair/1.jpg", alt: "AAB fair", caption: "" },
    ],
  },

  // Flat list used by the /gallery page and the homepage preview.
  // Tag each photo with a category so the filter tabs work:
  // "summer-camp" | "tech-fest" | "trips" | "activities" | "training"
  gallery: [
    // { src: "/photos/gallery/1.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title", date: "2025" },
  ] as GalleryPhoto[],
};
