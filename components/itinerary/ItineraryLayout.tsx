"use client";
import { useState, useCallback } from "react";
import dynamic from "next/dynamic";
import { useTranslations } from "next-intl";
import type { DayData } from "@/data/itinerary-a";
import DynamicBackground from "./DynamicBackground";
import DayPanel from "./DayPanel";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const StickyMap = dynamic(() => import("./StickyMap"), { ssr: false });

interface Props {
  days: DayData[];
  title: string;
  subtitle: string;
  season: string;
}

export default function ItineraryLayout({ days, title, subtitle, season }: Props) {
  const t = useTranslations("itinerary");
  const [activeDay, setActiveDay] = useState(0);

  const handleDayVisible = useCallback((index: number) => {
    setActiveDay(index);
  }, []);

  const images = days.map((d) => d.imageUrl);

  return (
    <div className="min-h-screen">
      <Navbar />
      <DynamicBackground images={images} activeIndex={activeDay} />

      {/* Hero */}
      <div className="relative pt-32 pb-16 px-6 text-center">
        <p className="text-spain-gold text-sm tracking-widest uppercase mb-3 text-shadow-sm">{season}</p>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 text-shadow">{title}</h1>
        <p className="text-white/80 text-xl mb-2 text-shadow-sm">{subtitle}</p>
        <p className="text-white/60 text-sm text-shadow-sm">{days.length} {t("daysLabel")}</p>
      </div>

      {/* Day progress bar */}
      <div className="sticky top-16 z-40 px-6 py-3 glass-dark mx-4 rounded-full mb-8 flex items-center gap-2 overflow-x-auto">
        {days.map((day, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all duration-300 ${
              i === activeDay ? "text-white font-semibold" : "text-white/40 hover:text-white/70"
            }`}
            style={{
              background: i === activeDay ? day.color : "transparent",
            }}
          >
            <span>Day {day.day}</span>
            <span className="hidden sm:inline">{day.city}</span>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="relative flex flex-col lg:flex-row gap-6 px-4 md:px-6 max-w-7xl mx-auto pb-20">
        {/* Scrollable panels */}
        <div className="w-full lg:w-[60%]">
          {days.map((day, i) => (
            <DayPanel
              key={i}
              day={day}
              isActive={i === activeDay}
              onVisible={() => handleDayVisible(i)}
              dayIndex={i}
            />
          ))}
        </div>

        {/* Sticky map */}
        <div className="hidden lg:block lg:w-[40%]">
          <div className="sticky top-24 h-[calc(100vh-120px)] rounded-2xl overflow-hidden">
            <StickyMap days={days} activeDay={activeDay} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
