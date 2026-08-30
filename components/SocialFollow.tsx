import { SectionKicker } from "./SectionKicker";
import {
  InstagramIcon,
  FacebookIcon,
  LinkedInIcon,
  YouTubeIcon,
  TikTokIcon,
} from "./SocialIcons";

const PALETTE = [
  { bg: "bg-marquee", text: "text-paper" },
  { bg: "bg-teal", text: "text-ink" },
  { bg: "bg-marigold", text: "text-ink" },
];

const SOCIALS = [
  { label: "Instagram", Icon: InstagramIcon, href: "https://www.instagram.com/startupsavannah/" },
  { label: "Facebook", Icon: FacebookIcon, href: "https://www.facebook.com/startupsavannah" },
  { label: "LinkedIn", Icon: LinkedInIcon, href: "https://www.linkedin.com/company/startupsavannah" },
  { label: "YouTube", Icon: YouTubeIcon, href: "https://www.youtube.com/@StartupSavannah" },
  { label: "TikTok", Icon: TikTokIcon, href: "https://www.tiktok.com/@startupsavannah" },
];

export function SocialFollow() {
  return (
    <section className="border-b-2 border-ink bg-paper-deep">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <SectionKicker index="No. 03" label="Follow the Show" />

        <div className="max-w-xl">
          <h2 className="font-display text-3xl leading-[0.95] tracking-tight sm:text-4xl">
            DON&apos;T MISS THE NEXT ACT
          </h2>
          <p className="mt-3 font-body text-ink/80">
            Cohort announcements, founder spotlights, and event drops go out
            on social first. Follow along so you never miss curtain call.
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SOCIALS.map((s, i) => {
            const { bg, text } = PALETTE[i % PALETTE.length];
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ticket-edge flex items-center gap-3 border-2 border-ink bg-paper p-4 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[6px_6px_0_0_var(--ink)]"
              >
                <span
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-ink ${bg} ${text}`}
                >
                  <s.Icon className="h-5 w-5" />
                </span>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-ink">
                  {s.label}
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
