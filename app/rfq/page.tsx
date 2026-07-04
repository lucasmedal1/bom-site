import PixelCursor from "@/components/PixelCursor";
import Navbar from "@/components/Navbar";
import RFQForm from "@/components/RFQForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Quote — Blue Ocean Materials",
  description:
    "Submit an RFQ for precision-cut engineering plastics. Add materials, upload specifications, and receive a quote in under 30 minutes.",
};

export default function RFQPage() {
  return (
    <>
      <PixelCursor />
      <Navbar />
      <main className="relative min-h-screen pt-24 blueprint-grid-fine">
        <div className="absolute inset-0 bg-gradient-to-b from-ocean/[0.02] to-transparent" />
        <div className="relative">
          <RFQForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
