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

    const start = () => {
      send("playVideo");
      // Autoplay is only allowed muted; once playback has actually
      // started, raising the volume is a mid-playback change, not a
      // new audible autoplay, so browsers let it through.
      send("unMute");
      send("setVolume", [50]);
    };

    const stop = () => {
      if (retryTimer) {
        clearInterval(retryTimer);
        retryTimer = null;
      }
      send("pauseVideo");
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // The player may not have finished loading yet (most likely
          // right on page load), so the first command can arrive before
          // it's listening. Resend for a couple seconds until it sticks.
          let attempts = 0;
          start();
          retryTimer = setInterval(() => {
            attempts += 1;
            start();
            if (attempts >= 5 && retryTimer) {
              clearInterval(retryTimer);
              retryTimer = null;
            }
          }, 500);
        } else {
          stop();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(wrapper);
    return () => {
      observer.disconnect();
      if (retryTimer) clearInterval(retryTimer);
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
