import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/cn";

const F = "https://framerusercontent.com";

const PROMISE = [
  ["不低頭", "視線留在路上"],
  ["一口說完", "多條件不用層層點"],
  ["記得偏好", "限高、油品、免費停車自動套"],
] as const;

const WHO = [
  {
    tag: "條件",
    title: "要一次篩多條件的車主",
    body: "金額範圍、支付方式、路經地點一起講。不想先搜地點，再開篩選面板點三次。",
  },
  {
    tag: "頻率",
    title: "進車就要下一個目的地的通勤族",
    body: "停車場、加油站是日常。路上沒有時間低頭打字，也不想為了搜尋先停邊。",
  },
  {
    tag: "安全",
    title: "不想在開車時點螢幕的駐駛",
    body: "視線離開路面的成本太高。搜尋要能用聲音完成，不要求手指參與。",
  },
];

const FRICTION = [
  {
    tag: "視線",
    title: "打字就是低頭",
    body: "鍵盤搜尋要看螢幕。行車時這件事不是麻煩，是風險。",
  },
  {
    tag: "路徑",
    title: "複雜條件要層層點",
    body: "先選類型、再篩品牌、再勾限高。停下來才敢操作時，搜尋已經不在路上。",
  },
  {
    tag: "語境",
    title: "單次語音記不住前文",
    body: "早期 STT 只是換輸入法。車主先說「去天母古道」、接著「順路加個油」，系統聽不懂這是同一段話。",
  },
];

const TURNS = [
  {
    title: "說出地點",
    ask: "找 101 附近的中油。",
    body: "一句話裝進地點、品牌、場景。不用先選分類。",
    src: `${F}/images/qi7ki0rRAwT6BlnnaTrvPV2HphA.png?width=1125&height=2436`,
  },
  {
    title: "補上條件",
    ask: "順路、還要能折抵免費停車。",
    body: "需求可以分段進來。對話累積前文，不重新開始。",
    src: `${F}/images/d72c6X3BWVDzhV0SBhMtRvg.png?width=1125&height=2436`,
  },
  {
    title: "落到地點",
    ask: "這幾個，哪個最貼近我？",
    body: "模糊意圖變成可以去的場。結果上圖，也留在對話裡。",
    src: `${F}/images/DTULn9z1tXJPL6K2kiDcsuogfs.png?width=1125&height=2436`,
  },
];

const ENTRY = [
  `${F}/images/XNBt6HByx7ENMFMIsIYPB8rRj8.png?width=1125&height=2436`,
  `${F}/images/Xfd8ZMZQASOeCFOARhDTnXUPI.png?width=1125&height=2436`,
  `${F}/images/eunn1JtiftQKzTk4SseDdVR2zM.png?width=1125&height=2436`,
];

const CLIPS = [
  `${F}/assets/CptA6gWLlWoLHJkEr4dpFhAqN3E.mp4`,
  `${F}/assets/XixdUM7vlJXdpEBgoywEPhw2Og.mp4`,
  `${F}/assets/BZZh2Is9H73D4vc3gXRLVx0Inzg.mp4`,
];

const PREFS = [
  {
    title: "停車",
    body: "限高、機械或平面、室內外、信用卡免費停車。",
    src: `${F}/images/c1wGBb9hYiaJODndz8teyUT3G4o.png?width=1125&height=2436`,
  },
  {
    title: "加油",
    body: "油品與品牌分開設。中油、台塑、加滿不用每次重說。",
    src: `${F}/images/I1mK1wjq1OKutliQ7CH0eHTbRyQ.png?width=1125&height=2436`,
  },
  {
    title: "一次設好",
    body: "偏好跟著車走。下次搜尋直接套用，不用再篩一遍。",
    src: `${F}/images/a0atQrjfznxuUcCxTZ1iKIGMb8.png?width=1125&height=2436`,
  },
];

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-[22px] bg-transparent">
      <img src={src} alt={alt} className="block w-full bg-transparent" loading="lazy" />
    </figure>
  );
}

function LoopVideo({ src }: { src: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-paper">
      <video src={src} autoPlay muted loop playsInline className="block w-full" />
    </div>
  );
}

function Rule({ children }: { children: string }) {
  return <p className="font-mono text-kicker tracking-nav text-faint">{children}</p>;
}

function Frame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-5xl px-5 md:px-10", className)}>
      {children}
    </div>
  );
}

