"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="border-2 border-ink bg-paper p-6 text-center">
        <p className="font-display text-xl tracking-tight text-oak">
          You&apos;re subscribed.
        </p>
        <p className="mt-1 font-body text-sm text-ink/70">
          Watch your inbox for what&apos;s next.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="ticket-edge border-2 border-ink bg-paper p-6"
    >
      <p className="font-display text-xl tracking-tight">
        Subscribe to Our Newsletter
      </p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <label className="flex flex-col gap-1 text-sm sm:col-span-2">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink/60">
            Email Address *
          </span>
          <input
            required
            type="email"
            name="email"
            className="border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink/60">
            First Name
          </span>
          <input
            type="text"
            name="firstName"
            className="border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink/60">
            Last Name
          </span>
          <input
            type="text"
            name="lastName"
            className="border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee"
          />
        </label>
      </div>
      <button
        type="submit"
        className="ticket-edge mt-5 inline-flex items-center gap-3 bg-teal px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5"
      >
        Subscribe
        <span aria-hidden>&rarr;</span>
      </button>
    </form>
  );
}
