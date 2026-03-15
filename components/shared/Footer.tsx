export default function Footer() {
  return (
    <footer className="bg-spain-dark border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-spain-gold font-semibold mb-3">探索西班牙</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              专为中国旅行者打造的精品西班牙旅游指南，带您领略伊比利亚半岛的壮美风光与深厚文化。
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">行程推荐</h3>
            <ul className="space-y-2">
              <li><a href="/itinerary-a" className="text-white/60 hover:text-spain-gold text-sm transition-colors">春季之旅 — 马德里·安达卢西亚</a></li>
              <li><a href="/itinerary-b" className="text-white/60 hover:text-spain-gold text-sm transition-colors">秋季之旅 — 巴塞罗那·地中海</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">实用信息</h3>
            <ul className="space-y-2 text-white/60 text-sm">
              <li>🛂 申根签证申请</li>
              <li>💶 货币：欧元 (€)</li>
              <li>📞 紧急电话：112</li>
              <li>⏰ 时区：CET (UTC+1)</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 text-center text-white/40 text-xs">
          © 2024 探索西班牙 | 仅供参考，实际行程请根据个人情况调整
        </div>
      </div>
    </footer>
  );
}
