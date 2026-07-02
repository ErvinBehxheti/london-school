import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface CountdownTimerProps {
  /** ISO date string of the event. */
  target: string;
  className?: string;
}

const getRemaining = (target: string) => {
  const diff = new Date(target).getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
};

/**
 * Live countdown to the next Tech Fest edition. When the date has passed
 * it renders an "edition held" badge instead of negative numbers.
 */
const CountdownTimer = ({ target, className = "" }: CountdownTimerProps) => {
  const { t } = useTranslation();
  const [remaining, setRemaining] = useState(() => getRemaining(target));

  useEffect(() => {
    const timer = setInterval(() => setRemaining(getRemaining(target)), 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (!remaining) {
    return (
      <div
        className={`inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-5 py-2 text-sm font-semibold text-secondary ${className}`}
      >
        <span aria-hidden>🏆</span>
        {t("techFest.editionHeld")}
      </div>
    );
  }

  const units = [
    { value: remaining.days, label: t("techFest.countdown.days") },
    { value: remaining.hours, label: t("techFest.countdown.hours") },
    { value: remaining.minutes, label: t("techFest.countdown.minutes") },
    { value: remaining.seconds, label: t("techFest.countdown.seconds") },
  ];

  return (
    <div className={`flex items-center justify-center gap-3 md:gap-5 ${className}`}>
      {units.map((unit) => (
        <div
          key={unit.label}
          className="flex min-w-[64px] flex-col items-center rounded-xl border border-secondary/30 bg-ink/60 px-3 py-2 backdrop-blur-sm"
        >
          <span className="font-heading text-2xl font-bold text-secondary md:text-3xl">
            {String(unit.value).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-ink-foreground/70">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
