"use client";

import { useState } from "react";

const FORM_ACTION =
  "https://docs.google.com/forms/d/e/1FAIpQLSeuS4AVbF-WVUHYERfrtTmGfjpyO87WiZs8Fq7IaNcdUti6Kw/formResponse";
const FORM_VIEW_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeuS4AVbF-WVUHYERfrtTmGfjpyO87WiZs8Fq7IaNcdUti6Kw/viewform";

type TextField = {
  key: string;
  label: string;
  entry: string;
  required: boolean;
  type: "text" | "email" | "tel" | "textarea";
};

type ChoiceField = {
  key: string;
  label: string;
  entry: string;
  required: boolean;
  type: "single" | "multi";
  options: string[];
};

type Field = TextField | ChoiceField;

const STEPS: { title: string; blurb: string; fields: Field[] }[] = [
  {
    title: "Who's Applying",
    blurb: "Let's start with the basics.",
    fields: [
      {
        key: "fullName",
        label: "Full Name",
        entry: "entry.1646444109",
        type: "text",
        required: true,
      },
      {
        key: "email",
        label: "Email Address",
        entry: "entry.1288053365",
        type: "email",
        required: true,
      },
      {
        key: "phone",
        label: "Phone Number",
        entry: "entry.1910738331",
        type: "tel",
        required: false,
      },
      {
        key: "businessName",
        label: "Business Name",
        entry: "entry.1501004826",
        type: "text",
        required: false,
      },
    ],
  },
  {
    title: "Where You're At",
    blurb: "Tell us the shape of the business today.",
    fields: [
      {
        key: "businessStage",
        label: "Business Stage",
        entry: "entry.1683998268",
        type: "single",
        required: true,
        options: [
          "Idea Stage",
          "Planning Stage",
          "Startup (0-2 years)",
          "Established Business",
          "Growth / Scaling",
        ],
      },
      {
        key: "industry",
        label: "Industry Sector",
        entry: "entry.1317222860",
        type: "single",
        required: true,
        options: [
          "Technology",
          "Manufacturing",
          "Retail",
          "Professional Services",
          "Food and Beverage",
          "Creative Industries",
          "Other",
        ],
      },
      {
        key: "revenue",
        label: "Current Revenue Stage",
        entry: "entry.317614287",
        type: "single",
        required: false,
        options: [
          "Pre-revenue",
          "$1-$10k/month",
          "$10k-$50k/month",
          "$50k+/month",
        ],
      },
      {
        key: "teamSize",
        label: "Team Size",
        entry: "entry.969609085",
        type: "text",
        required: false,
      },
    ],
  },
  {
    title: "Where You're Headed",
    blurb: "What does success look like from here?",
    fields: [
      {
        key: "primaryGoal",
        label: "Primary Goal",
        entry: "entry.262664874",
        type: "single",
        required: true,
        options: [
          "Develop Business Idea",
          "Launch Business",
          "Grow Revenue",
          "Raise Capital",
          "Improve Operations",
          "Scale Business",
        ],
      },
      {
        key: "support",
        label: "Areas Needing Support",
        entry: "entry.1212492471",
        type: "multi",
        required: true,
        options: [
          "Business Model",
          "Marketing and Sales",
          "Finance and Funding",
          "Technology",
          "Operations",
          "Legal and Compliance",
        ],
      },
    ],
  },
  {
    title: "Tell Us More",
    blurb: "The specifics that help us match you right.",
    fields: [
      {
        key: "challenges",
        label: "Specific Challenges",
        entry: "entry.673858857",
        type: "textarea",
        required: true,
      },
      {
        key: "programs",
        label: "Interested Programs",
        entry: "entry.339971954",
        type: "multi",
        required: false,
        options: [
          "1:1 Consulting",
          "Launch Savannah",
          "Workshops and Training",
          "Networking Events",
          "Mentorship Program",
        ],
      },
    ],
  },
];

type Answers = Record<string, string | string[] | undefined>;

function isFieldComplete(field: Field, answers: Answers) {
  if (!field.required) return true;
  const value = answers[field.key];
  if (Array.isArray(value)) return value.length > 0;
  return Boolean(value && value.trim());
}

const inputClass =
  "w-full border-2 border-ink bg-paper-deep px-3 py-2 font-body outline-none focus:border-marquee";

