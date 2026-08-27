import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { WORK, WORK_INTRO } from "@/data/site";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [{ title: "WORK｜JIAN WEI HUANG" }],
  }),
});

function WorkIndex() {
  return (
    <PageShell>
      <main className="px-3 pb-24 lg:px-1.5">
        <p className="max-w-work-intro pt-20 text-pretty text-body leading-work-intro text-quiet md:text-work-intro">
          {WORK_INTRO.before}
          {WORK_INTRO.links.map((link, i) => (
            <span key={link.slug}>
              {i > 0 ? "、" : null}
              <Link
                to="/work/$slug"
                params={{ slug: link.slug }}
                className="text-nav-active transition-opacity hover:opacity-60"
              >
                {link.label}
              </Link>
            </span>
          ))}
          {WORK_INTRO.after}
        </p>

        <ul className="mt-10 grid grid-cols-1 gap-x-2 gap-y-10 lg:grid-cols-3">
          {WORK.map((item) => {
            const video = "video" in item ? item.video : undefined;
            return (
              <li key={item.slug}>
                <Link
                  to="/work/$slug"
                  params={{ slug: item.slug }}
                  className="group flex flex-col gap-3"
                >
                  <div className="relative overflow-hidden rounded-lg bg-asphalt">
                    <img
                      src={item.cover}
                      alt=""
                      className="aspect-portrait w-full origin-center object-cover scale-[1.08] transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-100"
                    />
                    {video ? (
                      <video
                        className="pointer-events-none absolute inset-0 size-full origin-center object-cover scale-[1.08] opacity-0 transition-[opacity,transform] duration-500 ease-[var(--ease-out)] group-hover:scale-100 group-hover:opacity-100"
                        src={video}
                        muted
                        loop
                        playsInline
                        preload="auto"
                        autoPlay
                      />
                    ) : null}
                  </div>
                  <div className="px-1">
                    <p className="font-sans text-work-card leading-none text-ink">
                      {item.title}
                    </p>
                    <p className="mt-1 font-sans text-work-meta leading-work-meta text-ink">
                      {item.type} ． {item.year}
                    </p>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </PageShell>
  );
}
