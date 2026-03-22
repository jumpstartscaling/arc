import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/ui/Navigation";
import Footer from "@/components/ui/Footer";
import AtmosphereParticles from "@/components/visuals/AtmosphereParticles";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

import { getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Jumpstart Scaling | Growth Engineering for Predictable Revenue",
  description: "Growth engineering for companies serious about predictable revenue. Paid Acquisition, Funnel Architecture, and CRM Transformation.",
  metadataBase: new URL("https://jumpstartscaling.com"),
  openGraph: {
    title: "Jumpstart Scaling",
    description: "Growth engineering for companies serious about predictable revenue.",
    url: "https://jumpstartscaling.com",
    siteName: "Jumpstart Scaling",
    images: ["/og-default.png"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jumpstart Scaling",
    description: "Growth engineering for companies serious about predictable revenue.",
    images: ["/og-default.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* SEO Schemas */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getOrganizationSchema()}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={getWebsiteSchema()}
        />
        {/* Preconnect to 3rd party domains */}
        <link rel="preconnect" href="https://www.clarity.ms" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Microsoft Clarity - Using afterInteractive for performance */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "u2is508icv");
          `}
        </Script>

        {/* Google Analytics 4 using official Next.js third-party component */}
        <GoogleAnalytics gaId="G-VKT7QBTYNX" />
      </head>
      <body className="min-h-screen bg-bg-deep text-text-primary antialiased font-sans">
        <AtmosphereParticles />
        <Navigation />
        <main className="relative z-10 pt-20">
          {children}
        </main>
        <Footer />
        <div id="scroll-progress" className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#FFE5A0] to-[#E8C677] z-[100] w-0 transition-all duration-100 ease-out"></div>
      </body>
    </html>
  );
}
