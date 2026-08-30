import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { SectionKicker } from "@/components/SectionKicker";
import { TicketButton } from "@/components/TicketButton";
import { NewsletterForm } from "@/components/NewsletterForm";
import { BracketWord } from "@/components/BracketWord";
import { VideoEmbed } from "@/components/VideoEmbed";

const TICKER_FACTS = [
  "12 WEEKS · IN-PERSON · SAVANNAH, GA",
  "KAUFFMAN FASTTRAC® CURRICULUM",
  "1:1 MENTORSHIP INCLUDED",
  "COHORTS OPEN TWICE A YEAR",
  "GRADUATES PITCH LIVE AT LIFTOFF",
];

const CURRICULUM = [
  {
    n: "01",
    title: "Business Planning & Strategy",
    body: "Turn a shower thought into a plan you could hand a bank.",
  },
  {
    n: "02",
    title: "Financial Management & Funding Prep",
    body: "Get your numbers in order and ready for the room.",
  },
  {
    n: "03",
    title: "Marketing & Sales",
    body: "Find your customers before you need them to find you.",
  },
  {
    n: "04",
    title: "Operations & Growth Planning",
    body: "Build the systems that let the business run without you.",
  },
  {
    n: "05",
    title: "Dedicated Mentorship",
    body: "Industry experts in your corner, every week of the course.",
  },
  {
    n: "06",
    title: "Networking",
    body: "A cohort and an alumni network that keeps showing up after graduation.",
  },
];

const PARTNERS = [
  { name: "City of Savannah", logo: "/partners/city-of-savannah.svg" },
  { name: "Wells Fargo", logo: "/partners/wells-fargo.png" },
  { name: "ATDC — Georgia Tech", logo: "/partners/atdc.png" },
  { name: "City of Savannah", logo: "/partners/city-of-savannah.svg" },
  { name: "Bank of America", logo: "/partners/bank-of-america.png" },
  { name: "Wells Fargo", logo: "/partners/wells-fargo.png" },
  { name: "WSAV3", logo: "/partners/wsav3.png" },
];

