// Latest public push for the hero / bento "last push" line. Server-side, revalidated
// hourly. Returns null on any failure so the caller can simply hide the line.
export const GH_USER = "Winger47";

export type LastPush = { repo: string; ago: string; when: number } | null;

function timeAgo(then: number): string {
  const s = Math.max(1, Math.floor((Date.now() - then) / 1000));
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d ago`;
  if (h > 0) return `${h}h ago`;
  if (m > 0) return `${m}m ago`;
  return `${s}s ago`;
}

export async function getLastPush(): Promise<LastPush> {
  try {
    const res = await fetch(`https://api.github.com/users/${GH_USER}/events/public`, {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error("gh http");
    const events = (await res.json()) as {
      type: string;
      repo: { name: string };
      created_at: string;
    }[];
    const push = events.find((e) => e.type === "PushEvent");
    if (!push) return null;
    const when = new Date(push.created_at).getTime();
    return { repo: push.repo.name, ago: timeAgo(when), when };
  } catch {
    return null;
  }
}
