"use client";

export function VisualVideo({ src }: { src: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 data-[ready=true]:opacity-100"
      onCanPlay={(event) => {
        event.currentTarget.dataset.ready = "true";
      }}
    />
  );
}
