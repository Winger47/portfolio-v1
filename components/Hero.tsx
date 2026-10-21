import Cover from "./Cover";
import { profile } from "@/content";
import { GithubIcon, LinkedinIcon, MailIcon, FileIcon } from "./icons";

function ContactButton({
  href,
  label,
  children,
  external,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
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
            className="pill border-[#1D4ED8]/40 text-[#1D4ED8] hover:border-[#1D4ED8] dark:border-[#60A5FA]/40 dark:text-[#60A5FA]"
          >
            Codeforces {profile.codeforcesRank}
          </a>
          <span className="pill text-fg">
            <span className="size-1.5 rounded-full bg-[#1F9D74] dot-pulse" aria-hidden />
            {profile.status}
          </span>
        </div>

        {/* contact row */}
        <div className="mt-5 flex flex-wrap gap-2">
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
    </div>
  );
}
