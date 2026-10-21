// Codeforces live data, fetched server-side with daily revalidation. Every path
// is guarded: on any failure we return static fallback values so pages never break.
export const CF_HANDLE = "rs27_cris";
export const CF_PROFILE = `https://codeforces.com/profile/${CF_HANDLE}`;

export type CfData = {
  rank: string;
  handle: string;
  rating: number | null;
  maxRating: number | null; // résumé: peak 1633
  contests: number | null;
  history: { t: number; r: number }[];
  live: boolean;
};

// Static fallback (used if the API is unreachable). maxRating is real (résumé).
export const CF_FALLBACK: CfData = {
  rank: "Expert",
  handle: CF_HANDLE,
  rating: null, // TODO: filled live from the API; no invented value
  maxRating: 1633,
  contests: null,
  history: [],
  live: false,
};

function titleCase(s: string | undefined): string {
  if (!s) return "Expert";
  return s
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export async function getCodeforces(): Promise<CfData> {
  try {
    const [infoRes, ratingRes] = await Promise.all([
      fetch(`https://codeforces.com/api/user.info?handles=${CF_HANDLE}`, {
        next: { revalidate: 86400 },
      }),
      fetch(`https://codeforces.com/api/user.rating?handle=${CF_HANDLE}`, {
        next: { revalidate: 86400 },
      }),
    ]);
    if (!infoRes.ok || !ratingRes.ok) throw new Error("cf http");
    const info = await infoRes.json();
    const rating = await ratingRes.json();
    if (info.status !== "OK" || rating.status !== "OK") throw new Error("cf status");

    const u = info.result[0];
    const history = (rating.result as { ratingUpdateTimeSeconds: number; newRating: number }[]).map(
      (x) => ({ t: x.ratingUpdateTimeSeconds, r: x.newRating })
    );
    return {
      rank: titleCase(u.rank),
      handle: CF_HANDLE,
      rating: typeof u.rating === "number" ? u.rating : null,
      maxRating: typeof u.maxRating === "number" ? u.maxRating : CF_FALLBACK.maxRating,
      contests: history.length,
      history,
      live: true,
    };
  } catch {
    return { ...CF_FALLBACK };
  }
}
