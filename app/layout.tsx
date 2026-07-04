import type { Metadata } from "next";
import { Chakra_Petch, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  variable: "--font-chakra",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.blueoceanmaterials.com"),
  title: "Blue Ocean Materials — Engineering Plastics, Delivered Smarter",
  description:
    "Precision-cut PEEK, Ultem, Delrin & certified engineering plastics. Quotes in under 30 minutes for aerospace, semiconductor, and industrial buyers.",
  alternates: {
    canonical: "https://www.blueoceanmaterials.com",
  },
  openGraph: {
    title: "Blue Ocean Materials — Engineering Plastics",
    description:
      "Precision-cut PEEK, Ultem, Delrin & certified engineering plastics. Quotes in under 30 minutes.",
    url: "https://www.blueoceanmaterials.com",
    siteName: "Blue Ocean Materials",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Ocean Materials — Engineering Plastics",
    description:
      "Precision-cut engineering plastics. Quotes in under 30 minutes.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
