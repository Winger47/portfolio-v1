import Link from "next/link";
import { pages, type PageKey } from "@/content";

export default function PageShell({
  page,
  children,
}: {
  page: PageKey;
  children: React.ReactNode;
}) {
  const p = pages[page];
  const others = (Object.keys(pages) as PageKey[]).filter((k) => k !== page);

  return (
    <div className="section">
      {/* breadcrumb */}
      <nav aria-label="Breadcrumb" className="meta normal-case" style={{ letterSpacing: 0 }}>
        <Link href="/" className="text-muted transition-colors hover:text-fg">
          ← Home
        </Link>
        <span className="px-1.5 text-muted">/</span>
        <span className="text-fg">{p.title}</span>
      </nav>

      {/* heading */}
      <div className="mt-5">
        <div className="meta">{p.mono}</div>
        <h1 className="mt-1.5 font-display text-3xl leading-tight sm:text-4xl">{p.title}</h1>
        <p className="mt-2 max-w-[60ch] text-muted">{p.desc}</p>
      </div>

      <div className="mt-8">{children}</div>

      {/* next links — never a dead end */}
      <div className="sep mt-12 pt-6">
        <div className="meta mb-3">Next</div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          {others.map((k) => (
            <Link
              key={k}
              href={pages[k].href}
              className="group inline-flex items-center gap-1 font-mono text-sm text-muted transition-colors hover:text-fg"
            >
              {pages[k].title}
              <span aria-hidden className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
