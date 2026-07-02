import type { PartnerItem } from "@/types";

/**
 * Partner logos shown in the marquee. Cards only become links when `url`
 * is set — TODO: collect and add the real websites for the partners below.
 */
export const PARTNERS: PartnerItem[] = [
  { name: "LOGISCOOL", icon: "💻", image: "/photos/logos/logiscool.png", url: "https://www.logiscool.com" },
  { name: "IBCM", icon: "🏢", image: "/photos/logos/ibcm.png" },
  { name: "UMIB", icon: "🎓", image: "/photos/logos/umib.png" },
  { name: "AAB", icon: "🏛️", image: "/photos/logos/aab.gif" },
  { name: "LIBRARIA DUKAGJINI", icon: "📚", image: "/photos/logos/dukagjini.webp" },
  { name: "GO TAXI", icon: "🚕", image: "/photos/logos/go.jpg" },
  { name: "OLIVE CLINIC", icon: "🏥", image: "/photos/logos/olive.jpg" },
  { name: "MGYM", icon: "💪", image: "/photos/logos/mgym.png" },
  { name: "Computer Service", icon: "🖥️", image: "/photos/logos/computer-service.png" },
  { name: "Klinika Syri im", icon: "👁️" },
];
