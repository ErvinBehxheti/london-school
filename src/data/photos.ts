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
    { src: "/photos/hero/main-1.jpg", alt: "London School students at their graduation ceremony" },
    { src: "/photos/hero/main-2.jpg", alt: "London School students with their German, English and coding course materials" },
  ],

  events: {
    summerCamp: [
      { src: "/photos/summercamp/summercamp1.jpg", alt: "Summer Camp" },
      { src: "/photos/summercamp/summercamp2.jpg", alt: "Summer Camp" },
      { src: "/photos/summercamp/summercamp3.jpg", alt: "Summer Camp" },
      { src: "/photos/summercamp/summercamp.jpg", alt: "Summer Camp" },
    ],
    bakeAndSale: [
      { src: "/photos/bakeandsale/viber_image_2026-01-11_23-38-48-303.jpg", alt: "Bake & Sale" },
      { src: "/photos/bakeandsale/viber_image_2026-01-11_23-38-59-162.jpg", alt: "Bake & Sale" },
      { src: "/photos/bakeandsale/viber_image_2026-01-11_23-39-07-981.jpg", alt: "Bake & Sale" },
    ],
    spellingBee: [
      { src: "/photos/spellingbee/spellingbee2.jpg", alt: "Spelling Bee" },
      { src: "/photos/spellingbee/spellingbee3.jpg", alt: "Spelling Bee" },
      { src: "/photos/spellingbee/spelling bee.jpg", alt: "Spelling Bee" },
    ],
    speedTyping: [
      { src: "/photos/speedtyping/speedtyping2.jpg", alt: "Speed Typing" },
      { src: "/photos/speedtyping/speedtypingcompetition3.jpg", alt: "Speed Typing competition" },
      { src: "/photos/speedtyping/speedtyping.jpg", alt: "Speed Typing" },
    ],
    quizzes: [
      // { src: "/photos/events/quizzes/1.jpg", alt: "Quiz competition", caption: "" },
    ],
    techFest: [
      { src: "/photos/techfest/techfest.jpg", alt: "Tech Fest 2025 in Mitrovica" },
      { src: "/photos/techfest/techfest1.jpg", alt: "Tech Fest, the technology festival organized by London School" },
      { src: "/photos/techfest/techfest2.jpg", alt: "Tech Fest, the technology festival organized by London School" },
      { src: "/photos/techfest/techfest4.jpg", alt: "Tech Fest, the technology festival organized by London School" },
      { src: "/photos/techfest/techfest5.jpg", alt: "Tech Fest, the technology festival organized by London School" },
      { src: "/photos/techfest/techfest6.jpg", alt: "Tech Fest, the technology festival organized by London School" },
    ],
    rome: [
      { src: "/photos/rome/rometrip.jpg", alt: "Educational trip to Rome" },
      { src: "/photos/rome/rometrip1.jpg", alt: "Educational trip to Rome" },
      { src: "/photos/rome/rometrip2.jpg", alt: "Educational trip to Rome" },
      { src: "/photos/rome/rometrip3.jpg", alt: "Educational trip to Rome" },
    ],
    vienna: [
      { src: "/photos/vienna/vienna.jpg", alt: "Educational trip to Vienna" },
      { src: "/photos/vienna/vienna2.jpg", alt: "Educational trip to Vienna" },
    ],
    zoo: [
      { src: "/photos/zoo/zoo.jpg", alt: "Zoo trip" },
      { src: "/photos/zoo/zoo1.jpg", alt: "Zoo trip" },
      { src: "/photos/zoo/zoo2.jpg", alt: "Zoo trip" },
    ],
    cinema: [
      { src: "/photos/cinema/kinema.jpg", alt: "Cinema trip" },
      { src: "/photos/cinema/kinema2.jpg", alt: "Cinema trip" },
      { src: "/photos/cinema/cinema3.jpg", alt: "Cinema trip" },
    ],
    jale: [
      { src: "/photos/wavecamp/wavecamp.jpg", alt: "Jale Wave Camp" },
      { src: "/photos/wavecamp/wave camp.jpg", alt: "Jale Wave Camp" },
      { src: "/photos/wavecamp/wavecamp2.jpg", alt: "Jale Wave Camp" },
      { src: "/photos/wavecamp/wavecamp3.jpg", alt: "Jale Wave Camp" },
      { src: "/photos/wavecamp/wavecamp4.jpg", alt: "Jale Wave Camp" },
    ],
    ibcmFair: [
      // { src: "/photos/events/ibcm-fair/1.jpg", alt: "IBCM fair", caption: "" },
    ],
    kosict: [
      { src: "/photos/kosict/kosict1.jpg", alt: "KosICT" },
      { src: "/photos/kosict/kosict2.jpg", alt: "KosICT" },
      { src: "/photos/kosict/kosict3.jpg", alt: "KosICT" },
      { src: "/photos/kosict/kosict4.jpg", alt: "KosICT" },
    ],
    youthEmpowerment: [
      { src: "/photos/youthempowerment/youthempowerment.jpg", alt: "Youth Empowerment" },
      { src: "/photos/youthempowerment/youthempowerment1.jpg", alt: "Youth Empowerment" },
      { src: "/photos/youthempowerment/youthempowerment3.jpg", alt: "Youth Empowerment" },
    ],
    aabFair: [
      { src: "/photos/aab/aab fair.jpg", alt: "AAB fair" },
      { src: "/photos/aab/aab fair1.jpg", alt: "AAB fair" },
      { src: "/photos/aab/aabfair3.jpg", alt: "AAB fair" },
    ],
  },

  // Flat list used by the /gallery page and the homepage preview.
  // Tag each photo with a category so the filter tabs work:
  // "summer-camp" | "tech-fest" | "trips" | "activities" | "training"
  gallery: [
    { src: "/photos/techfest/techfest.jpg", alt: "Tech Fest 2025 in Mitrovica", category: "tech-fest", eventKey: "activities.techFest.title" },
    { src: "/photos/techfest/techfest1.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title" },
    { src: "/photos/techfest/techfest2.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title" },
    { src: "/photos/techfest/techfest4.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title" },
    { src: "/photos/techfest/techfest5.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title" },
    { src: "/photos/techfest/techfest6.jpg", alt: "Tech Fest crowd", category: "tech-fest", eventKey: "activities.techFest.title" },

    { src: "/photos/summercamp/summercamp.jpg", alt: "Summer Camp", category: "summer-camp", eventKey: "activities.summerCamp.title" },
    { src: "/photos/summercamp/summercamp1.jpg", alt: "Summer Camp", category: "summer-camp", eventKey: "activities.summerCamp.title" },
    { src: "/photos/summercamp/summercamp2.jpg", alt: "Summer Camp", category: "summer-camp", eventKey: "activities.summerCamp.title" },
    { src: "/photos/summercamp/summercamp3.jpg", alt: "Summer Camp", category: "summer-camp", eventKey: "activities.summerCamp.title" },

    { src: "/photos/rome/rometrip.jpg", alt: "Educational trip to Rome", category: "trips", eventKey: "activities.trips.items.rome.title" },
    { src: "/photos/rome/rometrip1.jpg", alt: "Educational trip to Rome", category: "trips", eventKey: "activities.trips.items.rome.title" },
    { src: "/photos/rome/rometrip2.jpg", alt: "Educational trip to Rome", category: "trips", eventKey: "activities.trips.items.rome.title" },
    { src: "/photos/rome/rometrip3.jpg", alt: "Educational trip to Rome", category: "trips", eventKey: "activities.trips.items.rome.title" },
    { src: "/photos/vienna/vienna.jpg", alt: "Educational trip to Vienna", category: "trips", eventKey: "activities.trips.items.vienna.title" },
    { src: "/photos/vienna/vienna2.jpg", alt: "Educational trip to Vienna", category: "trips", eventKey: "activities.trips.items.vienna.title" },
    { src: "/photos/wavecamp/wavecamp.jpg", alt: "Jale Wave Camp", category: "trips", eventKey: "activities.trips.items.jale.title" },
    { src: "/photos/wavecamp/wave camp.jpg", alt: "Jale Wave Camp", category: "trips", eventKey: "activities.trips.items.jale.title" },
    { src: "/photos/wavecamp/wavecamp2.jpg", alt: "Jale Wave Camp", category: "trips", eventKey: "activities.trips.items.jale.title" },
    { src: "/photos/wavecamp/wavecamp3.jpg", alt: "Jale Wave Camp", category: "trips", eventKey: "activities.trips.items.jale.title" },
    { src: "/photos/wavecamp/wavecamp4.jpg", alt: "Jale Wave Camp", category: "trips", eventKey: "activities.trips.items.jale.title" },
    { src: "/photos/zoo/zoo.jpg", alt: "Zoo trip", category: "trips", eventKey: "activities.trips.items.zoo.title" },
    { src: "/photos/zoo/zoo1.jpg", alt: "Zoo trip", category: "trips", eventKey: "activities.trips.items.zoo.title" },
    { src: "/photos/zoo/zoo2.jpg", alt: "Zoo trip", category: "trips", eventKey: "activities.trips.items.zoo.title" },
    { src: "/photos/cinema/kinema.jpg", alt: "Cinema trip", category: "trips", eventKey: "activities.trips.items.cinema.title" },
    { src: "/photos/cinema/kinema2.jpg", alt: "Cinema trip", category: "trips", eventKey: "activities.trips.items.cinema.title" },
    { src: "/photos/cinema/cinema3.jpg", alt: "Cinema trip", category: "trips", eventKey: "activities.trips.items.cinema.title" },

    { src: "/photos/bakeandsale/viber_image_2026-01-11_23-38-48-303.jpg", alt: "Bake & Sale", category: "activities", eventKey: "activities.bakeAndSale.title" },
    { src: "/photos/bakeandsale/viber_image_2026-01-11_23-38-59-162.jpg", alt: "Bake & Sale", category: "activities", eventKey: "activities.bakeAndSale.title" },
    { src: "/photos/bakeandsale/viber_image_2026-01-11_23-39-07-981.jpg", alt: "Bake & Sale", category: "activities", eventKey: "activities.bakeAndSale.title" },
    { src: "/photos/spellingbee/spelling bee.jpg", alt: "Spelling Bee", category: "activities", eventKey: "activities.spellingBee.title" },
    { src: "/photos/spellingbee/spellingbee2.jpg", alt: "Spelling Bee", category: "activities", eventKey: "activities.spellingBee.title" },
    { src: "/photos/spellingbee/spellingbee3.jpg", alt: "Spelling Bee", category: "activities", eventKey: "activities.spellingBee.title" },
    { src: "/photos/speedtyping/speedtyping.jpg", alt: "Speed Typing", category: "activities", eventKey: "activities.speedTyping.title" },
    { src: "/photos/speedtyping/speedtyping2.jpg", alt: "Speed Typing", category: "activities", eventKey: "activities.speedTyping.title" },
    { src: "/photos/speedtyping/speedtypingcompetition3.jpg", alt: "Speed Typing competition", category: "activities", eventKey: "activities.speedTyping.title" },

    { src: "/photos/kosict/kosict1.jpg", alt: "KosICT", category: "training", eventKey: "activities.training.items.kosict.title" },
    { src: "/photos/kosict/kosict2.jpg", alt: "KosICT", category: "training", eventKey: "activities.training.items.kosict.title" },
    { src: "/photos/kosict/kosict3.jpg", alt: "KosICT", category: "training", eventKey: "activities.training.items.kosict.title" },
    { src: "/photos/kosict/kosict4.jpg", alt: "KosICT", category: "training", eventKey: "activities.training.items.kosict.title" },
    { src: "/photos/youthempowerment/youthempowerment.jpg", alt: "Youth Empowerment", category: "training", eventKey: "activities.training.items.youthEmpowerment.title" },
    { src: "/photos/youthempowerment/youthempowerment1.jpg", alt: "Youth Empowerment", category: "training", eventKey: "activities.training.items.youthEmpowerment.title" },
    { src: "/photos/youthempowerment/youthempowerment3.jpg", alt: "Youth Empowerment", category: "training", eventKey: "activities.training.items.youthEmpowerment.title" },
    { src: "/photos/aab/aab fair.jpg", alt: "AAB fair", category: "training", eventKey: "activities.training.items.aabFair.title" },
    { src: "/photos/aab/aab fair1.jpg", alt: "AAB fair", category: "training", eventKey: "activities.training.items.aabFair.title" },
    { src: "/photos/aab/aabfair3.jpg", alt: "AAB fair", category: "training", eventKey: "activities.training.items.aabFair.title" },
  ] as GalleryPhoto[],
};
