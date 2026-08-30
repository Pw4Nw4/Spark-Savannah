import Link from "next/link";
import { TicketButton } from "./TicketButton";

const NAV = [
  { href: "/about", label: "About Us" },
  { href: "/programs", label: "Programs" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/calendar", label: "Calendar" },
  { href: "/contact", label: "Contact" },
  {
    href: "https://startupsavannah.threadless.com/",
    label: "Shop",
    external: true,
  },
  {
    href: "https://www.zeffy.com/en-US/donation-form/help-us-fuel-innovation-in-coastal-georgia",
    label: "Donate",
    external: true,
  },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-1.5 sm:gap-2">
          <span className="font-display text-lg leading-none tracking-tight sm:text-2xl">
            STARTUP
          </span>
          <span className="font-display text-lg leading-none tracking-[0.2em] text-teal sm:text-2xl">
            []
          </span>
          <span className="font-display text-lg leading-none tracking-tight sm:text-2xl">
            SAVANNAH
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) =>
            item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/70 hover:text-ink"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/70 hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
        <TicketButton
          href="/get-involved"
          className="shrink-0 whitespace-nowrap !px-4 !py-2 text-[11px] sm:!px-6 sm:!py-2.5 sm:text-xs"
        >
          Start Your Business
        </TicketButton>
      </div>
    </header>
  );
}
