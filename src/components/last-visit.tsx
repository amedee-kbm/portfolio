"use client";

import { useEffect, useState } from "react";
import { MapPinIcon } from "lucide-react";

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

export function LastVisit() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    const method = alreadyCounted() ? "GET" : "POST";
    fetch("/api/last-visit", { method })
      .then((res) => res.json())
      .then((data: Stats) => setStats(data))
      .catch(() => {});
  }, []);

  if (!stats?.last && !stats?.visits) return null;

  return (
    <p className="inline-flex flex-wrap items-center justify-center gap-x-1.5 text-xs text-muted-foreground">
      <MapPinIcon className="size-3.5" aria-hidden />
      {stats.last && <span>Last visit from {formatVisit(stats.last)}</span>}
      {stats.last && stats.visits ? <span aria-hidden>·</span> : null}
      {stats.visits ? (
        <span className="tabular-nums">
          {stats.visits.toLocaleString("en")}{" "}
          {stats.visits === 1 ? "visit" : "visits"}
        </span>
      ) : null}
    </p>
  );
}
