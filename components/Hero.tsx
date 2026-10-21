import Cover from "./Cover";
import { profile, about } from "@/content";
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon } from "./icons";

function ContactButton({
  href,
  label,
  children,
  external,
  download,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      {...(download ? { download: true } : {})}
      className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-muted transition-colors hover:border-fg/30 hover:text-fg"
    >
      {children}
      <span className="meta normal-case" style={{ letterSpacing: 0 }}>
        {label}
      </span>
    </a>
  );
}

export default function Hero() {
  return (
    <div>
      <Cover />

      <div className="mt-4">
        <h1 className="font-display text-4xl leading-tight">{profile.name}</h1>
        <p className="meta mt-1">{profile.roleMono}</p>

        {/* meta row: location · Codeforces Expert · status */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="meta normal-case" style={{ letterSpacing: 0 }}>
            {profile.location}
          </span>
          <span aria-hidden className="text-muted">
            ·
          </span>
          <a
            href={profile.links.codeforces}
            target="_blank"
            rel="noreferrer"
            className="pill border-[#1D4ED8]/30 bg-[#EFF6FF] text-[#1D4ED8] hover:border-[#1D4ED8] dark:bg-[#1D4ED8]/15 dark:text-[#93C5FD]"
          >
            Codeforces {profile.codeforcesRank}
          </a>
          <span className="pill text-fg">
            <span className="size-1.5 rounded-full bg-success dot-pulse" aria-hidden />
            {profile.status}
          </span>
        </div>
      </div>

      {/* About */}
      <div id="about" className="mt-8 scroll-mt-20">
        <div className="meta">01 — ABOUT</div>
        <ul className="mt-3 space-y-3">
          {about.map((para, i) => (
            <li key={i} className="flex gap-3 text-muted">
              <span aria-hidden className="mt-[11px] size-1 shrink-0 rounded-full bg-accentInk" />
              <span>{para}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact row */}
      <div className="mt-6 flex flex-wrap gap-2">
        <ContactButton href={profile.links.github} label="GitHub" external>
          <GithubIcon />
        </ContactButton>
        <ContactButton href={profile.links.linkedin} label="LinkedIn" external>
          <LinkedinIcon />
        </ContactButton>
        <ContactButton href={`mailto:${profile.links.email}`} label="Email">
          <MailIcon />
        </ContactButton>
        <ContactButton href={profile.resumeUrl} label="Résumé" external>
          <FileIcon />
        </ContactButton>
      </div>
    </div>
  );
}
