"use client";

import { useEffect } from "react";

export function CenterHashTarget() {
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    const timer = setTimeout(() => {
      document
        .getElementById(hash)
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 120);

    return () => clearTimeout(timer);
  }, []);

  return null;
}
