"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import type { DayData } from "@/data/itinerary-a";

interface Props {
  day: DayData;
  isActive: boolean;
  onVisible: () => void;
  dayIndex: number;
}

export default function DayPanel({ day, isActive, onVisible, dayIndex }: Props) {
  const t = useTranslations("itinerary");

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      onViewportEnter={onVisible}
      viewport={{ margin: "-40% 0px -40% 0px" }}
      transition={{ duration: 0.6 }}
      data-day={dayIndex}
      className={`glass-dark rounded-2xl p-6 mb-8 transition-all duration-500 ${isActive ? "ring-2 ring-white/30 shadow-2xl" : ""}`}
      style={{ borderLeft: `3px solid ${day.color}` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ background: day.color }}>
              {day.day}
            </div>
            <div>
              <p className="text-white/50 text-xs">{day.date}</p>
              <h3 className="text-white text-xl font-bold">{day.city}</h3>
            </div>
          </div>
          <p className="text-white/50 text-sm ml-13">{day.cityEs} · {day.region}</p>
        </div>
      </div>

      {/* Activities */}
      <div className="space-y-3 mb-6">
        <h4 className="text-white/60 text-xs uppercase tracking-widest">{t("dailyLabel")}</h4>
        {day.activities.map((activity, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4"
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: `${day.color}33`, border: `1px solid ${day.color}66` }}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>
              {i < day.activities.length - 1 && (
                <div className="w-px h-full min-h-[20px] mt-1" style={{ background: `${day.color}33` }} />
              )}
            </div>
            <div className="pb-4">
              <div className="flex items-center gap-2">
                <span className="text-white/40 text-xs font-mono">{activity.time}</span>
                <span className="text-white/20 text-xs">·</span>
                <span className="text-white/50 text-xs">{activity.duration}</span>
              </div>
              <p className="text-white font-medium text-sm">{activity.title}</p>
              <p className="text-white/50 text-xs">{activity.titleEs}</p>
              <p className="text-white/60 text-xs mt-1 leading-relaxed">{activity.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Transit */}
      {day.transit && (
        <div className="mb-6 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
          <p className="text-blue-400 text-xs">🚄 {day.transit}</p>
        </div>
      )}

      {/* Hotel */}
      <div className="mb-6 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="flex items-center justify-between mb-2">
          <span className="text-yellow-400 text-sm">{"⭐".repeat(Math.min(day.hotel.stars, 5))}</span>
          <span className="text-spain-gold text-sm font-semibold">{day.hotel.price}</span>
        </div>
        <p className="text-white font-medium text-sm">{day.hotel.name}</p>
        <p className="text-white/50 text-xs mt-1">{day.hotel.description}</p>
        {day.hotel.mapUrl && (
          <a
            href={day.hotel.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400 hover:text-blue-300 transition-colors"
          >
            <span>📍</span>
            <span>Google Maps</span>
          </a>
        )}
      </div>

      {/* Food */}
      {day.food.length > 0 && (
        <div>
          <h4 className="text-white/60 text-xs uppercase tracking-widest mb-3">{t("foodLabel")}</h4>
          <div className="space-y-2">
            {day.food.map((f, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/5">
                <div>
                  <p className="text-white text-sm font-medium">{f.dish}</p>
                  <p className="text-spain-gold text-xs">{f.dishEs} · {f.restaurant}</p>
                  <p className="text-white/50 text-xs mt-0.5">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