export function IntakeWizard() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "done" | "error">(
    "idle",
  );

  const current = STEPS[step];
  const isLastStep = step === STEPS.length - 1;
  const stepComplete = current.fields.every((f) => isFieldComplete(f, answers));

  function setText(key: string, value: string) {
    setAnswers((prev) => ({ ...prev, [key]: value }));
  }

  function toggleMulti(key: string, option: string) {
    setAnswers((prev) => {
      const existing = Array.isArray(prev[key]) ? (prev[key] as string[]) : [];
      const next = existing.includes(option)
        ? existing.filter((o) => o !== option)
        : [...existing, option];
      return { ...prev, [key]: next };
    });
  }

  function selectSingle(key: string, option: string) {
    setAnswers((prev) => ({ ...prev, [key]: option }));
  }

  async function handleSubmit() {
    setStatus("submitting");
    const body = new URLSearchParams();
    for (const s of STEPS) {
      for (const field of s.fields) {
        const value = answers[field.key];
        if (!value) continue;
        if (Array.isArray(value)) {
          value.forEach((v) => body.append(field.entry, v));
        } else {
          body.append(field.entry, value);
        }
      }
    }

    try {
      await fetch(FORM_ACTION, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="ticket-edge border-2 border-ink bg-ink p-8 text-center text-paper">
        <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-marigold">
          You&apos;re in the queue
        </p>
        <p className="mt-3 font-display text-3xl tracking-tight">
          Thanks, {String(answers.fullName ?? "founder").split(" ")[0]}.
        </p>
        <p className="mx-auto mt-3 max-w-md font-body text-paper/80">
          Our team is honored to help with your entrepreneurial journey.
          We&apos;ll be in touch about next steps and the next cohort window.
        </p>
      </div>
    );
  }

  return (
    <div className="ticket-edge border-2 border-ink bg-paper">
      {/* progress */}
      <div className="flex items-center gap-3 border-b-2 border-ink bg-paper-deep px-6 py-4">
        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/60">
          Step {step + 1} / {STEPS.length}
        </span>
        <div className="flex flex-1 gap-1.5">
          {STEPS.map((s, i) => (
            <span
              key={s.title}
              className={`h-1.5 flex-1 rounded-full ${
                i <= step ? "bg-marquee" : "bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <p className="font-display text-2xl tracking-tight">{current.title}</p>
        <p className="mt-1 font-body text-sm text-ink/70">{current.blurb}</p>

        <div className="mt-6 space-y-6">
          {current.fields.map((field) => (
            <div key={field.key}>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/60">
                {field.label}
                {field.required && (
                  <span className="text-marquee-deep"> *</span>
                )}
              </p>

              {(field.type === "text" ||
                field.type === "email" ||
                field.type === "tel") && (
                <input
                  type={field.type}
                  value={(answers[field.key] as string) ?? ""}
                  onChange={(e) => setText(field.key, e.target.value)}
                  className={`mt-2 ${inputClass}`}
                />
              )}

              {field.type === "textarea" && (
                <textarea
                  value={(answers[field.key] as string) ?? ""}
                  onChange={(e) => setText(field.key, e.target.value)}
                  rows={4}
                  className={`mt-2 ${inputClass}`}
                />
              )}

              {field.type === "single" && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {field.options.map((option) => {
                    const active = answers[field.key] === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => selectSingle(field.key, option)}
                        className={`border-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                          active
                            ? "border-ink bg-marquee text-paper"
                            : "border-ink/30 bg-paper text-ink/70 hover:border-ink"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}

              {field.type === "multi" && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {field.options.map((option) => {
                    const active = (
                      (answers[field.key] as string[]) ?? []
                    ).includes(option);
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleMulti(field.key, option)}
                        className={`border-2 px-4 py-2 font-mono text-xs font-bold uppercase tracking-[0.1em] transition-colors ${
                          active
                            ? "border-ink bg-teal text-ink"
                            : "border-ink/30 bg-paper text-ink/70 hover:border-ink"
                        }`}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {status === "error" && (
          <p className="mt-6 font-body text-sm text-marquee-deep">
            Something went wrong sending that. Try again, or use the original
            form below.
          </p>
        )}

        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink/60 underline underline-offset-4 hover:text-ink disabled:opacity-0"
          >
            &larr; Back
          </button>

          {isLastStep ? (
            <button
              type="button"
              disabled={!stepComplete || status === "submitting"}
              onClick={handleSubmit}
              className="ticket-edge inline-flex items-center gap-3 bg-marquee px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending..." : "Submit Application"}
              <span aria-hidden>&rarr;</span>
            </button>
          ) : (
            <button
              type="button"
              disabled={!stepComplete}
              onClick={() => setStep((s) => Math.min(STEPS.length - 1, s + 1))}
              className="ticket-edge inline-flex items-center gap-3 bg-marquee px-8 py-3 font-mono text-sm font-bold uppercase tracking-[0.15em] text-paper shadow-[4px_4px_0_0_var(--ink)] transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Next
              <span aria-hidden>&rarr;</span>
            </button>
          )}
        </div>
      </div>

      <p className="border-t-2 border-ink bg-paper-deep px-6 py-3 text-center font-mono text-[11px] text-ink/50">
        Prefer the original form?{" "}
        <a
          href={FORM_VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-ink"
        >
          Open it directly &rarr;
        </a>
      </p>
    </div>
  );
}
