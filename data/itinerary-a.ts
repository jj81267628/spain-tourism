import type { Locale } from "@/i18n/routing";

export interface Activity {
  time: string;
  title: string;
  titleEs: string;
  description: string;
  duration: string;
  icon: string;
}

export interface DayData {
  day: number;
  date: string;
  city: string;
  cityEs: string;
  region: string;
  coords: [number, number];
  imageUrl: string;
  color: string;
  activities: Activity[];
  transit?: string;
  hotel: {
    name: string;
    stars: number;
    description: string;
    price: string;
    mapUrl?: string;
  };
  food: {
    dish: string;
    dishEs: string;
    restaurant: string;
    description: string;
  }[];
}

const zh: DayData[] = [
  {
    day: 1, date: "5月1日", city: "马德里", cityEs: "Madrid", region: "马德里自治区",
    coords: [40.4168, -3.7038], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#c60b1e",
    activities: [
      { time: "10:00", title: "抵达马德里-巴拉哈斯机场", titleEs: "Llegada al Aeropuerto", description: "乘坐地铁8号线进入市区，约45分钟", duration: "2小时", icon: "✈️" },
      { time: "14:00", title: "太阳门广场", titleEs: "Puerta del Sol", description: "马德里的心脏地带，西班牙公路网的起点，广场中央有著名的熊与草莓树雕像", duration: "1小时", icon: "🗺️" },
      { time: "16:00", title: "马约尔广场", titleEs: "Plaza Mayor", description: "巴洛克风格的历史广场，周围是17世纪的建筑，露天咖啡馆林立", duration: "1.5小时", icon: "🏛️" },
      { time: "19:00", title: "马德里王宫附近漫步", titleEs: "Palacio Real", description: "欣赏宫殿外观夜景，周边公园散步", duration: "1小时", icon: "🌆" },
    ],
    hotel: { name: "梅里亚皇家大道酒店", stars: 5, description: "位于市中心，距太阳门步行5分钟", price: "¥1,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "马德里炖肉", dishEs: "Cocido Madrileño", restaurant: "Casa Lucio", description: "马德里传统炖菜，含鹰嘴豆、猪肉和蔬菜" },
      { dish: "西班牙煎蛋饼", dishEs: "Tortilla Española", restaurant: "Bar Cervantes", description: "马铃薯鸡蛋煎饼，西班牙国民小吃" },
    ],
  },
  {
    day: 2, date: "5月2日", city: "马德里", cityEs: "Madrid", region: "普拉多博物馆日",
    coords: [40.4137, -3.6922], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8b1a1a",
    activities: [
      { time: "09:00", title: "普拉多国家博物馆", titleEs: "Museo del Prado", description: "世界顶级艺术博物馆，收藏委拉斯开兹《宫女》、戈雅《裸体玛哈》等杰作，建议参观3小时", duration: "3小时", icon: "🎨" },
      { time: "13:00", title: "午餐 - 雷蒂罗公园附近", titleEs: "Parque del Retiro", description: "在公园旁餐厅用餐后漫步公园，水晶宫打卡", duration: "2.5小时", icon: "🌿" },
      { time: "16:00", title: "索菲亚王后艺术中心", titleEs: "Museo Reina Sofía", description: "毕加索《格尔尼卡》的永久展馆，20世纪现代艺术珍藏", duration: "2小时", icon: "🖼️" },
      { time: "20:00", title: "格兰大道夜生活", titleEs: "Gran Vía", description: "西班牙的百老汇，剧院、餐厅、酒吧林立", duration: "2小时", icon: "🌃" },
    ],
    hotel: { name: "梅里亚皇家大道酒店", stars: 5, description: "连住第二晚", price: "¥1,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "烤乳猪", dishEs: "Cochinillo Asado", restaurant: "Sobrino de Botín", description: "世界最古老餐厅，1725年营业至今，烤乳猪是招牌" },
      { dish: "火腿伊比利亚", dishEs: "Jamón Ibérico", restaurant: "Museo del Jamón", description: "西班牙最珍贵的橡木林放养黑蹄猪火腿" },
    ],
  },
  {
    day: 3, date: "5月3日", city: "马德里", cityEs: "Madrid", region: "皇家马德里主场",
    coords: [40.453, -3.688], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#4a1942",
    activities: [
      { time: "09:00", title: "伯纳乌球场参观", titleEs: "Estadio Santiago Bernabéu", description: "皇家马德里主场，参观球场、更衣室、欧冠奖杯室", duration: "2小时", icon: "⚽" },
      { time: "12:00", title: "萨拉曼卡区购物", titleEs: "Barrio de Salamanca", description: "马德里最高端购物区，Zara总部所在，奢侈品云集", duration: "2小时", icon: "🛍️" },
      { time: "15:00", title: "拉斯特罗跳蚤市场", titleEs: "El Rastro", description: "周日古董市场（周日限定），寻找西班牙纪念品", duration: "1.5小时", icon: "🎭" },
      { time: "18:00", title: "弗拉明戈表演", titleEs: "Espectáculo Flamenco", description: "在卡萨帕塔观看正宗弗拉明戈秀，建议提前订票", duration: "2小时", icon: "💃" },
    ],
    hotel: { name: "梅里亚皇家大道酒店", stars: 5, description: "连住第三晚", price: "¥1,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "蒜香虾", dishEs: "Gambas al Ajillo", restaurant: "Casa Revuelta", description: "橄榄油蒜香烹调的新鲜虾，配面包蘸汁" },
      { dish: "马德里小吃拼盘", dishEs: "Tapas Variadas", restaurant: "La Casa del Abuelo", description: "传统小酒馆，各类tapas配本地红酒" },
    ],
  },
  {
    day: 4, date: "5月4日", city: "托莱多", cityEs: "Toledo", region: "新卡斯蒂利亚",
    coords: [39.8628, -4.0273], imageUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1920&q=80", color: "#8B6914",
    activities: [
      { time: "09:00", title: "AVE高铁前往托莱多", titleEs: "AVE a Toledo", description: "马德里阿托查站出发，30分钟抵达，票价约15€", duration: "30分钟", icon: "🚄" },
      { time: "10:30", title: "托莱多大教堂", titleEs: "Catedral de Toledo", description: "西班牙最重要的哥特式大教堂，收藏埃尔·格列柯杰作", duration: "1.5小时", icon: "⛪" },
      { time: "13:00", title: "古城区漫步", titleEs: "Casco Histórico", description: "三种文化（基督、伊斯兰、犹太）融合的世界遗产古城，迷宫般的石板街道", duration: "2小时", icon: "🏰" },
      { time: "16:00", title: "圣托梅教堂 - 格列柯名画", titleEs: "Iglesia de Santo Tomé", description: "收藏格列柯最著名作品《奥尔加斯伯爵的葬礼》", duration: "45分钟", icon: "🎨" },
      { time: "18:30", title: "返回马德里", titleEs: "Regreso a Madrid", description: "高铁返回，晚上抵达科尔多瓦酒店", duration: "30分钟", icon: "🚄" },
    ],
    hotel: { name: "科尔多瓦帕拉多尔酒店", stars: 4, description: "明日转战科尔多瓦，今晚早休", price: "¥900/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Cordoba" },
    food: [
      { dish: "杏仁糖", dishEs: "Mazapán", restaurant: "Santo Tomé", description: "托莱多特产，用杏仁和糖制成的传统甜点" },
      { dish: "卡斯蒂利亚炖肉", dishEs: "Carcamusa", restaurant: "Restaurante Adolfo", description: "托莱多传统炖猪肉配蔬菜" },
    ],
  },
  {
    day: 5, date: "5月5日", city: "科尔多瓦", cityEs: "Córdoba", region: "安达卢西亚",
    coords: [37.8882, -4.7794], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#D4A017",
    activities: [
      { time: "09:00", title: "清真寺-主教座堂", titleEs: "Mezquita-Catedral", description: "世界上最独特的建筑之一，摩尔式清真寺内建有天主教大教堂，UNESCO世界遗产", duration: "2小时", icon: "🕌" },
      { time: "12:00", title: "花巷", titleEs: "Calleja de las Flores", description: "科尔多瓦最著名的花卉小巷，5月花节期间鲜花盛开，绝美打卡地", duration: "1小时", icon: "🌸" },
      { time: "14:00", title: "犹太区漫步", titleEs: "Judería", description: "中世纪犹太人聚居区，白色小屋和橘子树构成的迷人风情", duration: "1.5小时", icon: "🏘️" },
      { time: "16:30", title: "麦地那·扎赫拉宫遗址", titleEs: "Medina Azahara", description: "10世纪哈里发宫城遗址，壮观的考古遗迹", duration: "1.5小时", icon: "🏛️" },
      { time: "19:30", title: "驾车前往塞维利亚", titleEs: "Conducir a Sevilla", description: "约1.5小时车程，或乘坐大巴", duration: "1.5小时", icon: "🚗" },
    ],
    hotel: { name: "塞维利亚EME大教堂酒店", stars: 5, description: "面对塞维利亚大教堂，绝佳位置", price: "¥1,400/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "冷汤", dishEs: "Salmorejo", restaurant: "Casa Pepe de la Judería", description: "科尔多瓦特色番茄冷汤，比西班牙冷汤更浓稠" },
      { dish: "牛尾炖", dishEs: "Rabo de Toro", restaurant: "El Churrasco", description: "安达卢西亚招牌菜，慢炖牛尾香气浓郁" },
    ],
  },
  {
    day: 6, date: "5月6日", city: "塞维利亚", cityEs: "Sevilla", region: "安达卢西亚首府",
    coords: [37.3891, -5.9845], imageUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=1920&q=80", color: "#C84B31",
    activities: [
      { time: "09:00", title: "塞维利亚大教堂与希拉尔达塔", titleEs: "Catedral y Giralda", description: "世界第三大教堂，哥伦布长眠于此，登顶希拉尔达塔俯瞰全城", duration: "2小时", icon: "⛪" },
      { time: "12:00", title: "阿尔卡萨宫", titleEs: "Real Alcázar", description: "仍在使用的最古老皇宫之一，穆德哈尔风格建筑，《权力的游戏》取景地", duration: "2小时", icon: "🏰" },
      { time: "15:00", title: "西班牙广场", titleEs: "Plaza de España", description: "宏伟的半圆形广场，《星球大战》和《阿拉伯的劳伦斯》取景地", duration: "1.5小时", icon: "🌟" },
      { time: "20:30", title: "正宗弗拉明戈秀", titleEs: "Flamenco Auténtico", description: "塔布拉奥·德卡门弗拉明戈表演，塞维利亚是弗拉明戈发源地", duration: "2小时", icon: "💃" },
    ],
    hotel: { name: "塞维利亚EME大教堂酒店", stars: 5, description: "连住第二晚", price: "¥1,400/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "炸鱼", dishEs: "Pescaíto Frito", restaurant: "Bar El Comercio", description: "安达卢西亚传统炸鱼，配柠檬汁" },
      { dish: "橄榄和腌制品", dishEs: "Aceitunas y Encurtidos", restaurant: "Bodega Santa Cruz", description: "塞维利亚最著名的老酒吧，塔帕斯文化发源地" },
    ],
  },
  {
    day: 7, date: "5月7日", city: "塞维利亚", cityEs: "Sevilla", region: "特里亚纳区",
    coords: [37.3814, -6.0027], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B4513",
    activities: [
      { time: "09:30", title: "特里亚纳区探索", titleEs: "Barrio de Triana", description: "过瓜达尔基维尔河，探访弗拉明戈发源地，陶瓷作坊林立", duration: "2小时", icon: "🏘️" },
      { time: "12:00", title: "皮拉托斯宫", titleEs: "Casa de Pilatos", description: "融合哥特、文艺复兴和穆德哈尔风格的私人宫殿", duration: "1.5小时", icon: "🏛️" },
      { time: "14:30", title: "塞维利亚自由市场", titleEs: "Mercado de Triana", description: "当地人购物的传统市场，新鲜海鲜、火腿、橄榄油", duration: "1小时", icon: "🛒" },
      { time: "16:30", title: "驾车前往格拉纳达", titleEs: "Conducir a Granada", description: "约3小时车程，沿途欣赏安达卢西亚平原", duration: "3小时", icon: "🚗" },
    ],
    hotel: { name: "格拉纳达帕拉多尔酒店", stars: 5, description: "位于阿尔罕布拉宫内，传奇住宿体验", price: "¥2,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "塞维利亚炸茄子", dishEs: "Berenjenas con Miel", restaurant: "El Rinconcillo", description: "西班牙最古老酒吧，炸茄子配蜂蜜是招牌" },
    ],
  },
  {
    day: 8, date: "5月8日", city: "格拉纳达", cityEs: "Granada", region: "阿尔罕布拉宫",
    coords: [37.1773, -3.5986], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#2C5F2E",
    activities: [
      { time: "08:00", title: "阿尔罕布拉宫早场参观", titleEs: "Alhambra - Visita Matinal", description: "提前网上预订！纳萨里宫殿门票每天限量，卡洛斯五世宫、赫内拉利费花园", duration: "4小时", icon: "🏰" },
      { time: "13:00", title: "阿尔拜辛区午餐", titleEs: "Almuerzo en Albaicín", description: "摩尔区白色小屋，俯瞰阿尔罕布拉宫全景", duration: "1.5小时", icon: "🌄" },
      { time: "15:30", title: "观光台看日落", titleEs: "Mirador de San Nicolás", description: "格拉纳达最美观景台，夕阳下的阿尔罕布拉宫是毕生难忘的景象", duration: "2小时", icon: "🌅" },
      { time: "20:00", title: "洞穴弗拉明戈秀", titleEs: "Flamenco en Cuevas", description: "萨克罗蒙特洞穴区，感受最原始的弗拉明戈表演", duration: "2小时", icon: "💃" },
    ],
    hotel: { name: "格拉纳达帕拉多尔酒店", stars: 5, description: "连住第二晚，阿尔罕布拉宫内", price: "¥2,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "摩洛哥式鸡肉", dishEs: "Pollo a la Morisca", restaurant: "Restaurante Arrayanes", description: "融合摩尔风味的鸡肉料理，藏红花和干果调味" },
      { dish: "格拉纳达塔帕斯", dishEs: "Tapas Granadinas", restaurant: "Bar Los Diamantes", description: "格拉纳达特色：点一杯饮料免费附赠塔帕斯" },
    ],
  },
  {
    day: 9, date: "5月9日", city: "格拉纳达", cityEs: "Granada", region: "返程日",
    coords: [37.1887, -3.5908], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "赫内拉利费花园", titleEs: "Jardines del Generalife", description: "如果昨日未游，今日补游阿尔罕布拉宫配套花园，春季鲜花盛开", duration: "1.5小时", icon: "🌺" },
      { time: "11:30", title: "格拉纳达大教堂", titleEs: "Catedral de Granada", description: "文艺复兴风格大教堂，皇家礼拜堂是天主教双王的长眠地", duration: "1小时", icon: "⛪" },
      { time: "14:00", title: "纪念品购物", titleEs: "Compras de Recuerdos", description: "采购陶瓷、皮革制品、藏红花、橄榄油等特产", duration: "1.5小时", icon: "🛍️" },
      { time: "17:00", title: "乘坐大巴/高铁返回马德里", titleEs: "Regreso a Madrid", description: "大巴约5小时，或先到马拉加乘AVE约2.5小时", duration: "5小时", icon: "🚌" },
    ],
    hotel: { name: "马德里机场希尔顿", stars: 4, description: "机场酒店，方便次日早班机返回", price: "¥800/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Madrid+Airport" },
    food: [
      { dish: "格拉纳达早餐", dishEs: "Desayuno Granadino", restaurant: "Café Fútbol", description: "创立于1891年的传统咖啡馆，牛奶咖啡配油炸面团" },
    ],
  },
];

