const PALETTE = [
  { bg: "bg-marquee", text: "text-paper" },
  { bg: "bg-teal", text: "text-ink" },
  { bg: "bg-marigold", text: "text-ink" },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function Monogram({ name, index = 0 }: { name: string; index?: number }) {
  const { bg, text } = PALETTE[index % PALETTE.length];
  return (
    <div
      className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-ink font-display text-2xl tracking-tight ${bg} ${text}`}
      aria-hidden
    >
      {initials(name)}
    </div>
  );
}
