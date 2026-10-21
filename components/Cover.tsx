import Image from "next/image";
import { profile } from "@/content";

function Avatar() {
  return (
    <div className="relative size-24 overflow-hidden rounded-full ring-4 ring-bg">
      {profile.avatarUrl ? (
        <Image
          src={profile.avatarUrl}
          alt={profile.name}
          fill
          sizes="96px"
          className="object-cover"
        />
      ) : (
        // TODO: add /public/images/avatar.jpg and set profile.avatarUrl
        <div className="flex size-full items-center justify-center bg-[linear-gradient(135deg,rgb(var(--accent)),rgb(var(--accent-ink)/0.45))]">
          <span className="font-display text-3xl text-fg">{profile.initials}</span>
        </div>
      )}
    </div>
  );
}

export default function Cover() {
  return (
    <div>
      <div className="relative h-40 w-full overflow-hidden rounded-md sm:h-52">
        {profile.coverUrl ? (
          <Image
            src={profile.coverUrl}
            alt=""
            fill
            priority
            sizes="720px"
            className="object-cover"
          />
        ) : (
          // TODO: add /public/images/cover.jpg and set profile.coverUrl — tasteful gradient fallback
          <div className="size-full bg-card bg-[radial-gradient(120%_120%_at_0%_0%,rgb(var(--accent)/0.6),transparent_55%),radial-gradient(120%_120%_at_100%_100%,rgb(var(--accent-ink)/0.3),transparent_55%)]" />
        )}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-bg to-transparent"
        />
      </div>
      <div className="-mt-12 ml-4">
        <Avatar />
      </div>
    </div>
  );
}