const en: DayData[] = [
  {
    day: 1, date: "May 1", city: "Madrid", cityEs: "Madrid", region: "Community of Madrid",
    coords: [40.4168, -3.7038], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#c60b1e",
    activities: [
      { time: "10:00", title: "Arrive at Madrid-Barajas Airport", titleEs: "Llegada al Aeropuerto", description: "Take metro Line 8 to city centre — approx. 45 min", duration: "2 hrs", icon: "✈️" },
      { time: "14:00", title: "Puerta del Sol", titleEs: "Puerta del Sol", description: "Madrid's symbolic heart and the starting point of Spain's road network, home to the famous Bear and Strawberry Tree statue", duration: "1 hr", icon: "🗺️" },
      { time: "16:00", title: "Plaza Mayor", titleEs: "Plaza Mayor", description: "Baroque historic square surrounded by 17th-century buildings, lined with outdoor cafés", duration: "1.5 hrs", icon: "🏛️" },
      { time: "19:00", title: "Evening Walk near Royal Palace", titleEs: "Palacio Real", description: "Admire the palace facade at dusk and stroll through the surrounding gardens", duration: "1 hr", icon: "🌆" },
    ],
    hotel: { name: "Meliá Gran Vía", stars: 5, description: "City centre, 5 min walk from Puerta del Sol", price: "€150/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "Cocido Madrileño", dishEs: "Cocido Madrileño", restaurant: "Casa Lucio", description: "Madrid's traditional stew with chickpeas, pork and vegetables" },
      { dish: "Tortilla Española", dishEs: "Tortilla Española", restaurant: "Bar Cervantes", description: "Spanish potato omelette — a beloved national staple" },
    ],
  },
  {
    day: 2, date: "May 2", city: "Madrid", cityEs: "Madrid", region: "Museum Day",
    coords: [40.4137, -3.6922], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8b1a1a",
    activities: [
      { time: "09:00", title: "Prado National Museum", titleEs: "Museo del Prado", description: "World-class art museum — Velázquez's Las Meninas, Goya's masterworks. Allow at least 3 hours", duration: "3 hrs", icon: "🎨" },
      { time: "13:00", title: "Lunch near Retiro Park", titleEs: "Parque del Retiro", description: "Dine by the park then stroll through it and visit the Crystal Palace", duration: "2.5 hrs", icon: "🌿" },
      { time: "16:00", title: "Reina Sofía Museum", titleEs: "Museo Reina Sofía", description: "Permanent home of Picasso's Guernica, treasure trove of 20th-century modern art", duration: "2 hrs", icon: "🖼️" },
      { time: "20:00", title: "Gran Vía Nightlife", titleEs: "Gran Vía", description: "Spain's Broadway — theatres, restaurants and bars light up the night", duration: "2 hrs", icon: "🌃" },
    ],
    hotel: { name: "Meliá Gran Vía", stars: 5, description: "Second night", price: "€150/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "Roast Suckling Pig", dishEs: "Cochinillo Asado", restaurant: "Sobrino de Botín", description: "The world's oldest restaurant (1725) — their suckling pig is legendary" },
      { dish: "Jamón Ibérico", dishEs: "Jamón Ibérico", restaurant: "Museo del Jamón", description: "Spain's prized acorn-fed black-footed cured ham" },
    ],
  },
  {
    day: 3, date: "May 3", city: "Madrid", cityEs: "Madrid", region: "Real Madrid Stadium",
    coords: [40.453, -3.688], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#4a1942",
    activities: [
      { time: "09:00", title: "Santiago Bernabéu Tour", titleEs: "Estadio Santiago Bernabéu", description: "Real Madrid's home ground — tour the pitch, changing rooms and Champions League trophy room", duration: "2 hrs", icon: "⚽" },
      { time: "12:00", title: "Salamanca District Shopping", titleEs: "Barrio de Salamanca", description: "Madrid's most upscale shopping neighbourhood — Zara's HQ, luxury flagships galore", duration: "2 hrs", icon: "🛍️" },
      { time: "15:00", title: "El Rastro Flea Market", titleEs: "El Rastro", description: "Sunday antique market — hunt for Spanish souvenirs and curiosities", duration: "1.5 hrs", icon: "🎭" },
      { time: "18:00", title: "Flamenco Show", titleEs: "Espectáculo Flamenco", description: "Authentic flamenco at Casa Patas — book tickets in advance", duration: "2 hrs", icon: "💃" },
    ],
    hotel: { name: "Meliá Gran Vía", stars: 5, description: "Third night", price: "€150/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "Gambas al Ajillo", dishEs: "Gambas al Ajillo", restaurant: "Casa Revuelta", description: "Fresh prawns in garlic olive oil — mop up the sauce with crusty bread" },
      { dish: "Tapas Variadas", dishEs: "Tapas Variadas", restaurant: "La Casa del Abuelo", description: "Traditional tavern, assorted tapas with local red wine" },
    ],
  },
  {
    day: 4, date: "May 4", city: "Toledo", cityEs: "Toledo", region: "Castilla-La Mancha",
    coords: [39.8628, -4.0273], imageUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1920&q=80", color: "#8B6914",
    activities: [
      { time: "09:00", title: "AVE Train to Toledo", titleEs: "AVE a Toledo", description: "Depart Madrid Atocha, 30 min, ~€15", duration: "30 min", icon: "🚄" },
      { time: "10:30", title: "Toledo Cathedral", titleEs: "Catedral de Toledo", description: "Spain's most important Gothic cathedral, housing El Greco masterpieces", duration: "1.5 hrs", icon: "⛪" },
      { time: "13:00", title: "Historic Old City Walk", titleEs: "Casco Histórico", description: "UNESCO World Heritage — a labyrinthine city where Christian, Islamic and Jewish cultures converge", duration: "2 hrs", icon: "🏰" },
      { time: "16:00", title: "Church of Santo Tomé", titleEs: "Iglesia de Santo Tomé", description: "Home of El Greco's masterpiece The Burial of the Count of Orgaz", duration: "45 min", icon: "🎨" },
      { time: "18:30", title: "Return towards Córdoba", titleEs: "Regreso a Madrid", description: "High-speed train back — overnight in Córdoba hotel", duration: "30 min", icon: "🚄" },
    ],
    hotel: { name: "Parador de Córdoba", stars: 4, description: "Tomorrow's base — check in and rest early", price: "€110/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Cordoba" },
    food: [
      { dish: "Mazapán", dishEs: "Mazapán", restaurant: "Santo Tomé", description: "Toledo's famous marzipan — made with almonds and sugar since the Middle Ages" },
      { dish: "Carcamusa", dishEs: "Carcamusa", restaurant: "Restaurante Adolfo", description: "Toledo's traditional pork and vegetable stew" },
    ],
  },
  {
    day: 5, date: "May 5", city: "Córdoba", cityEs: "Córdoba", region: "Andalusia",
    coords: [37.8882, -4.7794], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#D4A017",
    activities: [
      { time: "09:00", title: "Mezquita-Catedral", titleEs: "Mezquita-Catedral", description: "One of the world's most extraordinary buildings — a Moorish mosque with a Catholic cathedral built inside. UNESCO World Heritage Site", duration: "2 hrs", icon: "🕌" },
      { time: "12:00", title: "Calleja de las Flores", titleEs: "Calleja de las Flores", description: "Córdoba's most famous floral alley — in bloom during the May Flower Festival", duration: "1 hr", icon: "🌸" },
      { time: "14:00", title: "Jewish Quarter Walk", titleEs: "Judería", description: "Medieval Jewish neighbourhood of white-washed houses and orange trees", duration: "1.5 hrs", icon: "🏘️" },
      { time: "16:30", title: "Medina Azahara", titleEs: "Medina Azahara", description: "10th-century Caliph's palace city ruins — spectacular archaeological site", duration: "1.5 hrs", icon: "🏛️" },
      { time: "19:30", title: "Drive to Seville", titleEs: "Conducir a Sevilla", description: "~1.5 hrs by car or coach", duration: "1.5 hrs", icon: "🚗" },
    ],
    hotel: { name: "Hotel EME Catedral Seville", stars: 5, description: "Directly facing Seville Cathedral — unbeatable location", price: "€175/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "Salmorejo", dishEs: "Salmorejo", restaurant: "Casa Pepe de la Judería", description: "Córdoba's thick cold tomato soup — richer than gazpacho" },
      { dish: "Rabo de Toro", dishEs: "Rabo de Toro", restaurant: "El Churrasco", description: "Andalusian slow-braised oxtail — rich, aromatic, unmissable" },
    ],
  },
  {
    day: 6, date: "May 6", city: "Seville", cityEs: "Sevilla", region: "Andalusian Capital",
    coords: [37.3891, -5.9845], imageUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=1920&q=80", color: "#C84B31",
    activities: [
      { time: "09:00", title: "Seville Cathedral & La Giralda", titleEs: "Catedral y Giralda", description: "World's third-largest cathedral — Columbus is buried here. Climb La Giralda for panoramic views", duration: "2 hrs", icon: "⛪" },
      { time: "12:00", title: "Real Alcázar", titleEs: "Real Alcázar", description: "One of the oldest royal palaces still in use. Stunning Mudéjar architecture and Game of Thrones filming location", duration: "2 hrs", icon: "🏰" },
      { time: "15:00", title: "Plaza de España", titleEs: "Plaza de España", description: "Spectacular semi-circular plaza — filming location for Star Wars and Lawrence of Arabia", duration: "1.5 hrs", icon: "🌟" },
      { time: "20:30", title: "Authentic Flamenco Show", titleEs: "Flamenco Auténtico", description: "Tablao del Carmen flamenco performance — Seville is flamenco's birthplace", duration: "2 hrs", icon: "💃" },
    ],
    hotel: { name: "Hotel EME Catedral Seville", stars: 5, description: "Second night", price: "€175/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "Pescaíto Frito", dishEs: "Pescaíto Frito", restaurant: "Bar El Comercio", description: "Andalusian fried fish — crispy, fresh, served with lemon" },
      { dish: "Aceitunas y Encurtidos", dishEs: "Aceitunas y Encurtidos", restaurant: "Bodega Santa Cruz", description: "Seville's most celebrated old bar — a pillar of tapas culture" },
    ],
  },
  {
    day: 7, date: "May 7", city: "Seville", cityEs: "Sevilla", region: "Triana District",
    coords: [37.3814, -6.0027], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B4513",
    activities: [
      { time: "09:30", title: "Triana District", titleEs: "Barrio de Triana", description: "Cross the Guadalquivir to explore flamenco's birthplace, lined with ceramic workshops", duration: "2 hrs", icon: "🏘️" },
      { time: "12:00", title: "Casa de Pilatos", titleEs: "Casa de Pilatos", description: "Private palace blending Gothic, Renaissance and Mudéjar styles", duration: "1.5 hrs", icon: "🏛️" },
      { time: "14:30", title: "Triana Market", titleEs: "Mercado de Triana", description: "Local covered market with fresh seafood, ham and olive oil", duration: "1 hr", icon: "🛒" },
      { time: "16:30", title: "Drive to Granada", titleEs: "Conducir a Granada", description: "~3 hrs through the Andalusian plains", duration: "3 hrs", icon: "🚗" },
    ],
    hotel: { name: "Parador de Granada", stars: 5, description: "Located inside the Alhambra — a legendary stay", price: "€280/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "Berenjenas con Miel", dishEs: "Berenjenas con Miel", restaurant: "El Rinconcillo", description: "Spain's oldest bar — fried aubergine drizzled with honey" },
    ],
  },
  {
    day: 8, date: "May 8", city: "Granada", cityEs: "Granada", region: "Alhambra",
    coords: [37.1773, -3.5986], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#2C5F2E",
    activities: [
      { time: "08:00", title: "Alhambra Morning Visit", titleEs: "Alhambra - Visita Matinal", description: "Book well in advance! Nasrid Palace tickets are strictly limited. Also visit Carlos V Palace and Generalife Gardens", duration: "4 hrs", icon: "🏰" },
      { time: "13:00", title: "Lunch in Albaicín", titleEs: "Almuerzo en Albaicín", description: "The Moorish quarter of white-washed houses with panoramic views of the Alhambra", duration: "1.5 hrs", icon: "🌄" },
      { time: "15:30", title: "Mirador de San Nicolás at Sunset", titleEs: "Mirador de San Nicolás", description: "Granada's most beautiful viewpoint — the Alhambra at sunset is a once-in-a-lifetime sight", duration: "2 hrs", icon: "🌅" },
      { time: "20:00", title: "Cave Flamenco Show", titleEs: "Flamenco en Cuevas", description: "Sacromonte cave district — flamenco in its most raw and authentic setting", duration: "2 hrs", icon: "💃" },
    ],
    hotel: { name: "Parador de Granada", stars: 5, description: "Second night inside the Alhambra", price: "€280/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "Pollo a la Morisca", dishEs: "Pollo a la Morisca", restaurant: "Restaurante Arrayanes", description: "Moorish-influenced chicken dish with saffron and dried fruits" },
      { dish: "Tapas Granadinas", dishEs: "Tapas Granadinas", restaurant: "Bar Los Diamantes", description: "Granada's generous tradition: order a drink, get a free tapa" },
    ],
  },
  {
    day: 9, date: "May 9", city: "Granada", cityEs: "Granada", region: "Departure Day",
    coords: [37.1887, -3.5908], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "Generalife Gardens", titleEs: "Jardines del Generalife", description: "If not visited yesterday — spring flowers in full bloom in the Alhambra gardens", duration: "1.5 hrs", icon: "🌺" },
      { time: "11:30", title: "Granada Cathedral", titleEs: "Catedral de Granada", description: "Renaissance cathedral — the Royal Chapel is the burial site of the Catholic Monarchs", duration: "1 hr", icon: "⛪" },
      { time: "14:00", title: "Souvenir Shopping", titleEs: "Compras de Recuerdos", description: "Stock up on ceramics, leather goods, saffron and olive oil", duration: "1.5 hrs", icon: "🛍️" },
      { time: "17:00", title: "Return Journey", titleEs: "Regreso a Madrid", description: "Coach ~5 hrs, or train via Málaga ~2.5 hrs to Madrid", duration: "5 hrs", icon: "🚌" },
    ],
    hotel: { name: "Madrid Airport Hilton", stars: 4, description: "Airport hotel for an early morning flight home", price: "€100/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Madrid+Airport" },
    food: [
      { dish: "Desayuno Granadino", dishEs: "Desayuno Granadino", restaurant: "Café Fútbol", description: "Founded in 1891 — traditional coffee with fried dough sticks for a final Spanish breakfast" },
    ],
  },
];

