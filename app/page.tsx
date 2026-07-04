import PixelCursor from "@/components/PixelCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import WhySection from "@/components/WhySection";
import HowItWorks from "@/components/HowItWorks";
import MaterialsGrid from "@/components/MaterialsGrid";
import Industries from "@/components/Industries";
import Differentiator from "@/components/Differentiator";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <PixelCursor />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WhySection />
        <HowItWorks />
        <MaterialsGrid />
        <Industries />
        <Differentiator />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
