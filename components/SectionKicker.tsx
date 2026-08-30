export function SectionKicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs font-bold tracking-[0.3em] text-marquee-deep border border-marquee-deep px-2 py-0.5 rotate-[-2deg]">
        {index}
      </span>
      <span className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-ink/60">
        {label}
      </span>
      <span className="flex-1 perforation-h" aria-hidden />
    </div>
  );
}
