import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { VisualVideo } from "@/components/visual-video";
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
      <main className="pb-24 pt-16">
        <div className="mx-auto w-full max-w-[86rem] px-6 md:px-12 lg:px-20">
          <h1 className="font-sans text-[1.25rem] font-normal leading-snug text-ink md:text-[1.375rem]">
            Motion
          </h1>
          <ul className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
            {VISUAL.map((item) => (
              <li key={item.title}>
                <figure>
                  <div className="overflow-hidden rounded-[1.35rem] bg-[#cad3d9]">
                    <div className="relative aspect-[9/19.5]">
                      <VisualVideo src={item.video} />
                    </div>
                  </div>
                  <figcaption className="mt-3 font-sans text-[13px] leading-snug text-ink">
                    {item.title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>

        <section className="mt-24">
          <div className="mx-auto w-full max-w-[86rem] px-6 md:px-12 lg:px-20">
            <h2 className="font-sans text-[1.25rem] font-normal leading-snug text-ink md:text-[1.375rem]">
              App Store Screenshots
            </h2>
          </div>
          <div
            className="scroll-x mt-10 flex gap-5 overflow-x-auto px-6 pb-4 md:px-12 lg:px-20"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, #000 0%, #000 82%, transparent 100%)",
              maskImage:
                "linear-gradient(to right, #000 0%, #000 82%, transparent 100%)",
            }}
          >
            {VISUAL.map((item, index) => (
              <figure
                key={item.still}
                className="w-[min(72vw,20rem)] shrink-0 snap-start"
              >
                <div className="overflow-hidden rounded-[1.35rem] bg-[#cad3d9]">
                  <img
                    src={item.still}
                    alt={`App Store screenshot ${String(index + 1).padStart(2, "0")}`}
                    className="aspect-[1290/2796] w-full object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </section>
      </main>
    </PageShell>
  );
}
