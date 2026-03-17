"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("nav");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-xl tracking-wide">
          <span className="text-spain-gold">S</span>pain
          <span className="text-sm font-light ml-2 text-white/70">España</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/" className="text-white/80 hover:text-white text-sm transition-colors">
            {t("home")}
          </Link>
          <Link href="/itinerary-a" className="text-white/80 hover:text-white text-sm transition-colors">
            {t("spring")}
          </Link>
          <Link href="/itinerary-b" className="text-white/80 hover:text-white text-sm transition-colors">
            {t("autumn")}
          </Link>
          <Link href="/food-culture" className="text-white/80 hover:text-white text-sm transition-colors">
            {t("food")}
          </Link>
          <span className="text-white/40 text-sm">🇪🇸</span>
          <LanguageSwitcher />
        </div>
      </div>
    </motion.nav>
  );
}
