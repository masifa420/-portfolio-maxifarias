import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

type CacheEntry = { data: unknown; ts: number };
let cache: CacheEntry | null = null;
const TTL = 30_000;

export async function GET() {
  if (cache && Date.now() - cache.ts < TTL) {
    return NextResponse.json(cache.data);
  }

  const res = await fetch(
    "https://api.github.com/repos/masifa420/-portfolio-maxifarias/actions/workflows/cypress.yml/runs?per_page=1",
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }

  const data = await res.json();
  const run = data.workflow_runs?.[0];

  if (!run) {
    return NextResponse.json({ error: "No runs found" }, { status: 404 });
  }

  const durationMs =
    run.updated_at && run.run_started_at
      ? new Date(run.updated_at).getTime() - new Date(run.run_started_at).getTime()
      : null;

  const result = {
    status: run.status as string,
    conclusion: run.conclusion as string | null,
    runNumber: run.run_number as number,
    createdAt: run.created_at as string,
    updatedAt: run.updated_at as string,
    durationMs,
    htmlUrl: run.html_url as string,
    headCommit: (run.head_commit?.message as string | undefined)?.split("\n")[0] ?? "",
    branch: run.head_branch as string,
  };

  cache = { data: result, ts: Date.now() };
  return NextResponse.json(result);
}
