import type { StaffMember } from "@/types";

/**
 * Staff shown in the team grid. Names, roles and fun facts come from i18n
 * (team.members.{key}.name / .role / .fact). To add a member: drop the photo
 * into /public/photos/staff/, add one object here and the three locale entries.
 */
export const STAFF: StaffMember[] = [
  { key: "adea", image: "/photos/staff/adea-baliu.jpg" },
  { key: "aida", image: "/photos/staff/aida-topallaj.jpg" },
  { key: "arbnora", image: "/photos/staff/arbnora-qorraj.jpg" },
  { key: "ardita-ib", image: "/photos/staff/ardita-ib.jpg" },
  { key: "ardita-jel", image: "/photos/staff/Ardita-jeliqi.jpg" },
  { key: "arijana", image: "/photos/staff/arijanauka.jpg" },
  { key: "arta", image: "/photos/staff/arta-krasniqi.jpg" },
  { key: "ela", image: "/photos/staff/ela-hoti.jpg" },
  { key: "ervin", image: "/photos/staff/ervin-behxheti-boss.jpg" },
  { key: "fjolla", image: "/photos/staff/fjolla-c.jpg" },
  { key: "granit", image: "/photos/staff/granit-durmishi.jpg" },
  { key: "jona", image: "/photos/staff/jona-loxha.jpg" },
  { key: "nora", image: "/photos/staff/Nora-Fazliu.jpg" },
  { key: "rona", image: "/photos/staff/rona-peci.jpg" },
  { key: "valeriana", image: "/photos/staff/valeriana-fejzullahu.jpg" },
  { key: "valon", image: "/photos/staff/Valon-sejdiu.jpg" },
];

export const FOUNDER_IMAGE = "/photos/staff/albina-hoti.jpeg";
