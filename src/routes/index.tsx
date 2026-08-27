import { createFileRoute } from "@tanstack/react-router";
import { ParticleField } from "@/components/particle-field";
import { SiteNav } from "@/components/site-nav";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "JIANWEI HUANG" }],
  }),
});

function Home() {
  return (
    <main className="relative h-dvh overflow-hidden bg-paper text-ink">
      <ParticleField />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 px-5 pb-10">
        <h1 className="font-mono text-home-label font-light">PRODUCT DESIGNER</h1>
        <p className="mt-4 font-mono text-home-line font-normal leading-home">
          Smart Mobility,
          <br />
          Fintech,
          <br />
          <span className="font-light">and the </span>
          Intersections{" "}
          <br className="md:hidden" />
          <span className="font-light">in between.</span>
        </p>
        <p className="mt-3 font-mono text-home-label font-light">
          8 YEARS EXPERIENCE．Ex-Autopass
        </p>
      </div>

      <SiteNav overlay />
    </main>
  );
}
