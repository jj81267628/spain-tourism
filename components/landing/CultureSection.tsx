"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";

const cardImages = [
  "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
  "https://images.pexels.com/photos/11829011/pexels-photo-11829011.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
  "https://images.pexels.com/photos/14009277/pexels-photo-14009277.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=800&q=80",
  "https://images.pexels.com/photos/3290070/pexels-photo-3290070.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2363494/pexels-photo-2363494.jpeg?auto=compress&cs=tinysrgb&w=800",
];

const cardColors = ["#c60b1e", "#4a90d9", "#8b6914", "#e67e22", "#2c5f2e", "#b8860b", "#003087", "#0077B6"];
const cardSubtitles = [
  "Flamenco",
  "Gaudí Architecture",
  "Prado Museum",
  "Tapas Culture",
  "Alhambra",
  "Gran Vía · Madrid",
  "Barcelona · Cataluña",
  "Costa del Sol · Mediterranean",
];

export default function CultureSection() {
  const t = useTranslations("culture");
  const constraintsRef = useRef<HTMLDivElement>(null);
  const mobileConstraintsRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const cards = t.raw("cards") as Array<{ title: string; description: string }>;

  const CardItem = ({ card, i }: { card: { title: string; description: string }; i: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: (i % 8) * 0.1 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer group"
    >
      <img src={cardImages[i % cardImages.length]} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${cardColors[i % cardColors.length]}, transparent)` }}
      />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <div className="w-8 h-1 rounded mb-3" style={{ background: cardColors[i % cardColors.length] }} />
        <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
        <p className="text-white/60 text-sm mb-3">{cardSubtitles[i % cardSubtitles.length]}</p>
        <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {card.description}
        </p>
      </div>
    </motion.div>
  );

  return (
    <section className="py-20 overflow-hidden bg-spain-dark">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">{t("tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-white/60 text-lg max-w-2xl">{t("subtitle")}</p>
        </motion.div>
      </div>

      {/* Desktop: draggable scroll */}
      <div ref={constraintsRef} className="hidden md:block overflow-hidden">
        <motion.div
          drag="x"
          dragConstraints={constraintsRef}
          dragElastic={0.1}
          className="flex gap-6 px-6 pb-4 cursor-grab active:cursor-grabbing"
          style={{ width: "max-content" }}
        >
          {cards.map((card, i) => (
            <CardItem key={i} card={card} i={i} />
          ))}
        </motion.div>
      </div>

      {/* Mobile: infinite auto-scroll marquee with touch pause + drag */}
      <div
        ref={mobileConstraintsRef}
        className="md:hidden overflow-hidden"
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        <motion.div
          className="flex gap-6 px-6 pb-4 cursor-grab active:cursor-grabbing"
          style={{ width: "max-content" }}
          animate={paused ? undefined : { x: ["0%", "-50%"] }}
          transition={paused ? undefined : { duration: 40, repeat: Infinity, ease: "linear" }}
          drag="x"
          dragConstraints={mobileConstraintsRef}
          dragElastic={0.1}
        >
          {[...cards, ...cards].map((card, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden"
            >
              <img
                src={cardImages[i % cardImages.length]}
                alt={card.title}
                className="w-full h-full object-cover pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="w-6 h-1 rounded mb-2" style={{ background: cardColors[i % cardColors.length] }} />
                <h3 className="text-white text-lg font-bold mb-1">{card.title}</h3>
                <p className="text-white/60 text-xs">{cardSubtitles[i % cardSubtitles.length]}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
