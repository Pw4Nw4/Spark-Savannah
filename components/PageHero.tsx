import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="border-b-2 border-ink">
      <div className="mx-auto max-w-6xl px-6 pt-14 pb-10 sm:pt-20 sm:pb-14">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-marquee-deep">
          {eyebrow}
        </p>
        <h1 className="mt-4 font-display text-[15vw] leading-[0.85] tracking-tight sm:text-7xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-xl font-body text-lg text-ink/80">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
