const items = [
  "10× plaque removal",
  "IPX8 waterproof",
  "70-day battery",
  "Pressure halo",
  "AI coaching",
  "Recycled nylon",
  "Silent drive",
  "Designed in Pakistan",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-border/60 bg-secondary/40 py-4">
      <div className="animate-marquee flex min-w-max gap-10 pr-10 hover:[animation-play-state:paused]">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm tracking-wide text-muted-foreground">
            {t}
            <span className="h-1 w-1 rounded-full bg-[var(--cyan)]" />
          </span>
        ))}
      </div>
    </div>
  );
}