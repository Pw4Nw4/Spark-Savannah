"use client";

import { useEffect, useRef } from "react";

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

    let retryTimer: ReturnType<typeof setInterval> | null = null;
    let attempts = 0;
    let visible = false;

    const clearRetry = () => {
      if (retryTimer) {
        clearInterval(retryTimer);
        retryTimer = null;
      }
    };

    const nudge = () => {
      send("playVideo");
      // The very first command is play-only: pairing it with an
      // immediate unMute has been the likely cause of autoplay
      // sometimes silently failing on slower connections. From the
      // second nudge onward it's a safe mid-playback volume change.
      if (attempts > 0) {
        send("unMute");
        send("setVolume", [50]);
      }
      attempts += 1;
    };

    const start = () => {
      if (retryTimer) return; // already retrying
      visible = true;
      attempts = 0;
      nudge();
      // The player's readiness time is network-dependent and can run
      // well past a couple seconds on a real connection -- keep
      // nudging generously so it reliably catches on instead of
      // giving up early. Capped so a visitor who manually pauses
      // later isn't fought forever.
      retryTimer = setInterval(() => {
        nudge();
        if (attempts >= 30) clearRetry();
      }, 500);
    };

    const stop = () => {
      visible = false;
      clearRetry();
      send("pauseVideo");
    };

    const observer = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.5 },
    );
    observer.observe(wrapper);

    // Belt-and-suspenders: if the hero is already in view at mount,
    // the iframe's own load can land before or after the observer's
    // first callback -- nudge again once it fires either way.
    const onLoad = () => {
      if (visible) nudge();
    };
    iframe.addEventListener("load", onLoad);

    return () => {
      observer.disconnect();
      iframe.removeEventListener("load", onLoad);
      clearRetry();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="ticket-edge border-2 border-ink bg-ink">
      <div className="aspect-video">
        <iframe
          ref={iframeRef}
          src={`https://www.youtube.com/embed/${youtubeId}?enablejsapi=1&mute=1&playsinline=1`}
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
