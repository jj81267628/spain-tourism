import type { Locale } from "@/i18n/routing";
import type { DayData } from "./itinerary-a";

const zh: DayData[] = [
  {
    day: 1, date: "9月15日", city: "巴塞罗那", cityEs: "Barcelona", region: "加泰罗尼亚",
    coords: [41.3851, 2.1734], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#003087",
    activities: [
      { time: "10:00", title: "抵达巴塞罗那机场", titleEs: "Llegada al Aeropuerto", description: "乘坐地铁L9南线或出租车进城，约30-45分钟", duration: "1.5小时", icon: "✈️" },
      { time: "14:00", title: "兰布拉斯大道漫步", titleEs: "Las Ramblas", description: "巴塞罗那最著名的步行街，从加泰罗尼亚广场延伸至港口，街头艺人云集", duration: "1.5小时", icon: "🚶" },
      { time: "16:00", title: "哥特区探索", titleEs: "Barrio Gótico", description: "2000年历史的古罗马城区，迷宫般的中世纪街道", duration: "2小时", icon: "🏰" },
      { time: "19:00", title: "博克利亚市场参观", titleEs: "Mercat de la Boqueria", description: "巴塞罗那最著名的市场，海鲜、水果、伊比利亚火腿琳琅满目", duration: "1小时", icon: "🦑" },
    ],
    hotel: { name: "巴塞罗那W酒店", stars: 5, description: "帆船形建筑，海滨位置，无敌海景", price: "¥1,800/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "海鲜饭", dishEs: "Paella de Mariscos", restaurant: "7 Portes", description: "1836年开业，巴塞罗那最古老的餐厅，正宗加泰罗尼亚海鲜饭" },
      { dish: "番茄面包", dishEs: "Pan con Tomate", restaurant: "Bar Marsella", description: "加泰罗尼亚最基本的美食，大蒜摩擦面包后涂番茄和橄榄油" },
    ],
  },
  {
    day: 2, date: "9月16日", city: "巴塞罗那", cityEs: "Barcelona", region: "高迪建筑日",
    coords: [41.4036, 2.1744], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B1A1A",
    activities: [
      { time: "09:00", title: "圣家堂", titleEs: "Sagrada Família", description: "高迪毕生之作，1882年至今仍在建造，预计2026年完工。提前网上购票！", duration: "2.5小时", icon: "⛪" },
      { time: "12:30", title: "米拉之家", titleEs: "Casa Milà (La Pedrera)", description: "高迪设计的波浪形公寓楼，屋顶勇士雕塑是标志，内部开放参观", duration: "1.5小时", icon: "🏗️" },
      { time: "15:00", title: "巴特略之家", titleEs: "Casa Batlló", description: "最具视觉冲击力的高迪建筑，夜间灯光秀更为壮观", duration: "1.5小时", icon: "🦴" },
      { time: "18:00", title: "格拉西亚大道购物", titleEs: "Passeig de Gràcia", description: "巴塞罗那最豪华的林荫大道，奢侈品旗舰店和精品餐厅", duration: "2小时", icon: "🛍️" },
    ],
    hotel: { name: "巴塞罗那W酒店", stars: 5, description: "连住第二晚", price: "¥1,800/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "加泰罗尼亚奶油布丁", dishEs: "Crema Catalana", restaurant: "Els Quatre Gats", description: "1897年开业，毕加索常客，加泰罗尼亚传统焦糖布丁" },
      { dish: "墨鱼饭", dishEs: "Arroz Negro", restaurant: "Barceloneta", description: "用墨鱼汁染黑的海鲜饭，配芝士蛋黄酱" },
    ],
  },
  {
    day: 3, date: "9月17日", city: "巴塞罗那", cityEs: "Barcelona", region: "山丘与海滩",
    coords: [41.4145, 2.1527], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#2E86AB",
    activities: [
      { time: "09:00", title: "桂尔公园", titleEs: "Park Güell", description: "高迪设计的童话公园，彩色马赛克长廊和俯瞰全城的观景台。提前购票！", duration: "2小时", icon: "🌈" },
      { time: "12:00", title: "蒙特惠奇城堡", titleEs: "Castillo de Montjuïc", description: "乘坐缆车上山，俯瞰巴塞罗那和港口，1992年奥运会举办地", duration: "2小时", icon: "🏔️" },
      { time: "15:00", title: "巴塞罗那海滩", titleEs: "Playa de Barceloneta", description: "地中海沙滩，九月水温宜人，可游泳", duration: "2小时", icon: "🏖️" },
      { time: "19:00", title: "厄尔博恩区酒吧街", titleEs: "El Born", description: "时髦的波西米亚区，精品店、画廊和鸡尾酒吧", duration: "2小时", icon: "🍸" },
    ],
    hotel: { name: "巴塞罗那W酒店", stars: 5, description: "连住第三晚", price: "¥1,800/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "烤蔬菜拼盘", dishEs: "Escalivada", restaurant: "Bodega Sepúlveda", description: "加泰罗尼亚传统烤茄子、辣椒，淋橄榄油" },
    ],
  },
  {
    day: 4, date: "9月18日", city: "瓦伦西亚", cityEs: "Valencia", region: "海鲜饭的故乡",
    coords: [39.4699, -0.3763], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#FF6B35",
    activities: [
      { time: "09:00", title: "AVE高铁前往瓦伦西亚", titleEs: "AVE a Valencia", description: "巴塞罗那圣徒车站出发，约3小时，票价约45€", duration: "3小时", icon: "🚄" },
      { time: "13:00", title: "中央市场", titleEs: "Mercado Central", description: "欧洲最大的生鲜市场，1928年Art Deco建筑，品尝新鲜橙汁和海鲜", duration: "1.5小时", icon: "🍊" },
      { time: "15:00", title: "艺术科学城", titleEs: "Ciudad de las Artes y las Ciencias", description: "卡拉特拉瓦设计的未来主义建筑群，科学博物馆、海洋馆、歌剧院", duration: "3小时", icon: "🔬" },
      { time: "19:30", title: "旧城区塔帕斯巡礼", titleEs: "Tapeo por el Centro", description: "骑士街一带的传统酒吧，正宗瓦伦西亚小吃", duration: "2小时", icon: "🍺" },
    ],
    hotel: { name: "瓦伦西亚唯美酒店", stars: 5, description: "位于艺术科学城旁，设计感十足", price: "¥1,100/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Westin+Valencia" },
    food: [
      { dish: "正宗瓦伦西亚海鲜饭", dishEs: "Paella Valenciana", restaurant: "Restaurante Levante", description: "海鲜饭发源地，传统配方含兔肉、鸡肉和四季豆" },
      { dish: "油炸糕", dishEs: "Buñuelos con Chocolate", restaurant: "Horchatería Santa Catalina", description: "瓦伦西亚特色油炸糕配热巧克力" },
    ],
  },
  {
    day: 5, date: "9月19日", city: "瓦伦西亚", cityEs: "Valencia", region: "橙子之城",
    coords: [39.4747, -0.3803], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#FF8C00",
    activities: [
      { time: "09:00", title: "大教堂与圣杯", titleEs: "Catedral y Santo Cáliz", description: "相传收藏耶稣最后晚餐圣杯，登塔俯瞰城市全景", duration: "1.5小时", icon: "⛪" },
      { time: "11:00", title: "丝绸交易所", titleEs: "La Lonja de la Seda", description: "UNESCO遗产，15世纪哥特式商业建筑，世界上保存最好的中世纪商业建筑", duration: "1小时", icon: "🏛️" },
      { time: "13:00", title: "图里亚花园骑行", titleEs: "Jardín del Turia", description: "由干涸河床改建的9公里城市公园，租自行车游览", duration: "2小时", icon: "🚲" },
      { time: "16:00", title: "前往瓦伦西亚港口机场", titleEs: "Aeropuerto de Valencia", description: "飞往伊维萨岛，约1小时航程", duration: "3小时", icon: "✈️" },
    ],
    hotel: { name: "伊维萨岛格兰德酒店", stars: 5, description: "蓬嫩岛湾海滨酒店，私人沙滩", price: "¥2,500/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "虎奶", dishEs: "Horchata de Chufa", restaurant: "Horchatería Daniel", description: "瓦伦西亚特色虎坚果奶饮，配长条油炸面团" },
    ],
  },
  {
    day: 6, date: "9月20日", city: "伊维萨岛", cityEs: "Ibiza", region: "派对之岛",
    coords: [38.9067, 1.4206], imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80", color: "#7B2FBE",
    activities: [
      { time: "10:00", title: "伊维萨古城 - 达尔特维拉", titleEs: "Dalt Vila", description: "UNESCO世界遗产古城，俯瞰全岛的要塞，腓尼基人留下的2500年历史", duration: "2.5小时", icon: "🏰" },
      { time: "13:00", title: "帕佩雷特海滩", titleEs: "Playa d'en Bossa", description: "伊维萨最热闹的海滩，DJ音乐、水上运动，享受地中海阳光", duration: "3小时", icon: "🏖️" },
      { time: "17:00", title: "圣安东尼观夕阳", titleEs: "Puesta de Sol en San Antonio", description: "伊维萨最著名的夕阳观赏地，咖啡馆里看日落是必做体验", duration: "2小时", icon: "🌅" },
      { time: "22:00", title: "夜生活体验", titleEs: "Vida Nocturna", description: "伊维萨全球最著名夜店区（可选），或酒店休息", duration: "2小时", icon: "🎵" },
    ],
    hotel: { name: "伊维萨岛格兰德酒店", stars: 5, description: "连住第二晚", price: "¥2,500/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "伊维萨龙虾炖", dishEs: "Bullit de Peix", restaurant: "Can Pilot", description: "伊维萨传统渔民菜肴，海鲜炖饭" },
      { dish: "软奶酪", dishEs: "Queso de Ibiza", restaurant: "Mercat Vell", description: "伊维萨特产绵羊奶酪，配本地橄榄" },
    ],
  },
  {
    day: 7, date: "9月21日", city: "马略卡岛", cityEs: "Mallorca", region: "地中海明珠",
    coords: [39.5696, 2.6502], imageUrl: "https://images.unsplash.com/photo-1558618047-f4e20e5e28d4?w=1920&q=80", color: "#00A693",
    activities: [
      { time: "09:00", title: "乘渡轮前往马略卡", titleEs: "Ferry a Mallorca", description: "伊维萨到马略卡约2.5小时渡轮，欣赏地中海风光", duration: "2.5小时", icon: "⛴️" },
      { time: "12:30", title: "帕尔马大教堂", titleEs: "Catedral de Palma", description: "海边哥特式大教堂，高迪参与修缮，内有彩色玫瑰窗", duration: "1.5小时", icon: "⛪" },
      { time: "15:00", title: "贝利韦尔城堡", titleEs: "Castillo de Bellver", description: "唯一圆形哥特式城堡，俯瞰帕尔马湾全景", duration: "1.5小时", icon: "🏰" },
      { time: "17:30", title: "西北海岸风景大道驾车", titleEs: "Carretera Serra de Tramuntana", description: "UNESCO自然遗产山脉，蜿蜒海岸公路，壮观悬崖景色", duration: "2小时", icon: "🚗" },
    ],
    hotel: { name: "马略卡岛索尔梅利亚酒店", stars: 4, description: "帕尔马湾海滨，私人海滩", price: "¥1,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "马略卡炸肉饼", dishEs: "Frit Mallorquí", restaurant: "Celler Sa Premsa", description: "马略卡传统菜，内脏和蔬菜的独特组合" },
      { dish: "皮条饼", dishEs: "Ensaïmada", restaurant: "Forn des Teatre", description: "马略卡标志性甜点，螺旋形酥皮糕点" },
    ],
  },
  {
    day: 8, date: "9月22日", city: "马略卡岛", cityEs: "Mallorca", region: "海湾与洞穴",
    coords: [39.7227, 3.4363], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#0077B6",
    activities: [
      { time: "09:00", title: "德拉戈纳石窟", titleEs: "Coves del Drac", description: "世界最大地下湖之一，石钟乳奇景，湖上音乐表演", duration: "2.5小时", icon: "🦇" },
      { time: "12:30", title: "科拉半岛水晶湾", titleEs: "Platja de Formentor", description: "马略卡最美海滩，松树林、细白沙滩和清澈蓝水", duration: "3小时", icon: "🏖️" },
      { time: "16:30", title: "索勒小镇", titleEs: "Sóller", description: "乘坐百年历史的木质火车，穿越橘子园到达山中小镇", duration: "2小时", icon: "🚂" },
      { time: "20:00", title: "帕尔马夜间美食之旅", titleEs: "Gastronomía Nocturna", description: "品尝马略卡特色葡萄酒和精致海鲜料理", duration: "2小时", icon: "🍷" },
    ],
    hotel: { name: "马略卡岛索尔梅利亚酒店", stars: 4, description: "连住第二晚", price: "¥1,200/晚", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "马略卡烤羊", dishEs: "Cordero Mallorquín", restaurant: "Es Molí d'en Bou", description: "地中海风味烤羊，配本地香草和橄榄油" },
      { dish: "索布拉萨达香肠", dishEs: "Sobrassada", restaurant: "Mercat de l'Olivar", description: "马略卡特色红椒猪肉香肠，涂面包食用" },
    ],
  },
  {
    day: 9, date: "9月23日", city: "马略卡岛", cityEs: "Mallorca", region: "返程日",
    coords: [39.5517, 2.7388], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "帕尔马老城最后漫步", titleEs: "Último Paseo por Palma", description: "阿拉伯浴场、王室宫殿区的晨间宁静", duration: "1.5小时", icon: "🚶" },
      { time: "11:00", title: "机场免税购物", titleEs: "Compras en Aeropuerto", description: "马略卡橄榄油、葡萄酒、皮具带回家", duration: "1.5小时", icon: "🛍️" },
      { time: "14:00", title: "飞回中国或巴塞罗那转机", titleEs: "Vuelo de Regreso", description: "马略卡直飞多个中国城市，或经巴塞罗那/马德里转机", duration: "全天", icon: "✈️" },
    ],
    hotel: { name: "旅程结束", stars: 0, description: "美好回忆永存心中", price: "" },
    food: [
      { dish: "机场早餐", dishEs: "Desayuno en Aeropuerto", restaurant: "机场餐厅", description: "最后一顿西班牙早餐，浓缩咖啡配可颂" },
    ],
  },
];

