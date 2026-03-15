"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const cards = [
  {
    title: "弗拉明戈",
    subtitle: "Flamenco",
    description: "源自安达卢西亚的激情艺术，融合了吉卜赛、摩尔和西班牙文化，2010年列入UNESCO非遗名录",
    image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80",
    color: "#c60b1e",
  },
  {
    title: "高迪建筑",
    subtitle: "Gaudí Architecture",
    description: "安东尼·高迪的鬼才设计，圣家堂、桂尔公园等建筑改变了世人对建筑的想象",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    color: "#4a90d9",
  },
  {
    title: "普拉多艺术",
    subtitle: "Prado Museum",
    description: "全球最重要的艺术博物馆之一，收藏委拉斯开兹、戈雅、鲁本斯等大师超过8000件杰作",
    image: "https://images.unsplash.com/photo-1558618047-f4e20e5e28d4?w=800&q=80",
    color: "#8b6914",
  },
  {
    title: "塔帕斯文化",
    subtitle: "Tapas Culture",
    description: "西班牙独特的饮食文化，小食配美酒，是社交和享受生活的最佳方式",
    image: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80",
    color: "#e67e22",
  },
  {
    title: "阿尔罕布拉宫",
    subtitle: "Alhambra",
    description: "摩尔王朝留下的宫殿杰作，精致的阿拉伯式装饰和水景花园令人叹为观止",
    image: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=800&q=80",
    color: "#2c5f2e",
  },
];

export default function CultureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-20%"]);

  return (
    <section ref={ref} className="py-20 overflow-hidden bg-spain-dark">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">Culture & Heritage</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">西班牙文化精髓</h2>
          <p className="text-white/60 text-lg max-w-2xl">
            探索这片充满激情的土地，感受跨越千年的文明积淀
          </p>
        </motion.div>
      </div>

      <motion.div style={{ x, width: "max-content" }} className="flex gap-6 px-6 pb-4">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -8 }}
            className="relative flex-shrink-0 w-72 h-96 rounded-2xl overflow-hidden cursor-pointer group"
          >
            <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
              style={{ background: `linear-gradient(135deg, ${card.color}, transparent)` }}
            />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="w-8 h-1 rounded mb-3"
                style={{ background: card.color }}
              />
              <h3 className="text-white text-xl font-bold mb-1">{card.title}</h3>
              <p className="text-white/60 text-sm mb-3">{card.subtitle}</p>
              <p className="text-white/80 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {card.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
