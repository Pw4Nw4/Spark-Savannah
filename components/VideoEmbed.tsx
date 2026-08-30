"use client";

import { useEffect, useRef } from "react";

// Shared across every VideoEmbed on the page. Browsers only guarantee
// autoplay when it's muted -- there is no reliable way to force audible
// autoplay with zero interaction, and trying to (retrying an unmute call
// on load/scroll) is what made playback itself unreliable before. A real
// click/tap/keypress anywhere on the page satisfies the browser's actual
// gesture requirement, so unmuting right after one is the one approach
// that's both allowed and consistent. Once it fires, every currently
// visible video unmutes immediately, and any video that becomes visible
// afterward unmutes as soon as it does.
let unlocked = false;
const onUnlock = new Set<() => void>();

if (typeof window !== "undefined") {
  const unlock = () => {
    if (unlocked) return;
    unlocked = true;
    onUnlock.forEach((fn) => fn());
    onUnlock.clear();
  };
  window.addEventListener("click", unlock, { once: true, capture: true });
  window.addEventListener("keydown", unlock, { once: true, capture: true });
  window.addEventListener("touchstart", unlock, {
    once: true,
    capture: true,
  });
}

export function VideoEmbed({
  youtubeId,
  title,
  caption,
}: {
  youtubeId: string;
  title: string;
  caption?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const iframe = iframeRef.current;
    if (!wrapper || !iframe) return;

    const send = (func: string, args: (number | string)[] = []) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args }),
        "*",
      );
    };

    // The player may not have loaded yet when this fires (most likely
    // right on page load, or on an early click before it's finished
    // initializing), so a single unmute attempt can silently land on
    // nothing. Resend for a couple seconds until it sticks.
    let unmuteRetries: ReturnType<typeof setTimeout> | null = null;
    const unmuteWithRetry = () => {
      if (unmuteRetries) clearTimeout(unmuteRetries);
      let tries = 0;
      const tick = () => {
        send("unMute");
        send("setVolume", [50]);
        tries += 1;
        if (tries < 6) unmuteRetries = setTimeout(tick, 400);
      };
      tick();
    };

    let visible = false;
    let hasBeenVisible = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          hasBeenVisible = true;
          send("playVideo");
          if (unlocked) unmuteWithRetry();
        } else if (hasBeenVisible) {
          // Only pause once it's confirmed to have actually started --
          // pausing before that risks catching the video mid-startup and
          // silently cancelling its native autoplay (this is what made
          // it play only sometimes).
          send("pauseVideo");
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(wrapper);

    const onFirstInteraction = () => {
      if (visible) unmuteWithRetry();
    };
    onUnlock.add(onFirstInteraction);

    return () => {
      observer.disconnect();
      onUnlock.delete(onFirstInteraction);
      if (unmuteRetries) clearTimeout(unmuteRetries);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="ticket-edge border-2 border-ink bg-ink">
      <div className="aspect-video">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&autoplay=1&mute=1&playsinline=1`}
          title={title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      {caption && (
        <p className="border-t-2 border-ink bg-paper px-4 py-2.5 font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-ink/70">
          {caption}
        </p>
      )}
    </div>
  );
}
