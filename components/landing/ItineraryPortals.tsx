"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const portalImages = [
  "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80",
  "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1200&q=80",
];
const portalColors = ["#c60b1e", "#003087"];
const portalBadges = ["🌸", "🌊"];
const portalSeasonEs = ["Viaje de Primavera", "Viaje de Otoño"];
const portalHrefs = ["/itinerary-a", "/itinerary-b"] as const;

type PortalData = { season: string; dates: string; description: string; highlights: string[] };

export default function ItineraryPortals() {
  const t = useTranslations("portals");
  const portals = t.raw("portals") as PortalData[];

  return (
    <section className="py-20 bg-spain-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">{t("tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-white/60 text-lg">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {portals.map((portal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <Link href={portalHrefs[i]}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
                  <img
                    src={portalImages[i]}
                    alt={portal.season}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${portalColors[i]}99, transparent 60%, rgba(0,0,0,0.7))` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="mb-3">
                      <p className="text-white/60 text-sm">{portalSeasonEs[i]}</p>
                      <h3 className="text-white text-3xl font-bold">{portal.season}</h3>
                    </div>
                    <p className="text-spain-gold text-sm mb-2">{portal.dates}</p>
                    <p className="text-white/80 text-sm mb-4">{portal.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {portal.highlights.map((h, j) => (
                        <span key={j} className="glass text-white/90 text-xs px-3 py-1 rounded-full">{h}</span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>{t("viewMore")}</span>
                      <span className="text-xl">→</span>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: portalColors[i] }}
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
