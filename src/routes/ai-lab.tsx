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
        <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2">
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
                    className="aspect-video w-full origin-center object-cover transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-4">
                  <h2 className="font-display text-title font-bold tracking-tight">
                    {item.title}
                  </h2>
                  <p className="mt-1 text-body text-ink-soft">{item.desc}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
