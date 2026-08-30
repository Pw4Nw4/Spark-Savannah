import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SectionKicker } from "@/components/SectionKicker";
import { TicketButton } from "@/components/TicketButton";
import { ContactForm } from "@/components/ContactForm";
import { SocialFollow } from "@/components/SocialFollow";

export const metadata: Metadata = {
  title: "Contact — Startup Savannah",
  description: "Get in touch with Startup Savannah, or support the program.",
};

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero eyebrow="Startup Savannah Presents" title="CONTACT US" />

        <section className="border-b-2 border-ink">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 lg:grid-cols-[1fr_1.2fr]">
            <div className="ticket-edge border-2 border-ink bg-paper-deep p-8">
              <SectionKicker index="No. 01" label="Box Office" />
              <p className="font-display text-2xl tracking-tight">
                Startup Savannah
              </p>
              <p className="mt-2 font-body text-ink/80">
                3025 Bull St, Room 258
                <br />
                Savannah, GA 31405
              </p>
              <a
                href="mailto:admin@startupsavannah.org"
                className="mt-3 inline-block font-mono text-sm font-bold text-marquee-deep underline underline-offset-4"
              >
                admin@startupsavannah.org
              </a>

              <div className="mt-8 border-t-2 border-dashed border-ink/30 pt-6">
                <p className="font-body text-sm text-ink/70">
                  Want to back the next cohort directly?
                </p>
                <div className="mt-4">
                  <TicketButton href="https://www.zeffy.com/en-US/donation-form/help-us-fuel-innovation-in-coastal-georgia">
                    Support Startup Savannah
                  </TicketButton>
                </div>
              </div>
            </div>

            <div>
              <SectionKicker index="No. 02" label="Send a Message" />
              <ContactForm />
            </div>
          </div>
        </section>

        <SocialFollow />
      </main>
      <SiteFooter />
    </>
  );
}
