"use client";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const info = t.raw("info") as string[];

  return (
    <footer className="bg-spain-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-spain-gold font-semibold mb-3">{t("brandTitle")}</h3>
            <p className="text-white/60 text-sm leading-relaxed">{t("brandDesc")}</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t("itineraryTitle")}</h3>
            <ul className="space-y-2">
              <li><a href="/itinerary-a" className="text-white/60 hover:text-spain-gold text-sm transition-colors">{t("springLink")}</a></li>
              <li><a href="/itinerary-b" className="text-white/60 hover:text-spain-gold text-sm transition-colors">{t("autumnLink")}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">{t("infoTitle")}</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              {info.map((item, i) => <li key={i}>{item}</li>)}
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
          {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
