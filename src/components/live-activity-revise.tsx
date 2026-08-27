import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

const F = "https://framerusercontent.com";

const STAGES = [
  {
    no: "01",
    title: "進場",
    ask: "這場能自動付款嗎？",
    body: "辨識車牌進入支援場站後，先說這場能自動付款——不是先丟計時數字。尚未綁卡，就在卡片上提醒，讓設定發生在停車期間。",
    src: `${F}/images/bHg8sjihjMpBB6ZEOfheFa0WK4.png?width=1125&height=2436`,
  },
  {
    no: "02",
    title: "停車中",
    ask: "停多久了、多少錢？",
    body: "旅程最長、查看最密的一段。卡片只留兩件事：停了多久、預估多少錢。",
    src: `${F}/images/LG4H3nXFGvB0m0uW3SpODIakLA.png?width=1137&height=2448`,
  },
  {
    no: "03",
    title: "離場",
    ask: "付完了嗎？",
    body: "車輛離開後切到完成付款，呈現最終金額與結果，然後結束這張卡片的任務。",
    src: `${F}/images/xx5sXRtMz5DWmHGgY0wOR3obegc.png?width=1125&height=2436`,
  },
];

const FRICTION = [
  {
    tag: "路徑",
    title: "確認一次，步驟太多",
    body: "解鎖 → 開 App → 找卡片。停車中只想看兩個數字，這條路太長。",
  },
  {
    tag: "認知",
    title: "通知是碎片，狀態對不齊",
    body: "同一趟被拆成進場、離場、付款三則獨立訊息。用戶要自己對齊「現在是哪一步」。",
  },
  {
    tag: "轉換",
    title: "關掉推播，資訊跟著斷",
    body: "行銷與停車共用權限。關通知的人收不到進場提示，明明能自動付款，卻去手動繳費。",
  },
];

const REASONS = [
  "路徑縮到最短。關鍵資訊長在鎖定畫面上，喚醒螢幕就能看。",
  "停車狀態不再綁死推播開關。進行中的旅程仍能送到螢幕前。",
  "多則靜態通知收成一張會更新的卡片。用戶只對一個介面。",
];

const APPEARANCE = [
  `${F}/images/zYpE7EkhYeOT2XtFwA1fUwjYhNI.png?width=1125&height=2436`,
  `${F}/images/hklYgONfHn2P7yl6M4zB6n4kAI.png?width=1125&height=2436`,
  `${F}/images/vtjetHhMjiNWmZBPTVuf0YXU4vI.png?width=1125&height=2436`,
  `${F}/images/WAo7UlEF9F86IF9CdygO4CKZszE.png?width=1125&height=2436`,
];

function Phone({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={cn("overflow-hidden rounded-[22px] bg-transparent", className)}>
      <img src={src} alt={alt} className="block w-full bg-transparent" loading="lazy" />
    </figure>
  );
}

function Rule({ children }: { children?: string }) {
  return <p className="font-mono text-kicker tracking-nav text-faint">{children}</p>;
}

