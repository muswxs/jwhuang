import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { WORK } from "@/data/site";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [{ title: "WORK｜JIAN WEI HUANG" }],
  }),
});

function WorkIndex() {
  return (
    <PageShell>
      <main className="px-5 pb-20 md:px-8">
        <p className="ml-auto max-w-xl text-pretty text-body leading-body text-ink-soft md:text-lead">
          產品選於出行與支付領域，橫跨停車付款、地圖互動、語音辨識等場景，包含 Live Activity
          停車即時動態、AI 出行秘書、Autopass 品牌官網、跨平台服務授權等設計專案。
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {WORK.map((item) => (
            <li key={item.slug}>
              <Link
                to="/work/$slug"
                params={{ slug: item.slug }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-md bg-asphalt">
                  <img
                    src={item.cover}
                    alt=""
                    className="aspect-portrait w-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden bg-gradient-to-t from-black/70 via-black/20 to-transparent p-3 pt-16 text-paper md:block">
                    <p className="font-sans text-body font-medium">{item.title}</p>
                    <p className="mt-1 font-mono text-kicker tracking-nav text-paper/80">
                      {item.year}
                      <span className="mx-1.5">．</span>
                      {item.type}
                    </p>
                  </div>
                </div>
                <div className="mt-3 md:hidden">
                  <p className="font-sans text-lead font-medium">{item.title}</p>
                  <p className="mt-1 text-meta text-muted">{item.subtitle}</p>
                  <p className="mt-1 font-mono text-kicker tracking-nav text-faint">
                    {item.year}
                    <span className="mx-1.5">．</span>
                    {item.type}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
