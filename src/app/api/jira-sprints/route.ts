import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CacheEntry = { data: unknown; ts: number };
let cache: CacheEntry | null = null;
const TTL = 60_000;

const BASE  = process.env.JIRA_BASE_URL!;
const EMAIL = process.env.JIRA_EMAIL!;
const TOKEN = process.env.JIRA_API_TOKEN!;
const BOARD = process.env.JIRA_BOARD_ID!;

function jiraAuth() {
  return "Basic " + Buffer.from(`${EMAIL}:${TOKEN}`).toString("base64");
}

async function jiraFetch(path: string) {
  const res = await fetch(`${BASE}/rest/agile/1.0${path}`, {
    headers: {
      Authorization: jiraAuth(),
      Accept: "application/json",
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`Jira ${path} → ${res.status}`);
  return res.json();
}

export async function GET() {
  if (cache && Date.now() - cache.ts < TTL) {
    return NextResponse.json(cache.data);
  }

  try {
    const data = await jiraFetch(`/board/${BOARD}/sprint?maxResults=10&state=active,closed,future`);

    const sprints = (data.values as Record<string, unknown>[])
      .filter((s) => s.state !== "future")
      .sort((a, b) => {
        const da = new Date((a.startDate as string) ?? 0).getTime();
        const db = new Date((b.startDate as string) ?? 0).getTime();
        return db - da;
      })
      .map((s) => ({
        id:        s.id,
        name:      s.name,
        state:     s.state,
        startDate: s.startDate ?? null,
        endDate:   s.endDate ?? null,
        completeDate: s.completeDate ?? null,
      }));

    const result = { sprints };
    cache = { data: result, ts: Date.now() };
    return NextResponse.json(result);
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch Jira sprints" }, { status: 500 });
  }
}
