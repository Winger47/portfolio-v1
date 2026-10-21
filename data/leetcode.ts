// LeetCode live contest data via the public GraphQL endpoint, revalidated daily.
// Guarded: on any failure we return static fallback so the page never breaks.
export const LC_HANDLE = "rs_cris";
export const LC_PROFILE = `https://leetcode.com/u/${LC_HANDLE}/`;

export type LcData = {
  title: string; // badge tier (résumé: Guardian)
  handle: string;
  rating: number | null;
  maxRating: number | null;
  contests: number | null;
  topPercent: number | null;
  history: { r: number }[];
  live: boolean;
};

// Static fallback from the résumé (Guardian · peak 2250).
export const LC_FALLBACK: LcData = {
  title: "Guardian",
  handle: LC_HANDLE,
  rating: null,
  maxRating: 2250,
  contests: null,
  topPercent: null,
  history: [],
  live: false,
};

export async function getLeetcode(): Promise<LcData> {
  try {
    const res = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json", Referer: "https://leetcode.com" },
      body: JSON.stringify({
        query:
          "query($u:String!){userContestRanking(username:$u){rating attendedContestsCount topPercentage} userContestRankingHistory(username:$u){attended rating}}",
        variables: { u: LC_HANDLE },
      }),
      next: { revalidate: 86400 },
    });
    if (!res.ok) throw new Error("lc http");
    const json = await res.json();
    const r = json?.data?.userContestRanking;
    const history = (json?.data?.userContestRankingHistory ?? [])
      .filter((x: { attended: boolean }) => x.attended)
      .map((x: { rating: number }) => ({ r: Math.round(x.rating) }));
    if (!r && history.length === 0) throw new Error("lc empty");
    const maxRating = history.length ? Math.max(...history.map((h: { r: number }) => h.r)) : null;
    return {
      title: "Guardian",
      handle: LC_HANDLE,
      rating: typeof r?.rating === "number" ? Math.round(r.rating) : null,
      maxRating,
      contests: typeof r?.attendedContestsCount === "number" ? r.attendedContestsCount : history.length,
      topPercent: typeof r?.topPercentage === "number" ? r.topPercentage : null,
      history,
      live: true,
    };
  } catch {
    return { ...LC_FALLBACK };
  }
}
