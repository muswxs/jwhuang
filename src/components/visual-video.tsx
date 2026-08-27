"use client";

import { useState } from "react";

function PulseBed() {
  return (
    <div
      aria-hidden
      className="media-pulse absolute inset-0 bg-[#cad3d9]"
    />
  );
}

export function VisualVideo({ src }: { src: string }) {
  const [ready, setReady] = useState(false);

  return (
    <>
      {ready ? null : <PulseBed />}
      <video
        src={src}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        onCanPlay={() => setReady(true)}
      />
    </>
  );
}

export function VisualImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative aspect-[1290/2796] w-full overflow-hidden bg-[#cad3d9]">
      {ready ? null : <PulseBed />}
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 size-full object-cover transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setReady(true)}
      />
    </div>
  );
}
