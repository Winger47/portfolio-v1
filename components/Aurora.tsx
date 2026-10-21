// CSS-only aurora: three blurred radial gradients drifting slowly behind the hero.
// Static under reduced motion (animations are disabled globally in globals.css).
export default function Aurora() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-80"
    >
      <div
        className="aurora-a absolute -left-16 -top-24 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--brand) / 0.35), transparent 70%)" }}
      />
      <div
        className="aurora-b absolute -right-10 top-4 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgb(var(--brand-2) / 0.22), transparent 70%)" }}
      />
      <div
        className="aurora-c absolute left-1/3 top-36 h-72 w-72 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)" }}
      />
    </div>
  );
}
