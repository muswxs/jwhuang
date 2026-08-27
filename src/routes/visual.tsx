import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { VISUAL } from "@/data/site";

export const Route = createFileRoute("/visual")({
  component: VisualPage,
  head: () => ({
    meta: [{ title: "VISUAL｜JIAN WEI HUANG" }],
  }),
});

function VisualPage() {
  return (
    <PageShell>
      <main className="px-5 pb-20 md:px-8">
        <h1 className="font-display text-title font-bold tracking-tight">Motion</h1>
        <div className="scroll-x mt-8 flex snap-x gap-6 overflow-x-auto pb-6 md:gap-8">
          {VISUAL.map((item) => (
            <figure
              key={item.title}
              className="w-[min(72vw,20rem)] shrink-0 snap-start md:w-80"
            >
              <div className="relative aspect-phone overflow-hidden rounded-xl bg-asphalt p-4 shadow-[0_16px_40px_rgba(0,0,0,0.16)]">
                <div className="relative size-full overflow-hidden rounded-screen">
                  <img
                    src={item.still}
                    alt=""
                    className="absolute inset-0 size-full object-cover"
                  />
                  <video
                    src={item.video}
                    poster={item.still}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 size-full object-cover"
                  />
                </div>
              </div>
              <figcaption className="mt-3 font-mono text-meta text-ink-soft">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </main>
    </PageShell>
  );
}
