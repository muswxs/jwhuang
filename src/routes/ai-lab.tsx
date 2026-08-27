import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { LAB } from "@/data/site";

export const Route = createFileRoute("/ai-lab")({
  component: AiLabPage,
  head: () => ({
    meta: [{ title: "AI LAB｜JIAN WEI HUANG" }],
  }),
});

function AiLabPage() {
  return (
    <PageShell>
      <main className="px-5 pb-20 md:px-10">
        <p className="font-mono text-meta text-muted">↳ 探索 AI 與設計的互動邊界</p>
        <ul className="mt-8 flex flex-col gap-14">
          {LAB.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="group block"
              >
                <div className="overflow-hidden rounded-lg bg-asphalt">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="aspect-video w-full object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                  <div>
                    <h2 className="font-display text-title font-bold tracking-tight">
                      {item.title}
                    </h2>
                    <p className="mt-1 max-w-xl text-body text-ink-soft">{item.desc}</p>
                  </div>
                  <p className="mt-2 font-mono text-meta text-muted md:mt-0">
                    {item.url} ↗
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
