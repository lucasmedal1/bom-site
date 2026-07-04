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
  metadataBase: new URL("https://blueoceanmaterials.com"),
  title: "Blue Ocean Materials — Engineering Plastics, Delivered Smarter",
  description:
    "Precision-cut engineering plastics with quotes in under 30 minutes. PEEK, Ultem, Delrin, PPS, PTFE and certified materials for aerospace, semiconductor, and industrial buyers.",
  openGraph: {
    title: "Blue Ocean Materials",
    description:
      "Precision-cut engineering plastics with quotes in under 30 minutes. Certified materials for aerospace, semiconductor, and industrial buyers.",
    url: "https://blueoceanmaterials.com",
    siteName: "Blue Ocean Materials",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/polymer-image.jpeg",
        width: 250,
        height: 200,
        alt: "Precision engineering polymer structure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Ocean Materials",
    description:
      "Precision-cut engineering plastics with quotes in under 30 minutes.",
    images: ["/polymer-image.jpeg"],
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
