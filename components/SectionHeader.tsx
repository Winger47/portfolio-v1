export default function SectionHeader({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="mb-6">
      <div className="meta">{label}</div>
      <h2 className="mt-1.5 font-display text-2xl leading-tight sm:text-3xl">{title}</h2>
    </div>
  );
}
