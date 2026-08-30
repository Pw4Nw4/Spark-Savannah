"use client";

import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-baseline gap-1.5 sm:gap-2"
          onClick={() => setOpen(false)}
        >
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
        <div className="flex shrink-0 items-center gap-2">
          <TicketButton
            href="/get-involved"
            className="!hidden shrink-0 whitespace-nowrap !px-4 !py-2 text-[11px] sm:!px-6 sm:!py-2.5 sm:text-xs md:!inline-flex"
          >
            Start Your Business
          </TicketButton>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center border-2 border-ink bg-paper lg:hidden"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              strokeLinecap="round"
              className="h-5 w-5"
              aria-hidden
            >
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t-2 border-ink bg-paper lg:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-4 sm:px-6">
            {NAV.map((item, i) =>
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-ink ${
                    i > 0 ? "border-t-2 border-dashed border-ink/20" : ""
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-4 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink/80 hover:text-ink ${
                    i > 0 ? "border-t-2 border-dashed border-ink/20" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ),
            )}
            <div className="border-t-2 border-dashed border-ink/20 py-5">
              <TicketButton
                href="/get-involved"
                className="w-full justify-center"
              >
                Start Your Business
              </TicketButton>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
