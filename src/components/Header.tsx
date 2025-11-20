import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

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

  const navItems = [
    { nameKey: "navigation.home", path: "/" },
    { nameKey: "navigation.about", path: "/about" },
    { nameKey: "navigation.programs", path: "/programs" },
    { nameKey: "navigation.contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect shadow-subtle backdrop-blur-md"
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
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center overflow-hidden">
              <img
                src={"/photos/logos/londonschool.png"}
                alt={t("brand.name")}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h1 className="font-heading font-bold text-xl text-foreground">
                {t("brand.name")}
              </h1>
              <p className="text-xs text-muted-foreground">
                {t("brand.since")}
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {t(item.nameKey)}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              className="premium-button text-white font-semibold px-6"
              onClick={() => navigate("/contact")}
            >
              {t("navigation.enrollNow")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={
              isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")
            }
            title={isMobileMenuOpen ? t("aria.closeMenu") : t("aria.openMenu")}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 glass-effect rounded-xl p-6 animate-fade-in">
            {navItems.map((item) => (
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
            <div className="flex flex-col space-y-4 mt-4">
              <LanguageSwitcher />
              <Button className="premium-button text-white font-semibold w-full">
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
