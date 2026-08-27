import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAV } from "@/data/site";
import { cn } from "@/lib/cn";

export function SiteNav({
  tone = "ink",
  overlay = false,
}: {
  tone?: "ink" | "paper";
  overlay?: boolean;
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const color = tone === "paper" ? "text-paper" : "text-ink";

  return (
    <>
      <header
        className={cn(
          "z-40 flex items-center px-5 py-5",
          overlay
            ? "pointer-events-none fixed inset-x-0 top-0"
            : "relative justify-between md:px-8",
        )}
      >
        <nav
          className={cn(
            "pointer-events-auto hidden items-center gap-5 md:flex",
            overlay
              ? "font-mono text-body font-normal text-ink"
              : cn("font-nav text-nav font-medium tracking-nav", color),
          )}
          aria-label="Primary"
        >
          {NAV.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "transition-colors duration-200",
                  overlay
                    ? "hover:opacity-60"
                    : active
                      ? "text-nav-active"
                      : "hover:text-nav-active",
                )}
              >
                {item.label}
              </Link>
            );
          })}
          {overlay ? null : (
            <Link
              to="/"
              className={cn(
                "ml-1 text-meta leading-none transition-opacity hover:opacity-60",
                pathname === "/" ? "text-nav-active" : "",
              )}
              aria-label="Home"
            >
              ○
            </Link>
          )}
        </nav>

        <button
          type="button"
          className={cn(
            "pointer-events-auto md:hidden",
            overlay
              ? "font-mono text-body font-normal text-ink"
              : cn("font-nav text-nav font-medium tracking-nav", color),
          )}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          MENU
        </button>

        {overlay ? (
          <Link
            to="/"
            className="pointer-events-auto ml-auto hidden font-mono text-body leading-none text-ink hover:opacity-60 md:block"
            aria-label="Home"
          >
            ○
          </Link>
        ) : null}
      </header>

      {open ? (
        <div className="fixed inset-0 z-50 flex flex-col bg-paper px-6 py-6 text-ink md:hidden">
          <button
            type="button"
            className="self-start font-nav text-nav font-medium tracking-nav"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
          >
            CLOSE
          </button>
          <nav className="mt-16 flex flex-col gap-6 font-nav text-title font-medium tracking-nav">
            {NAV.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(`${item.href}/`);
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={active ? "text-nav-active" : ""}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link to="/" onClick={() => setOpen(false)} className="text-hero">
              ○
            </Link>
          </nav>
        </div>
      ) : null}
    </>
  );
}