function Section({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <section className={className}>
      <Frame className={cn("py-14 md:py-20", innerClassName)}>{children}</Frame>
    </section>
  );
}

export function AiAssistantRevise() {
  return (
    <article className="bg-paper pb-8 text-ink">
      <section className="relative min-h-dvh overflow-hidden md:min-h-[80vh]">
        <img
          src="/media/case-ai-hero.jpg"
          alt="AI 出行秘書對話畫面"
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-paper via-paper/60 to-transparent" />
        <div className="relative z-10 flex min-h-dvh flex-col justify-end md:min-h-[80vh]">
          <Frame className="pb-10 pt-24 md:pb-14">
            <Rule>Carmochi · iOS、Android · 2025.02 – 2025.05</Rule>
            <h1 className="mt-4 max-w-3xl font-display text-display font-bold tracking-tight text-balance">
              開口說，就找到下一個目的地
            </h1>
            <p className="mt-3 max-w-xl text-lead text-ink-soft">
              把行車搜尋從「低頭打字、層層篩選」改成能聽懂口語條件的對話。
            </p>
            <Link
              to="/work/$slug"
              params={{ slug: "ai-assistant" }}
              className="mt-6 font-mono text-kicker tracking-nav text-muted transition-opacity hover:opacity-60"
            >
              ← 對照原稿
            </Link>
          </Frame>
        </div>
      </section>

      <section className="border-y border-line">
        <Frame>
          <div className="grid md:grid-cols-3">
            {PROMISE.map(([k, v], i) => (
              <div
                key={k}
                className={cn(
                  "py-8",
                  i > 0 && "border-t border-line md:border-t-0 md:border-l md:pl-8",
                  i < 2 && "md:pr-8",
                )}
              >
                <p className="font-display text-title font-bold tracking-tight">{k}</p>
                <p className="mt-2 text-body text-muted">{v}</p>
              </div>
            ))}
          </div>
        </Frame>
      </section>

      <Section>
        <Rule>01 — 背景</Rule>
        <h2 className="mt-3 max-w-xl font-display text-hero font-bold tracking-tight">
          行車時搜尋，本來就不該要低頭
        </h2>
        <div className="mt-8 flex max-w-2xl flex-col gap-5 text-lead text-ink-soft">
          <p>
            對每天開車的人來說，「移動中找停車場或加油站」幾乎是日常。傳統搜尋卻不是為這個時刻設的。
          </p>
          <p>
            打字要低頭，視線離開路面。複雜條件沒法一句話講完，只能停下來再層層點。搜尋成了隱性風險。
          </p>
          <p>
            我們把輸入從鍵盤換成能理解口語的對話，讓車主用說話的方式表達需求，再用偏好設定把結果縮到這輛車。
          </p>
        </div>
      </Section>

      <Section innerClassName="pt-0 md:pt-0">
        <Rule>02 — 摩擦</Rule>
        <h2 className="mt-3 max-w-xl font-display text-hero font-bold tracking-tight">
          舊體驗像在要求駐駛停下來
        </h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {FRICTION.map((item, i) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="font-mono text-kicker text-faint">
                {String(i + 1).padStart(2, "0")} {item.tag}
              </p>
              <h3 className="mt-2 font-display text-lead font-bold">{item.title}</h3>
              <p className="mt-2 text-body text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section innerClassName="pt-0 md:pt-0">
        <Rule>03 — 誰需要</Rule>
        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {WHO.map((item, i) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="font-mono text-kicker text-faint">
                {String(i + 1).padStart(2, "0")} {item.tag}
              </p>
              <h3 className="mt-2 font-display text-lead font-bold">{item.title}</h3>
              <p className="mt-2 text-body text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <section className="border-y border-line bg-surface">
        <Frame>
          <div className="grid md:grid-cols-2">
            <div className="border-b border-line py-12 md:border-b-0 md:border-r md:py-16 md:pr-10">
              <Rule>體驗</Rule>
              <p className="mt-4 font-display text-title font-bold tracking-tight">
                開口說就有結果。多條件、分段補充，系統都記得你剛剛說過什麼。
              </p>
            </div>
            <div className="py-12 md:py-16 md:pl-10">
              <Rule>商務</Rule>
              <p className="mt-4 font-display text-title font-bold tracking-tight">
                從出行支付工具，走向可以訂閱的能力。秘書是這一步的第一個入口。
              </p>
            </div>
          </div>
          <p className="max-w-2xl border-t border-line py-8 text-lead text-ink-soft">
            原則：不只是把鍵盤換成麥克風。要能處理「順路」「附近」「又要…」這種口語補充。
          </p>
        </Frame>
      </section>

      <Section>
        <Rule>04 — 從 STT 到對話</Rule>
        <h2 className="mt-3 max-w-xl font-display text-hero font-bold tracking-tight">
          單次輸入解不了分段的需求
        </h2>
        <div className="mt-8 flex max-w-2xl flex-col gap-5 text-lead text-ink-soft">
          <p>
            早期只能語音轉文字。車主說完一句，系統當作新的關鍵字搜尋——跟打字沒有差。
          </p>
          <p>
            AI 熟了之後，才能把「找 101 附近、要中油、順路」當作同一件事。架構從單次指令，換成能累積語境的助理。
          </p>
        </div>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {TURNS.map((stage, i) => (
            <li key={stage.title}>
              <p className="font-mono text-kicker text-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-lead font-bold">{stage.title}</h3>
              <p className="mt-1 text-body text-ink">{stage.ask}</p>
              <p className="mt-2 text-body text-ink-soft">{stage.body}</p>
              <div className="mt-6">
                <Phone src={stage.src} alt={stage.title} />
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="border-t border-line">
        <Rule>05 — 入口與角色</Rule>
        <h2 className="mt-3 max-w-xl font-display text-hero font-bold tracking-tight">
          地圖右下角，一點進入秘書
        </h2>
        <p className="mt-6 max-w-2xl text-lead text-ink-soft">
          入口放在地圖頁的車麻吉頭像。視覺把 App 角色與 AI 的星星起號合在一起，對話頁同時支援語音與手動輸入——停著時也能用。
        </p>
        <div className="mt-10 grid grid-cols-3 gap-3 md:gap-5">
          {ENTRY.map((src, i) => (
            <Phone key={src} src={src} alt={`入口 ${i + 1}`} />
          ))}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
          {CLIPS.map((src) => (
            <LoopVideo key={src} src={src} />
          ))}
        </div>
      </Section>

      <Section innerClassName="pt-0 md:pt-0">
        <Rule>06 — 出行偏好</Rule>
        <h2 className="mt-3 max-w-xl font-display text-hero font-bold tracking-tight">
          停車與加油，不要擺在同一頁
        </h2>
        <p className="mt-6 max-w-2xl text-lead text-ink-soft">
          停車在意限高與場型；加油在意油品與品牌。拆開後，每個場景都能建自己的規則。
        </p>
        <ol className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {PREFS.map((item, i) => (
            <li key={item.title}>
              <p className="font-mono text-kicker text-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-lead font-bold">{item.title}</h3>
              <p className="mt-2 text-body text-ink-soft">{item.body}</p>
              <div className="mt-6">
                <Phone src={item.src} alt={item.title} />
              </div>
            </li>
          ))}
        </ol>
      </Section>

      <section className="bg-asphalt text-surface">
        <Frame className="py-14 md:py-20">
          <Rule>07 — 成果</Rule>
          <p className="mt-6 max-w-2xl font-display text-display font-bold tracking-tight text-surface">
            從「停下來操作」
            <br />
            變成「開口就有結果」
          </p>
          <div className="mt-8 flex max-w-2xl flex-col gap-5 text-lead text-hair">
            <p>
              行車搜尋的本質變了：不用先停邊、不用層層點。車主用說話的節奏表達需求，系統把意圖落到場站。
            </p>
            <p>
              商務上，這是車麻吉從「出行支付工具」走向「功能訂閱」的第一步——秘書不只是搜尋入口，也是下一波能力的展示面。
            </p>
          </div>
        </Frame>
      </section>

      <Section className="border-t border-line" innerClassName="pt-14 md:pt-20">
        <Rule>08 — 專案</Rule>
        <dl className="mt-8 grid max-w-3xl grid-cols-2 gap-6 md:grid-cols-4">
          {[
            ["Product", "車麻吉 Carmochi"],
            ["Platform", "iOS、Android"],
            ["Timeline", "2025.02 – 2025.05"],
            ["Role", "UX / UI / Visual"],
          ].map(([k, v]) => (
            <div key={k}>
              <dt className="font-mono text-kicker tracking-nav text-faint">{k}</dt>
              <dd className="mt-1 text-body text-ink-soft">{v}</dd>
            </div>
          ))}
        </dl>
      </Section>
    </article>
  );
}
