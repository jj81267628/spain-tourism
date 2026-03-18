"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

type Dish = { name: string; es: string; desc: string; img: string };
type Region = { name: string; es: string; city: string; desc: string; highlights: string[]; img: string; reverse: boolean };
type Tip = { icon: string; title: string; body: string };

const dishImages = [
  "https://images.pexels.com/photos/30036946/pexels-photo-30036946.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/22468999/pexels-photo-22468999.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/30557313/pexels-photo-30557313.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36430078/pexels-photo-36430078.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/372886/pexels-photo-372886.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/3793871/pexels-photo-3793871.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/4765652/pexels-photo-4765652.jpeg?auto=compress&cs=tinysrgb&w=600",
  "https://images.pexels.com/photos/36393691/pexels-photo-36393691.jpeg?auto=compress&cs=tinysrgb&w=600",
];

const regionImages = [
  "https://images.pexels.com/photos/1388030/pexels-photo-1388030.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&q=80",
  "https://images.pexels.com/photos/2009906/pexels-photo-2009906.jpeg?auto=compress&cs=tinysrgb&w=900",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
];

export default function FoodCulturePage() {
  const t = useTranslations("food");
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const pillars = t.raw("pillars") as Array<{ icon: string; title: string; text: string }>;
  const dishes = (t.raw("dishes") as Array<{ name: string; es: string; desc: string }>).map(
    (d, i) => ({ ...d, img: dishImages[i] } as Dish)
  );
  const regions = (t.raw("regions") as Array<{ name: string; es: string; city: string; desc: string; highlights: string[] }>).map(
    (r, i) => ({ ...r, img: regionImages[i], reverse: i % 2 !== 0 } as Region)
  );
  const tips = t.raw("tips") as Tip[];

  return (
    <main className="bg-[#0d1117] min-h-screen">
      <Navbar />

      {/* ── Hero ── */}
      <div ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80"
            alt="Spanish food"
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </motion.div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <motion.div style={{ opacity: heroOpacity }} className="flex flex-col items-center">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
              <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-4 font-light text-shadow-sm">{t("heroTag")}</p>
              <h1 className="text-6xl md:text-8xl font-bold text-white text-shadow mb-4 leading-tight">{t("heroTitle")}</h1>
              <p className="text-2xl md:text-3xl text-white/90 font-light tracking-widest mb-2 text-shadow">{t("heroSubtitle")}</p>
              <p className="text-white/80 text-lg mt-4 font-light text-shadow-sm">{t("heroTagline")}</p>
            </motion.div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }} className="absolute bottom-8 flex flex-col items-center">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-white/60 rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Philosophy ── */}
      <section className="bg-[#0d1117] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-3">{t("philosophyTag")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("philosophyTitle")}</h2>
            <p className="text-white/60 text-lg mb-16 max-w-2xl mx-auto">{t("philosophySubtitle")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }} className="glass-dark rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8 Dishes ── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-3">{t("dishesTag")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("dishesTitle")}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("dishesSubtitle")}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {dishes.map((dish, i) => (
              <motion.div key={dish.es} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }} className="group relative overflow-hidden rounded-2xl cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden">
                  <img src={dish.img} alt={dish.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-all duration-300 group-hover:from-black/95" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-spain-gold text-xs tracking-widest uppercase mb-1">{dish.es}</p>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{dish.name}</h3>
                  <p className="text-white/60 text-xs">{dish.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Regions ── */}
      <section className="bg-[#0d1117] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-20">
            <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-3">{t("regionsTag")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("regionsTitle")}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("regionsSubtitle")}</p>
          </motion.div>
          <div className="space-y-24">
            {regions.map((region) => (
              <motion.div key={region.es} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className={`flex flex-col ${region.reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-0 overflow-hidden rounded-3xl`}>
                <div className="lg:w-1/2 overflow-hidden">
                  <img src={region.img} alt={region.name} className="w-full h-64 lg:h-full object-cover transition-transform duration-700 hover:scale-105" />
                </div>
                <div className="lg:w-1/2 glass-dark flex flex-col justify-center p-10 lg:p-14">
                  <p className="text-spain-red text-xs tracking-[0.3em] uppercase mb-3 font-medium">{region.city}</p>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">{region.name}</h3>
                  <p className="text-spain-gold text-lg font-light mb-6 tracking-wide">{region.es}</p>
                  <p className="text-white/70 leading-relaxed mb-8 text-sm md:text-base">{region.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {region.highlights.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs border border-spain-gold/40 text-spain-gold/80">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-3">{t("tipsTag")}</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("tipsTitle")}</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{t("tipsSubtitle")}</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, i) => (
              <motion.div key={tip.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="glass-dark rounded-2xl p-7 hover:border-spain-gold/30 transition-colors duration-300">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{tip.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
