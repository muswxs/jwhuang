import { Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";

export function NotFound() {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteNav />
      <main className="flex flex-col items-start gap-4 px-6 py-24 md:px-10">
        <p className="font-mono text-kicker tracking-nav text-muted">404</p>
        <h1 className="font-display text-display font-bold tracking-tight">
          Page not found
        </h1>
        <Link to="/" className="font-nav text-nav tracking-nav text-nav-active">
          ○ 回到首頁
        </Link>
      </main>
    </div>
  );
}
