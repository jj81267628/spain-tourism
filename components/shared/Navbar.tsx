"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/itinerary-a", label: t("spring") },
    { href: "/itinerary-b", label: t("autumn") },
    { href: "/food-culture", label: t("food") },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass-dark py-3" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Brand */}
          <Link href="/" className="text-white font-bold text-xl tracking-wide flex-shrink-0">
            <span className="text-spain-gold">S</span>pain
            <span className="text-sm font-light ml-2 text-white/70">España</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-sm transition-colors">
                {l.label}
              </Link>
            ))}
            <span className="text-white/40 text-sm">🇪🇸</span>
            <LanguageSwitcher />
          </div>

          {/* Mobile: language switcher + hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="text-white/70 hover:text-white p-1"
              aria-label="Toggle menu"
            >
              <div className="w-5 flex flex-col gap-1">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[60px] left-0 right-0 z-40 glass-dark border-t border-white/10 py-4 px-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-sm py-1 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
