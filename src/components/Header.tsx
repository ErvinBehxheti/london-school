import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV_ITEMS = [
  { nameKey: "navigation.home", path: "/" },
  { nameKey: "navigation.about", path: "/about" },
  { nameKey: "navigation.programs", path: "/programs" },
  { nameKey: "navigation.activities", path: "/activities" },
  { nameKey: "navigation.gallery", path: "/gallery" },
  { nameKey: "navigation.contact", path: "/contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Every page opens on a dark hero, so links are light until the header
  // condenses into its scrolled glass state.
  const linkTone = isScrolled
    ? "text-foreground hover:text-primary"
    : "text-ink-foreground hover:text-secondary";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/85 shadow-subtle backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3"
            aria-label={t("brand.name")}
          >
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-primary">
              <img
                src="/photos/logos/londonschool.png"
                alt={t("brand.name")}
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <p
                className={`font-heading text-xl font-bold ${
                  isScrolled ? "text-foreground" : "text-ink-foreground"
                }`}
              >
                {t("brand.name")}
              </p>
              <p
                className={`text-xs ${
                  isScrolled
                    ? "text-muted-foreground"
                    : "text-ink-foreground/60"
                }`}
              >
                {t("brand.since")}
              </p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center space-x-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-active={location.pathname === item.path}
                className={`nav-underline text-sm font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? isScrolled
                      ? "text-primary"
                      : "text-secondary"
                    : linkTone
                }`}
              >
                {t(item.nameKey)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="hidden lg:block">
            <Button
              className="premium-button px-6 font-semibold text-white"
              onClick={() => navigate("/contact")}
            >
              {t("navigation.enrollNow")}
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`p-2 lg:hidden ${
              isScrolled ? "text-foreground" : "text-ink-foreground"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")
            }
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="animate-fade-in mt-4 space-y-4 rounded-xl bg-background/95 p-6 shadow-premium backdrop-blur-md lg:hidden">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(item.nameKey)}
              </Link>
            ))}
            <div className="mt-4 flex flex-col space-y-4">
              <LanguageSwitcher />
              <Button
                className="premium-button w-full font-semibold text-white"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  navigate("/contact");
                }}
              >
                {t("navigation.enrollNow")}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
