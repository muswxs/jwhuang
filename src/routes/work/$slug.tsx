import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CaseStudyView } from "@/components/case-blocks";
import { PageShell } from "@/components/page-shell";
import { NotFound } from "@/components/not-found";
import { getCase } from "@/data/cases";
import { WORK } from "@/data/site";

export const Route = createFileRoute("/work/$slug")({
  component: CasePage,
  notFoundComponent: NotFound,
  loader: ({ params }) => {
    const study = getCase(params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: [{ title: `${loaderData?.title ?? "WORK"}｜JIAN WEI HUANG` }],
  }),
});

function CasePage() {
  const study = Route.useLoaderData();
  const idx = WORK.findIndex((w) => w.slug === study.slug);
  const prev = idx > 0 ? WORK[idx - 1] : null;
  const next = idx >= 0 && idx < WORK.length - 1 ? WORK[idx + 1] : null;

  return (
    <PageShell>
      <CaseStudyView study={study} />
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 border-t border-line px-5 py-10 md:px-10">
        {prev ? (
          <Link
            to="/work/$slug"
            params={{ slug: prev.slug }}
            className="font-nav text-nav tracking-nav text-muted transition-colors hover:text-ink"
          >
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            to="/work/$slug"
            params={{ slug: next.slug }}
            className="ml-auto font-nav text-nav tracking-nav text-muted transition-colors hover:text-ink"
          >
            {next.title} →
          </Link>
        ) : null}
      </nav>
    </PageShell>
  );
}
