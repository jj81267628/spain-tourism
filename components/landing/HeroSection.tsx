"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80"
          alt="Spain"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
      </motion.div>

      <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          style={{ opacity }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-spain-gold text-sm tracking-[0.3em] uppercase mb-4 font-light">
              Premium Travel Experience
            </p>
            <h1 className="text-6xl md:text-8xl font-bold text-white text-shadow mb-4 leading-tight">
              探索西班牙
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 font-light tracking-widest mb-2">
              Discover Spain
            </p>
            <p className="text-white/70 text-lg mt-4 mb-10 font-light">
              感受激情弗拉明戈 · 品味艺术建筑 · 畅享地中海风情
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link href="/itinerary-a">
            <button className="px-8 py-4 bg-spain-red hover:bg-red-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-spain-red/30">
              春季行程 · 9天
            </button>
          </Link>
          <Link href="/itinerary-b">
            <button className="px-8 py-4 glass border-white/30 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:bg-white/20">
              秋季行程 · 9天
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <p className="text-white/50 text-xs mb-2 tracking-widest">向下滚动</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
          >
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
