"use client";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const locales = [
  { code: "en", label: "EN" },
  { code: "zh", label: "中" },
  { code: "ja", label: "日" },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname(); // e.g. "/en/food-culture"
  const currentLocale = useLocale();

  const switchLocale = (newLocale: string) => {
    if (newLocale === currentLocale) return;
    // Replace the first path segment (locale) with the new one
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex items-center gap-0.5">
      {locales.map((locale, i) => (
        <button
          key={locale.code}
          onClick={() => switchLocale(locale.code)}
          className={`px-2 py-0.5 text-xs font-medium transition-all duration-200 rounded ${
            currentLocale === locale.code
              ? "text-spain-gold border border-spain-gold/50 bg-spain-gold/10"
              : "text-white/40 hover:text-white/70"
          } ${i > 0 ? "ml-0.5" : ""}`}
        >
          {locale.label}
        </button>
      ))}
    </div>
  );
}
