import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-ink px-6">
      <div className="text-center text-ink-foreground">
        <p className="font-heading text-[clamp(6rem,20vw,14rem)] font-extrabold leading-none text-secondary/90">
          404
        </p>
        <h1 className="mt-2 font-heading text-2xl font-bold md:text-3xl">
          {t("notFound.title")}
        </h1>
        <p className="mt-3 text-ink-foreground/70">{t("notFound.description")}</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3 font-heading font-bold text-secondary-foreground transition-transform duration-300 hover:scale-105"
        >
          <ArrowLeft className="h-4 w-4" />
          {t("notFound.backHome")}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
