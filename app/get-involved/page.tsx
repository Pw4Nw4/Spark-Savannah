import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SectionKicker } from "@/components/SectionKicker";
import { BracketWord } from "@/components/BracketWord";
import { NewsletterForm } from "@/components/NewsletterForm";
import { IntakeWizard } from "@/components/IntakeWizard";

export const metadata: Metadata = {
  title: "Get Involved — Startup Savannah",
  description:
    "Start your entrepreneurial journey with the Founder Intake Form, get social at community events, and get connected with our newsletter.",
};

const EVENTS = [
  {
    name: "Tech Tuesdays",
    href: "https://www.eventbrite.com/o/108981027241",
  },
  {
    name: "The cSpot",
    href: "https://www.eventbrite.com/o/76764414593",
  },
  {
    name: "Doers & Makers",
    href: "https://www.eventbrite.com/o/56809994623",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Startup Savannah Presents"
          title={
            <>
              GET <BracketWord>INVOLVED</BracketWord>
            </>
          }
          subtitle="Start your entrepreneurial journey today with our Founder Intake Form."
        />

        {/* GET INVOLVED — intake CTA */}
        <section id="intake" className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-3xl px-6 py-14">
            <div className="text-center">
              <SectionKicker index="No. 01" label="Founder Intake" />
              <p className="mx-auto max-w-xl font-body text-ink/80">
                Tell us about your business or big idea. It takes five
                minutes and it&apos;s the first step toward a cohort seat.
              </p>
            </div>
            <div className="mt-8">
              <IntakeWizard />
            </div>
            <div className="mt-6 text-center">
              <a
                href="/programs"
                className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink/70 underline underline-offset-4 hover:text-ink"
              >
                See how it works
              </a>
            </div>
          </div>
        </section>

        {/* GET SOCIAL */}
        <section className="border-b-2 border-ink bg-marquee text-paper">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 02" label="Get Social" />
            <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
              <div>
                <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
                  MEET THE CAST
                </h2>
                <p className="mt-4 font-body text-paper/90">
                  Get out into the community and meet fellow Savannah
                  innovators at one of our regular partner events. Keep up to
                  date with our{" "}
                  <a
                    href="/calendar"
                    className="underline underline-offset-4 hover:text-teal"
                  >
                    Calendar
                  </a>
                  , or follow us on Eventbrite.
                </p>
              </div>
              <div className="space-y-3">
                {EVENTS.map((event, i) => (
                  <a
                    key={event.name}
                    href={event.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ticket-edge flex items-center justify-between gap-4 border-2 border-paper bg-marquee-deep px-5 py-4 transition-transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center gap-4">
                      <span className="font-mono text-xs text-teal">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-xl tracking-tight">
                        {event.name}
                      </span>
                    </span>
                    <span
                      className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-paper/80"
                      aria-hidden
                    >
                      Eventbrite &rarr;
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GET CONNECTED */}
        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <SectionKicker index="No. 03" label="Get Connected" />
            <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
              GET <BracketWord>CONNECTED</BracketWord>
            </h2>
            <p className="mt-4 font-body text-ink/80">
              Be the first to know when applications open and when the next
              event lands on the calendar.
            </p>
            <div className="mt-8">
              <NewsletterForm />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
