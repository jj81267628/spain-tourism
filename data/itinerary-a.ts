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
  };
  food: {
    dish: string;
    dishEs: string;
    restaurant: string;
    description: string;
  }[];
}

export const itineraryA: DayData[] = [
  {
    day: 1,
    date: "5月1日",
    city: "马德里",
    cityEs: "Madrid",
    region: "马德里自治区",
    coords: [40.4168, -3.7038],
    imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80",
    color: "#c60b1e",
    activities: [
      { time: "10:00", title: "抵达马德里-巴拉哈斯机场", titleEs: "Llegada al Aeropuerto", description: "乘坐地铁8号线进入市区，约45分钟", duration: "2小时", icon: "✈️" },
      { time: "14:00", title: "太阳门广场", titleEs: "Puerta del Sol", description: "马德里的心脏地带，西班牙公路网的起点，广场中央有著名的熊与草莓树雕像", duration: "1小时", icon: "🗺️" },
      { time: "16:00", title: "马约尔广场", titleEs: "Plaza Mayor", description: "巴洛克风格的历史广场，周围是17世纪的建筑，露天咖啡馆林立", duration: "1.5小时", icon: "🏛️" },
      { time: "19:00", title: "马德里王宫附近漫步", titleEs: "Palacio Real", description: "欣赏宫殿外观夜景，周边公园散步", duration: "1小时", icon: "🌆" },
    ],
    hotel: {
      name: "梅里亚皇家大道酒店",
      stars: 5,
      description: "位于市中心，距太阳门步行5分钟",
      price: "¥1,200/晚",
    },
    food: [
      { dish: "马德里炖肉", dishEs: "Cocido Madrileño", restaurant: "Casa Lucio", description: "马德里传统炖菜，含鹰嘴豆、猪肉和蔬菜" },
      { dish: "西班牙煎蛋饼", dishEs: "Tortilla Española", restaurant: "Bar Cervantes", description: "马铃薯鸡蛋煎饼，西班牙国民小吃" },
    ],
  },
  {
    day: 2,
    date: "5月2日",
    city: "马德里",
    cityEs: "Madrid",
    region: "普拉多博物馆日",
    coords: [40.4137, -3.6922],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    color: "#8b1a1a",
    activities: [
      { time: "09:00", title: "普拉多国家博物馆", titleEs: "Museo del Prado", description: "世界顶级艺术博物馆，收藏委拉斯开兹《宫女》、戈雅《裸体玛哈》等杰作，建议参观3小时", duration: "3小时", icon: "🎨" },
      { time: "13:00", title: "午餐 - 雷蒂罗公园附近", titleEs: "Parque del Retiro", description: "在公园旁餐厅用餐后漫步公园，水晶宫打卡", duration: "2.5小时", icon: "🌿" },
      { time: "16:00", title: "索菲亚王后艺术中心", titleEs: "Museo Reina Sofía", description: "毕加索《格尔尼卡》的永久展馆，20世纪现代艺术珍藏", duration: "2小时", icon: "🖼️" },
      { time: "20:00", title: "格兰大道夜生活", titleEs: "Gran Vía", description: "西班牙的百老汇，剧院、餐厅、酒吧林立", duration: "2小时", icon: "🌃" },
    ],
    hotel: {
      name: "梅里亚皇家大道酒店",
      stars: 5,
      description: "连住第二晚",
      price: "¥1,200/晚",
    },
    food: [
      { dish: "烤乳猪", dishEs: "Cochinillo Asado", restaurant: "Sobrino de Botín", description: "世界最古老餐厅，1725年营业至今，烤乳猪是招牌" },
      { dish: "火腿伊比利亚", dishEs: "Jamón Ibérico", restaurant: "Museo del Jamón", description: "西班牙最珍贵的橡木林放养黑蹄猪火腿" },
    ],
  },
  {
    day: 3,
    date: "5月3日",
    city: "马德里",
    cityEs: "Madrid",
    region: "皇家马德里主场",
    coords: [40.453, -3.688],
    imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80",
    color: "#4a1942",
    activities: [
      { time: "09:00", title: "伯纳乌球场参观", titleEs: "Estadio Santiago Bernabéu", description: "皇家马德里主场，参观球场、更衣室、欧冠奖杯室", duration: "2小时", icon: "⚽" },
      { time: "12:00", title: "萨拉曼卡区购物", titleEs: "Barrio de Salamanca", description: "马德里最高端购物区，Zara总部所在，奢侈品云集", duration: "2小时", icon: "🛍️" },
      { time: "15:00", title: "拉斯特罗跳蚤市场", titleEs: "El Rastro", description: "周日古董市场（周日限定），寻找西班牙纪念品", duration: "1.5小时", icon: "🎭" },
      { time: "18:00", title: "弗拉明戈表演", titleEs: "Espectáculo Flamenco", description: "在卡萨帕塔观看正宗弗拉明戈秀，建议提前订票", duration: "2小时", icon: "💃" },
    ],
    hotel: {
      name: "梅里亚皇家大道酒店",
      stars: 5,
      description: "连住第三晚",
      price: "¥1,200/晚",
    },
    food: [
      { dish: "蒜香虾", dishEs: "Gambas al Ajillo", restaurant: "Casa Revuelta", description: "橄榄油蒜香烹调的新鲜虾，配面包蘸汁" },
      { dish: "马德里小吃拼盘", dishEs: "Tapas Variadas", restaurant: "La Casa del Abuelo", description: "传统小酒馆，各类tapas配本地红酒" },
    ],
  },
  {
    day: 4,
    date: "5月4日",
    city: "托莱多",
    cityEs: "Toledo",
    region: "新卡斯蒂利亚",
    coords: [39.8628, -4.0273],
    imageUrl: "https://images.unsplash.com/photo-1558618047-f4e20e5e28d4?w=1920&q=80",
    color: "#8B6914",
    activities: [
      { time: "09:00", title: "AVE高铁前往托莱多", titleEs: "AVE a Toledo", description: "马德里阿托查站出发，30分钟抵达，票价约15€", duration: "30分钟", icon: "🚄" },
      { time: "10:30", title: "托莱多大教堂", titleEs: "Catedral de Toledo", description: "西班牙最重要的哥特式大教堂，收藏埃尔·格列柯杰作", duration: "1.5小时", icon: "⛪" },
      { time: "13:00", title: "古城区漫步", titleEs: "Casco Histórico", description: "三种文化（基督、伊斯兰、犹太）融合的世界遗产古城，迷宫般的石板街道", duration: "2小时", icon: "🏰" },
      { time: "16:00", title: "圣托梅教堂 - 格列柯名画", titleEs: "Iglesia de Santo Tomé", description: "收藏格列柯最著名作品《奥尔加斯伯爵的葬礼》", duration: "45分钟", icon: "🎨" },
      { time: "18:30", title: "返回马德里", titleEs: "Regreso a Madrid", description: "高铁返回，晚上抵达科尔多瓦酒店", duration: "30分钟", icon: "🚄" },
    ],
    hotel: {
      name: "科尔多瓦帕拉多尔酒店",
      stars: 4,
      description: "明日转战科尔多瓦，今晚早休",
      price: "¥900/晚",
    },
    food: [
      { dish: "杏仁糖", dishEs: "Mazapán", restaurant: "Santo Tomé", description: "托莱多特产，用杏仁和糖制成的传统甜点" },
      { dish: "卡斯蒂利亚炖肉", dishEs: "Carcamusa", restaurant: "Restaurante Adolfo", description: "托莱多传统炖猪肉配蔬菜" },
    ],
  },
  {
    day: 5,
    date: "5月5日",
    city: "科尔多瓦",
    cityEs: "Córdoba",
    region: "安达卢西亚",
    coords: [37.8882, -4.7794],
    imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80",
    color: "#D4A017",
    activities: [
      { time: "09:00", title: "清真寺-主教座堂", titleEs: "Mezquita-Catedral", description: "世界上最独特的建筑之一，摩尔式清真寺内建有天主教大教堂，UNESCO世界遗产", duration: "2小时", icon: "🕌" },
      { time: "12:00", title: "花巷", titleEs: "Calleja de las Flores", description: "科尔多瓦最著名的花卉小巷，5月花节期间鲜花盛开，绝美打卡地", duration: "1小时", icon: "🌸" },
      { time: "14:00", title: "犹太区漫步", titleEs: "Judería", description: "中世纪犹太人聚居区，白色小屋和橘子树构成的迷人风情", duration: "1.5小时", icon: "🏘️" },
      { time: "16:30", title: "麦地那·扎赫拉宫遗址", titleEs: "Medina Azahara", description: "10世纪哈里发宫城遗址，壮观的考古遗迹", duration: "1.5小时", icon: "🏛️" },
      { time: "19:30", title: "驾车前往塞维利亚", titleEs: "Conducir a Sevilla", description: "约1.5小时车程，或乘坐大巴", duration: "1.5小时", icon: "🚗" },
    ],
    hotel: {
      name: "塞维利亚EME大教堂酒店",
      stars: 5,
      description: "面对塞维利亚大教堂，绝佳位置",
      price: "¥1,400/晚",
    },
    food: [
      { dish: "冷汤", dishEs: "Salmorejo", restaurant: "Casa Pepe de la Judería", description: "科尔多瓦特色番茄冷汤，比西班牙冷汤更浓稠" },
      { dish: "牛尾炖", dishEs: "Rabo de Toro", restaurant: "El Churrasco", description: "安达卢西亚招牌菜，慢炖牛尾香气浓郁" },
    ],
  },
  {
    day: 6,
    date: "5月6日",
    city: "塞维利亚",
    cityEs: "Sevilla",
    region: "安达卢西亚首府",
    coords: [37.3891, -5.9845],
    imageUrl: "https://images.unsplash.com/photo-1547450801-ed2456feef2b?w=1920&q=80",
    color: "#C84B31",
    activities: [
      { time: "09:00", title: "塞维利亚大教堂与希拉尔达塔", titleEs: "Catedral y Giralda", description: "世界第三大教堂，哥伦布长眠于此，登顶希拉尔达塔俯瞰全城", duration: "2小时", icon: "⛪" },
      { time: "12:00", title: "阿尔卡萨宫", titleEs: "Real Alcázar", description: "仍在使用的最古老皇宫之一，穆德哈尔风格建筑，《权力的游戏》取景地", duration: "2小时", icon: "🏰" },
      { time: "15:00", title: "西班牙广场", titleEs: "Plaza de España", description: "宏伟的半圆形广场，《星球大战》和《阿拉伯的劳伦斯》取景地", duration: "1.5小时", icon: "🌟" },
      { time: "20:30", title: "正宗弗拉明戈秀", titleEs: "Flamenco Auténtico", description: "塔布拉奥·德卡门弗拉明戈表演，塞维利亚是弗拉明戈发源地", duration: "2小时", icon: "💃" },
    ],
    hotel: {
      name: "塞维利亚EME大教堂酒店",
      stars: 5,
      description: "连住第二晚",
      price: "¥1,400/晚",
    },
    food: [
      { dish: "炸鱼", dishEs: "Pescaíto Frito", restaurant: "Bar El Comercio", description: "安达卢西亚传统炸鱼，配柠檬汁" },
      { dish: "橄榄和腌制品", dishEs: "Aceitunas y Encurtidos", restaurant: "Bodega Santa Cruz", description: "塞维利亚最著名的老酒吧，塔帕斯文化发源地" },
    ],
  },
  {
    day: 7,
    date: "5月7日",
    city: "塞维利亚",
    cityEs: "Sevilla",
    region: "特里亚纳区",
    coords: [37.3814, -6.0027],
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    color: "#8B4513",
    activities: [
      { time: "09:30", title: "特里亚纳区探索", titleEs: "Barrio de Triana", description: "过瓜达尔基维尔河，探访弗拉明戈发源地，陶瓷作坊林立", duration: "2小时", icon: "🏘️" },
      { time: "12:00", title: "皮拉托斯宫", titleEs: "Casa de Pilatos", description: "融合哥特、文艺复兴和穆德哈尔风格的私人宫殿", duration: "1.5小时", icon: "🏛️" },
      { time: "14:30", title: "塞维利亚自由市场", titleEs: "Mercado de Triana", description: "当地人购物的传统市场，新鲜海鲜、火腿、橄榄油", duration: "1小时", icon: "🛒" },
      { time: "16:30", title: "驾车前往格拉纳达", titleEs: "Conducir a Granada", description: "约3小时车程，沿途欣赏安达卢西亚平原", duration: "3小时", icon: "🚗" },
    ],
    hotel: {
      name: "格拉纳达帕拉多尔酒店",
      stars: 5,
      description: "位于阿尔罕布拉宫内，传奇住宿体验",
      price: "¥2,200/晚",
    },
    food: [
      { dish: "塞维利亚炸茄子", dishEs: "Berenjenas con Miel", restaurant: "El Rinconcillo", description: "西班牙最古老酒吧，炸茄子配蜂蜜是招牌" },
    ],
  },
  {
    day: 8,
    date: "5月8日",
    city: "格拉纳达",
    cityEs: "Granada",
    region: "阿尔罕布拉宫",
    coords: [37.1773, -3.5986],
    imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80",
    color: "#2C5F2E",
    activities: [
      { time: "08:00", title: "阿尔罕布拉宫早场参观", titleEs: "Alhambra - Visita Matinal", description: "提前网上预订！纳萨里宫殿门票每天限量，卡洛斯五世宫、赫内拉利费花园", duration: "4小时", icon: "🏰" },
      { time: "13:00", title: "阿尔拜辛区午餐", titleEs: "Almuerzo en Albaicín", description: "摩尔区白色小屋，俯瞰阿尔罕布拉宫全景", duration: "1.5小时", icon: "🌄" },
      { time: "15:30", title: "观光台看日落", titleEs: "Mirador de San Nicolás", description: "格拉纳达最美观景台，夕阳下的阿尔罕布拉宫是毕生难忘的景象", duration: "2小时", icon: "🌅" },
      { time: "20:00", title: "洞穴弗拉明戈秀", titleEs: "Flamenco en Cuevas", description: "萨克罗蒙特洞穴区，感受最原始的弗拉明戈表演", duration: "2小时", icon: "💃" },
    ],
    hotel: {
      name: "格拉纳达帕拉多尔酒店",
      stars: 5,
      description: "连住第二晚，阿尔罕布拉宫内",
      price: "¥2,200/晚",
    },
    food: [
      { dish: "摩洛哥式鸡肉", dishEs: "Pollo a la Morisca", restaurant: "Restaurante Arrayanes", description: "融合摩尔风味的鸡肉料理，藏红花和干果调味" },
      { dish: "格拉纳达塔帕斯", dishEs: "Tapas Granadinas", restaurant: "Bar Los Diamantes", description: "格拉纳达特色：点一杯饮料免费附赠塔帕斯" },
    ],
  },
  {
    day: 9,
    date: "5月9日",
    city: "格拉纳达",
    cityEs: "Granada",
    region: "返程日",
    coords: [37.1887, -3.5908],
    imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80",
    color: "#1a0a00",
    activities: [
      { time: "09:00", title: "赫内拉利费花园", titleEs: "Jardines del Generalife", description: "如果昨日未游，今日补游阿尔罕布拉宫配套花园，春季鲜花盛开", duration: "1.5小时", icon: "🌺" },
      { time: "11:30", title: "格拉纳达大教堂", titleEs: "Catedral de Granada", description: "文艺复兴风格大教堂，皇家礼拜堂是天主教双王的长眠地", duration: "1小时", icon: "⛪" },
      { time: "14:00", title: "纪念品购物", titleEs: "Compras de Recuerdos", description: "采购陶瓷、皮革制品、藏红花、橄榄油等特产", duration: "1.5小时", icon: "🛍️" },
      { time: "17:00", title: "乘坐大巴/高铁返回马德里", titleEs: "Regreso a Madrid", description: "大巴约5小时，或先到马拉加乘AVE约2.5小时", duration: "5小时", icon: "🚌" },
    ],
    hotel: {
      name: "马德里机场希尔顿",
      stars: 4,
      description: "机场酒店，方便次日早班机返回",
      price: "¥800/晚",
    },
    food: [
      { dish: "格拉纳达早餐", dishEs: "Desayuno Granadino", restaurant: "Café Fútbol", description: "创立于1891年的传统咖啡馆，牛奶咖啡配油炸面团" },
    ],
  },
];
