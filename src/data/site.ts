export const NAV = [
  { href: "/work", label: "WORK" },
  { href: "/visual", label: "VISUAL" },
  { href: "/ai-lab", label: "AI LAB" },
  { href: "/about", label: "ABOUT" },
] as const;

export const WORK = [
  {
    slug: "live-activity",
    title: "停車 Live Activity 即時動態",
    subtitle: "停車狀態即時查看",
    year: "2024",
    type: "APP",
    cover: "/media/work-live.jpg",
  },
  {
    slug: "ai-assistant",
    title: "AI 出行秘書",
    subtitle: "對話式地點搜尋",
    year: "2025",
    type: "APP",
    cover: "/media/work-ai.jpg",
    video: "/media/work-ai.mp4",
  },
  {
    slug: "autopass.xyz",
    title: "Autopass.xyz",
    subtitle: "打造未來停車品牌",
    year: "2024",
    type: "WEB",
    cover: "/media/work-xyz.jpg",
  },
  {
    slug: "autopass-vision",
    title: "Autopass Vision",
    subtitle: "連結下一代城市移動體驗",
    year: "2023",
    type: "WEB",
    cover: "/media/work-vision.jpg",
  },
  {
    slug: "parking-payment",
    title: "停車線上付",
    subtitle: "停車繳費數位化",
    year: "2021",
    type: "WEB",
    cover: "/media/work-parking.jpg",
  },
  {
    slug: "pickncharge",
    title: "Pick N Charge",
    subtitle: "電動車充電體驗",
    year: "2021",
    type: "WEB",
    cover: "/media/work-pnc.jpg",
  },
  {
    slug: "pba",
    title: "powered by Autopass",
    subtitle: "行車支付授權生態系",
    year: "2022–2025",
    type: "WEB",
    cover: "/media/work-pba.jpg",
  },
  {
    slug: "dpass",
    title: "駕駛中心",
    subtitle: "串連折抵移動點數",
    year: "2025",
    type: "WEB",
    cover: "/media/work-dpass.jpg",
    video: "/media/work-dpass.mp4",
  },
] as const;

export const WORK_INTRO = {
  before:
    "作品選自支付與移動領域，橫跨停車付款、地圖互動、語音辨識等場景，包含 ",
  links: [
    { slug: "live-activity", label: "Live Activity 停車即時動態" },
    { slug: "ai-assistant", label: "AI 出行秘書" },
    { slug: "autopass.xyz", label: "Autopass 品牌官網" },
    { slug: "pba", label: "跨平台服務授權" },
  ],
  after: "等設計專案。",
} as const;

export const VISUAL = [
  {
    title: "Payment setting",
    still: "/media/vis-1.jpg",
    video: "/media/vis-1.mp4",
  },
  {
    title: "Tutorial",
    still: "/media/vis-2.jpg",
    video: "/media/vis-2.mp4",
  },
  {
    title: "Autopass loading screen",
    still: "/media/vis-3.jpg",
    video: "/media/vis-3.mp4",
  },
  {
    title: "Payment completed",
    still: "/media/vis-4.jpg",
    video: "/media/vis-4.mp4",
  },
  {
    title: "Tutorial swipe card",
    still: "/media/vis-5.jpg",
    video: "/media/vis-5.mp4",
  },
  {
    title: "Charging status",
    still: "/media/vis-6.jpg",
    video: "/media/vis-6.mp4",
  },
  {
    title: "Tab bar Icon Switch",
    still: "/media/vis-7.jpg",
    video: "/media/vis-7.mp4",
  },
  {
    title: "Login successful",
    still: "/media/vis-8.jpg",
    video: "/media/vis-8.mp4",
  },
] as const;

export const LAB = [
  {
    title: "WinX player",
    desc: "用這台播放器，回憶才能正確輸出。",
    url: "winx-player.vercel.app",
    href: "https://winx-player.vercel.app/",
    cover: "/media/lab-winx.jpg",
  },
  {
    title: "Dynamic Pixel Art",
    desc: "把圖樣轉成動態像素視覺。",
    url: "dynamic-pixel-art-studio.vercel.app",
    href: "https://dynamic-pixel-art-studio.vercel.app/",
    cover: "/media/lab-pixel.jpg",
  },
  {
    title: "好位 Dreamview",
    desc: "收錄全台熱門場館真實座位視角，購票前先看清楚，不再踩雷。",
    url: "dreamview.cloud",
    href: "https://dreamview.cloud/",
    cover: "/media/lab-dream.jpg",
  },
] as const;

