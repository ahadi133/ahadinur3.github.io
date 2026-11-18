import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahadi Nur | Digital Marketing & Creative Portfolio",
  description:
    "Digital marketing, content, and strategy by Mirza Anto Ahadi Nur.",
  metadataBase: new URL("https://ahadinur.vercel.app"),
  openGraph: {
    title: "Ahadi Nur | Digital Marketing & Creative Portfolio",
    description:
      "Ideas into Content. Content into Impact. Explore Ahadi Nur's marketing and creative portfolio.",
    type: "website",
  },
};

const directionContract = `<!--
THESIS: A creative marketing portfolio where campaigns and insights are the proof, not a conventional CV.
OWN-WORLD: Ink-navy fields, electric blue and violet, sharp editorial type, and vivid campaign-board artwork.
STORY: Recruiters understand Ahadi's creative-plus-analytical focus, explore selected work, and reach him.
FIRST VIEWPORT: Brand and anchor navigation above a two-column headline and illustrated portfolio board; work CTA sits below the intro.
FORM: Experience-led marketing portfolio, following the source portfolio's section-based structure and the supplied technology-inspired direction.
-->`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div
          aria-hidden="true"
          hidden
          dangerouslySetInnerHTML={{ __html: directionContract }}
        />
        {children}
      </body>
    </html>
  );
}
