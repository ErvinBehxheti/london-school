/** Single source of truth for the inbox that runs the school. */
export const CONTACT_EMAIL = "londonschooloffice@gmail.com";

/**
 * Builds a mailto: URL with a prefilled subject/body so visitors can "submit"
 * a form straight into their own email client — no backend or third-party
 * email service required.
 */
export function buildMailto(
  subject: string,
  bodyLines: Array<string | false | null | undefined>,
  to: string = CONTACT_EMAIL
): string {
  const body = bodyLines.filter((line): line is string => Boolean(line)).join("\n");
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
