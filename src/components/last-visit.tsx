"use client";

import { useEffect, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "motion/react";

type Visit = { city: string | null; country: string };
type Stats = { last: Visit | null; visits: number | null };

// Set once per browser session so refreshes and in-site navigation don't count again.
const COUNTED_KEY = "portfolio:visit-counted";

function formatVisit({ city, country }: Visit) {
  let countryName = country;
  try {
    countryName =
      new Intl.DisplayNames(["en"], { type: "region" }).of(country) ?? country;
  } catch {
    // Unknown region code; fall back to the raw code.
  }
  return city ? `${city}, ${countryName}` : countryName;
}

function alreadyCounted() {
  try {
    if (sessionStorage.getItem(COUNTED_KEY)) return true;
    sessionStorage.setItem(COUNTED_KEY, "1");
  } catch {
    // Storage blocked; count this load.
  }
  return false;
}

function CountUp({ value }: { value: number }) {
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(reduceMotion ? value : 0);
  const text = useTransform(count, (n) => Math.round(n).toLocaleString("en"));

  useEffect(() => {
    if (reduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration: 1.4,
      delay: 0.3,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [count, value, reduceMotion]);

  return <motion.span className="tabular-nums">{text}</motion.span>;
}

const item = {
  hidden: { opacity: 0, y: 6, filter: "blur(4px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export function LastVisit() {
  const [stats, setStats] = useState<Stats | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const method = alreadyCounted() ? "GET" : "POST";
    fetch("/api/last-visit", { method })
      .then((res) => res.json())
      .then((data: Stats) => setStats(data))
      .catch(() => {});
  }, []);

  if (!stats?.last && !stats?.visits) return null;

  return (
    <motion.div
      className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground"
      initial={reduceMotion ? false : "hidden"}
      animate="show"
      transition={{ staggerChildren: 0.12 }}
    >
      {stats.last && (
        <motion.span
          variants={item}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2"
        >
          <span className="relative flex size-1.5" aria-hidden>
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
            <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
          </span>
          <span>
            Last visit from{" "}
            <span className="font-medium text-foreground">
              {formatVisit(stats.last)}
            </span>
          </span>
        </motion.span>
      )}
      {stats.last && stats.visits ? (
        <motion.span
          variants={{ hidden: { opacity: 0, scaleY: 0 }, show: { opacity: 1, scaleY: 1 } }}
          className="h-3 w-px bg-border"
          aria-hidden
        />
      ) : null}
      {stats.visits ? (
        <motion.span
          variants={item}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-medium text-foreground">
            <CountUp value={stats.visits} />
          </span>{" "}
          {stats.visits === 1 ? "visit" : "visits"}
        </motion.span>
      ) : null}
    </motion.div>
  );
}
