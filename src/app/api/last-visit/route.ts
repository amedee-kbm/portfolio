import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

const KEY = "portfolio:last-visit";

// Works with both the Vercel KV/Upstash integration env names and plain Upstash ones.
const REDIS_URL =
  process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REDIS_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(command: string[]) {
  const res = await fetch(REDIS_URL!, {
    method: "POST",
    headers: { Authorization: `Bearer ${REDIS_TOKEN}` },
    body: JSON.stringify(command),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Redis responded ${res.status}`);
  return (await res.json()).result as string | null;
}

function locationFrom(req: NextRequest) {
  const country = req.headers.get("x-vercel-ip-country");
  if (!country) return null;
  const city = req.headers.get("x-vercel-ip-city");
  return { city: city ? decodeURIComponent(city) : null, country };
}

// Records the current visitor's location and returns the previous visitor's.
export async function POST(req: NextRequest) {
  if (!REDIS_URL || !REDIS_TOKEN) return Response.json({ last: null });

  try {
    const current = locationFrom(req);
    const previous = current
      ? await redis(["SET", KEY, JSON.stringify(current), "GET"])
      : await redis(["GET", KEY]);
    return Response.json({ last: previous ? JSON.parse(previous) : null });
  } catch {
    return Response.json({ last: null });
  }
}
