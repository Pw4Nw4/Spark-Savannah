"use client";

import { useState } from "react";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/admin@startupsavannah.org";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  if (status === "sent") {
    return (
      <div className="ticket-edge border-2 border-ink bg-paper p-6 text-center">
        <p className="font-display text-xl tracking-tight text-oak">
          Message sent.
        </p>
        <p className="mt-1 font-body text-sm text-ink/70">
          We&apos;ll get back to you at the email you left.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setStatus("sending");
        const data = new FormData(e.currentTarget);
        const payload = {
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `New message from ${data.get("name")} via startupsavannah site`,
          _honey: data.get("_honey"),
        };
        try {
          const res = await fetch(FORM_ENDPOINT, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error("bad status");
          setStatus("sent");
        } catch {
          setStatus("error");
        }
      }}
      className="ticket-edge border-2 border-ink bg-paper p-6"
    >
      <p className="font-display text-xl tracking-tight">Send a Message</p>
      <p className="mt-1 font-body text-sm text-ink/70">
        Goes straight to our inbox. We read every one.
      </p>

      {/* honeypot, hidden from real visitors */}
      <input
        type="text"
        name="_honey"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      <div className="mt-4 grid gap-3">
        <label className="flex flex-col gap-1 text-sm">
          <span className="font-mono text-[11px] font-bold uppercase tracking-wide text-ink/60">
            Your Name *
          </span>
          <input
            required
            type="text"
            name="name"
            className="border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
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
            Message *
          </span>
          <textarea
            required
            name="message"
            rows={4}
            className="border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee"
          />
        </label>
      </div>

      {status === "error" && (
        <p className="mt-3 font-body text-sm text-marquee-deep">
          Something went wrong sending that. Try again, or email{" "}
          <a
            href="mailto:admin@startupsavannah.org"
            className="underline underline-offset-4"
          >
            admin@startupsavannah.org
          </a>{" "}
          directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="ticket-edge mt-5 inline-flex items-center gap-3 bg-teal px-6 py-2.5 font-mono text-sm font-bold uppercase tracking-[0.15em] text-ink shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <span aria-hidden>&rarr;</span>
      </button>
    </form>
  );
}