const ja: DayData[] = [
  {
    day: 1, date: "5月1日", city: "マドリード", cityEs: "Madrid", region: "マドリード自治区",
    coords: [40.4168, -3.7038], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#c60b1e",
    activities: [
      { time: "10:00", title: "マドリード・バラハス空港に到着", titleEs: "Llegada al Aeropuerto", description: "地下鉄8番線で市内へ、約45分", duration: "2時間", icon: "✈️" },
      { time: "14:00", title: "プエルタ・デル・ソル", titleEs: "Puerta del Sol", description: "マドリードの象徴的な広場、スペインの道路網の起点。有名な熊とイチゴノキの像が立つ", duration: "1時間", icon: "🗺️" },
      { time: "16:00", title: "マヨール広場", titleEs: "Plaza Mayor", description: "17世紀の建物に囲まれたバロック様式の歴史的広場、オープンカフェが並ぶ", duration: "1.5時間", icon: "🏛️" },
      { time: "19:00", title: "王宮周辺の散策", titleEs: "Palacio Real", description: "夜の宮殿外観を鑑賞し、周辺の公園を散歩", duration: "1時間", icon: "🌆" },
    ],
    hotel: { name: "メリア・グラン・ビア", stars: 5, description: "市中心部、プエルタ・デル・ソルから徒歩5分", price: "€150/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "コシード・マドリレーニョ", dishEs: "Cocido Madrileño", restaurant: "Casa Lucio", description: "ひよこ豆、豚肉、野菜を煮込んだマドリードの伝統料理" },
      { dish: "トルティーリャ・エスパニョーラ", dishEs: "Tortilla Española", restaurant: "Bar Cervantes", description: "じゃがいも入りスペイン風オムレツ、国民食" },
    ],
  },
  {
    day: 2, date: "5月2日", city: "マドリード", cityEs: "Madrid", region: "美術館の日",
    coords: [40.4137, -3.6922], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8b1a1a",
    activities: [
      { time: "09:00", title: "プラド国立美術館", titleEs: "Museo del Prado", description: "ベラスケスの「ラス・メニーナス」、ゴヤの傑作を収蔵する世界最高峰の美術館。3時間は確保を", duration: "3時間", icon: "🎨" },
      { time: "13:00", title: "レティーロ公園でランチ", titleEs: "Parque del Retiro", description: "公園のそばでランチ後、散策とクリスタル・パレスへ", duration: "2.5時間", icon: "🌿" },
      { time: "16:00", title: "レイナ・ソフィア王妃芸術センター", titleEs: "Museo Reina Sofía", description: "ピカソの「ゲルニカ」の永久展示館、20世紀現代美術の宝庫", duration: "2時間", icon: "🖼️" },
      { time: "20:00", title: "グラン・ビアの夜", titleEs: "Gran Vía", description: "スペインのブロードウェイ — 劇場、レストラン、バーが立ち並ぶ", duration: "2時間", icon: "🌃" },
    ],
    hotel: { name: "メリア・グラン・ビア", stars: 5, description: "2泊目", price: "€150/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "コチニーリョ・アサード", dishEs: "Cochinillo Asado", restaurant: "Sobrino de Botín", description: "1725年創業の世界最古のレストラン。看板料理の子豚の丸焼き" },
      { dish: "ハモン・イベリコ", dishEs: "Jamón Ibérico", restaurant: "Museo del Jamón", description: "スペインが誇るどんぐり育ちの黒蹄豚の生ハム" },
    ],
  },
  {
    day: 3, date: "5月3日", city: "マドリード", cityEs: "Madrid", region: "レアル・マドリード",
    coords: [40.453, -3.688], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#4a1942",
    activities: [
      { time: "09:00", title: "サンティアゴ・ベルナベウ見学", titleEs: "Estadio Santiago Bernabéu", description: "レアル・マドリードの本拠地 — ピッチ、ロッカールーム、欧州チャンピオンズリーグのトロフィー室を見学", duration: "2時間", icon: "⚽" },
      { time: "12:00", title: "サラマンカ地区でショッピング", titleEs: "Barrio de Salamanca", description: "マドリード最高級のショッピングエリア、Zaraの本社所在地、ラグジュアリーブランドが集結", duration: "2時間", icon: "🛍️" },
      { time: "15:00", title: "エル・ラストロ蚤の市", titleEs: "El Rastro", description: "日曜限定のアンティーク市場 — スペインのお土産を探すなら", duration: "1.5時間", icon: "🎭" },
      { time: "18:00", title: "フラメンコショー", titleEs: "Espectáculo Flamenco", description: "カサ・パタスで本場フラメンコを鑑賞 — 事前予約がおすすめ", duration: "2時間", icon: "💃" },
    ],
    hotel: { name: "メリア・グラン・ビア", stars: 5, description: "3泊目", price: "€150/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Melia+Gran+Via+Madrid" },
    food: [
      { dish: "ガンバス・アル・アヒーリョ", dishEs: "Gambas al Ajillo", restaurant: "Casa Revuelta", description: "ガーリックオリーブオイルで炒めた新鮮なエビ — ソースはパンでぬぐって" },
      { dish: "タパス・バリアダス", dishEs: "Tapas Variadas", restaurant: "La Casa del Abuelo", description: "伝統的な居酒屋で各種タパスと地元赤ワイン" },
    ],
  },
  {
    day: 4, date: "5月4日", city: "トレド", cityEs: "Toledo", region: "カスティーリャ＝ラ・マンチャ",
    coords: [39.8628, -4.0273], imageUrl: "https://images.unsplash.com/photo-1509233725247-49e657c54213?w=1920&q=80", color: "#8B6914",
    activities: [
      { time: "09:00", title: "AVEでトレドへ", titleEs: "AVE a Toledo", description: "マドリード・アトーチャ駅発、30分、約€15", duration: "30分", icon: "🚄" },
      { time: "10:30", title: "トレド大聖堂", titleEs: "Catedral de Toledo", description: "スペイン最重要のゴシック様式大聖堂、エル・グレコの傑作を所蔵", duration: "1.5時間", icon: "⛪" },
      { time: "13:00", title: "旧市街散策", titleEs: "Casco Histórico", description: "ユネスコ世界遺産 — キリスト教、イスラム教、ユダヤ教の3文化が融合した迷宮都市", duration: "2時間", icon: "🏰" },
      { time: "16:00", title: "サント・トメ教会", titleEs: "Iglesia de Santo Tomé", description: "エル・グレコの最高傑作「オルガス伯の埋葬」を所蔵", duration: "45分", icon: "🎨" },
      { time: "18:30", title: "コルドバへ向かう", titleEs: "Regreso a Madrid", description: "高速鉄道で移動、今夜はコルドバで宿泊", duration: "30分", icon: "🚄" },
    ],
    hotel: { name: "パラドール・デ・コルドバ", stars: 4, description: "明日の拠点 — 早めにチェックインして休息", price: "€110/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Cordoba" },
    food: [
      { dish: "マサパン", dishEs: "Mazapán", restaurant: "Santo Tomé", description: "トレドの名物マジパン — アーモンドと砂糖で作る伝統菓子" },
      { dish: "カルカムーサ", dishEs: "Carcamusa", restaurant: "Restaurante Adolfo", description: "トレドの伝統的な豚肉と野菜の煮込み料理" },
    ],
  },
  {
    day: 5, date: "5月5日", city: "コルドバ", cityEs: "Córdoba", region: "アンダルシア",
    coords: [37.8882, -4.7794], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#D4A017",
    activities: [
      { time: "09:00", title: "メスキータ＝カテドラル", titleEs: "Mezquita-Catedral", description: "世界で最もユニークな建造物のひとつ — イスラムのモスクの中にカトリック大聖堂が建つ。ユネスコ世界遺産", duration: "2時間", icon: "🕌" },
      { time: "12:00", title: "花の小路", titleEs: "Calleja de las Flores", description: "コルドバ最有名の花の小路 — 5月の花祭りには満開の花が咲き誇る", duration: "1時間", icon: "🌸" },
      { time: "14:00", title: "ユダヤ人街散策", titleEs: "Judería", description: "白い家とオレンジの木が織りなす中世のユダヤ人地区", duration: "1.5時間", icon: "🏘️" },
      { time: "16:30", title: "メディナ・アサーラ遺跡", titleEs: "Medina Azahara", description: "10世紀のカリフの宮殿都市遺跡 — 壮大な考古学的遺産", duration: "1.5時間", icon: "🏛️" },
      { time: "19:30", title: "セビリアへドライブ", titleEs: "Conducir a Sevilla", description: "車またはバスで約1.5時間", duration: "1.5時間", icon: "🚗" },
    ],
    hotel: { name: "ホテルEMEカテドラル・セビリア", stars: 5, description: "セビリア大聖堂に面した絶好のロケーション", price: "€175/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "サルモレホ", dishEs: "Salmorejo", restaurant: "Casa Pepe de la Judería", description: "コルドバ特産の濃厚トマト冷スープ — ガスパチョより濃い" },
      { dish: "ラボ・デ・トロ", dishEs: "Rabo de Toro", restaurant: "El Churrasco", description: "アンダルシアの看板料理、牛テールのブレイズ" },
    ],
  },
  {
    day: 6, date: "5月6日", city: "セビリア", cityEs: "Sevilla", region: "アンダルシアの首都",
    coords: [37.3891, -5.9845], imageUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?w=1920&q=80", color: "#C84B31",
    activities: [
      { time: "09:00", title: "セビリア大聖堂とヒラルダの塔", titleEs: "Catedral y Giralda", description: "世界第3位の規模の大聖堂 — コロンブスが眠る。ヒラルダの塔に登り街を一望", duration: "2時間", icon: "⛪" },
      { time: "12:00", title: "レアル・アルカサル", titleEs: "Real Alcázar", description: "現役最古の王宮のひとつ。ムデハル様式建築、ゲーム・オブ・スローンズの撮影地", duration: "2時間", icon: "🏰" },
      { time: "15:00", title: "スペイン広場", titleEs: "Plaza de España", description: "壮大な半円形広場 — スター・ウォーズやアラビアのロレンスの撮影地", duration: "1.5時間", icon: "🌟" },
      { time: "20:30", title: "本場フラメンコショー", titleEs: "Flamenco Auténtico", description: "タブラオ・デル・カルメンでフラメンコを鑑賞 — セビリアはフラメンコ発祥の地", duration: "2時間", icon: "💃" },
    ],
    hotel: { name: "ホテルEMEカテドラル・セビリア", stars: 5, description: "2泊目", price: "€175/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hotel+EME+Catedral+Sevilla" },
    food: [
      { dish: "ペスカイート・フリート", dishEs: "Pescaíto Frito", restaurant: "Bar El Comercio", description: "アンダルシアの揚げ魚 — サクサク、新鮮、レモンを添えて" },
      { dish: "アセイトゥーナス・エンクルティドス", dishEs: "Aceitunas y Encurtidos", restaurant: "Bodega Santa Cruz", description: "セビリア最古の酒場 — タパス文化の発祥の地" },
    ],
  },
  {
    day: 7, date: "5月7日", city: "セビリア", cityEs: "Sevilla", region: "トリアナ地区",
    coords: [37.3814, -6.0027], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B4513",
    activities: [
      { time: "09:30", title: "トリアナ地区探索", titleEs: "Barrio de Triana", description: "グアダルキビル川を渡り、フラメンコ発祥の地、陶器工房が並ぶエリアを探索", duration: "2時間", icon: "🏘️" },
      { time: "12:00", title: "ピラトスの家", titleEs: "Casa de Pilatos", description: "ゴシック、ルネサンス、ムデハル様式が融合した私邸宮殿", duration: "1.5時間", icon: "🏛️" },
      { time: "14:30", title: "トリアナ市場", titleEs: "Mercado de Triana", description: "地元民が通う伝統市場 — 新鮮な魚介類、ハモン、オリーブオイル", duration: "1時間", icon: "🛒" },
      { time: "16:30", title: "グラナダへドライブ", titleEs: "Conducir a Granada", description: "アンダルシアの平原を眺めながら約3時間", duration: "3時間", icon: "🚗" },
    ],
    hotel: { name: "パラドール・デ・グラナダ", stars: 5, description: "アルハンブラ宮殿内に位置する伝説のホテル", price: "€280/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "ベレンヘーナス・コン・ミエル", dishEs: "Berenjenas con Miel", restaurant: "El Rinconcillo", description: "スペイン最古の酒場 — 揚げなすにはちみつをかけた名物料理" },
    ],
  },
  {
    day: 8, date: "5月8日", city: "グラナダ", cityEs: "Granada", region: "アルハンブラ宮殿",
    coords: [37.1773, -3.5986], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#2C5F2E",
    activities: [
      { time: "08:00", title: "アルハンブラ宮殿 早朝訪問", titleEs: "Alhambra - Visita Matinal", description: "事前予約必須！ナスル朝宮殿は入場制限あり。カルロス5世宮殿、ヘネラリーフェ庭園も見学", duration: "4時間", icon: "🏰" },
      { time: "13:00", title: "アルバイシン地区でランチ", titleEs: "Almuerzo en Albaicín", description: "白い家が並ぶムーア人地区でアルハンブラを一望", duration: "1.5時間", icon: "🌄" },
      { time: "15:30", title: "サン・ニコラス展望台で夕日を見る", titleEs: "Mirador de San Nicolás", description: "グラナダで最も美しい展望台 — 夕日に染まるアルハンブラは一生の記憶", duration: "2時間", icon: "🌅" },
      { time: "20:00", title: "洞窟フラメンコショー", titleEs: "Flamenco en Cuevas", description: "サクロモンテの洞窟地区 — 最も原始的なフラメンコを体験", duration: "2時間", icon: "💃" },
    ],
    hotel: { name: "パラドール・デ・グラナダ", stars: 5, description: "2泊目、アルハンブラ宮殿内", price: "€280/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Parador+de+Granada" },
    food: [
      { dish: "ポジョ・ア・ラ・モリスカ", dishEs: "Pollo a la Morisca", restaurant: "Restaurante Arrayanes", description: "サフランとドライフルーツを使ったムーア風チキン料理" },
      { dish: "タパス・グラナディーナス", dishEs: "Tapas Granadinas", restaurant: "Bar Los Diamantes", description: "グラナダならではの習慣：飲み物を頼むと無料タパスがついてくる" },
    ],
  },
  {
    day: 9, date: "5月9日", city: "グラナダ", cityEs: "Granada", region: "出発日",
    coords: [37.1887, -3.5908], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "ヘネラリーフェ庭園", titleEs: "Jardines del Generalife", description: "昨日訪問できなかった場合 — 春は花が満開のアルハンブラ付属庭園", duration: "1.5時間", icon: "🌺" },
      { time: "11:30", title: "グラナダ大聖堂", titleEs: "Catedral de Granada", description: "ルネサンス様式の大聖堂 — 王室礼拝堂にはカトリック両王が眠る", duration: "1時間", icon: "⛪" },
      { time: "14:00", title: "お土産ショッピング", titleEs: "Compras de Recuerdos", description: "陶器、革製品、サフラン、オリーブオイルなどを購入", duration: "1.5時間", icon: "🛍️" },
      { time: "17:00", title: "帰路へ", titleEs: "Regreso a Madrid", description: "バスで約5時間、またはマラガ経由のAVEで約2.5時間でマドリードへ", duration: "5時間", icon: "🚌" },
    ],
    hotel: { name: "マドリード空港ヒルトン", stars: 4, description: "早朝フライトに便利な空港ホテル", price: "€100/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Madrid+Airport" },
    food: [
      { dish: "デサジューノ・グラナディーノ", dishEs: "Desayuno Granadino", restaurant: "Café Fútbol", description: "1891年創業の老舗カフェ — コーヒーと揚げパンで最後のスペイン朝食" },
    ],
  },
];

export const itineraryA: Record<Locale, DayData[]> = { en, zh, ja };