const en: DayData[] = [
  {
    day: 1, date: "Sep 15", city: "Barcelona", cityEs: "Barcelona", region: "Catalonia",
    coords: [41.3851, 2.1734], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#003087",
    activities: [
      { time: "10:00", title: "Arrive at Barcelona Airport", titleEs: "Llegada al Aeropuerto", description: "Take metro Line L9 South or taxi to city centre — approx. 30–45 min", duration: "1.5 hrs", icon: "✈️" },
      { time: "14:00", title: "Las Ramblas", titleEs: "Las Ramblas", description: "Barcelona's most famous promenade, stretching from Plaça Catalunya to the port — alive with street performers", duration: "1.5 hrs", icon: "🚶" },
      { time: "16:00", title: "Gothic Quarter", titleEs: "Barrio Gótico", description: "2,000-year-old Roman district with labyrinthine medieval streets", duration: "2 hrs", icon: "🏰" },
      { time: "19:00", title: "La Boqueria Market", titleEs: "Mercat de la Boqueria", description: "Barcelona's most famous market — overflowing with seafood, fruit and Iberian ham", duration: "1 hr", icon: "🦑" },
    ],
    hotel: { name: "W Barcelona", stars: 5, description: "Iconic sail-shaped building on the seafront with unbeatable ocean views", price: "€225/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "Seafood Paella", dishEs: "Paella de Mariscos", restaurant: "7 Portes", description: "Opened in 1836 — Barcelona's oldest restaurant and home to authentic Catalan paella" },
      { dish: "Pan con Tomate", dishEs: "Pan con Tomate", restaurant: "Bar Marsella", description: "Catalan staple — bread rubbed with garlic, spread with tomato and olive oil" },
    ],
  },
  {
    day: 2, date: "Sep 16", city: "Barcelona", cityEs: "Barcelona", region: "Gaudí Architecture Day",
    coords: [41.4036, 2.1744], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B1A1A",
    activities: [
      { time: "09:00", title: "Sagrada Família", titleEs: "Sagrada Família", description: "Gaudí's life's work, under construction since 1882 with completion expected in 2026. Book online in advance!", duration: "2.5 hrs", icon: "⛪" },
      { time: "12:30", title: "Casa Milà (La Pedrera)", titleEs: "Casa Milà (La Pedrera)", description: "Gaudí's wave-like apartment building with iconic rooftop warrior sculptures — open for tours inside", duration: "1.5 hrs", icon: "🏗️" },
      { time: "15:00", title: "Casa Batlló", titleEs: "Casa Batlló", description: "Gaudí's most visually striking building — even more spectacular during the night light show", duration: "1.5 hrs", icon: "🦴" },
      { time: "18:00", title: "Passeig de Gràcia Shopping", titleEs: "Passeig de Gràcia", description: "Barcelona's most luxurious boulevard — luxury flagships and gourmet restaurants", duration: "2 hrs", icon: "🛍️" },
    ],
    hotel: { name: "W Barcelona", stars: 5, description: "Second night", price: "€225/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "Crema Catalana", dishEs: "Crema Catalana", restaurant: "Els Quatre Gats", description: "Opened 1897, a favourite of Picasso — classic Catalan burnt cream dessert" },
      { dish: "Arroz Negro", dishEs: "Arroz Negro", restaurant: "Barceloneta", description: "Squid-ink seafood rice served with alioli" },
    ],
  },
  {
    day: 3, date: "Sep 17", city: "Barcelona", cityEs: "Barcelona", region: "Hills & Beaches",
    coords: [41.4145, 2.1527], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#2E86AB",
    activities: [
      { time: "09:00", title: "Park Güell", titleEs: "Park Güell", description: "Gaudí's fairytale park — colourful mosaic terrace with city panorama. Book ahead!", duration: "2 hrs", icon: "🌈" },
      { time: "12:00", title: "Montjuïc Castle", titleEs: "Castillo de Montjuïc", description: "Take the cable car up — panoramic views over Barcelona and the harbour. 1992 Olympics venue", duration: "2 hrs", icon: "🏔️" },
      { time: "15:00", title: "Barceloneta Beach", titleEs: "Playa de Barceloneta", description: "Mediterranean beach — September water temperatures are perfect for swimming", duration: "2 hrs", icon: "🏖️" },
      { time: "19:00", title: "El Born Bar Crawl", titleEs: "El Born", description: "Trendy bohemian district — boutiques, galleries and cocktail bars", duration: "2 hrs", icon: "🍸" },
    ],
    hotel: { name: "W Barcelona", stars: 5, description: "Third night", price: "€225/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "Escalivada", dishEs: "Escalivada", restaurant: "Bodega Sepúlveda", description: "Traditional Catalan roasted aubergine and peppers drizzled with olive oil" },
    ],
  },
  {
    day: 4, date: "Sep 18", city: "Valencia", cityEs: "Valencia", region: "Home of Paella",
    coords: [39.4699, -0.3763], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#FF6B35",
    activities: [
      { time: "09:00", title: "AVE Train to Valencia", titleEs: "AVE a Valencia", description: "Depart Barcelona Sants station, ~3 hrs, ~€45", duration: "3 hrs", icon: "🚄" },
      { time: "13:00", title: "Mercado Central", titleEs: "Mercado Central", description: "One of Europe's largest fresh markets in a 1928 Art Deco building — try fresh orange juice and seafood", duration: "1.5 hrs", icon: "🍊" },
      { time: "15:00", title: "City of Arts and Sciences", titleEs: "Ciudad de las Artes y las Ciencias", description: "Calatrava's futurist complex — science museum, oceanarium and opera house", duration: "3 hrs", icon: "🔬" },
      { time: "19:30", title: "Tapas Tour of the Old City", titleEs: "Tapeo por el Centro", description: "Traditional bars around Calle Caballeros — authentic Valencian small bites", duration: "2 hrs", icon: "🍺" },
    ],
    hotel: { name: "The Westin Valencia", stars: 5, description: "Adjacent to the City of Arts and Sciences — design-forward luxury", price: "€135/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Westin+Valencia" },
    food: [
      { dish: "Paella Valenciana", dishEs: "Paella Valenciana", restaurant: "Restaurante Levante", description: "The birthplace of paella — traditional recipe with rabbit, chicken and green beans" },
      { dish: "Buñuelos con Chocolate", dishEs: "Buñuelos con Chocolate", restaurant: "Horchatería Santa Catalina", description: "Valencian fried dough fritters with hot chocolate" },
    ],
  },
  {
    day: 5, date: "Sep 19", city: "Valencia", cityEs: "Valencia", region: "City of Oranges",
    coords: [39.4747, -0.3803], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#FF8C00",
    activities: [
      { time: "09:00", title: "Valencia Cathedral & Holy Grail", titleEs: "Catedral y Santo Cáliz", description: "Said to house the chalice from the Last Supper — climb the tower for city views", duration: "1.5 hrs", icon: "⛪" },
      { time: "11:00", title: "La Lonja de la Seda", titleEs: "La Lonja de la Seda", description: "UNESCO World Heritage — finest surviving Gothic commercial building, dating to the 15th century", duration: "1 hr", icon: "🏛️" },
      { time: "13:00", title: "Turia Gardens Bike Ride", titleEs: "Jardín del Turia", description: "9 km urban park created from a former riverbed — rent a bike and explore", duration: "2 hrs", icon: "🚲" },
      { time: "16:00", title: "Fly to Ibiza", titleEs: "Aeropuerto de Valencia", description: "~1 hour flight from Valencia Airport", duration: "3 hrs", icon: "✈️" },
    ],
    hotel: { name: "Grand Hotel Ibiza", stars: 5, description: "Beachfront hotel on Poniente Bay with private beach", price: "€310/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "Horchata de Chufa", dishEs: "Horchata de Chufa", restaurant: "Horchatería Daniel", description: "Valencia's unique tiger nut milk drink served with fartons (long pastry sticks)" },
    ],
  },
  {
    day: 6, date: "Sep 20", city: "Ibiza", cityEs: "Ibiza", region: "The Party Island",
    coords: [38.9067, 1.4206], imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80", color: "#7B2FBE",
    activities: [
      { time: "10:00", title: "Dalt Vila Old Town", titleEs: "Dalt Vila", description: "UNESCO World Heritage — fortress with 2,500 years of history from Phoenician origins, overlooking the whole island", duration: "2.5 hrs", icon: "🏰" },
      { time: "13:00", title: "Playa d'en Bossa", titleEs: "Playa d'en Bossa", description: "Ibiza's liveliest beach — DJ music, water sports and Mediterranean sunshine", duration: "3 hrs", icon: "🏖️" },
      { time: "17:00", title: "Sunset at San Antonio", titleEs: "Puesta de Sol en San Antonio", description: "Ibiza's most famous sunset viewpoint — watching the sun dip into the sea from a café is a must-do", duration: "2 hrs", icon: "🌅" },
      { time: "22:00", title: "Nightlife (optional)", titleEs: "Vida Nocturna", description: "World-famous Ibiza club scene (optional), or relax at the hotel", duration: "2 hrs", icon: "🎵" },
    ],
    hotel: { name: "Grand Hotel Ibiza", stars: 5, description: "Second night", price: "€310/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "Bullit de Peix", dishEs: "Bullit de Peix", restaurant: "Can Pilot", description: "Traditional Ibizan fisherman's stew with fresh catch and rice" },
      { dish: "Queso de Ibiza", dishEs: "Queso de Ibiza", restaurant: "Mercat Vell", description: "Local sheep's milk cheese served with island olives" },
    ],
  },
  {
    day: 7, date: "Sep 21", city: "Mallorca", cityEs: "Mallorca", region: "Pearl of the Mediterranean",
    coords: [39.5696, 2.6502], imageUrl: "https://images.unsplash.com/photo-1558618047-f4e20e5e28d4?w=1920&q=80", color: "#00A693",
    activities: [
      { time: "09:00", title: "Ferry to Mallorca", titleEs: "Ferry a Mallorca", description: "~2.5 hr ferry from Ibiza — enjoy the Mediterranean scenery", duration: "2.5 hrs", icon: "⛴️" },
      { time: "12:30", title: "Palma Cathedral", titleEs: "Catedral de Palma", description: "Gothic cathedral by the sea — Gaudí contributed to its restoration. Stunning rose window inside", duration: "1.5 hrs", icon: "⛪" },
      { time: "15:00", title: "Bellver Castle", titleEs: "Castillo de Bellver", description: "The only circular Gothic castle in the world, overlooking the Bay of Palma", duration: "1.5 hrs", icon: "🏰" },
      { time: "17:30", title: "Serra de Tramuntana Coastal Drive", titleEs: "Carretera Serra de Tramuntana", description: "UNESCO World Heritage mountain range — dramatic coastal road with spectacular cliffs", duration: "2 hrs", icon: "🚗" },
    ],
    hotel: { name: "Sol Meliá Mallorca", stars: 4, description: "Beachfront on the Bay of Palma with private beach", price: "€150/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "Frit Mallorquí", dishEs: "Frit Mallorquí", restaurant: "Celler Sa Premsa", description: "Traditional Mallorcan dish — offal and vegetables in a unique combination" },
      { dish: "Ensaïmada", dishEs: "Ensaïmada", restaurant: "Forn des Teatre", description: "Mallorca's iconic pastry — light spiral-shaped bun dusted with icing sugar" },
    ],
  },
  {
    day: 8, date: "Sep 22", city: "Mallorca", cityEs: "Mallorca", region: "Coves & Coves",
    coords: [39.7227, 3.4363], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#0077B6",
    activities: [
      { time: "09:00", title: "Coves del Drac", titleEs: "Coves del Drac", description: "One of the world's largest underground lakes — spectacular stalactites and a live music performance on the lake", duration: "2.5 hrs", icon: "🦇" },
      { time: "12:30", title: "Platja de Formentor", titleEs: "Platja de Formentor", description: "Mallorca's most beautiful beach — pine forests, white sand and crystal-clear water", duration: "3 hrs", icon: "🏖️" },
      { time: "16:30", title: "Sóller Village", titleEs: "Sóller", description: "Ride the century-old wooden train through orange groves to this charming mountain town", duration: "2 hrs", icon: "🚂" },
      { time: "20:00", title: "Palma Gastronomic Evening", titleEs: "Gastronomía Nocturna", description: "Enjoy Mallorcan wines and refined seafood dishes in the old city", duration: "2 hrs", icon: "🍷" },
    ],
    hotel: { name: "Sol Meliá Mallorca", stars: 4, description: "Second night", price: "€150/night", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "Cordero Mallorquín", dishEs: "Cordero Mallorquín", restaurant: "Es Molí d'en Bou", description: "Mediterranean-style roast lamb with local herbs and olive oil" },
      { dish: "Sobrassada", dishEs: "Sobrassada", restaurant: "Mercat de l'Olivar", description: "Mallorca's signature cured red pepper sausage — spread on warm bread" },
    ],
  },
  {
    day: 9, date: "Sep 23", city: "Mallorca", cityEs: "Mallorca", region: "Departure Day",
    coords: [39.5517, 2.7388], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "Final Stroll through Palma", titleEs: "Último Paseo por Palma", description: "Peaceful morning in the Arab Baths and Royal Palace district", duration: "1.5 hrs", icon: "🚶" },
      { time: "11:00", title: "Airport Duty-Free Shopping", titleEs: "Compras en Aeropuerto", description: "Stock up on Mallorcan olive oil, wine and leather goods to take home", duration: "1.5 hrs", icon: "🛍️" },
      { time: "14:00", title: "Return Flight", titleEs: "Vuelo de Regreso", description: "Mallorca has direct flights to many destinations, or connect via Barcelona / Madrid", duration: "All day", icon: "✈️" },
    ],
    hotel: { name: "Journey's End", stars: 0, description: "Wonderful memories to last a lifetime", price: "" },
    food: [
      { dish: "Airport Breakfast", dishEs: "Desayuno en Aeropuerto", restaurant: "Airport Restaurant", description: "One last espresso and croissant before heading home" },
    ],
  },
];

