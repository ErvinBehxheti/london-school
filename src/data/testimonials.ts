import type { SuccessStory, TestimonialItem } from "@/types";

/**
 * Testimonial quotes, names and roles live in i18n under
 * testimonials.items.{key} so they translate with the rest of the site.
 */
export const TESTIMONIALS: TestimonialItem[] = [
  { key: "agron", initials: "AK", color: "bg-blue-500" },
  { key: "valdete", initials: "VM", color: "bg-purple-500" },
  { key: "luan", initials: "LB", color: "bg-green-500" },
  { key: "besarta", initials: "BS", color: "bg-yellow-500" },
  { key: "arben", initials: "AD", color: "bg-red-500" },
  { key: "mirela", initials: "MH", color: "bg-indigo-500" },
];

/** Program-page success stories — content under testimonials.success.{key}. */
export const SUCCESS_STORIES: SuccessStory[] = [
  { key: "ana", rating: 5 },
  { key: "arsim", rating: 5 },
  { key: "petrit", rating: 5 },
];
