import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { workTranslations } from "@/data/workTranslations";

export const dynamic = "force-dynamic";

type CacheEntry = { data: unknown; ts: number };
let cache: CacheEntry | null = null;
const TTL = 30_000;

function getTcCoverage() {
  const specDir = path.join(process.cwd(), "cypress", "e2e");
  const specFiles = fs.existsSync(specDir) ? fs.readdirSync(specDir) : [];

  const automatedIds = new Set(
    specFiles
      .map((f) => f.match(/^(TC-\d+)/)?.[1])
      .filter(Boolean) as string[]
  );

  const allTcs = workTranslations.en.testCases;
  const automated = allTcs.filter((tc) => automatedIds.has(tc.id));

  return {
    total: allTcs.length,
    automated: automated.length,
    automatedIds: [...automatedIds],
    coverage: allTcs.length > 0 ? Math.round((automated.length / allTcs.length) * 100) : 0,
  };
}

export async function GET() {
  if (cache && Date.now() - cache.ts < TTL) {
    return NextResponse.json(cache.data);
  }

  const res = await fetch(
    "https://api.github.com/repos/masifa420/-portfolio-maxifarias/actions/workflows/cypress.yml/runs?per_page=10",
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
  const runs = data.workflow_runs?.slice(0, 10);

  if (!runs?.length) {
    return NextResponse.json({ error: "No runs found" }, { status: 404 });
  }

  const mappedRuns = runs.map((run: Record<string, unknown>) => {
    const updatedAt = run.updated_at as string;
    const startedAt = run.run_started_at as string | undefined;
    const durationMs =
      updatedAt && startedAt
        ? new Date(updatedAt).getTime() - new Date(startedAt).getTime()
        : null;

    return {
      status: run.status as string,
      conclusion: run.conclusion as string | null,
      runNumber: run.run_number as number,
      createdAt: run.created_at as string,
      updatedAt,
      durationMs,
      htmlUrl: run.html_url as string,
      headCommit: (run.head_commit as Record<string, string> | undefined)?.message?.split("\n")[0] ?? "",
      branch: run.head_branch as string,
    };
  });

  const result = { runs: mappedRuns, tcCoverage: getTcCoverage() };
  cache = { data: result, ts: Date.now() };
  return NextResponse.json(result);
}
