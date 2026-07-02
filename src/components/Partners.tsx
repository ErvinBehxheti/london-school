import { useState } from "react";
import { useTranslation } from "react-i18next";
import { PARTNERS } from "@/data/partners";
import type { PartnerItem } from "@/types";

function PartnerLogo({ partner }: { partner: PartnerItem }) {
  const [error, setError] = useState(false);

  if (partner.image && !error) {
    return (
      <img
        src={partner.image}
        alt={partner.name}
        loading="lazy"
        onError={() => setError(true)}
        className="max-h-14 max-w-[120px] object-contain"
      />
    );
  }
  return (
    <span className="text-4xl" aria-hidden>
      {partner.icon}
    </span>
  );
}

/**
 * Infinite CSS marquee of partner logos — no JS animation. Logos sit at 60%
 * opacity and light up on hover; cards only link out when a real URL exists.
 */
const Partners = () => {
  const { t } = useTranslation();

  const renderItem = (partner: PartnerItem, index: number) => {
    const content = (
      <div className="flex flex-col items-center gap-2 opacity-60 transition-opacity duration-300 hover:opacity-100">
        <PartnerLogo partner={partner} />
        <span className="whitespace-nowrap text-xs font-semibold text-muted-foreground">
          {partner.name}
        </span>
      </div>
    );

    return partner.url ? (
      <a
        key={`${partner.name}-${index}`}
        href={partner.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mx-10 inline-flex shrink-0"
        aria-label={partner.name}
      >
        {content}
      </a>
    ) : (
      <div key={`${partner.name}-${index}`} className="mx-10 inline-flex shrink-0">
        {content}
      </div>
    );
  };

  return (
    <section className="border-y border-border bg-background py-16">
      <div className="container mx-auto mb-10 px-6 text-center">
        <p className="eyebrow text-primary/60">{t("partners.badge")}</p>
        <h2 className="mt-3 font-heading text-2xl font-extrabold text-foreground md:text-3xl">
          {t("partners.title")} {t("partners.titleHighlight")}
        </h2>
      </div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee">
          {/* Row duplicated so the -50% keyframe loops seamlessly */}
          {PARTNERS.map(renderItem)}
          {PARTNERS.map((p, i) => renderItem(p, i + PARTNERS.length))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
