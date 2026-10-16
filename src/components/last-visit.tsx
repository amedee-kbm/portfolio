"use client";

import { useEffect, useState } from "react";
import { MapPinIcon } from "lucide-react";

type Visit = { city: string | null; country: string };

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

export function LastVisit() {
  const [visit, setVisit] = useState<Visit | null>(null);

  useEffect(() => {
    fetch("/api/last-visit", { method: "POST" })
      .then((res) => res.json())
      .then((data: { last: Visit | null }) => setVisit(data.last))
      .catch(() => {});
  }, []);

  if (!visit) return null;

  return (
    <p className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
      <MapPinIcon className="size-3.5" aria-hidden />
      Last visit from {formatVisit(visit)}
    </p>
  );
}
