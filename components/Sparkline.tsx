// Lightweight inline-SVG sparkline (no chart library).
export default function Sparkline({
  points,
  width = 200,
  height = 44,
  label = "Rating history",
  draw = false,
}: {
  points: number[];
  width?: number;
  height?: number;
  label?: string;
  draw?: boolean;
}) {
  if (points.length < 2) return null;

  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const stepX = width / (points.length - 1);
  const pad = 3;

  const coords = points.map((p, i) => {
    const x = i * stepX;
    const y = height - ((p - min) / range) * (height - pad * 2) - pad;
    return [x, y] as const;
  });
  const d = coords
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    .join(" ");
  const last = coords[coords.length - 1];

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      role="img"
      aria-label={label}
      className="max-w-full"
    >
      <path
        d={d}
        pathLength={1}
        className={draw ? "spark-draw" : undefined}
        fill="none"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx={last[0]} cy={last[1]} r={2.5} fill="currentColor" />
    </svg>
  );
}
