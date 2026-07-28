"use client";

import { useEffect, useRef } from "react";

const formatter = new Intl.NumberFormat("es-AR");

export function CountUp({
  to,
  duration = 2000,
  prefix = "",
}: {
  to: number;
  duration?: number;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.textContent = prefix + formatter.format(to);
      return;
    }

    let timer: ReturnType<typeof setInterval> | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        observer.disconnect();
        const start = performance.now();
        timer = setInterval(() => {
          const t = Math.min((performance.now() - start) / duration, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = prefix + formatter.format(Math.round(to * eased));
          if (t >= 1 && timer) clearInterval(timer);
        }, 1000 / 60);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (timer) clearInterval(timer);
    };
  }, [to, duration, prefix]);

  return <span ref={ref}>{prefix}0</span>;
}
