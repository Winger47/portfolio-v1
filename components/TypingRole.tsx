"use client";

import { useEffect, useState } from "react";

const ROLES = ["Backend Engineer", "GenAI Engineer", "Distributed Systems"];

export default function TypingRole() {
  const [mounted, setMounted] = useState(false);
  const [reduce, setReduce] = useState(false);
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    setMounted(true);
    setReduce(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  useEffect(() => {
    if (!mounted || reduce) return;
    const full = ROLES[i];
    let delay = 70;
    if (!deleting && text.length === full.length) delay = 1400;
    else if (deleting && text.length === 0) delay = 220;
    else if (deleting) delay = 40;

    const t = window.setTimeout(() => {
      if (!deleting && text.length < full.length) setText(full.slice(0, text.length + 1));
      else if (!deleting && text.length === full.length) setDeleting(true);
      else if (deleting && text.length > 0) setText(full.slice(0, text.length - 1));
      else {
        setDeleting(false);
        setI((n) => (n + 1) % ROLES.length);
      }
    }, delay);
    return () => window.clearTimeout(t);
  }, [text, deleting, i, mounted, reduce]);

  // Server + pre-mount + reduced-motion: a static label (no hydration mismatch).
  if (!mounted || reduce) return <span className="meta">BACKEND &amp; GENAI ENGINEER</span>;

  return (
    <span className="meta" aria-label="Backend and GenAI engineer">
      {text.toUpperCase()}
      <span className="term-cursor ml-0.5 inline-block">▌</span>
    </span>
  );
}
