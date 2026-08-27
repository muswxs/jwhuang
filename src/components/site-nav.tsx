import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAV } from "@/data/site";
import { cn } from "@/lib/cn";

function HomeMark({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      to="/"
      onClick={onClick}
      className={cn("inline-flex size-4 items-center justify-center", className)}
      aria-label="Home"
    >
      <span className="block size-4 rounded-full border-[1.5px] border-current" />
    </Link>
  );
}

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "z-40 flex h-[60px] items-center justify-between px-5",
          overlay
            ? "pointer-events-none fixed inset-x-0 top-0"
            : "sticky top-0 bg-transparent",
        )}
      >
        <nav
          className="pointer-events-auto hidden h-12 items-center gap-5 font-mono text-[16px] font-normal leading-[48px] text-nav-link md:flex"
          aria-label="Primary"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              activeProps={{ className: "text-nav-active" }}
              className="transition-opacity hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="pointer-events-auto h-12 font-mono text-[16px] font-normal leading-[48px] text-ink md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          MENU
        </button>

        <HomeMark className="pointer-events-auto hidden text-ink md:inline-flex" />
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 bg-menu-bg text-menu-fg md:hidden">
          <div className="flex h-[60px] items-center justify-between px-5">
            <button
              type="button"
              className="h-12 font-mono text-[16px] font-normal leading-[48px]"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              CLOSE
            </button>
            <HomeMark className="text-menu-fg" onClick={() => setOpen(false)} />
          </div>
          <nav
            className="flex flex-col gap-[38px] px-5 pt-8 font-mono text-[16px] font-normal leading-5"
            aria-label="Mobile"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-paper" }}
                className="h-5 transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
