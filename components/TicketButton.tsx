import Link from "next/link";
import type { ReactNode } from "react";

export function TicketButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}) {
  const base =
    "ticket-edge inline-flex items-center gap-3 px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] transition-transform hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "bg-marquee text-paper shadow-[4px_4px_0_0_var(--ink)]"
      : "bg-transparent text-ink border-2 border-ink shadow-[4px_4px_0_0_var(--ink)]";
  const combined = `${base} ${styles} ${className}`;
  const isExternal = /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combined}
      >
        {children}
        <span aria-hidden>&rarr;</span>
      </a>
    );
  }

  return (
    <Link href={href} className={combined}>
      {children}
      <span aria-hidden>&rarr;</span>
    </Link>
  );
}
