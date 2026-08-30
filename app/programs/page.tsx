import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SectionKicker } from "@/components/SectionKicker";
import { BracketWord } from "@/components/BracketWord";
import { TicketButton } from "@/components/TicketButton";
import { NewsletterForm } from "@/components/NewsletterForm";
import { VideoEmbed } from "@/components/VideoEmbed";
import { CenterHashTarget } from "@/components/CenterHashTarget";

export const metadata: Metadata = {
  title: "Accelerator Programs — SPARK & LAUNCH Savannah",
  description:
    "SPARK Savannah and LAUNCH Savannah are 12-week, in-person accelerators built on the Kauffman FastTrac curriculum — 1:1 mentorship, an alumni network, and a LIFTOFF pitch showcase.",
};

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

const PROGRAMS = [
  {
    name: "SPARK Savannah",
    tag: "Signature Cohort",
    body: "Startup Savannah's flagship 12-week accelerator for founders across every trade — from bakers to app developers, restaurant owners to airplane storage providers.",
  },
  {
    name: "LAUNCH Savannah",
    tag: "With the City of Savannah",
    body: "Held in partnership with the City of Savannah, built for owners ready to take an existing business to its next stage.",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <SiteHeader />
      <CenterHashTarget />
      <main className="flex-1">
        <PageHero
          eyebrow="Startup Savannah Presents"
          title={
            <>
              ACCELERATOR
              <br />
              <BracketWord>PROGRAMS</BracketWord>
            </>
          }
          subtitle="Since 2024, elite entrepreneurial education for Savannah founders — 12-week, intensive, in-person courses that take entrepreneurs from idea to ribbon cutting, from shower thought to scaling, from dream to reality."
        />

        {/* THE COHORTS */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 01" label="The Cohorts" />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
              <div>
                <p className="font-body text-ink/80">
                  Each cohort — including our signature{" "}
                  <strong className="text-ink">SPARK Savannah</strong>{" "}
                  program and <strong className="text-ink">LAUNCH Savannah</strong>{" "}
                  — has produced the finest in the next generation of our
                  community&apos;s business leaders. Our alumni span every
                  trade: bakers, app developers, restaurant owners, even an
                  airplane storage provider. They bring the big ideas and
                  entrepreneurial spirit — we bring the knowledge, tools, and
                  guidance to take it to the next level.
                </p>
                <div className="mt-6 space-y-4">
                  {PROGRAMS.map((p) => (
                    <div
                      key={p.name}
                      className="ticket-edge border-2 border-ink bg-paper-deep p-5"
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

              <div className="overflow-hidden border-2 border-ink">
                <Image
                  src="/programs/cohort-group.jpg"
                  alt="A Startup Savannah accelerator cohort celebrating together"
                  width={1200}
                  height={834}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* NEWSLETTER / SPARK BRAND MOMENT */}
        <section className="border-b-2 border-ink bg-marquee">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 py-14 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="ticket-edge border-2 border-ink bg-paper p-6">
              <Image
                src="/programs/spark-branding.png"
                alt="SPARK Savannah program branding"
                width={900}
                height={527}
                className="h-auto w-full"
              />
            </div>
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-paper/80">
                Don&apos;t Miss Curtain Call
              </p>
              <h2 className="mt-2 font-display text-3xl tracking-tight text-paper sm:text-4xl">
                WANT TO BE FIRST TO KNOW WHEN APPLICATIONS OPEN?
              </h2>
              <p className="mt-3 font-body text-paper/85">
                Cohort applications open twice a year. Sign up and we&apos;ll
                tell you the moment the window opens.
              </p>
              <div className="mt-6">
                <NewsletterForm />
              </div>
            </div>
          </div>
        </section>

        {/* WHAT FOUNDERS GET */}
        <section className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 02" label="What Founders Get" />
            <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl">
                  BUILT ON A NATIONALLY
                  <br />
                  RECOGNIZED CURRICULUM
                </h2>
                <p className="mt-4 font-body text-ink/80">
                  Our accelerators run on the Kauffman FastTrac® curriculum,
                  with additional expertise from business masters across the
                  community and our own all-star Startup Savannah team. Every
                  founder receives:
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
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

              <VideoEmbed
                youtubeId="TC8tFWGzhCc"
                title="LAUNCH Savannah | An Elevated Business Accelerator For Savannah's Underserved Innovators"
                caption="LAUNCH Savannah — watch on YouTube"
              />
            </div>
          </div>
        </section>

        {/* BEYOND THE CLASSROOM */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 03" label="Beyond the Classroom" />
            <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div className="overflow-hidden border-2 border-ink">
                <Image
                  src="/programs/mentorship-session.jpg"
                  alt="A founder presenting to mentors during a Startup Savannah 1:1 mentorship session"
                  width={1000}
                  height={628}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl">
                  ONCE A FOUNDER,
                  <br />
                  ALWAYS A FOUNDER
                </h2>
                <p className="mt-4 font-body text-ink/80">
                  The support goes beyond the classroom. During the course,
                  every founder gets{" "}
                  <strong className="text-ink">1:1 mentorship</strong>. After
                  graduation, they join our{" "}
                  <strong className="text-ink">alumni network</strong>, where
                  they keep getting supported and uplifted by the team and
                  their fellow graduates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LIFTOFF */}
        <section className="border-b-2 border-ink bg-ink text-paper">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 04" label="Season Finale" />
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
              <div>
                <h2 className="font-display text-[15vw] leading-[0.85] tracking-tight sm:text-7xl">
                  LIFTOFF
                </h2>
                <p className="mt-5 max-w-xl font-body text-paper/85">
                  At the end of each year, that year&apos;s cohorts are
                  showcased to the community at LIFTOFF. Founders pitch to a
                  room of potential customers and investors, along with
                  family, friends, and supporters — then sell their wares at
                  the LIFTOFF vendor market. Our founders have come out of it
                  with game-changing partnerships, new doors of opportunity,
                  and enthusiastic new customers.
                </p>
              </div>
              <div className="overflow-hidden border-2 border-paper">
                <Image
                  src="/programs/liftoff-stage.jpg"
                  alt="A founder celebrating on stage at Startup Savannah's LIFTOFF showcase"
                  width={1000}
                  height={750}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div id="liftoff" className="mt-10 scroll-mt-24">
              <VideoEmbed
                youtubeId="1G6eq9FBIJ0"
                title="LIFTOFF 2025 | Startup Savannah presents entrepreneurial showcase and pitch competition"
                caption="LIFTOFF 2025 — watch on YouTube"
              />
            </div>
          </div>
        </section>

        {/* HOW TO APPLY */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-3xl px-6 py-16 text-center">
            <SectionKicker index="No. 05" label="How You Get In" />
            <h2 className="font-display text-4xl leading-[0.95] tracking-tight sm:text-5xl">
              READY FOR LIFTOFF?
            </h2>
            <p className="mt-4 font-body text-ink/80">
              Cohort applications open twice a year. There&apos;s no waitlist
              trick — every founder starts the same way, with the Founder
              Intake Form. Not ready yet? Follow us on social or sign up for
              the newsletter so you know the moment the window opens.
            </p>
            <div className="mt-8 flex justify-center">
              <TicketButton href="/get-involved#intake">
                Open the Intake Form
              </TicketButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
