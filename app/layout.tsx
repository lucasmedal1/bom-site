import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Ocean Materials — Engineering Plastics, Delivered Smarter",
  description:
    "Upload your CAD file and receive a quote in under 30 minutes. Precision-cut PEEK, Ultem, Delrin, PPS, PTFE and other advanced engineering materials.",
  openGraph: {
    title: "Blue Ocean Materials",
    description:
      "Precision-cut high-performance engineering plastics through a modern digital experience.",
    type: "website",
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
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-off-white text-charcoal">
        {children}
      </body>
    </html>
  );
}
