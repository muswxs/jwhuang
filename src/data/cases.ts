export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "note"; text: string }
  | { kind: "hero"; src: string; alt: string }
  | { kind: "img"; src: string; alt: string; wide?: boolean }
  | { kind: "phones"; srcs: string[] }
  | { kind: "grid"; srcs: string[]; cols?: 2 | 3 | 4 }
  | { kind: "video"; src: string; poster?: string }
  | { kind: "videos"; srcs: string[] }
  | { kind: "stages"; items: { title: string; body: string }[] };

export type CaseStudy = {
  slug: string;
  title: string;
  kicker?: string;
  subtitle: string;
  english: string;
  intro: string[];
  live?: { label: string; href: string }[];
  meta: { product: string; platform: string; timeline: string; role: string };
  blocks: Block[];
};

const F = "https://framerusercontent.com";

export const CASES: CaseStudy[] = [
  {
    slug: "live-activity",
    title: "即時動態 Live Activity 停車整合",
    subtitle: "打造無縫的停車資訊體驗",
    english: "Elevating Parking Experience with iOS Live Activities",
    intro: [
      "「車麻吉」App 的核心服務是致力於簡化停車流程，從找車位、停好車到繳費離場，讓車主無需額外操作，享受無感直接出場的停車付款體驗。",
      "在停車過程中，進場到離場間的資訊傳遞一直有可改善空間。加上發現部分車主若將推播關閉也間接影響透過自動付款出場的轉換率。",
      "2023 年底，iOS 17.2 開放將 Live Activity 即時動態直接推送至鎖定畫面，不需先行開啟 App，可以將關鍵停車中資訊顯示至鎖定畫面。車主無需反覆開啟 App 確認停車時數與費用，點亮螢幕即可一目瞭然，不僅讓停車體驗更加無縫，更有效提升支援場站的付款轉換率。",
    ],
    meta: {
      product: "車麻吉 Carmochi",
      platform: "iOS",
      timeline: "2023.12 - 2024.06",
      role: "UX / UI",
    },
    blocks: [
      { kind: "hero", src: "/media/case-live-hero.jpg", alt: "Live Activity 停車即時動態" },
      { kind: "h2", text: "既有功能流程" },
      {
        kind: "p",
        text: "系統推播：在進場、離場、付款分別發送推播，每則推播是獨立訊息，用戶同一次停車紀錄會收到多次推播，點擊推播開啟停車卡片。",
      },
      {
        kind: "p",
        text: "App 內的停車資訊卡片：進場後，用戶開啟 App 可查看當前停車位置、停車時數與預估金額。",
      },
      { kind: "h2", text: "使用痛點" },
      { kind: "h3", text: "頻繁解鎖的操作負擔" },
      {
        kind: "p",
        text: "對於需要快速確認「還停多久、大概多少錢」的停車中用戶，反覆「解鎖 → 開啟 App → 查看卡片」的操作路徑太長。停車這件事本身不需要這麼多注意力，但既有功能沒辦法滿足快速查看的需求。",
      },
      { kind: "h3", text: "碎片化通知造成認知負擔" },
      {
        kind: "p",
        text: "流程推播採分階段發送「進場 → 離場 → 付款」，用戶需自行比對多則通知才能理解自己當前狀態。而多數情境下，用戶只需掌握最新停車狀態，堆疊的通知反而增加了理解負擔。",
      },
      { kind: "h3", text: "通知權限關閉導致資訊斷層" },
      {
        kind: "p",
        text: "App 的推播系統尚缺乏分類機制，無法區分「行銷訊息」與「停車資訊」的通知權限。當用戶因排斥收到「行銷訊息」而關閉全部推播，就會錯過進場通知，不知道當前停車場支援付款，導致可以直接出場卻去手動繳費，付款服務的轉換因此流失。",
      },
      { kind: "h2", text: "設計目標" },
      {
        kind: "p",
        text: "體驗面：讓停車中的用戶在不解鎖、不開啟 App 的前提下，隨時掌握當前停車狀態（時數與預估費用），並在整個停車旅程中保持資訊連貫性。",
      },
      {
        kind: "p",
        text: "商務面：透過改變資訊傳遞方式，減少因關閉「推播權限」問題導致付款轉換流失，提升自動付款出場的轉換率。",
      },
      { kind: "h2", text: "為什麼是 Live Activity？" },
      {
        kind: "p",
        text: "降低資訊獲取路徑 — 透過 Live Activity 將關鍵停車資訊延伸至 iOS 鎖定畫面。無需解鎖或開啟 App，喚醒螢幕即可掌握停車狀態，大幅縮短資訊獲取路徑。",
      },
      {
        kind: "p",
        text: "確保停車資訊接收 — 利用 Live Activity 特性繞過推播權限限制，讓停車資訊能有效傳遞給用戶，減少因推播權限關閉而產生的資訊斷層。",
      },
      {
        kind: "p",
        text: "以動態更新整合碎片化資訊 — 將原本分散的多則靜態通知，整合為單一即時動態卡片。透過狀態更新取代推播堆疊，用戶在同一介面獲取連貫的停車資訊。",
      },
      {
        kind: "note",
        text: "iOS 16.1 開放 ActivityKit API；iOS 17.2 起允許 App 透過遠端推送直接啟動即時動態，不需使用者先開啟 App。",
      },
      { kind: "h2", text: "停車三個關鍵狀態" },
      {
        kind: "p",
        text: "停車旅程有明確的順序性，將其拆解為三個資訊階段，每個狀態呈現的內容都是當下車主所需的關鍵資訊。",
      },
      {
        kind: "stages",
        items: [
          {
            title: "Stage 1 — 進場",
            body: "系統辨識車牌進入支援場站後，首要任務不是顯示時間或金額數字，而是告知用戶此停車場支援自動付款。若用戶尚未綁定信用卡，卡片將顯示提示文案，引導在停車期完成設定。",
          },
          {
            title: "Stage 2 — 停車中",
            body: "停車計時開始後，卡片切換持續顯示「預估金額」與「停車時數」。這是整個旅程中持續最長、查看頻率最高的狀態。停車中用戶只需要兩個最重要資訊：停多久了、多少錢。",
          },
          {
            title: "Stage 3 — 離場",
            body: "車輛離場後，卡片更新為完成付款狀態，呈現最終交易結果與金額。",
          },
        ],
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/bHg8sjihjMpBB6ZEOfheFa0WK4.png?width=1125&height=2436`,
          `${F}/images/LG4H3nXFGvB0m0uW3SpODIakLA.png?width=1137&height=2448`,
          `${F}/images/xx5sXRtMz5DWmHGgY0wOR3obegc.png?width=1125&height=2436`,
        ],
      },
      { kind: "h2", text: "Dynamic Island 動態島" },
      {
        kind: "p",
        text: "導入 Live Activity 的同時，需同步開發 ActivityKit 依附下的 Dynamic Island，包含緊湊（Compact）、分離（Minimal）與擴展（Expanded）三種狀態。Compact 模式只顯示「停車 icon」，不顯示時間或費用，因為 Live Activity 的資訊是週期性更新，而非逐秒更新。",
      },
      { kind: "h2", text: "Dark / Light Mode" },
      {
        kind: "p",
        text: "適配 iOS 系統層級的色彩規範，設計 Dark 與 Light 兩種介面模式，確保即時動態卡片在不同系統設定下皆能維持高對比度與資訊易讀性。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/zYpE7EkhYeOT2XtFwA1fUwjYhNI.png?width=1125&height=2436`,
          `${F}/images/hklYgONfHn2P7yl6M4zB6n4kAI.png?width=1125&height=2436`,
          `${F}/images/vtjetHhMjiNWmZBPTVuf0YXU4vI.png?width=1125&height=2436`,
          `${F}/images/WAo7UlEF9F86IF9CdygO4CKZszE.png?width=1125&height=2436`,
        ],
      },
      { kind: "h2", text: "上線後：網路穩定性對體驗的影響" },
      {
        kind: "p",
        text: "功能上線後，透過用戶回饋與數據埋點發現：在網路收訊較差的環境下，系統無法成功發送 Update Token，導致即時動態無法獲取週期性數據更新。停車時數可能停留在「0 分鐘」，離場後卡片也可能殘留在鎖定畫面。",
      },
      {
        kind: "p",
        text: "設計迭代：在首個 Update Token 成功接收之前，卡片不顯示「0 分鐘」，改為顯示「查看停車金額與時數」的提示文案，校正用戶預期並引導手動更新。",
      },
      { kind: "h2", text: "成果與影響" },
      {
        kind: "p",
        text: "Live Activity 上線後，車麻吉在支援場站的自動付款出場轉換率有明顯提升：原本因關閉推播權限而流失的用戶重新獲得資訊；查看停車資訊從「需開啟 App」改變至「鎖定畫面直接看」。在 Live Activity 開放初期即率先應用於停車場景，在交通類產品中建立了差異化優勢。",
      },
    ],
  },
  {
    slug: "ai-assistant",
    title: "AI 出行秘書",
    subtitle: "以自然語音重塑行車搜尋體驗",
    english: "AI Mobility Assistant — Redefining Mobility Search with Intuitive Conversational AI",
    intro: [
      "「AI 出行秘書」源於對駕駛搜尋行為的洞察。在行車情境下，傳統的打字搜尋與多層級篩選不僅操作繁瑣，更潛藏安全風險。",
      "我們將傳統搜尋模式升級為具備口語理解能力的自然語言搜尋，讓車主能以直覺口述方式表達需求，如「找 101 附近的中油加油站」或「找有支援快速通且能折抵免費停車的停車場」，後端將這些模糊意圖轉化為精準的地點建議。",
      "再結合可記憶行車偏好的設定機制，如：信用卡免費停車、車輛限高、優先室內停車場等，讓搜尋結果更貼近每位車主的實際需求。",
    ],
    meta: {
      product: "車麻吉 Carmochi",
      platform: "iOS、Android",
      timeline: "2025.02 - 2025.05",
      role: "UX / UI / Visual",
    },
    blocks: [
      { kind: "hero", src: "/media/case-ai-hero.jpg", alt: "AI 出行秘書" },
      { kind: "h2", text: "行車時搜尋，是一種隱性風險" },
      {
        kind: "p",
        text: "對於每天開車通勤的人來說「在移動中找停車場或加油站」幾乎是日常。但傳統手動搜尋的操作邏輯，並不是為行車時設計的：打字需要低頭，視線離開路面；停車後才敢操作，還要層層篩選；複雜條件無法一次輸入。",
      },
      { kind: "h2", text: "誰需要這功能" },
      {
        kind: "p",
        text: "有高度複雜搜尋需求的車主 — 需在短時間內快速篩選多重條件，如金額範圍、特定支付方式、路徑地點。",
      },
      {
        kind: "p",
        text: "高頻且講求效率的通勤族 — 頻繁開車尋找停車場與加油站，進車內即想透過語音快速找到下個目的地。",
      },
      {
        kind: "p",
        text: "重視行車安全的駕駛者 — 開車過程中不希望進行任何手機點選動作，追求視線不離開路面的安全搜尋體驗。",
      },
      { kind: "h2", text: "從「單次語音」到「AI 對話式」" },
      {
        kind: "p",
        text: "早期只能做到「語音轉文字（STT）」，跟直接用手機鍵盤輸入沒差別。直到 AI 技術成熟後，這不再只是輸入方式的改變，而是能處理「多條件式」複雜需求。",
      },
      {
        kind: "p",
        text: "車主的需求可能是分段的，例如先說「我要去天母古道」，隨後才想起「我要路上順道加個油」。我們將架構升級為對話式流程，讓系統像真人助理一樣能累積前文語境脈絡。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/qi7ki0rRAwT6BlnnaTrvPV2HphA.png?width=1125&height=2436`,
          `${F}/images/d72c6X3BWVDzhV0SBhMtRvg.png?width=1125&height=2436`,
          `${F}/images/DTULn9z1tXJPL6K2kiDcsuogfs.png?width=1125&height=2436`,
        ],
      },
      { kind: "h2", text: "設計體驗" },
      {
        kind: "p",
        text: "在地圖頁面右下角點擊「車麻吉」頭像進入「AI 出行秘書」。視覺形象以 App 角色「車麻吉」結合 AI 意象「星星」設計。對話頁提供語音對話與手動輸入兩種模式。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/XNBt6HByx7ENMFMIsIYPB8rRj8.png?width=1125&height=2436`,
          `${F}/images/Xfd8ZMZQASOeCFOARhDTnXUPI.png?width=1125&height=2436`,
          `${F}/images/eunn1JtiftQKzTk4SseDdVR2zM.png?width=1125&height=2436`,
        ],
      },
      {
        kind: "videos",
        srcs: [
          `${F}/assets/CptA6gWLlWoLHJkEr4dpFhAqN3E.mp4`,
          `${F}/assets/XixdUM7vlJXdpEBgoywEPhw2Og.mp4`,
          `${F}/assets/BZZh2Is9H73D4vc3gXRLVx0Inzg.mp4`,
        ],
      },
      { kind: "h2", text: "出行偏好設定" },
      {
        kind: "p",
        text: "出行偏好將「停車」與「加油」分為兩個獨立設定頁。停車在意限高、機械平面、室內外；加油在意油品、品牌。分拆後，用戶可以清楚針對不同場景建立個人化規則。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/c1wGBb9hYiaJODndz8teyUT3G4o.png?width=1125&height=2436`,
          `${F}/images/I1mK1wjq1OKutliQ7CH0eHTbRyQ.png?width=1125&height=2436`,
          `${F}/images/a0atQrjfznxuUcCxTZ1iKIGMb8.png?width=1125&height=2436`,
        ],
      },
      { kind: "h2", text: "成果與影響" },
      {
        kind: "p",
        text: "最直接的改變是行車搜尋的本質，從「需要停下來操作」變成「開口說就有結果」。在商業意義上，這個功能也代表車麻吉從「出行支付工具」走向「功能訂閱服務」的第一步。",
      },
    ],
  },
  {
    slug: "autopass.xyz",
    title: "Autopass.xyz",
    subtitle: "建構出行金融服務的數位入口",
    english: "Building the Digital Gateway for Mobility Financial Services",
    intro: [
      "Autopass 致力於連結多元出行場景與金融支付，旗下服務橫跨停車、加油、充電等場景。隨著生態系持續擴張，品牌需要一個能清晰傳遞服務價值的數位入口，全面重新建構官網。",
      "重新梳理資訊架構，圍繞「出行場景整合」「服務體驗授權」「企業費用管理」三大核心業務進行整合。視覺方向上，導入 Motion 動態互動與 3D 模型，搭配與前端工程師協作導入的 p5.js 生成式效果，以動態視覺強化品牌識別。",
    ],
    live: [{ label: "↗ Live Site", href: "https://www.autopass.xyz/" }],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2024",
      role: "UX / UI / Visual / 3D Model",
    },
    blocks: [
      {
        kind: "videos",
        srcs: [
          `${F}/assets/ZmZmwwSyZkavz8uZpDhKp22tpc.mp4`,
          `${F}/assets/yEP1pNcDWClTBAGJp3rYBps2GHc.mp4`,
        ],
      },
      {
        kind: "video",
        src: `${F}/assets/Zym4NHfHrqqGwYPyBY8hfKHJbQ.mp4`,
      },
      {
        kind: "videos",
        srcs: [
          `${F}/assets/Ng3DzbX7iWToQtG5AqSEnRgeq4.mp4`,
          `${F}/assets/ojJ7B5p2WvY5CwqWtPRvKpgfZa4.mp4`,
          `${F}/assets/LzQgg9KiMFi7fdikLWItSKua5fw.mp4`,
        ],
      },
    ],
  },
  {
    slug: "autopass-vision",
    title: "Autopass VISION",
    subtitle: "想像出行服務的未來樣貌",
    english: "Envisioning the Future of Mobility Services",
    intro: [
      "Autopass VISION 為品牌海外業務擴張所建構的願景網站，核心任務在於以既有台灣服務為基礎，延伸對未來移動場景的想像。以「車牌辨識」作為核心連結，將支付體驗無縫延伸至停車、加油及各類車主服務場景，並將服務載體從行動裝置延伸至車載系統。",
      "本專案由設計師運用 No-code 工具（Webflow）獨立完成建立，從 UI 視覺設計到複雜的前端互動細節皆由設計端主導開發。",
    ],
    live: [
      { label: "↗ Live Site <EN>", href: "https://autopasss-2023.webflow.io/" },
      { label: "↗ Live Site <JP>", href: "https://autopasss-2023.webflow.io/jp" },
    ],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2023",
      role: "UX / UI / Motion / No-code Development",
    },
    blocks: [
      { kind: "note", text: "網站視覺插圖設計：yuan" },
      { kind: "hero", src: "/media/case-vision.png", alt: "Autopass Vision" },
      { kind: "video", src: `${F}/assets/N4zeTPwiJi9ZD0gy6IOJHxAzs.mp4` },
    ],
  },
  {
    slug: "parking-payment",
    title: "停車繳費線上化",
    subtitle: "從實體付款到線上支付的轉型",
    english: "Transitioning from Physical Hardware to Online Payment Services",
    intro: [
      "在傳統停車場，排隊繳費是最讓人頭痛的環節。尖峰時段大排長龍、翻找零錢、擔心餘額不足；對業者而言，維護實體機台更是耗時耗力。",
      "服務目標是將傳統繳費模式全面數位化，透過手機掃描 QR Code 即可完成付款，並導入車牌辨識與多元支付串接，讓車主能快速付費離場。",
      "產品上線初期正值新冠疫情期間，非接觸式服務成為停車場的迫切需求，也推動停車產業從實體付款走向數位化的轉型。",
    ],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2021.03 - 2021.05",
      role: "UX / UI",
    },
    blocks: [
      { kind: "hero", src: "/media/case-park-hero.png", alt: "停車線上付" },
      { kind: "h2", text: "解決方案" },
      {
        kind: "p",
        text: "免排隊，隨處掃描即可繳費。打破傳統只能在繳費機前排隊的限制，車主只要掃描場內隨處可見的 QR Code，隨時隨地都能進入繳費頁面。",
      },
      {
        kind: "p",
        text: "無需實體接觸，安全更安心。車主不再需要操作公共觸碰螢幕，透過手機即可完成所有流程。",
      },
      {
        kind: "p",
        text: "整合 Apple Pay、LINE Pay、街口等多元支付工具，並支援綁定手機載具、信箱載具、愛心捐贈及統一編號等多種發票開立方式。",
      },
      { kind: "h2", text: "設計" },
      {
        kind: "phones",
        srcs: [
          `${F}/images/3owEtivhe4NA2e8nNCmmXNZrRi8.png?width=1125&height=2436`,
          `${F}/images/lJ911LdD6xA73RvYcfaj2L2Yk.png?width=1125&height=2436`,
          `${F}/images/k54aNRDQ6JYNfe2jqCq7dhIrcq0.png?width=1125&height=3000`,
        ],
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/hoW3cTggxopj1u1gGyEwR9WZOM.png?width=1125&height=3000`,
          `${F}/images/tfn5EnpyjLTfo4Ic9yeD5Vis.png?width=1125&height=2691`,
          `${F}/images/uqvis8PaHq0jEdtLGzBO4MyqzBk.png?width=1125&height=2691`,
        ],
      },
      { kind: "h2", text: "導入 Times 停車場" },
      {
        kind: "p",
        text: "服務最終成功與台灣最大日系停車場品牌 Times Parking 合作，導入數位支付服務，並為其換上專屬品牌的視覺風格。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/NaWayFqyXuhwiYAUTWctQNPIoo.png?width=1125&height=2436`,
          `${F}/images/FdNK0P9UXCtnfJGxLpPmOrmTcw.png?width=1125&height=2436`,
          `${F}/images/RtTPzBJYGsl8vRexELP4D7EMA6M.png?width=1125&height=2436`,
        ],
      },
    ],
  },
  {
    slug: "pickncharge",
    title: "Pick N Charge",
    subtitle: "從零開始建構電動車充電支付體驗",
    english: "Building an EV Charging Payment Experience from the Ground Up",
    intro: [
      "隨著電動車市場成長，充電基礎設施的需求持續擴大。Autopass 洞察到充電場景與既有停車場站的高度重疊性，決定結合自有充電樁硬體與支付金流服務，推出「Pick N Charge」。",
      "首版本應用於自有硬體與合作品牌充電樁，統一導入同一套充電付款體驗，透過預授權付款機制縮短支付流程。",
    ],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2021.07 - 2021.10",
      role: "UX / UI",
    },
    blocks: [
      { kind: "hero", src: "/media/case-pnc-hero.jpg", alt: "Pick N Charge" },
      { kind: "h2", text: "既有市場產品" },
      {
        kind: "p",
        text: "實體卡片的束縛 — 部分傳統充電樁仍依賴實體感應卡，若車主忘記帶卡便無法啟動服務。",
      },
      {
        kind: "p",
        text: "繁瑣的啟動流程 — 每個品牌都有專屬 App，用戶每更換場站品牌就需重複下載、註冊與綁卡。",
      },
      {
        kind: "p",
        text: "無法追蹤充電狀態 — 用戶離開車位後難以即時掌握充電進度，充電異常中斷時也缺乏主動告知機制。",
      },
      { kind: "h2", text: "設計方向" },
      {
        kind: "p",
        text: "輕量化入口：以網頁取代 App 下載，掃描 QR Code 即可自動帶入充電樁資訊。預授權與多元支付：系統先鎖定扣款額度，充電結束後依實際度數自動結算。充電資訊追蹤：隨時查看功率、已充度數與預估完成時間，並整合 Email 與簡訊通知。",
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/Pba5p4dYtgyjKfaUky03xJkGds.png?width=1125&height=2436`,
          `${F}/images/vupBKwhb6LO2m2Z2oZZsRvugfM.png?width=1125&height=2436`,
          `${F}/images/aeLZJgAnP2j0mmdlHuTHqx8MZNA.png?width=1125&height=2436`,
        ],
      },
      {
        kind: "grid",
        cols: 2,
        srcs: [
          `${F}/images/CNVx9dc5Xx7cZCbR6DGFuKa5I.png?width=1500&height=1236`,
          `${F}/images/deI5iqeqQBsOWqtXhFBhhoW38Q.png?width=1500&height=1236`,
          `${F}/images/sQ5z25nZwIryTbt08Pxsr3EBByM.png?width=1500&height=1236`,
          `${F}/images/Gl5wH8k8Pv5p34iz55enjx0qxzw.png?width=1500&height=1236`,
        ],
      },
      {
        kind: "videos",
        srcs: [
          `${F}/assets/ECngm6kcAKD7Fru3qIElxfFDOc.mp4`,
          `${F}/assets/c3AlzMitvTHn572GoHdeifyNLCg.mp4`,
        ],
      },
      { kind: "h2", text: "落地與驗證" },
      {
        kind: "p",
        text: "產品首個版本已於 7 個場站正式上線並穩定運行。作為 Autopass 進入充電市場的首個概念驗證專案，成功串聯自有充電樁硬體與支付金流服務。",
      },
    ],
  },
  {
    slug: "pba",
    title: "powered by Autopass",
    subtitle: "建立開放式支付授權生態系",
    english: "Building an Open Payment Licensing Ecosystem",
    intro: [
      "「powered by Autopass（PBA）」是 Autopass 從 B2C 邁向 B2B 平台的戰略性產品，目標是將成熟的停車與加油支付技術模組化，授權給外部合作夥伴（如：銀行、加油站、汽車品牌等），讓夥伴不需投入龐大的開發串接成本，即可在自有服務中快速導入行車支付場景。",
      "為滿足不同規模的合作需求，提供兩種授權模式：彈性較高的「API 串接模式」，以及快速整合的「標準化 Web 方案」。我專注於標準化 Web 方案的介面設計，建構可彈性適配合作夥伴規格的介面系統。",
    ],
    live: [
      {
        label: "↗ 全部平台",
        href: "https://www.autopass.xyz/powered-by-autopass/licensed-channels/",
      },
    ],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2022.07 - 2025",
      role: "UX / UI",
    },
    blocks: [
      { kind: "hero", src: "/media/work-pba.jpg", alt: "powered by Autopass" },
      { kind: "h2", text: "設計整合" },
      {
        kind: "p",
        text: "適配多元授權情境的功能邏輯。針對共用的 Web 介面採用模組化架構設計。由於各夥伴授權的功能範圍不同，如僅提供停車功能、或額外支援停車折抵，介面需依商務授權狀態調整顯示邏輯。",
      },
      {
        kind: "p",
        text: "跨團隊的設計諮詢。在與夥伴對接 API 串接方案時，與 PM 共同扮演諮詢角色，針對合作方提供的初始流程與介面提出優化建議。",
      },
      { kind: "h2", text: "合作夥伴平台" },
      {
        kind: "grid",
        cols: 3,
        srcs: [
          `${F}/images/BIIVlU3fIjVDL12hiA1qiZszeEs.png?width=900&height=480`,
          `${F}/images/uMqUCk7bCbnLZY9OVTttfQ7Ams.png?width=900&height=480`,
          `${F}/images/pCAxK4IHCEBSfu6psslvUVNoq0.png?width=900&height=480`,
          `${F}/images/mzXqjVA7jVksGZURzcY6F51Vu8.png?width=900&height=480`,
          `${F}/images/NjPaaezxzRm2JL9c4nTO2aK0c.png?width=900&height=480`,
          `${F}/images/2tJkH14HshunVBPePSvvalEag3Q.png?width=900&height=480`,
          `${F}/images/dBpAPk4ouoajJXUahvaoe73k.png?width=900&height=480`,
          `${F}/images/WWG45bxws6yI7LYFPDo9uCpGw8.png?width=900&height=480`,
          `${F}/images/J5OYoSptIIYaJTNQKbsc45ODBJc.png?width=900&height=480`,
          `${F}/images/ytA8jsp211KGI5rH56bXyehGEP4.png?width=900&height=480`,
          `${F}/images/7nAe73ZBXY4kPFxBX2GcJZg1g.png?width=900&height=480`,
          `${F}/images/UEVZKIYTbooigCmzR1nUHqEL0Z8.png?width=900&height=480`,
        ],
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/SaFDX988wLiGuRmU4xKS9Qc92UE.png?width=1125&height=3234`,
          `${F}/images/tpIdtivYsWdDR9mmO4tfVUzzn7Y.png?width=1125&height=2436`,
          `${F}/images/Qn3WAMDsUOHkHhttfJzlOTXuHc.png?width=1125&height=2436`,
        ],
      },
    ],
  },
  {
    slug: "dpass",
    title: "駕駛中心",
    subtitle: "建構 Autopass 行車生態系的連結核心",
    english: "Driver Center — The Interconnecting Core of the Mobility Ecosystem",
    intro: [
      "「駕駛中心」是 Autopass 整合車主生態系的關鍵產品，目標是將過往以「車牌」為主的管理模式，轉化為以「車主（人）」為主體的身份識別，藉此串聯起日常與出行移動相關多元服務。",
      "首個 MVP 版本以「點數折抵」作為與車主互動的早期切入點。與加油站業者合作，將點數整合進重新設計的自助加油繳費機的介面流程。首波整合國泰「小樹點」與全家「FamiPoint」。",
    ],
    meta: {
      product: "Autopass",
      platform: "Web",
      timeline: "2024.12 - 2025.01",
      role: "UX / UI / Brand Visual",
    },
    blocks: [
      { kind: "hero", src: "/media/case-dpass-hero.jpg", alt: "駕駛中心" },
      { kind: "h2", text: "品牌設計" },
      {
        kind: "p",
        text: "服務 Icon 取自駕駛者從駕駛座向前望去的空間視角，將此視覺抽象化為設計線條，以曲線框出視野範圍，並結合後照鏡與圓點象徵方向盤，建構出駕駛中心的品牌意象。",
      },
      {
        kind: "p",
        text: "延續 Autopass 品牌既有的視覺元素，包含金屬質感、光感線條與環境反射，並添入「快速通」的橘紅色意象。",
      },
      {
        kind: "grid",
        cols: 2,
        srcs: [
          `${F}/images/ZWPUfVzmQzkZqqL5f016NYYGXs.png?width=4000&height=2400`,
          `${F}/images/Qgiu4t9UDzBpDp9TdeqLRHbFDo.png?width=4000&height=2400`,
          `${F}/images/67rVwkrhVE5roS9SNfKpRaN2hA.png?width=4000&height=2400`,
          `${F}/images/cJ3FyopaIA4Hil4TNdbBWsSTkp4.png?width=4000&height=2400`,
        ],
      },
      { kind: "h2", text: "介面設計" },
      {
        kind: "phones",
        srcs: [
          `${F}/images/LE3UY8RqaRMCWf4DdzcHqLze3ro.png?width=1125&height=2436`,
          `${F}/images/yRvnQzkAGo6xYtZxtZfA1DIQA0.png?width=1125&height=2436`,
          `${F}/images/R2KcamTzlndQfZR27374NtY5wuQ.png?width=1125&height=2436`,
        ],
      },
      {
        kind: "phones",
        srcs: [
          `${F}/images/iYJCAmU143WDERyPUEuhHZUWXeU.png?width=1125&height=2436`,
          `${F}/images/O1l6q3ldu9pPEhCNqwXqdzBjxw.png?width=1125&height=2436`,
          `${F}/images/GrIurIQndIhXkFa0KxxMJqOFyI4.png?width=1125&height=2436`,
        ],
      },
      { kind: "video", src: `${F}/assets/CwbsqkCQn4FcCM974eDPUGjQVac.mp4` },
    ],
  },
];

export function getCase(slug: string) {
  return CASES.find((c) => c.slug === slug);
}
