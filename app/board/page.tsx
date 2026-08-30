import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { PageHero } from "@/components/PageHero";
import { SectionKicker } from "@/components/SectionKicker";
import { CastGrid } from "@/components/CastGrid";

export const metadata: Metadata = {
  title: "The Cast — Startup Savannah",
  description:
    "The staff and board behind Startup Savannah's accelerator programs.",
};

const TEAM = [
  { name: "Nick Palumbo", role: "Executive Director", photo: "/team/nick-palumbo.png" },
  { name: "Kewaan Drayton", role: "Operations Director", photo: "/team/kewaan-drayton.png" },
  { name: "Mahogany Bowers", role: "Program Director", photo: "/team/mahogany-bowers.png" },
  { name: "Jacob Smith", role: "Events & Outreach", photo: "/team/jacob-smith.png" },
  { name: "Maria Fossbakk", role: "Events & Outreach", photo: "/team/maria-fossbakk.png" },
];

const BOARD = [
  { name: "Jim Collins", role: "Chair", photo: "/team/jim-collins.png" },
  { name: "Murem Sharpe", role: "Vice Chair", photo: "/team/murem-sharpe.png" },
  { name: "Jesse Dillon", role: "Board Member", photo: "/team/jesse-dillon.png" },
  { name: "Faye DiMassimo", role: "Board Member", photo: "/team/faye-dimassimo.png" },
  { name: "Clinton Edminster", role: "Board Member", photo: "/team/clinton-edminster.png" },
  { name: "Marianne Ganem-Poppell", role: "Board Member", photo: "/team/marianne-ganem-poppell.png" },
  { name: "Malissa MacKay", role: "Board Member", photo: "/team/malissa-mackay.png" },
  { name: "Samuel Seaman", role: "Board Member", photo: "/team/samuel-seaman.png" },
  { name: "Meredith Stone", role: "Board Member", photo: "/team/meredith-stone.png" },
  { name: "Janel Varnadoe", role: "Board Member", photo: "/team/janel-varnadoe.png" },
  { name: "Madeline Vicari", role: "Board Member", photo: "/team/madeline-vicari.png" },
];

export default function BoardPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Startup Savannah Presents"
          title="THE CAST"
          subtitle="The staff who run the show, and the board who backs it. No stock photos here — real names, real roles."
        />

        <section className="border-b-2 border-ink bg-paper-deep">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="Act I" label="The Team" />
            <CastGrid people={TEAM} />
          </div>
        </section>

        <section className="border-b-2 border-ink">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <SectionKicker index="Act II" label="The Board" />
            <CastGrid people={BOARD} />
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
