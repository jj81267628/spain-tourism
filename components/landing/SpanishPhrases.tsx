"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

type Phrase = {
  translation: string;
  spanish: string;
  phonetic: string;
  category: string;
  usage: string;
};

export default function SpanishPhrases() {
  const t = useTranslations("phrases");
  const phrases = t.raw("phrases") as Phrase[];
  const categoryColors = t.raw("categoryColors") as Record<string, string>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [playingIndex, setPlayingIndex] = useState<number | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    return () => { window.speechSynthesis?.cancel(); };
  }, []);

  const speak = (text: string, index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    if (playingIndex === index) { setPlayingIndex(null); return; }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-ES";
    utterance.rate = 0.85;
    utterance.onend = () => { setPlayingIndex(null); utteranceRef.current = null; };
    utterance.onerror = () => { setPlayingIndex(null); utteranceRef.current = null; };
    utteranceRef.current = utterance;
    setPlayingIndex(index);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section className="py-20 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">{t("tag")}</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">{t("title")}</h2>
          <p className="text-white/60">{t("subtitle")}</p>
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
                    <span className="text-white font-medium">{phrase.translation}</span>
                    <span className="text-white/40 hidden sm:block">→</span>
                    <span className="text-spain-gold font-semibold hidden sm:block">{phrase.spanish}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <motion.span
                      role="button"
                      tabIndex={0}
                      aria-label={`Play ${phrase.spanish}`}
                      onClick={(e) => speak(phrase.spanish, i, e)}
                      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") speak(phrase.spanish, i, e as any); }}
                      animate={playingIndex === i ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                      transition={playingIndex === i ? { duration: 0.7, repeat: Infinity } : { duration: 0.2 }}
                      className={`text-lg select-none transition-colors duration-200 ${playingIndex === i ? "text-spain-gold" : "text-white/40 hover:text-white/80"}`}
                    >
                      🔊
                    </motion.span>
                    <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }} className="text-white/50 text-xl">+</motion.span>
                  </div>
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
                          <p className="text-white/40 text-xs mb-1">{t("spanishLabel")}</p>
                          <p className="text-spain-gold text-lg font-bold">{phrase.spanish}</p>
                        </div>
                        {phrase.phonetic && (
                          <div>
                            <p className="text-white/40 text-xs mb-1">{t("phoneticLabel")}</p>
                            <p className="text-white/90 text-lg">{phrase.phonetic}</p>
                          </div>
                        )}
                        <div>
                          <p className="text-white/40 text-xs mb-1">{t("usageLabel")}</p>
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
