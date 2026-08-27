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
    <figure className="overflow-hidden rounded-[22px] bg-transparent">
      <img
        src={src}
        alt={alt}
        className="block w-full bg-transparent"
        loading="lazy"
      />
    </figure>
  );
}

function LoopVideo({ src, poster }: { src: string; poster?: string }) {
  return (
    <div className="overflow-hidden rounded-lg bg-paper">
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

function BlockView({
  block,
  title,
  revise,
}: {
  block: Block;
  title: string;
  revise?: boolean;
}) {
  switch (block.kind) {
    case "p":
      return (
        <p className={cn("text-pretty text-lead text-ink-soft", revise ? "max-w-xl" : "max-w-2xl")}>
          {block.text}
        </p>
      );
    case "h2":
      return (
        <h2
          className={cn(
            "font-display font-bold tracking-tight",
            revise ? "mt-2 text-title" : "mt-6 text-title",
          )}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 className="font-sans text-lead font-medium text-ink">{block.text}</h3>;
    case "note":
      return <p className="font-mono text-kicker leading-body text-muted">※ {block.text}</p>;
    case "hero":
      return (
        <div className="overflow-hidden rounded-lg bg-paper">
          <img src={block.src} alt={block.alt} className="w-full bg-paper object-cover" />
        </div>
      );
    case "img":
      return (
        <div className={cn("overflow-hidden rounded-lg bg-paper", block.wide ? "w-full" : "max-w-3xl")}>
          <img src={block.src} alt={block.alt} className="block w-full bg-paper" loading="lazy" />
        </div>
      );
    case "phones":
      return (
        <div
          className={cn(
            "grid gap-3 md:gap-5",
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
              className="w-full rounded-lg bg-paper object-cover"
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
  const revise = study.variant === "revise";

  return (
    <article className="mx-auto max-w-5xl px-5 pb-24 pt-4 md:px-10">
      <header className={revise ? "max-w-2xl" : "max-w-3xl"}>
        {study.kicker ? (
          <p className="mb-3 font-mono text-kicker tracking-nav text-faint">{study.kicker}</p>
        ) : null}
        <h1 className="font-display text-display font-bold tracking-tight text-balance">
          {study.title}
        </h1>
        <p className="mt-3 text-lead text-ink-soft">{study.subtitle}</p>
        <p className="mt-2 font-mono text-meta italic text-muted">{study.english}</p>
      </header>

      <div className={cn("mt-8 flex flex-col", revise ? "max-w-xl gap-5" : "max-w-3xl gap-4")}>
        {study.intro.map((p) => (
          <p key={p} className="text-pretty text-lead text-ink-soft">
            {p}
          </p>
        ))}
      </div>

      {study.live && study.live.length > 0 ? (
        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {study.live.map((l) => {
            const internal = l.href.startsWith("/");
            return (
              <a
                key={l.href}
                href={l.href}
                target={internal ? undefined : "_blank"}
                rel={internal ? undefined : "noreferrer"}
                className="font-nav text-nav tracking-nav text-nav-active transition-opacity hover:opacity-70"
              >
                {l.label}
              </a>
            );
          })}
        </div>
      ) : null}

      <Meta study={study} />

      <div className={cn("mt-12 flex flex-col", revise ? "gap-12 md:gap-16" : "gap-10 md:gap-14")}>
        {study.blocks.map((block, i) => (
          <BlockView key={i} block={block} title={study.title} revise={revise} />
        ))}
      </div>
    </article>
  );
}
