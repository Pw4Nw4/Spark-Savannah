import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SectionKicker } from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Calendar — Startup Savannah",
  description: "Startup Savannah's recurring community events, showtimes-style.",
};

const SHOWTIMES = [
  {
    name: "Tech Tuesdays",
    href: "https://www.eventbrite.com/o/108981027241",
    note: "Weekly meetup for Savannah's tech and startup crowd.",
  },
  {
    name: "The cSpot",
    href: "https://www.eventbrite.com/o/76764414593",
    note: "Creative-industry founders trading notes and opportunities.",
  },
  {
    name: "Doers & Makers",
    href: "https://www.eventbrite.com/o/56809994623",
    note: "Hands-on founders — product, craft, and small manufacturing.",
  },
];

export default function CalendarPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Startup Savannah Presents"
          title="CALENDAR"
          subtitle="Recurring showtimes for the Savannah founder community. Exact dates and times run live on Eventbrite."
        />

        <section className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="No. 01" label="Recurring Showtimes" />
            <div className="divide-y-2 divide-dashed divide-ink/25 border-2 border-ink bg-paper">
              {SHOWTIMES.map((show, i) => (
                <a
                  key={show.name}
                  href={show.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ticket-edge flex flex-col gap-2 px-6 py-6 transition-colors hover:bg-paper-deep sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                >
                  <span className="flex items-baseline gap-4">
                    <span className="font-mono text-sm text-marigold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display text-2xl tracking-tight">
                        {show.name}
                      </span>
                      <span className="mt-1 block font-body text-sm text-ink/70">
                        {show.note}
                      </span>
                    </span>
                  </span>
                  <span className="shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-marquee-deep">
                    See Dates on Eventbrite &rarr;
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-14 text-center">
            <SectionKicker index="No. 02" label="Cohort Programming" />
            <p className="mx-auto max-w-xl font-body text-ink/80">
              Looking for accelerator info sessions and application-window
              dates instead? Those get announced through the newsletter and
              our social channels first.
            </p>
            <div className="mt-6">
              <a
                href="/get-involved"
                className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-marquee-deep underline underline-offset-4"
              >
                Get Connected &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
