import Navbar from "@/components/shared/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import CultureSection from "@/components/landing/CultureSection";
import VisaGuideSection from "@/components/landing/VisaGuideSection";
import SpanishPhrases from "@/components/landing/SpanishPhrases";
import ItineraryPortals from "@/components/landing/ItineraryPortals";
import Footer from "@/components/shared/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CultureSection />
      <ItineraryPortals />
      <VisaGuideSection />
      <SpanishPhrases />
      <Footer />
    </main>
  );
}
