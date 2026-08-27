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
    slug: "live-activity-v2",
    title: "停車 Live Activity（改版）",
    subtitle: "文案與排版重構對照",
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
    year: "2022-2025",
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
    "產品選於支付與支付領域，橫跨停車付款、地圖互動、語音辨識等場景，包含 ",
  links: [
    { slug: "live-activity", label: "Live Activity 停車即時動態" },
    { slug: "ai-assistant", label: "AI 出行秘書" },
    { slug: "autopass.xyz", label: "Autopass 品牌官網" },
    { slug: "pba", label: "跨平台服務授權" },
  ],
  after: "等設計專案。",
} as const;
