import type { Block, CaseStudy } from "@/data/cases";
import { cn } from "@/lib/cn";

function Meta({ study }: { study: CaseStudy }) {
  const items = [
    ["Product", study.meta.product],
    ["Platform", study.meta.platform],
    ["Timeline", study.meta.timeline],
    ["My Role", study.meta.role],
  ];
  return (
    <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-8 md:grid-cols-4">
      {items.map(([k, v]) => (
        <div key={k}>
          <dt className="font-mono text-kicker tracking-nav text-faint">{k}</dt>
          <dd className="mt-1 font-sans text-body text-ink-soft">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

function Phone({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="overflow-hidden rounded-lg bg-asphalt shadow-[0_18px_40px_rgba(0,0,0,0.18)]">
      <img src={src} alt={alt} className="block w-full" loading="lazy" />
    </figure>
  );
}

function LoopVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-asphalt">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="block w-full"
      />
    </div>
  );
}

function BlockView({ block, title }: { block: Block; title: string }) {
  switch (block.kind) {
    case "p":
      return <p className="max-w-2xl text-pretty text-lead text-ink-soft">{block.text}</p>;
    case "h2":
      return (
        <h2 className="mt-6 font-display text-title font-bold tracking-tight">{block.text}</h2>
      );
    case "h3":
      return (
        <h3 className="font-sans text-lead font-medium text-ink">{block.text}</h3>
      );
    case "note":
      return (
        <p className="font-mono text-kicker leading-body text-muted">※ {block.text}</p>
      );
    case "hero":
      return (
        <div className="overflow-hidden rounded-lg">
          <img
            src={block.src}
            alt={block.alt}
            className="w-full object-cover"
          />
        </div>
      );
    case "img":
      return (
        <div className={cn("overflow-hidden rounded-lg", block.wide ? "w-full" : "max-w-3xl")}>
          <img
            src={block.src}
            alt={block.alt}
            className="block w-full"
            loading="lazy"
          />
        </div>
      );
    case "phones":
      return (
        <div
          className={cn(
            "grid gap-4 md:gap-6",
            block.srcs.length > 3 ? "grid-cols-2 md:grid-cols-4" : "grid-cols-3",
          )}
        >
          {block.srcs.map((src) => (
            <Phone key={src} src={src} alt={title} />
          ))}
        </div>
      );
    case "grid":
      return (
        <div
          className={cn(
            "grid gap-3 md:gap-4",
            block.cols === 4
              ? "grid-cols-2 md:grid-cols-4"
              : block.cols === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-2 md:grid-cols-3",
          )}
        >
          {block.srcs.map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              className="w-full rounded-lg bg-surface object-cover"
              loading="lazy"
            />
          ))}
        </div>
      );
    case "video":
      return <LoopVideo src={block.src} poster={block.poster} />;
    case "videos":
      return (
        <div
          className={cn(
            "grid gap-3 md:gap-4",
            block.srcs.length === 2 ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3",
          )}
        >
          {block.srcs.map((src) => (
            <LoopVideo key={src} src={src} />
          ))}
        </div>
      );
    case "stages":
      return (
        <ol className="grid gap-6 md:grid-cols-3">
          {block.items.map((item, i) => (
            <li key={item.title} className="border-t border-line pt-4">
              <p className="font-mono text-kicker text-faint">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-2 font-display text-lead font-bold">{item.title}</h3>
              <p className="mt-2 text-body text-ink-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      );
    default:
      return null;
  }
}

export function CaseStudyView({ study }: { study: CaseStudy }) {
  return (
    <article className="mx-auto max-w-5xl px-5 pb-24 pt-4 md:px-10">
      <header className="max-w-3xl">
        <h1 className="font-display text-display font-bold tracking-tight text-balance">
          {study.title}
        </h1>
        <p className="mt-3 text-lead text-ink-soft">{study.subtitle}</p>
        <p className="mt-2 font-mono text-meta italic text-muted">{study.english}</p>
      </header>

      <div className="mt-8 flex max-w-3xl flex-col gap-4">
        {study.intro.map((p) => (
          <p key={p} className="text-pretty text-lead text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      {study.live && study.live.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {study.live.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="font-nav text-nav tracking-nav text-nav-active transition-opacity hover:opacity-70"
            >
              {l.label}
            </a>
          ))}
        </div>
      ) : null}

      <Meta study={study} />

      <div className="mt-12 flex flex-col gap-10 md:gap-14">
        {study.blocks.map((block, i) => (
          <BlockView key={i} block={block} title={study.title} />
        ))}
      </div>
    </article>
  );
}
