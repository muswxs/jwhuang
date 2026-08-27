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
      <main className="mx-auto max-w-[44rem] px-5 pb-24 pt-16 md:px-8">
        <section className="flex items-start gap-8 md:gap-12">
          <img
            src={ABOUT.portrait}
            alt={ABOUT.name}
            className="size-20 shrink-0 rounded-full object-cover md:size-[5.5rem]"
          />
          <div className="min-w-0 flex-1">
            <h1 className="font-display text-title font-bold tracking-tight">
              {ABOUT.name}
            </h1>
            <div className="mt-6 flex flex-col gap-5 text-pretty text-body leading-body text-ink-soft">
              {ABOUT.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>

        <hr className="mt-8 border-line" />

        <div className="mt-6 flex justify-end gap-8 font-nav text-nav tracking-nav">
          <a
            href={ABOUT.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-nav-link hover:opacity-70"
          >
            ↗ Linkedin
          </a>
          <a href={`mailto:${ABOUT.email}`} className="text-nav-link hover:opacity-70">
            ↳ Contact
          </a>
        </div>

        <hr className="mt-8 border-line" />

        <h2 className="mt-16 font-mono text-kicker tracking-nav text-faint">EXPERIENCE</h2>
        <div className="mt-8 flex flex-col gap-16">
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
        <ul className="mt-8 flex flex-col gap-8">
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
      </main>
    </PageShell>
  );
}
