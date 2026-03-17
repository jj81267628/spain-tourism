"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type WeatherRow = { season: string; temp: string; weather: string; rating: number };
type PracticalItem = { icon: string; label: string; value: string };
type ChecklistItem = { item: string; detail: string; required: boolean };

export default function VisaGuideSection() {
  const t = useTranslations("visa");
  const weatherData = t.raw("weather") as WeatherRow[];
  const practical = t.raw("practical") as PracticalItem[];
  const checklist = t.raw("checklist") as ChecklistItem[];

  return (
    <section className="py-20 bg-gradient-to-b from-[#0d1117] to-spain-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">{t("tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">{t("climateTitle")}</h3>
              <div className="space-y-3">
                {weatherData.map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{w.season}</p>
                      <p className="text-white/50 text-xs">{w.weather} · {w.temp}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div key={j} className={`w-2 h-2 rounded-full ${j < w.rating ? "bg-spain-gold" : "bg-white/20"}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">{t("practicalTitle")}</h3>
              <div className="grid grid-cols-2 gap-4">
                {practical.map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3">
                    <p className="text-xl mb-1">{item.icon}</p>
                    <p className="text-white/50 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold text-lg mb-2">{t("visaTitle")}</h3>
            <p className="text-white/50 text-sm mb-6">{t("visaSubtitle")}</p>
            <div className="space-y-3">
              {checklist.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${item.required ? "bg-spain-red" : "bg-spain-gold/60"}`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{item.item}</p>
                    <p className="text-white/50 text-xs mt-0.5">{item.detail}</p>
                  </div>
                  {!item.required && (
                    <span className="text-spain-gold/70 text-xs ml-auto flex-shrink-0">{t("ifApplicable")}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-spain-gold/10 border border-spain-gold/30">
              <p className="text-spain-gold text-sm font-medium mb-1">{t("warningTitle")}</p>
              <p className="text-white/70 text-xs leading-relaxed">{t("warningText")}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
