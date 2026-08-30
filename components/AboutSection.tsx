import Image from "next/image";
import Link from "next/link";
import { SectionKicker } from "./SectionKicker";
import { BracketWord } from "./BracketWord";

const VISION = [
  "Economic development is economic empowerment.",
  "Economic empowerment is good for our community.",
  "Startup businesses are the life source of economic empowerment.",
  "Savannah, Georgia, is a hub where the American Dream is alive and thriving.",
];

const CAST_PREVIEW = [
  { name: "Nick Palumbo", role: "Executive Director", photo: "/team/nick-palumbo.png" },
  { name: "Jim Collins", role: "Board Chair", photo: "/team/jim-collins.png" },
  { name: "Murem Sharpe", role: "Vice Chair", photo: "/team/murem-sharpe.png" },
];

export function AboutSection() {
  return (
    <section id="about" className="border-b-2 border-ink bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <SectionKicker index="No. 01" label="About the House" />

        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              OUR <BracketWord>MISSION</BracketWord>
            </h2>
            <p className="mt-5 font-body text-ink/80">
              We are on a mission to connect, support, and develop
              entrepreneurs and innovators to positively impact the economy in
              our community. Our vision is a community transformed into a
              vibrant hub for innovative and creative businesses and
              individuals.
            </p>
            <p className="mt-4 font-body text-ink/80">
              Whether you&apos;re a brand-new entrepreneur with a big idea or
              an established owner ready to take your venture to the next
              level, Startup <BracketWord>Savannah</BracketWord> is the
              helping hand that guides you to the resources you need —
              knowledge, connections, or capital.
            </p>
            <p className="mt-4 font-body text-ink/80">
              We recognize that many existing resources, programs, and
              policies serve specific communities. Focused on community-based
              entrepreneurial education and support, we seek to empower{" "}
              <strong className="text-ink">ALL</strong> Savannah innovators
              and generate a robust, diverse, and vibrant local economy.
            </p>

            <a
              href="https://app.candid.org/profile/7914278/startup-savannah-inc-58-2234133"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 border-2 border-ink bg-paper px-4 py-2 transition-colors hover:bg-paper-deep"
            >
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/70">
                Platinum Transparency 2026
              </span>
              <span className="h-4 w-px bg-ink/30" aria-hidden />
              <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-marquee-deep underline underline-offset-4">
                Candid
              </span>
            </a>
          </div>

          <div className="border-2 border-ink bg-marquee p-8 text-paper">
            <p className="font-display text-2xl tracking-tight sm:text-3xl">
              OUR VISION
            </p>
            <ul className="mt-5 space-y-3">
              {VISION.map((line) => (
                <li key={line} className="flex gap-3 font-body text-paper/95">
                  <span className="mt-1 text-teal" aria-hidden>
                    &#10003;
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CAST TEASER — links out to the full animated cast page */}
        <div className="mt-14 border-t-2 border-ink pt-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-ink/60">
            Cast of Characters
          </p>
          <div className="mt-4 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-6">
              {CAST_PREVIEW.map((person) => (
                <div key={person.name} className="flex items-center gap-3">
                  <Image
                    src={person.photo}
                    alt={person.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full border-2 border-ink bg-paper object-cover"
                  />
                  <div>
                    <p className="font-display text-lg leading-none tracking-tight">
                      {person.name}
                    </p>
                    <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink/60">
                      {person.role}
                    </p>
                  </div>
                </div>
              ))}
              <span className="font-mono text-sm text-ink/50">+ 13 more</span>
            </div>
            <Link
              href="/board"
              className="ticket-edge inline-flex shrink-0 items-center gap-3 border-2 border-ink bg-paper px-6 py-2.5 font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
            >
              Meet the Full Cast
              <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
