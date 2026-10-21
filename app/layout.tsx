import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Headings: elegant display serif (single 400 weight is all this family ships).
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Body copy.
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Meta text, labels, badges, dates.
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shikhar Pandav — Backend & GenAI Engineer",
  description:
    "Backend engineer (Delhi NCR) building distributed Python services and applied GenAI — FastAPI, gRPC, RabbitMQ, Redis, and a self-hosted LLM gateway.",
  openGraph: {
    title: "Shikhar Pandav — Backend & GenAI Engineer",
    description:
      "Backend engineer (Delhi NCR) building distributed Python services and applied GenAI.",
    type: "website",
  },
};

// JSON-LD person schema — location is Delhi NCR (single source: this value).
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shikhar Pandav",
  jobTitle: "Backend & GenAI Engineer",
  address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
  url: "https://github.com/Winger47",
  sameAs: [
    "https://github.com/Winger47",
    "https://www.linkedin.com/in/shikhar-pandav-32a90624b/",
    "https://codeforces.com/profile/rs27_cris",
    "https://leetcode.com/u/rs_cris/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <head>
        {/* Set the theme before paint to avoid a flash of the wrong palette. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}