import type { ReactNode } from "react";
import { SiteNav } from "@/components/site-nav";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-dvh bg-paper text-ink">
      <SiteNav />
      {children}
    </div>
  );
}