const PROGRAMS = [
  {
    name: "SPARK Savannah",
    tag: "Signature Cohort",
    body: "Startup Savannah's flagship 12-week accelerator for founders across every trade — from bakers to app developers.",
  },
  {
    name: "LAUNCH Savannah",
    tag: "With the City of Savannah",
    body: "Held in partnership with the City of Savannah, built for owners ready to take an existing business to its next stage.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b-2 border-ink">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pt-16 pb-14 sm:pt-24 sm:pb-20 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.35em] text-marquee-deep">
                Startup Savannah Presents
              </p>
              <h1 className="mt-4 font-display text-[13vw] leading-[0.85] tracking-tight sm:text-6xl lg:text-7xl">
                SMALL STEPS.
                <br />
                <span className="text-marquee">GIANT LEAPS.</span>
              </h1>
              <p className="mt-6 max-w-xl font-body text-lg text-ink/80">
                A 12-week, in-person accelerator that takes Savannah founders
                from idea to ribbon cutting — mentorship, curriculum, and a
                community that doesn&apos;t log off after graduation.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <TicketButton href="/get-involved">
                  Start Your Business
                </TicketButton>
                <a
                  href="/programs"
                  className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/70 underline underline-offset-4 hover:text-ink"
                >
                  See how it works
                </a>
              </div>
            </div>

            <VideoEmbed
              youtubeId="-1OQVhObbV0"
              title="We are Startup Savannah"
              caption="We Are Startup Savannah — watch on YouTube"
            />
          </div>

          {/* ticker */}
          <div className="border-t-2 border-ink bg-ink text-paper">
            <div className="flex overflow-hidden whitespace-nowrap py-3">
              <div className="marquee-track flex shrink-0 gap-10 pr-10">
                {[...TICKER_FACTS, ...TICKER_FACTS].map((fact, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs font-bold uppercase tracking-[0.2em]"
                  >
                    {fact} <span className="text-marigold">&bull;</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT TEASER */}
        <section id="about" className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 01" label="About the House" />
            <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl">
                  OUR <BracketWord>MISSION</BracketWord>
                </h2>
                <p className="mt-4 font-body text-ink/80">
                  We connect, support, and develop entrepreneurs and
                  innovators to positively impact the economy in our
                  community — empowering ALL Savannah founders, not just the
                  ones existing programs already reach.
                </p>
                <a
                  href="/about"
                  className="mt-5 inline-block font-mono text-xs font-bold uppercase tracking-[0.2em] text-marquee-deep underline underline-offset-4"
                >
                  Read our story &amp; meet the board &rarr;
                </a>
              </div>
              <div className="ticket-edge border-2 border-ink bg-marquee p-6 text-paper">
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-teal">
                  Platinum Transparency 2026
                </p>
                <p className="mt-2 font-display text-xl tracking-tight">
                  Candid-Rated Nonprofit
                </p>
                <p className="mt-2 font-body text-sm text-paper/85">
                  Community-based entrepreneurial education, run in the open.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROOF / TESTIMONIAL TICKET */}
        <section id="proof" className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 02" label="Word From an Alum" />
            <div className="ticket-edge relative mx-auto flex max-w-3xl flex-col gap-6 border-2 border-ink bg-paper p-8 sm:flex-row sm:items-center">
              <div className="hidden shrink-0 self-stretch sm:block">
                <div className="perforation h-full" />
              </div>
              <div>
                <p className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                  &ldquo;The guidance and resources that Startup Savannah
                  provided have helped me take my business to the next
                  level.&rdquo;
                </p>
                <p className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-marquee-deep">
                  Deborah Brown-Pullin — Founder, Staging-By Design
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PROGRAM DETAILS */}
        <section id="program" className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <SectionKicker index="No. 03" label="The Program" />
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
              <div>
                <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
                  ONE PROGRAM.
                  <br />
                  TWO STAGES.
                </h2>
                <p className="mt-5 font-body text-ink/80">
                  Built on the nationally recognized Kauffman FastTrac®
                  curriculum, with mentorship from business masters across the
                  Savannah community. Since 2024, our cohorts have taken
                  founders of every kind — bakers, app developers, restaurant
                  owners, even an airplane storage provider — from big idea to
                  running business.
                </p>
                <div className="mt-8 space-y-4">
                  {PROGRAMS.map((p) => (
                    <div
                      key={p.name}
                      className="border-2 border-ink bg-paper-deep p-5"
                    >
                      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-marquee-deep">
                        {p.tag}
                      </p>
                      <p className="font-display text-2xl tracking-tight">
                        {p.name}
                      </p>
                      <p className="mt-1 font-body text-sm text-ink/75">
                        {p.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {CURRICULUM.map((item) => (
                  <div key={item.n} className="border-b-2 border-ink/20 pb-4">
                    <span className="font-mono text-xs font-bold text-marigold">
                      {item.n}
                    </span>
                    <p className="mt-1 font-display text-lg leading-tight tracking-tight">
                      {item.title}
                    </p>
                    <p className="mt-1 font-body text-sm text-ink/70">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/programs"
                className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-marquee-deep underline underline-offset-4"
              >
                See full program details, photos &amp; videos &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* LIFTOFF */}
        <section
          id="liftoff"
          className="relative overflow-hidden border-b-2 border-ink bg-ink text-paper"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="stamp-rotate inline-block border-2 border-marigold px-3 py-1 font-mono text-xs font-bold uppercase tracking-[0.2em] text-marigold">
                  Season Finale
                </span>
              </div>
              <h2 className="font-display text-[15vw] leading-[0.85] tracking-tight text-paper sm:text-8xl">
                LIFTOFF
              </h2>
              <p className="mt-6 max-w-2xl font-body text-lg text-paper/85">
                Every cohort ends on one stage. Founders pitch to a room of
                customers, investors, family, and friends — then sell their
                wares at the LIFTOFF vendor market. Some walk away with new
                partnerships. All of them walk away with a room that watched
                them launch.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <TicketButton
                href="/programs#liftoff"
                className="!shadow-[4px_4px_0_0_var(--paper)]"
              >
                See LIFTOFF
              </TicketButton>
            </div>
          </div>
        </section>

        {/* PARTNERS */}
        <section id="partners" className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <SectionKicker index="No. 04" label="Sparked By" />
            <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/60">
              Startup Savannah is sparked by the support of
            </p>
            <p className="mt-2 font-display text-2xl tracking-tight sm:text-3xl">
              Savannah Economic Development Authority
            </p>
            <p className="mx-auto mt-6 max-w-xl font-body text-ink/70">
              We&apos;re also grateful for the partners who support
              Savannah&apos;s startup and small business ecosystem.
            </p>
            <div className="relative -mx-6 mt-8 overflow-hidden border-y-2 border-ink bg-paper py-6">
              <div className="marquee-track flex w-max shrink-0 items-center gap-16 pr-16">
                {[...PARTNERS, ...PARTNERS].map((partner, i) => (
                  <Image
                    key={`${partner.name}-${i}`}
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={64}
                    className="h-auto max-h-10 w-auto shrink-0 object-contain"
                  />
                ))}
              </div>
            </div>
            <div className="mt-8">
              <a
                href="/contact"
                className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-marquee-deep underline underline-offset-4"
              >
                Become a Partner &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* APPLY */}
        <section id="apply" className="border-b-2 border-ink">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <SectionKicker index="No. 05" label="How You Get In" />
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              THE ONLY WAY IN
            </h2>
            <p className="mt-4 font-body text-ink/80">
              There&apos;s no waitlist trick and no ticket to claim — every
              founder starts the same way, with the Founder Intake Form. It
              takes five minutes and it&apos;s how cohort selection begins.
            </p>
            <div className="mt-8">
              <TicketButton href="https://docs.google.com/forms/d/e/1FAIpQLSeuS4AVbF-WVUHYERfrtTmGfjpyO87WiZs8Fq7IaNcdUti6Kw/viewform">
                Open the Intake Form
              </TicketButton>
            </div>

            <div className="mt-12 border-t-2 border-dashed border-ink/25 pt-10">
              <p className="font-body text-sm text-ink/70">
                Not ready to apply yet? Get notified before the next SPARK
                Savannah cohort window opens.
              </p>
              <div className="mt-5">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
