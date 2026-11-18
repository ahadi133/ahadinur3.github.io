import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirza Anto Ahadi Nur | Marketing Portfolio",
  description:
    "Marketing work across B2B research, digital content, campaigns, and reporting.",
  metadataBase: new URL("https://ahadi-portfolio.vercel.app"),
  openGraph: {
    title: "Mirza Anto Ahadi Nur | Marketing Portfolio",
    description:
      "B2B research, digital content, campaigns, and reporting by Mirza Anto Ahadi Nur.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
