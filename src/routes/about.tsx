import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ABOUT } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "ABOUT｜JIAN WEI HUANG" }],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <main className="grid gap-12 px-5 pb-24 md:grid-cols-[minmax(16rem,22rem)_1fr] md:gap-16 md:px-10">
        <aside className="md:sticky md:top-20 md:self-start">
          <img
            src={ABOUT.portrait}
            alt={ABOUT.name}
            className="size-20 rounded-full object-cover md:size-24"
          />
          <h1 className="mt-6 font-display text-title font-bold tracking-tight">
            {ABOUT.name}
          </h1>
          <div className="mt-5 flex max-w-sm flex-col gap-4 text-pretty text-body leading-body text-ink-soft">
            {ABOUT.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-2 font-nav text-nav tracking-nav">
            <a
              href={ABOUT.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-nav-active hover:opacity-70"
            >
              ↗ Linkedin
            </a>
            <a href={`mailto:${ABOUT.email}`} className="text-nav-active hover:opacity-70">
              ↳ Contact
            </a>
          </div>
        </aside>

        <div>
          <h2 className="font-mono text-kicker tracking-nav text-faint">EXPERIENCE</h2>
          <div className="mt-6 flex flex-col gap-16">
            {ABOUT.jobs.map((job) => (
              <section key={job.company}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-title font-bold tracking-tight">
                    {job.company}
                  </h3>
                  <p className="font-mono text-kicker text-muted">{job.years}</p>
                </div>
                <p className="mt-1 text-body text-ink-soft">{job.role}</p>
                <ul className="mt-4 space-y-1.5">
                  {job.titles.map((t) => (
                    <li
                      key={t.title + t.dates}
                      className="flex flex-wrap justify-between gap-2 font-mono text-kicker text-muted"
                    >
                      <span>{t.title}</span>
                      <span>{t.dates}</span>
                    </li>
                  ))}
                </ul>
                <ul className="mt-6 flex flex-col gap-3 text-pretty text-body leading-body text-ink-soft">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <h2 className="mt-20 font-mono text-kicker tracking-nav text-faint">AWARDS</h2>
          <ul className="mt-6 flex flex-col gap-8">
            {ABOUT.awards.map((a) => (
              <li key={a.name}>
                <h3 className="font-display text-lead font-bold">{a.name}</h3>
                <p className="mt-1 text-body text-ink-soft">{a.work}</p>
                <ul className="mt-1 space-y-0.5 font-mono text-kicker text-muted">
                  {a.notes.map((n) => (
                    <li key={n}>◇ {n}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </PageShell>
  );
}
