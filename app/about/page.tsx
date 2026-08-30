import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { AboutSection } from "@/components/AboutSection";

export const metadata: Metadata = {
  title: "About Us — Startup Savannah",
  description:
    "Startup Savannah's mission, vision, and board — the people behind the program.",
};

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Startup Savannah Presents"
          title="ABOUT US"
          subtitle="Connecting, supporting, and developing Savannah's entrepreneurs — and the people who make it happen."
        />
        <AboutSection />
      </main>
      <SiteFooter />
    </>
  );
}