export function LiveActivityRevise() {
  return (
    <article className="bg-paper pb-24 text-ink">
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="/media/case-live-hero.jpg"
          alt="鎖定畫面上的停車 Live Activity"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/55 to-transparent" />
        <div className="relative z-10 flex min-h-[72vh] flex-col justify-end px-5 pb-10 pt-24 md:px-10 md:pb-14">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Rule>Carmochi · iOS · 2023.12 – 2024.06</Rule>
            <Link
              to="/work/$slug"
              params={{ slug: "live-activity" }}
              className="font-mono text-kicker tracking-nav text-muted transition-opacity hover:opacity-60"
            >
              ← 對照原稿
            </Link>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-display font-bold tracking-tight text-balance">
            點亮螢幕，
            <br className="hidden md:block" />
            就知道停多久、多少錢
          </h1>
          <p className="mt-3 max-w-md text-lead text-ink-soft">
            把停車中最需要的兩個數字，放到喚醒螢幕就能看見的位置。
          </p>
        </div>
      </section>

      <section className="grid border-y border-line md:grid-cols-3">
        {[
          ["不解鎖", "資訊長在鎖定畫面"],
          ["不開 App", "不必走進停車卡片"],
          ["一張卡片", "進場到離場連續更新"],
        ].map(([k, v]) => (
          <div
            key={k}
            className="border-b border-line px-5 py-8 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 md:px-10"
          >
            <p className="font-display text-title font-bold tracking-tight">{k}</p>
            <p className="mt-2 text-body text-muted">{v}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-10 px-5 py-16 md:grid-cols-12 md:gap-8 md:px-10 md:py-24">
        <div className="md:col-span-4">
          <Rule>01 — 背景</Rule>
          <h2 className="mt-3 font-display text-hero font-bold tracking-tight">
            停車不該
            <br />
            佔用那麼多注意力
          </h2>
        </div>
        <div className="flex max-w-xl flex-col gap-6 text-lead text-ink-soft md:col-span-7 md:col-start-6">
          <p>車麻吉把停車收成一件事：進場、計時、付款、離場。車主不該為了確認狀態，反覆解鎖、打開 App。</p>
          <p>既有流程用多則推播拼出旅程，路徑長、訊息碎。關掉推播的人，連「這場站能自動付款」都收不到，轉換就在這裡流失。</p>
          <p>iOS 17.2 起，Live Activity 可以不經 App 直接出現在鎖定畫面。我們把時數與預估費用，放到喚醒就能看見的位置。</p>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-10">
        <Rule>02 — 摩擦</Rule>
        <h2 className="mt-3 max-w-lg font-display text-hero font-bold tracking-tight">
          舊體驗像一疊對不齊的通知
        </h2>
      </section>
      <ol className="px-5 pb-16 md:px-10 md:pb-24">
        {FRICTION.map((item, i) => (
          <li
            key={item.title}
            className={cn(
              "border-t border-line py-8 md:grid md:grid-cols-12 md:items-baseline md:gap-8 md:py-10",
              i === 1 && "md:pl-6",
              i === 2 && "md:pl-12",
            )}
          >
            <p className="font-mono text-kicker tracking-nav text-faint md:col-span-2">{item.tag}</p>
            <h3 className="mt-2 font-display text-title font-bold md:col-span-4 md:mt-0">{item.title}</h3>
            <p className="mt-2 max-w-xl text-body text-ink-soft md:col-span-6 md:mt-0">{item.body}</p>
          </li>
        ))}
      </ol>

      <section className="border-y border-line bg-surface">
        <div className="grid md:grid-cols-12">
          <div className="border-b border-line px-5 py-12 md:col-span-6 md:border-b-0 md:border-r md:px-10 md:py-16">
            <Rule>體驗</Rule>
            <p className="mt-4 font-display text-title font-bold tracking-tight">
              不解鎖、不開 App，也能掌握時數與費用。從進場到離場，資訊留在同一張卡片上。
            </p>
          </div>
          <div className="px-5 py-12 md:col-span-6 md:px-10 md:py-16">
            <Rule>商務</Rule>
            <p className="mt-4 font-display text-title font-bold tracking-tight">
              改傳遞方式，而不是再催一次推播權限。讓關通知的人仍收得到停車狀態。
            </p>
          </div>
        </div>
        <div className="border-t border-line px-5 py-8 md:px-10">
          <p className="max-w-3xl text-lead text-ink-soft">
            原則：鎖定畫面只放當下必要的資訊。數字尚未可靠時，寧可不顯示，也不要用「0 分鐘」製造錯誤預期。
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <Rule>03 — 為什麼是 Live Activity</Rule>
        <ul className="mt-8 divide-y divide-line border-y border-line">
          {REASONS.map((text, i) => (
            <li key={text} className="grid gap-4 py-6 md:grid-cols-12 md:items-baseline">
              <p className="font-mono text-kicker text-faint md:col-span-2">{String(i + 1).padStart(2, "0")}</p>
              <p className="text-lead text-ink-soft md:col-span-9">{text}</p>
            </li>
          ))}
        </ul>
        <p className="mt-6 font-mono text-kicker leading-body text-muted">
          ※ ActivityKit 自 iOS 16.1 開放；iOS 17.2 起可用遠端推送直接啟動即時動態，不必先打開 App。
        </p>
      </section>

      <section className="pb-8">
        <div className="px-5 md:px-10">
          <Rule>04 — 停車旅程</Rule>
          <h2 className="mt-3 max-w-lg font-display text-hero font-bold tracking-tight">
            每個狀態只回答當下那一件事
          </h2>
        </div>
        {STAGES.map((stage, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={stage.no}
              className="mt-12 grid items-center gap-8 px-5 md:mt-20 md:grid-cols-12 md:gap-10 md:px-10"
            >
              <div className={cn("md:col-span-5", flip && "md:col-start-8")}>
                <p className="font-display text-display font-bold leading-none tracking-tight text-hair">
                  {stage.no}
                </p>
                <h3 className="mt-4 font-display text-title font-bold">{stage.title}</h3>
                <p className="mt-2 text-lead text-ink">{stage.ask}</p>
                <p className="mt-4 max-w-md text-body text-ink-soft">{stage.body}</p>
              </div>
              <div
                className={cn(
                  "md:col-span-6",
                  flip ? "md:col-start-1 md:row-start-1" : "md:col-start-7",
                )}
              >
                <Phone src={stage.src} alt={stage.title} className="mx-auto max-w-xs md:max-w-sm" />
              </div>
            </div>
          );
        })}
      </section>

      <section className="mt-20 grid items-end gap-8 border-t border-line px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <Rule>05 — Dynamic Island</Rule>
          <h2 className="mt-3 font-display text-hero font-bold tracking-tight">Compact 只放 icon</h2>
        </div>
        <p className="max-w-xl text-lead text-ink-soft md:col-span-6 md:col-start-7">
          Live Activity 必須同時處理 Compact、Minimal、Expanded。Compact 不放時數或費用——資料是週期更新，不是逐秒跳動，避免島上出現不可信的數字。
        </p>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-24">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <Rule>06 — Dark / Light</Rule>
            <h2 className="mt-3 font-display text-title font-bold tracking-tight">跟著系統外觀走</h2>
          </div>
          <p className="max-w-sm text-body text-muted">兩套模式都維持對比與層級，日夜鎖定畫面同樣好讀。</p>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {APPEARANCE.map((src, i) => (
            <Phone key={src} src={src} alt={`外觀 ${i + 1}`} />
          ))}
        </div>
      </section>

      <section className="grid bg-asphalt text-surface md:grid-cols-12">
        <div className="px-5 py-14 md:col-span-5 md:px-10 md:py-20">
          <Rule>07 — 上線後</Rule>
          <p className="mt-6 font-display text-display font-bold tracking-tight text-surface">
            <span className="text-dim line-through">0 分鐘</span>
            <br />
            先不顯示
          </p>
        </div>
        <div className="flex flex-col justify-center gap-5 px-5 pb-14 text-lead text-hair md:col-span-6 md:col-start-7 md:px-10 md:py-20">
          <p>收訊差時 Update Token 送不出去，卡片拿不到週期更新。時數會停在「0 分鐘」，離場後也可能留在鎖定畫面。</p>
          <p>第一個 Token 成功前，不顯示 0 分鐘，改成「查看停車金額與時數」。先校正預期，再引導手動更新。</p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <Rule>08 — 成果</Rule>
        <p className="mt-6 max-w-2xl font-display text-title font-bold tracking-tight text-pretty">
          查看路徑從「打開 App」變成「看鎖定畫面」。關推播而流失的人重新看到停車資訊，支援場站的自動付款出場轉換上升。
        </p>
        <p className="mt-6 max-w-xl text-body text-muted">
          Live Activity 開放初期就用在停車，成為交通類產品裡可被記住的差異。
        </p>
        <dl className="mt-12 grid max-w-3xl grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4">
          {[
            ["Product", "車麻吉 Carmochi"],
            ["Platform", "iOS"],
            ["Timeline", "2023.12 – 2024.06"],
            ["Role", "UX / UI"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-kicker tracking-nav text-faint">{k}</dt>
              <dd className="mt-1 text-body text-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}
