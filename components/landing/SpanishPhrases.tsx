"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const phrases = [
  { chinese: "你好", spanish: "Hola", phonetic: "奥-拉", category: "问候", usage: "随时可用，非常常见" },
  { chinese: "谢谢", spanish: "Gracias", phonetic: "格拉-西亚斯", category: "礼貌", usage: "收到服务或帮助时" },
  { chinese: "不客气", spanish: "De nada", phonetic: "德-纳-达", category: "礼貌", usage: "回应谢谢" },
  { chinese: "请问/麻烦", spanish: "Por favor", phonetic: "波尔-法-沃尔", category: "礼貌", usage: "请求帮助时" },
  { chinese: "多少钱？", spanish: "¿Cuánto cuesta?", phonetic: "宽-托-奎斯-塔", category: "购物", usage: "在商店或市场" },
  { chinese: "在哪里？", spanish: "¿Dónde está?", phonetic: "冬-德-埃斯-塔", category: "导航", usage: "问路必备" },
  { chinese: "这个/那个", spanish: "Esto/Eso", phonetic: "埃斯-托/埃-索", category: "指示", usage: "指向物品时" },
  { chinese: "好吃！", spanish: "¡Está delicioso!", phonetic: "埃斯-塔-德利-西-奥-索", category: "饮食", usage: "用餐时夸赞" },
  { chinese: "一杯啤酒", spanish: "Una cerveza", phonetic: "乌-纳-塞尔-贝-萨", category: "饮食", usage: "在酒吧必备" },
  { chinese: "结账", spanish: "La cuenta, por favor", phonetic: "拉-宽-塔-波尔-法-沃尔", category: "饮食", usage: "用餐后结账" },
  { chinese: "帮帮我！", spanish: "¡Ayuda!", phonetic: "阿-尤-达", category: "紧急", usage: "紧急求助" },
  { chinese: "我迷路了", spanish: "Estoy perdido/a", phonetic: "埃斯-托伊-佩尔-迪-多", category: "导航", usage: "向他人求助" },
];

const categoryColors: Record<string, string> = {
  "问候": "bg-green-500/20 text-green-400 border-green-500/30",
  "礼貌": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "购物": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  "导航": "bg-purple-500/20 text-purple-400 border-purple-500/30",
  "指示": "bg-orange-500/20 text-orange-400 border-orange-500/30",
  "饮食": "bg-red-500/20 text-red-400 border-red-500/30",
  "紧急": "bg-pink-500/20 text-pink-400 border-pink-500/30",
};

export default function SpanishPhrases() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">Language Guide</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">实用西班牙语</h2>
          <p className="text-white/60">掌握这些短语，让您的旅途更顺畅 · 点击查看发音</p>
        </motion.div>

        <div className="space-y-3">
          {phrases.map((phrase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left glass-dark rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className={`text-xs px-2 py-1 rounded-full border ${categoryColors[phrase.category] || "bg-white/10 text-white/60 border-white/20"}`}>
                      {phrase.category}
                    </span>
                    <span className="text-white font-medium">{phrase.chinese}</span>
                    <span className="text-white/40 hidden sm:block">→</span>
                    <span className="text-spain-gold font-semibold hidden sm:block">{phrase.spanish}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    className="text-white/50 text-xl"
                  >
                    +
                  </motion.span>
                </div>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <p className="text-white/40 text-xs mb-1">西班牙语</p>
                          <p className="text-spain-gold text-lg font-bold">{phrase.spanish}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-xs mb-1">中文谐音</p>
                          <p className="text-white/90 text-lg">{phrase.phonetic}</p>
                        </div>
                        <div>
                          <p className="text-white/40 text-xs mb-1">使用场景</p>
                          <p className="text-white/70 text-sm">{phrase.usage}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
