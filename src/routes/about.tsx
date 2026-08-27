import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ABOUT } from "@/data/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [{ title: "ABOUT｜JIAN WEI HUANG" }],
  }),
});

function AboutGrid({ children }: { children: ReactNode }) {
  return (
    <div className="min-[960px]:grid min-[960px]:grid-cols-[var(--width-about-rail)_minmax(0,1fr)] min-[960px]:items-start min-[960px]:gap-x-15">
      {children}
    </div>
  );
}

function JobBlock({
  job,
}: {
  job: (typeof ABOUT.jobs)[number];
}) {
  const [lead, ...rest] = job.bullets;
  return (
    <section>
      <h3 className="font-sans text-about-mid font-normal leading-about-head text-ink">
        {job.company}
      </h3>
      <div className="mt-1 flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-sans text-about-section font-bold leading-about-head text-ink">
          {job.role}
        </p>
        <p className="font-sans text-body font-medium leading-about text-ink">{job.years}</p>
      </div>

      <ul className="mt-6 border-t border-hair">
        {job.titles.map((t) => (
          <li
            key={t.title + t.dates}
            className="flex flex-wrap justify-between gap-2 border-b border-hair py-2.5 font-sans text-about-sm leading-about text-ink"
          >
            <span>{t.title}</span>
            <span>{t.dates}</span>
          </li>
        ))}
      </ul>

      <p className="mt-5 text-pretty font-sans text-about-sm leading-about text-dim">{lead}</p>
      {rest.length ? (
        <ul className="mt-3 flex flex-col gap-1">
          {rest.map((b) => (
            <li
              key={b}
              className="relative pl-4 text-pretty font-sans text-about-sm leading-about text-dim before:absolute before:left-0 before:content-['•']"
            >
              {b}
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <main className="mx-auto w-full max-w-about px-5 pb-28 pt-28 min-[960px]:px-0">
        <AboutGrid>
          <div className="flex justify-end pr-3">
            <img
              src={ABOUT.portrait}
              alt={ABOUT.name}
              className="size-20 rounded-full object-cover"
            />
          </div>
          <div className="mt-10 min-[960px]:mt-0">
            <h1 className="font-sans text-about-name font-bold leading-about-head tracking-tight text-ink">
              {ABOUT.name}
            </h1>
            <div className="mt-6 flex flex-col gap-4 text-pretty font-sans text-body leading-about text-ink">
              {ABOUT.bio.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <hr className="mt-8 border-hair" />
            <div className="mt-6 flex justify-end gap-10 font-sans text-about-mid leading-about-head text-ink">
              <a
                href={ABOUT.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:opacity-60"
              >
                ↗ Linkedin
              </a>
              <a href={`mailto:${ABOUT.email}`} className="hover:opacity-60">
                ↳ Contact
              </a>
            </div>
          </div>
        </AboutGrid>

        <hr className="mt-20 border-hair" />

        <AboutGrid>
          <h2 className="mt-28 font-sans text-about-section font-normal leading-about-head text-ink">
            EXPERIENCE
          </h2>
          <div className="mt-8 flex flex-col gap-16 min-[960px]:mt-28">
            {ABOUT.jobs.map((job) => (
              <JobBlock key={job.company} job={job} />
            ))}
          </div>
        </AboutGrid>

        <hr className="mt-20 border-hair" />

        <AboutGrid>
          <h2 className="mt-28 font-sans text-about-section font-normal leading-about-head text-ink">
            AWARDS
          </h2>
          <ul className="mt-8 flex flex-col min-[960px]:mt-28">
            {ABOUT.awards.map((a, i) => (
              <li
                key={a.name}
                className={i < ABOUT.awards.length - 1 ? "border-b border-hair pb-8 mb-8" : ""}
              >
                <h3 className="font-sans text-about-mid font-normal leading-about-head text-ink">
                  {a.name}
                </h3>
                <p className="mt-1 font-sans text-about-sm leading-about text-note">{a.work}</p>
                <ul className="mt-0.5 font-sans text-about-sm leading-about text-note">
                  {a.notes.map((n) => (
                    <li key={n}>◇ {n}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </AboutGrid>
      </main>
    </PageShell>
  );
}
