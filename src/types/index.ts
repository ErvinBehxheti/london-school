export interface PhotoItem {
  src: string;
  alt: string;
  caption?: string;
}

export type EventKey =
  | "summerCamp"
  | "bakeAndSale"
  | "spellingBee"
  | "speedTyping"
  | "quizzes"
  | "techFest"
  | "rome"
  | "vienna"
  | "zoo"
  | "cinema"
  | "jale"
  | "ibcmFair"
  | "kosict"
  | "youthEmpowerment"
  | "aabFair";

export type GalleryCategory =
  | "summer-camp"
  | "tech-fest"
  | "trips"
  | "activities"
  | "training";

export interface GalleryPhoto extends PhotoItem {
  category: GalleryCategory;
  /** i18n key for the event name shown on hover */
  eventKey?: string;
  date?: string;
}

export interface StaffMember {
  /** i18n key under team.members.{key} */
  key: string;
  image: string;
}

export interface TestimonialItem {
  /** i18n key under testimonials.items.{key} */
  key: string;
  initials: string;
  color: string;
}

export interface SuccessStory {
  /** i18n key under testimonials.success.{key} */
  key: string;
  rating: number;
}

export interface PartnerItem {
  name: string;
  icon: string;
  image?: string;
  /** Real website URL. Omit until a verified URL is available — cards render as non-links without it. */
  url?: string;
}

export interface JobPosition {
  /** i18n key under jobs.positions.{key} */
  key: string;
  icon: string;
}
