import type { Metadata } from "next";
import { Anton, Plus_Jakarta_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-mono-stub",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Startup Savannah — Get Involved",
  description:
    "A 12-week accelerator program for Savannah founders. Apply through the Founder Intake Form.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${jakarta.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper paper-grain">
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: `<!--
  THESIS: Startup Savannah's site is a program guide, not a nonprofit contact
  form — but the only real door in is the Founder Intake Form, so every CTA says
  so plainly instead of dressing "apply" up as "claim a ticket."
  OWN-WORLD: real Startup Savannah brand colors (cream, navy, coral, teal, amber
  sampled from startupsavannah.org) inside a showbill/ticket-stub structure;
  poster-condensed display type (Anton) over a workhorse sans; ticket-stub cards,
  perforated dividers, torn-edge CTAs, numbered program listings, their own
  "[bracket]"-word emphasis device carried through in teal.
  STORY: a founder sees the next cohort as a limited-run show, understands the
  12-week program at a glance, and either opens the real Founder Intake Form
  (apply) or joins the newsletter (stay informed) if not ready yet.
  FIRST VIEWPORT: full-bleed marquee banner, oversized poster headline, a scrolling
  ticker of program facts, a torn-ticket primary CTA anchored center-left.
  FORM: playbill/ticket-stub system, own-list candidate 3 of 7 (community
  showbill/program world), seed key 61488d85.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the
  finish review, the verdict, and DESIGN.md.
-->`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