const ja: DayData[] = [
  {
    day: 1, date: "9月15日", city: "バルセロナ", cityEs: "Barcelona", region: "カタルーニャ",
    coords: [41.3851, 2.1734], imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1920&q=80", color: "#003087",
    activities: [
      { time: "10:00", title: "バルセロナ空港に到着", titleEs: "Llegada al Aeropuerto", description: "地下鉄L9南線またはタクシーで市内へ、約30〜45分", duration: "1.5時間", icon: "✈️" },
      { time: "14:00", title: "ラス・ランブラス散策", titleEs: "Las Ramblas", description: "カタルーニャ広場から港まで続くバルセロナ最有名の遊歩道 — 大道芸人が賑わう", duration: "1.5時間", icon: "🚶" },
      { time: "16:00", title: "ゴシック地区探索", titleEs: "Barrio Gótico", description: "2,000年の歴史を持つローマ時代の城郭都市 — 迷宮のような中世の街並み", duration: "2時間", icon: "🏰" },
      { time: "19:00", title: "ボケリア市場見学", titleEs: "Mercat de la Boqueria", description: "バルセロナ最有名の市場 — 新鮮な魚介類、フルーツ、イベリコハムが並ぶ", duration: "1時間", icon: "🦑" },
    ],
    hotel: { name: "Wバルセロナ", stars: 5, description: "帆船型の象徴的な建物、海沿いのロケーションで絶景の海景色", price: "€225/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "シーフード・パエリア", dishEs: "Paella de Mariscos", restaurant: "7 Portes", description: "1836年創業、バルセロナ最古のレストラン — 本場カタルーニャ・パエリア" },
      { dish: "パン・コン・トマテ", dishEs: "Pan con Tomate", restaurant: "Bar Marsella", description: "カタルーニャの基本料理 — ニンニクをこすりつけたパンにトマトとオリーブオイル" },
    ],
  },
  {
    day: 2, date: "9月16日", city: "バルセロナ", cityEs: "Barcelona", region: "ガウディ建築の日",
    coords: [41.4036, 2.1744], imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80", color: "#8B1A1A",
    activities: [
      { time: "09:00", title: "サグラダ・ファミリア", titleEs: "Sagrada Família", description: "ガウディの生涯の傑作。1882年から建設中で2026年完成予定。オンラインで事前購入を！", duration: "2.5時間", icon: "⛪" },
      { time: "12:30", title: "カサ・ミラ（ラ・ペドレラ）", titleEs: "Casa Milà (La Pedrera)", description: "ガウディ設計の波打つアパート — 屋上の戦士像が有名。内部も見学可能", duration: "1.5時間", icon: "🏗️" },
      { time: "15:00", title: "カサ・バトリョ", titleEs: "Casa Batlló", description: "ガウディ最もインパクトのある建築 — 夜のライトアップはさらに圧巻", duration: "1.5時間", icon: "🦴" },
      { time: "18:00", title: "パセイ・デ・グラシアでショッピング", titleEs: "Passeig de Gràcia", description: "バルセロナ最豪華な並木道 — ラグジュアリーブランドのフラッグシップとグルメレストラン", duration: "2時間", icon: "🛍️" },
    ],
    hotel: { name: "Wバルセロナ", stars: 5, description: "2泊目", price: "€225/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "クレマ・カタラーナ", dishEs: "Crema Catalana", restaurant: "Els Quatre Gats", description: "1897年創業、ピカソの行きつけ — カタルーニャ伝統のクレームブリュレ" },
      { dish: "アロス・ネグロ", dishEs: "Arroz Negro", restaurant: "Barceloneta", description: "イカ墨で黒く染めたシーフードライス、アリオリ添え" },
    ],
  },
  {
    day: 3, date: "9月17日", city: "バルセロナ", cityEs: "Barcelona", region: "丘と海岸",
    coords: [41.4145, 2.1527], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#2E86AB",
    activities: [
      { time: "09:00", title: "グエル公園", titleEs: "Park Güell", description: "ガウディのおとぎの国の公園 — カラフルなモザイクのテラスと全市パノラマ。事前購入を！", duration: "2時間", icon: "🌈" },
      { time: "12:00", title: "モンジュイック城", titleEs: "Castillo de Montjuïc", description: "ケーブルカーで登る — バルセロナと港を一望。1992年オリンピック開催地", duration: "2時間", icon: "🏔️" },
      { time: "15:00", title: "バルセロネータビーチ", titleEs: "Playa de Barceloneta", description: "地中海のビーチ — 9月の水温は水泳に最適", duration: "2時間", icon: "🏖️" },
      { time: "19:00", title: "エル・ボルン地区", titleEs: "El Born", description: "おしゃれなボヘミアン地区 — ブティック、ギャラリー、カクテルバー", duration: "2時間", icon: "🍸" },
    ],
    hotel: { name: "Wバルセロナ", stars: 5, description: "3泊目", price: "€225/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=W+Hotel+Barcelona" },
    food: [
      { dish: "エスカリバーダ", dishEs: "Escalivada", restaurant: "Bodega Sepúlveda", description: "カタルーニャの伝統的な焼きナスとパプリカ、オリーブオイルがけ" },
    ],
  },
  {
    day: 4, date: "9月18日", city: "バレンシア", cityEs: "Valencia", region: "パエリア発祥の地",
    coords: [39.4699, -0.3763], imageUrl: "https://images.unsplash.com/photo-1555993539-1732b0258235?w=1920&q=80", color: "#FF6B35",
    activities: [
      { time: "09:00", title: "AVEでバレンシアへ", titleEs: "AVE a Valencia", description: "バルセロナ・サンツ駅発、約3時間、約€45", duration: "3時間", icon: "🚄" },
      { time: "13:00", title: "セントラル市場", titleEs: "Mercado Central", description: "1928年のアールデコ建築にヨーロッパ最大規模の生鮮市場 — 新鮮なオレンジジュースと海産物を堪能", duration: "1.5時間", icon: "🍊" },
      { time: "15:00", title: "芸術科学都市", titleEs: "Ciudad de las Artes y las Ciencias", description: "カラトラバ設計の未来派複合施設 — 科学博物館、海洋館、オペラハウス", duration: "3時間", icon: "🔬" },
      { time: "19:30", title: "旧市街タパスツアー", titleEs: "Tapeo por el Centro", description: "カバジェロス通り界隈の伝統的なバー — 本場バレンシアのタパス", duration: "2時間", icon: "🍺" },
    ],
    hotel: { name: "ウェスティン・バレンシア", stars: 5, description: "芸術科学都市に隣接するデザインホテル", price: "€135/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Westin+Valencia" },
    food: [
      { dish: "パエリア・バレンシアーナ", dishEs: "Paella Valenciana", restaurant: "Restaurante Levante", description: "パエリア発祥の地 — うさぎ肉、鶏肉、さやいんげん入りの伝統レシピ" },
      { dish: "ブニュエロス・コン・チョコラテ", dishEs: "Buñuelos con Chocolate", restaurant: "Horchatería Santa Catalina", description: "バレンシアの揚げ菓子とホットチョコレート" },
    ],
  },
  {
    day: 5, date: "9月19日", city: "バレンシア", cityEs: "Valencia", region: "オレンジの都市",
    coords: [39.4747, -0.3803], imageUrl: "https://images.unsplash.com/photo-1512699355324-f07e3106dae5?w=1920&q=80", color: "#FF8C00",
    activities: [
      { time: "09:00", title: "バレンシア大聖堂と聖杯", titleEs: "Catedral y Santo Cáliz", description: "最後の晩餐の聖杯を所蔵すると言われる。塔に登り市街を一望", duration: "1.5時間", icon: "⛪" },
      { time: "11:00", title: "ラ・ロンハ・デ・ラ・セダ（絹の取引所）", titleEs: "La Lonja de la Seda", description: "ユネスコ世界遺産 — 15世紀ゴシック様式の商業建築、現存する中世の商業建築として最高傑作", duration: "1時間", icon: "🏛️" },
      { time: "13:00", title: "トゥリア庭園でサイクリング", titleEs: "Jardín del Turia", description: "廃川跡を改造した9kmの都市公園 — レンタサイクルで巡る", duration: "2時間", icon: "🚲" },
      { time: "16:00", title: "イビサ島へフライト", titleEs: "Aeropuerto de Valencia", description: "バレンシア空港から約1時間のフライト", duration: "3時間", icon: "✈️" },
    ],
    hotel: { name: "グランドホテル・イビサ", stars: 5, description: "ポニエンテ湾のビーチフロントホテル、プライベートビーチ付き", price: "€310/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "オルチャタ・デ・チュファ", dishEs: "Horchata de Chufa", restaurant: "Horchatería Daniel", description: "バレンシア独自のトラの実ミルク飲料、ファルトン（長い揚げパン）と一緒に" },
    ],
  },
  {
    day: 6, date: "9月20日", city: "イビサ島", cityEs: "Ibiza", region: "パーティーアイランド",
    coords: [38.9067, 1.4206], imageUrl: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=1920&q=80", color: "#7B2FBE",
    activities: [
      { time: "10:00", title: "ダルト・ビラ旧市街", titleEs: "Dalt Vila", description: "ユネスコ世界遺産 — フェニキア人から2,500年の歴史を持つ要塞都市、島全体を一望", duration: "2.5時間", icon: "🏰" },
      { time: "13:00", title: "プラヤ・デン・ボッサ", titleEs: "Playa d'en Bossa", description: "イビサ最賑やかなビーチ — DJミュージック、ウォータースポーツ、地中海の陽光を楽しむ", duration: "3時間", icon: "🏖️" },
      { time: "17:00", title: "サン・アントニオで夕日鑑賞", titleEs: "Puesta de Sol en San Antonio", description: "イビサで最も有名な夕日スポット — カフェで日没を眺めるのは必体験", duration: "2時間", icon: "🌅" },
      { time: "22:00", title: "ナイトライフ（任意）", titleEs: "Vida Nocturna", description: "世界的に有名なイビサのクラブシーン（任意）、またはホテルでのんびり", duration: "2時間", icon: "🎵" },
    ],
    hotel: { name: "グランドホテル・イビサ", stars: 5, description: "2泊目", price: "€310/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Grand+Hotel+Ibiza" },
    food: [
      { dish: "ブリット・デ・ペイシュ", dishEs: "Bullit de Peix", restaurant: "Can Pilot", description: "伝統的なイビサの漁師料理 — 新鮮な魚介のシチューとライス" },
      { dish: "ケソ・デ・イビサ", dishEs: "Queso de Ibiza", restaurant: "Mercat Vell", description: "地元産の羊乳チーズ、島のオリーブを添えて" },
    ],
  },
  {
    day: 7, date: "9月21日", city: "マジョルカ島", cityEs: "Mallorca", region: "地中海の真珠",
    coords: [39.5696, 2.6502], imageUrl: "https://images.unsplash.com/photo-1558618047-f4e20e5e28d4?w=1920&q=80", color: "#00A693",
    activities: [
      { time: "09:00", title: "マジョルカ島へフェリー", titleEs: "Ferry a Mallorca", description: "イビサからマジョルカへ約2.5時間のフェリー、地中海の景色を楽しむ", duration: "2.5時間", icon: "⛴️" },
      { time: "12:30", title: "パルマ大聖堂", titleEs: "Catedral de Palma", description: "海辺のゴシック大聖堂 — ガウディも修復に関与。美しいバラ窓", duration: "1.5時間", icon: "⛪" },
      { time: "15:00", title: "ベリベル城", titleEs: "Castillo de Bellver", description: "世界唯一の円形ゴシック城、パルマ湾全景を望む", duration: "1.5時間", icon: "🏰" },
      { time: "17:30", title: "トラムンタナ山脈海岸ドライブ", titleEs: "Carretera Serra de Tramuntana", description: "ユネスコ自然遺産の山岳地帯 — 壮大な断崖を望む蛇行する海岸道路", duration: "2時間", icon: "🚗" },
    ],
    hotel: { name: "ソル・メリア・マジョルカ", stars: 4, description: "パルマ湾の海辺、プライベートビーチ付き", price: "€150/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "フリット・マジョルキ", dishEs: "Frit Mallorquí", restaurant: "Celler Sa Premsa", description: "マジョルカの伝統料理 — 内臓と野菜を組み合わせた独特の一品" },
      { dish: "エンサイマダ", dishEs: "Ensaïmada", restaurant: "Forn des Teatre", description: "マジョルカの象徴的な菓子パン — 軽くてふわふわの渦巻き型、粉砂糖をまぶして" },
    ],
  },
  {
    day: 8, date: "9月22日", city: "マジョルカ島", cityEs: "Mallorca", region: "湾と洞窟",
    coords: [39.7227, 3.4363], imageUrl: "https://images.unsplash.com/photo-1569959220744-ff553533f492?w=1920&q=80", color: "#0077B6",
    activities: [
      { time: "09:00", title: "ドラック洞窟", titleEs: "Coves del Drac", description: "世界最大の地下湖のひとつ — 鍾乳石の絶景と湖上での生演奏", duration: "2.5時間", icon: "🦇" },
      { time: "12:30", title: "フォルメントール海岸", titleEs: "Platja de Formentor", description: "マジョルカ最美のビーチ — 松林、白い砂浜、澄んだ青い海", duration: "3時間", icon: "🏖️" },
      { time: "16:30", title: "ソイェル村", titleEs: "Sóller", description: "百年の歴史を持つ木造列車でオレンジ畑を抜けて山間の小さな村へ", duration: "2時間", icon: "🚂" },
      { time: "20:00", title: "パルマのグルメの夜", titleEs: "Gastronomía Nocturna", description: "マジョルカのワインと洗練されたシーフード料理を旧市街で堪能", duration: "2時間", icon: "🍷" },
    ],
    hotel: { name: "ソル・メリア・マジョルカ", stars: 4, description: "2泊目", price: "€150/泊", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sol+Melia+Mallorca+Palma" },
    food: [
      { dish: "コルデロ・マジョルキン", dishEs: "Cordero Mallorquín", restaurant: "Es Molí d'en Bou", description: "地中海風ローストラム、地元ハーブとオリーブオイル添え" },
      { dish: "ソブラサーダ", dishEs: "Sobrassada", restaurant: "Mercat de l'Olivar", description: "マジョルカ特産の赤パプリカ豚肉ソーセージ — パンに塗って食べる" },
    ],
  },
  {
    day: 9, date: "9月23日", city: "マジョルカ島", cityEs: "Mallorca", region: "出発日",
    coords: [39.5517, 2.7388], imageUrl: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1920&q=80", color: "#1a0a00",
    activities: [
      { time: "09:00", title: "パルマ旧市街の最後の散策", titleEs: "Último Paseo por Palma", description: "アラブ浴場と王宮地区の朝の静寂を楽しむ", duration: "1.5時間", icon: "🚶" },
      { time: "11:00", title: "空港での免税ショッピング", titleEs: "Compras en Aeropuerto", description: "マジョルカのオリーブオイル、ワイン、革製品をお土産に", duration: "1.5時間", icon: "🛍️" },
      { time: "14:00", title: "帰路のフライト", titleEs: "Vuelo de Regreso", description: "マジョルカから直行便、またはバルセロナ/マドリード経由で乗り継ぎ", duration: "終日", icon: "✈️" },
    ],
    hotel: { name: "旅の終わり", stars: 0, description: "素晴らしい思い出が心に永遠に残る", price: "" },
    food: [
      { dish: "空港での朝食", dishEs: "Desayuno en Aeropuerto", restaurant: "空港レストラン", description: "最後のエスプレッソとクロワッサン — 旅の締めくくりに" },
    ],
  },
];

export const itineraryB: Record<Locale, DayData[]> = { en, zh, ja };