export const ABOUT = {
  name: "HUANG JIAN WEI",
  portrait: "/media/portrait.jpg",
  linkedin: "https://www.linkedin.com/in/jianweihuangx/",
  email: "muswxs@gmail.com",
  bio: [
    "擁有八年以上數位產品設計經驗，背景橫跨 Fintech 金融科技與 Mobility 移動服務，專注支付體驗與地圖互動設計。",
    "具備 B2C 與 B2B2C 跨維度產品視角，擅長在快節奏環境中推動 0→1 產品建構：從梳理需求、建立概念到設計發展，以快速原型驗證，落地為直覺清晰的數位體驗。",
    "喜歡把動態視覺織進介面細節，做出兼具商業價值與視覺記憶的產品⟡₊",
  ],
  jobs: [
    {
      company: "Autopass",
      role: "Lead / Senior Product Designer",
      years: "2018 – 2025",
      titles: [
        { title: "Senior Product Designer（Contract）", dates: "2025/4 – 2025/11" },
        { title: "Senior Product Designer", dates: "2025/1 – 2025/3" },
        { title: "Lead Product Designer", dates: "2023/1 – 2025/1" },
        { title: "Product Designer", dates: "2022/1 – 2023/1" },
        { title: "UI/UX Designer", dates: "2018/1 – 2021/12" },
      ],
      bullets: [
        "從核心停車支付，一路把 Live Activity、AI 語音辨識等新能力落地，參與多項產品從 0 到 1 到規模化。設計範圍涵蓋 B2C App、B2B2C 跨平台整合與品牌官網；擔任 Lead 期間同時維持個人產出，並把關團隊設計品質。",
        "負責車麻吉 App「AI 出行秘書」：將對話式語音辨識導入駕駛地點搜尋，並設計功能引導與訂閱方案頁，串起跨平台付款啟用流程。",
        "於 iOS Live Activity 開放初期導入停車場景，設計鎖定畫面即時動態卡片，串聯進場、停車中、離場狀態，提升支援場站自動付款出場轉換率。",
        "設計停車場 QR Code 線上繳費流程，整合 Apple Pay、LINE Pay 等多元支付，導入台灣最大日系停車品牌 Times Parking。",
        "負責 App 加油掃碼付款介面，經標案串接全台中油直營加油站，擴大加油服務場景與使用觸及。",
        "負責 Pick N Charge 充電介面，串聯自有充電檁硬體、即時呈現插拔狀態，覆蓋從付款綁定到計費追蹤的端對端流程。",
        "設計 Autopass 延伸車主服務，涵蓋車險、洗車、駕駛中心點數折抵等探索型產品介面。",
        "建構 powered by Autopass 介面框架，導入 LINE Bank、Richart Life、全盈+PAY、中油 Pay、Pi 拍錢包、My Toyota 等合作平台。",
        "定調 Autopass.xyz 品牌官網視覺，整合 Motion 與 3D 模型；並獨立以 Webflow 完成品牌海外願景網站前端。",
        "重整跨平台 Design System，統一元件與 Icon 規範、建立共用元件庫，降低設計與工程重複開發成本。",
        "負責團隊 Design Review、給予設計回饋；帶領完成自助加油機台介面優化、優惠序號兌換，以及行銷與品牌相關設計。",
      ],
    },
    {
      company: "停車大聲公 <Acquired by Acer>",
      role: "UI/UX Designer",
      years: "2016 – 2017",
      titles: [
        { title: "UI/UX Designer", dates: "2017/4 – 2017/12" },
        { title: "UI/UX Designer（Intern）", dates: "2016/11 – 2017/4" },
      ],
      bullets: [
        "負責 B2B 場站管理平板介面，提供管理員數位化營運工具。",
        "執行使用者訪談與易用性測試，產出洞察支援產品迭代。",
        "負責線上與線下廣告視覺、周邊商品包裝，以及產品宣傳教學影片剪輯。",
      ],
    },
  ],
  awards: [
    {
      name: "iF Student Design Award 2016",
      work: "Liquid Medicine Pack",
      notes: ["Shortlisted 300 Entries"],
    },
    {
      name: "Red Dot Design Award: Design Concepts 2015",
      work: "Liquid Medicine Pack",
      notes: ["Shortlisted 300 Entries"],
    },
    {
      name: "iF Student Design Award 2015",
      work: "ElecNet",
      notes: ["Shortlisted 300 Entries"],
    },
    {
      name: "Young Pin Design Award 2015",
      work: "Liquid Medicine Pack",
      notes: [
        "Finalist (Product Design), Best Design of Young Pin Design Award",
        "Finalist (Product Design), Young Pin Sponsor Award",
        "Finalist (Packaging Design), Young Pin Sponsor Award",
      ],
    },
  ],
};
