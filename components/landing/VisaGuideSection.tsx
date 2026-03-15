"use client";
import { motion } from "framer-motion";

const weatherData = [
  { season: "春季 (3-5月)", temp: "10-20°C", weather: "温和宜人", rating: 5 },
  { season: "夏季 (6-8月)", temp: "25-40°C", weather: "炎热干燥", rating: 3 },
  { season: "秋季 (9-11月)", temp: "15-25°C", weather: "舒适凉爽", rating: 5 },
  { season: "冬季 (12-2月)", temp: "5-15°C", weather: "温和多雨", rating: 3 },
];

const visaChecklist = [
  { item: "有效护照", detail: "有效期须超过预计停留时间6个月以上，且有至少两页空白页", required: true },
  { item: "申根签证申请表", detail: "如实填写，须本人签字", required: true },
  { item: "近期护照照片", detail: "3.5x4.5cm白底彩色照片，近6个月内拍摄", required: true },
  { item: "银行流水/财力证明", detail: "近3-6个月银行账单，显示充足资金（每天至少65€）", required: true },
  { item: "旅行保险", detail: "保额不低于3万欧元，覆盖全程", required: true },
  { item: "行程确认", detail: "机票预订单、酒店预订确认单", required: true },
  { item: "在职证明/营业执照", detail: "在职人员需提供，个体工商需提供营业执照", required: false },
  { item: "邀请函（如有）", detail: "访友或商务人员需提供", required: false },
];

export default function VisaGuideSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#0d1117] to-spain-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-spain-gold text-sm tracking-widest uppercase mb-3">Travel Guide</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">出行必备指南</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Practical Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">🌤️ 气候与最佳旅游季节</h3>
              <div className="space-y-3">
                {weatherData.map((w, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div>
                      <p className="text-white text-sm font-medium">{w.season}</p>
                      <p className="text-white/50 text-xs">{w.weather} · {w.temp}</p>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <div
                          key={j}
                          className={`w-2 h-2 rounded-full ${j < w.rating ? "bg-spain-gold" : "bg-white/20"}`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-dark rounded-2xl p-6">
              <h3 className="text-white font-semibold text-lg mb-4">💡 实用信息</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "💶", label: "货币", value: "欧元 (€)\n1€ ≈ ¥7.8" },
                  { icon: "🔌", label: "插头", value: "欧标两圆脚\n220V" },
                  { icon: "📱", label: "上网", value: "购买当地SIM\n或使用漫游" },
                  { icon: "🚗", label: "交通", value: "AVE高铁\n城际方便" },
                  { icon: "⏰", label: "时差", value: "比北京晚7小时\n（夏令时晚6小时）" },
                  { icon: "🏥", label: "医疗", value: "急救: 112\n医院质量佳" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-3">
                    <p className="text-xl mb-1">{item.icon}</p>
                    <p className="text-white/50 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium whitespace-pre-line">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Visa Checklist */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark rounded-2xl p-6"
          >
            <h3 className="text-white font-semibold text-lg mb-2">🛂 申根签证材料清单</h3>
            <p className="text-white/50 text-sm mb-6">处理时间约15工作日 · 签证费约80€（约¥620）</p>
            <div className="space-y-3">
              {visaChecklist.map((item, i) => (
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
                    <span className="text-spain-gold/70 text-xs ml-auto flex-shrink-0">如适用</span>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="mt-6 p-4 rounded-xl bg-spain-gold/10 border border-spain-gold/30">
              <p className="text-spain-gold text-sm font-medium mb-1">⚠️ 重要提示</p>
              <p className="text-white/70 text-xs leading-relaxed">
                建议提前2个月申请签证，旅游旺季可能需要更长时间。可通过西班牙驻华大使馆或授权签证中心提交申请。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
