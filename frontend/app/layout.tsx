import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "God Mode pSEO Factory",
  description: "pSEO Factory - Programmatic SEO Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
