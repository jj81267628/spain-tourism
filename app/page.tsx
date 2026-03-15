import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import HeroSection from "@/components/landing/HeroSection";
import CultureSection from "@/components/landing/CultureSection";
import VisaGuideSection from "@/components/landing/VisaGuideSection";
import SpanishPhrases from "@/components/landing/SpanishPhrases";
import ItineraryPortals from "@/components/landing/ItineraryPortals";

export default function Home() {
  return (
    <main className="bg-spain-dark">
      <Navbar />
      <HeroSection />
      <CultureSection />
      <VisaGuideSection />
      <SpanishPhrases />
      <ItineraryPortals />
      <Footer />
    </main>
  );
}
