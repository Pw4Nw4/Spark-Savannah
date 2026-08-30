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

    // Deliberately muted-only: browsers only guarantee autoplay when
    // it's silent, and no amount of client-side retrying can reliably
    // force unmuted autoplay past that policy -- it varies by browser,
    // OS, and the visitor's own autoplay setting, and fighting it made
    // playback itself unreliable. Native autoplay=1 (below) does the
    // actual starting; this observer just pauses it off-screen and
    // resumes it back in view.
    const send = (func: string) => {
      iframe.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func, args: [] }),
        "*",
      );
    };

    const observer = new IntersectionObserver(
      ([entry]) => send(entry.isIntersecting ? "playVideo" : "pauseVideo"),
      { threshold: 0.5 },
    );
    observer.observe(wrapper);
    return () => observer.disconnect();
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
