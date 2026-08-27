import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { WORK, WORK_INTRO } from "@/data/site";

export const Route = createFileRoute("/work/")({
  component: WorkIndex,
  head: () => ({
    meta: [{ title: "WORK｜JIAN WEI HUANG" }],
  }),
});

const mediaClass =
  "aspect-portrait w-full origin-center object-cover scale-[1.08] transition-transform duration-500 ease-[var(--ease-out)] group-hover:scale-100";

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
                className="text-ink transition-opacity hover:opacity-60"
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
                  <div className="overflow-hidden rounded-lg bg-asphalt">
                    {video ? (
                      <video
                        className={mediaClass}
                        src={video}
                        poster={item.cover}
                        muted
                        loop
                        playsInline
                        autoPlay
                        preload="auto"
                      />
                    ) : (
                      <img src={item.cover} alt="" className={mediaClass} />
                    )}
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
