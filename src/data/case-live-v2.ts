const F = "https://framerusercontent.com";

export const liveActivityV2 = {
  slug: "live-activity-v2",
  title: "停車 Live Activity",
  kicker: "改版對照",
  subtitle: "點亮螢幕，就能知道停多久、多少錢",
  english: "Glanceable parking status on the iOS Lock Screen",
  variant: "revise" as const,
  live: [{ label: "← 對照原稿", href: "/work/live-activity" }],
  intro: [
    "車麻吉把停車收成一件事：進場、計時、付款、離場。車主不該為了確認狀態，反覆解鎖、打開 App。",
    "既有流程用多則推播拼出旅程，路徑長、訊息碎。關掉推播的人，連「這場站能自動付款」都收不到，轉換就在這裡流失。",
    "iOS 17.2 起，Live Activity 可以不經 App 直接出現在鎖定畫面。我們把停車中最需要的兩個數字——時數與預估費用——放到喚醒螢幕就能看見的位置。",
  ],
  meta: {
    product: "車麻吉 Carmochi",
    platform: "iOS",
    timeline: "2023.12 – 2024.06",
    role: "UX / UI",
  },
  blocks: [
    { kind: "hero" as const, src: "/media/case-live-hero.jpg", alt: "鎖定畫面上的停車 Live Activity" },
    { kind: "h2" as const, text: "既有體驗卡在哪" },
    {
      kind: "p" as const,
      text: "進場、離場、付款各發一則推播；點進去才看得到停車卡片。App 裡雖有位置、時數與預估金額，前提是用戶願意打開它。",
    },
    { kind: "h2" as const, text: "三個使用摩擦" },
    {
      kind: "stages" as const,
      items: [
        {
          title: "確認一次，步驟太多",
          body: "停車中只想快速看「還停多久、大概多少錢」。解鎖 → 開 App → 找卡片，對一件本不該佔用注意力的事來說，路徑過長。",
        },
        {
          title: "通知是碎片，狀態對不齊",
          body: "同一趟停車被拆成進場、離場、付款三則獨立訊息。用戶要自己對齊「現在是哪一步」；多數時候他們只需要最新狀態。",
        },
        {
          title: "關掉推播，資訊跟著斷",
          body: "行銷與停車通知共用權限。排斥行銷而關閉推播後，進場提示一併消失——場站其實支援自動付款，車主卻走去手動繳費。",
        },
      ],
    },
    { kind: "h2" as const, text: "設計目標" },
    {
      kind: "stages" as const,
      items: [
        {
          title: "體驗",
          body: "不解鎖、不開 App，也能掌握當前時數與預估費用；從進場到離場，資訊留在同一張卡片上連續更新。",
        },
        {
          title: "商務",
          body: "改傳遞方式，而不是再催一次推播權限。讓關通知的人仍收得到停車狀態，把自動付款出場的轉換補回來。",
        },
        {
          title: "原則",
          body: "鎖定畫面只放當下必要的資訊。數字尚未可靠時，寧可不顯示，也不要用「0 分鐘」製造錯誤預期。",
        },
      ],
    },
    { kind: "h2" as const, text: "為什麼是 Live Activity" },
    {
      kind: "p" as const,
      text: "路徑縮到最短。關鍵資訊長在鎖定畫面上，喚醒螢幕就能看，不必進 App。",
    },
    {
      kind: "p" as const,
      text: "停車狀態不再綁死推播開關。Live Activity 能把進行中的旅程送到螢幕前，降低因權限關閉造成的斷訊。",
    },
    {
      kind: "p" as const,
      text: "多則靜態通知收成一張會更新的卡片。狀態替換推播堆疊，用戶只對一個介面。",
    },
    {
      kind: "note" as const,
      text: "ActivityKit 自 iOS 16.1 開放；iOS 17.2 起可用遠端推送直接啟動即時動態，不必先打開 App。",
    },
    { kind: "h2" as const, text: "停車的三個狀態" },
    {
      kind: "p" as const,
      text: "旅程順序清楚。每個階段只回答當下車主真正在問的那一件事。",
    },
    {
      kind: "stages" as const,
      items: [
        {
          title: "進場",
          body: "辨識車牌進入支援場站後，先說這場能自動付款——不是先丟計時數字。尚未綁卡，就在卡片上提醒，讓設定發生在停車期間。",
        },
        {
          title: "停車中",
          body: "旅程最長、查看最密的一段。卡片只留兩件事：停了多久、預估多少錢。",
        },
        {
          title: "離場",
          body: "車輛離開後切到完成付款，呈現最終金額與結果，然後結束這張卡片的任務。",
        },
      ],
    },
    {
      kind: "phones" as const,
      srcs: [
        `${F}/images/bHg8sjihjMpBB6ZEOfheFa0WK4.png?width=1125&height=2436`,
        `${F}/images/LG4H3nXFGvB0m0uW3SpODIakLA.png?width=1137&height=2448`,
        `${F}/images/xx5sXRtMz5DWmHGgY0wOR3obegc.png?width=1125&height=2436`,
      ],
    },
    { kind: "h2" as const, text: "Dynamic Island" },
    {
      kind: "p" as const,
      text: "Live Activity 必須同時處理 Compact、Minimal、Expanded。Compact 只放停車 icon，不放時數或費用——資料是週期更新，不是逐秒跳動，避免島上出現不可信的數字。",
    },
    { kind: "h2" as const, text: "Dark / Light" },
    {
      kind: "p" as const,
      text: "跟著系統外觀走。兩套模式都維持對比與層級，讓卡片在日夜鎖定畫面上同樣好讀。",
    },
    {
      kind: "phones" as const,
      srcs: [
        `${F}/images/zYpE7EkhYeOT2XtFwA1fUwjYhNI.png?width=1125&height=2436`,
        `${F}/images/hklYgONfHn2P7yl6M4zB6n4kAI.png?width=1125&height=2436`,
        `${F}/images/vtjetHhMjiNWmZBPTVuf0YXU4vI.png?width=1125&height=2436`,
        `${F}/images/WAo7UlEF9F86IF9CdygO4CKZszE.png?width=1125&height=2436`,
      ],
    },
    { kind: "h2" as const, text: "上線後：網路不穩時的預期管理" },
    {
      kind: "p" as const,
      text: "收訊差時 Update Token 送不出去，卡片拿不到週期更新。時數會停在「0 分鐘」，離場後也可能留在鎖定畫面。",
    },
    {
      kind: "p" as const,
      text: "迭代做法：第一個 Token 成功前，不顯示 0 分鐘，改成「查看停車金額與時數」。先校正預期，再引導手動更新。",
    },
    { kind: "h2" as const, text: "成果" },
    {
      kind: "p" as const,
      text: "支援場站的自動付款出場轉換上升。關推播而流失的人重新看到停車資訊；查看路徑從「打開 App」變成「看鎖定畫面」。Live Activity 開放初期就用在停車，成為交通類產品裡可被記住的差異。",
    },
  ],
};
