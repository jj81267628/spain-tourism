"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const portals = [
  {
    href: "/itinerary-a",
    season: "春季之旅",
    seasonEs: "Viaje de Primavera",
    dates: "5月 · 9天",
    description: "马德里·托莱多·科尔多瓦·塞维利亚·格拉纳达",
    highlights: ["阿尔罕布拉宫", "普拉多博物馆", "弗拉明戈秀", "安达卢西亚白色山村"],
    image: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1200&q=80",
    color: "#c60b1e",
    badge: "🌸",
  },
  {
    href: "/itinerary-b",
    season: "秋季之旅",
    seasonEs: "Viaje de Otoño",
    dates: "9月 · 9天",
    description: "巴塞罗那·瓦伦西亚·伊维萨·马略卡",
    highlights: ["圣家堂", "地中海海滩", "海鲜饭发源地", "巴利阿里群岛"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    color: "#003087",
    badge: "🌊",
  },
];

export default function ItineraryPortals() {
  return (
    <section className="py-20 bg-spain-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">Curated Itineraries</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">精选行程推荐</h2>
          <p className="text-white/60 text-lg">两条精心设计的路线，带您领略不同面貌的西班牙</p>
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
              <Link href={portal.href}>
                <div className="relative h-[500px] rounded-3xl overflow-hidden group cursor-pointer">
                  <img
                    src={portal.image}
                    alt={portal.season}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{ background: `linear-gradient(135deg, ${portal.color}99, transparent 60%, rgba(0,0,0,0.7))` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{portal.badge}</span>
                      <div>
                        <p className="text-white/60 text-sm">{portal.seasonEs}</p>
                        <h3 className="text-white text-3xl font-bold">{portal.season}</h3>
                      </div>
                    </div>
                    <p className="text-spain-gold text-sm mb-2">{portal.dates}</p>
                    <p className="text-white/80 text-sm mb-4">{portal.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {portal.highlights.map((h, j) => (
                        <span key={j} className="glass text-white/90 text-xs px-3 py-1 rounded-full">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>查看完整行程</span>
                      <span className="text-xl">→</span>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                    style={{ background: portal.color }}
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
