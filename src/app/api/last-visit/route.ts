import type { NextRequest } from "next/server";
import { Redis } from "@upstash/redis";

export const dynamic = "force-dynamic";

const LAST_VISIT_KEY = "portfolio:last-visit";
const VISITS_KEY = "portfolio:visits";

type Visit = { city: string | null; country: string };

// fromEnv reads UPSTASH_REDIS_REST_* or the Vercel integration's KV_REST_API_*.
const configured = Boolean(
  (process.env.UPSTASH_REDIS_REST_URL || process.env.KV_REST_API_URL) &&
    (process.env.UPSTASH_REDIS_REST_TOKEN || process.env.KV_REST_API_TOKEN),
);
const redis = configured ? Redis.fromEnv() : null;

function locationFrom(req: NextRequest): Visit | null {
  const country = req.headers.get("x-vercel-ip-country");
  if (!country) return null;
  const city = req.headers.get("x-vercel-ip-city");
  return { city: city ? decodeURIComponent(city) : null, country };
}

// Read-only: the last visitor's location and the total visit count.
export async function GET() {
  return readStats();
}

async function readStats() {
  if (!redis) return Response.json({ last: null, visits: null });

  try {
    const [last, visits] = await redis.mget<[Visit | null, number | null]>(
      LAST_VISIT_KEY,
      VISITS_KEY,
    );
    return Response.json({ last, visits });
  } catch {
    return Response.json({ last: null, visits: null });
  }
}

// Records a visit: bumps the counter, stores this visitor's location and
// returns the previous visitor's. Requests without Vercel geo headers (local
// dev, which shares the production database) are only read, never recorded.
export async function POST(req: NextRequest) {
  const current = locationFrom(req);
  if (!redis || !current) return readStats();

  try {
    const [last, visits] = await redis
      .pipeline()
      .set(LAST_VISIT_KEY, current, { get: true })
      .incr(VISITS_KEY)
      .exec<[Visit | null, number]>();
    return Response.json({ last, visits });
  } catch {
    return Response.json({ last: null, visits: null });
  }
}
