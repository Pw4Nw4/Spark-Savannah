import Link from "next/link";

const FOOTER_LINKS = [
  { href: "https://www.zeffy.com/en-US/donation-form/help-us-fuel-innovation-in-coastal-georgia", label: "Donate", external: true },
  { href: "/programs", label: "Programs" },
  { href: "/#partners", label: "Partners" },
];

const SOCIALS = [
  { href: "https://www.instagram.com/startupsavannah/", label: "Instagram" },
  { href: "https://www.facebook.com/startupsavannah", label: "Facebook" },
  { href: "https://www.linkedin.com/company/startupsavannah", label: "LinkedIn" },
  { href: "https://www.youtube.com/@StartupSavannah", label: "YouTube" },
  { href: "https://www.tiktok.com/@startupsavannah", label: "TikTok" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-display text-xl tracking-tight">
              STARTUP <span className="text-teal">[ ]</span> SAVANNAH
            </p>
            <p className="mt-1 font-body text-sm text-paper/60">
              3025 Bull St, Room 258, Savannah, GA 31405 &middot; Concept
              redesign by F09 Tech LLC
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper/70">
            {FOOTER_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-paper"
                >
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} href={link.href} className="hover:text-paper">
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-paper/15 pt-6">
          <div className="flex gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-paper/60 hover:text-teal"
              >
                {s.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:admin@startupsavannah.org"
            className="font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-paper/60 hover:text-teal"
          >
            admin@startupsavannah.org
          </a>
        </div>
      </div>
    </footer>
  );
}
