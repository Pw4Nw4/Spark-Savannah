"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Monogram } from "./Monogram";

type Person = { name: string; role: string; photo?: string };

const ROLE_INFO: Record<string, string> = {
  "Executive Director":
    "Sets the vision and leads Startup Savannah's mission across the community.",
  "Operations Director":
    "Keeps the accelerator programs running day to day, from applications to graduation.",
  "Program Director":
    "Designs and runs the curriculum every cohort works through, week to week.",
  "Events & Outreach":
    "Builds the events and partnerships that connect founders to the city.",
  Chair: "Leads Startup Savannah's board of directors.",
  "Vice Chair": "Supports board leadership and governance for Startup Savannah.",
  "Board Member":
    "Guides Startup Savannah's strategy and stewardship as a member of the board.",
};

const FALLBACK_INFO =
  "Part of the team behind Startup Savannah's accelerator programs.";

export function CastGrid({ people }: { people: Person[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person, i) => (
        <div
          key={person.name}
          className={`transition-all duration-500 ease-out ${
            revealed ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
          style={{ transitionDelay: revealed ? `${i * 80}ms` : "0ms" }}
        >
          <div className="group relative h-64 [perspective:1400px]">
            <div className="relative h-full w-full transition-transform duration-500 ease-out [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
              {/* FRONT */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border-2 border-ink bg-paper p-5 text-center [backface-visibility:hidden] group-hover:shadow-[6px_6px_0_0_var(--ink)]">
                {person.photo ? (
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={96}
                    height={96}
                    className="h-24 w-24 shrink-0 rounded-full border-2 border-ink bg-paper-deep object-cover"
                  />
                ) : (
                  <Monogram name={person.name} index={i} />
                )}
                <div className="min-w-0">
                  <p className="font-display text-xl leading-tight tracking-tight">
                    {person.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink/60">
                    {person.role}
                  </p>
                </div>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-ink/40">
                  Hover for more
                </span>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 border-2 border-ink bg-ink p-5 text-center text-paper [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <div>
                  <p className="font-display text-xl leading-tight tracking-tight">
                    {person.name}
                  </p>
                  <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-paper/60">
                    {person.role}
                  </p>
                </div>
                <span className="h-px w-10 bg-paper/30" aria-hidden />
                <p className="font-body text-sm text-paper/80">
                  {ROLE_INFO[person.role] ?? FALLBACK_INFO}
                </p>
                <Link
                  href="/contact"
                  className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-marquee underline underline-offset-4 hover:text-marquee-deep"
                >
                  Have a question? Get in touch →
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
