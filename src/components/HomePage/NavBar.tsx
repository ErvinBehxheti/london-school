// src/components/NavBar.tsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // if using react-router
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [navOpen, setNavOpen] = useState(false);

  // Language switch handler
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setNavOpen(!navOpen);
  };

  // Example Nav Links
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Courses", to: "/courses" },
    { label: "About Us", to: "/about" },
    { label: "Contact", to: "/contact" },
    { label: "FAQ", to: "/faq" },
  ];

  return (
    <nav
      className="fixed top-0 w-full z-50 
                    bg-white/90 backdrop-blur-xl 
                    border-b border-white/30 
                    shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* LEFT: Brand Name / Logo */}
          <div className="flex-shrink-0 font-bold text-xl text-ls-red tracking-wide">
            {t("navTitle")}
          </div>

          {/* DESKTOP NAV LINKS */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                className="text-gray-700 hover:text-ls-blue font-medium 
                           transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <select
              className="border border-gray-300 rounded px-2 py-1 text-sm 
                         focus:outline-none focus:ring-1 focus:ring-ls-blue"
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="al">Albanian</option>
            </select>
          </div>

          {/* MOBILE MENU BUTTON (hamburger) */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-ls-red focus:outline-none 
                         focus:ring-2 focus:ring-ls-red"
            >
              {navOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV SLIDE-OUT */}
      {navOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md border-t border-white/50">
          <div className="px-4 pt-2 pb-3 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setNavOpen(false)} // close menu on click
                className="block text-gray-700 hover:text-ls-blue 
                           font-medium py-2 transition-colors"
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <select
              className="mt-2 border border-gray-300 rounded px-2 py-1 text-sm 
                         focus:outline-none focus:ring-1 focus:ring-ls-blue"
              onChange={handleLanguageChange}
              value={i18n.language}
            >
              <option value="en">English</option>
              <option value="de">German</option>
              <option value="al">Albanian</option>
            </select>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
