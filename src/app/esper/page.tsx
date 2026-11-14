import HeroSection from "@/components/esper/HeroSection";
import DeranaSection from "@/components/esper/DeranaSection";
import CountdownSection from "@/components/esper/CountdownSection";
import AwardsSection from "@/components/esper/AwardsSection";
import VenueSection from "@/components/esper/VenueSection";
import ConcludedSection from "@/components/esper/ConcludedSection";
import Footer from "@/components/common/Footer";

export const metadata = {
  title: "ESPER '26 - Sri Lanka's Premier Science Day & Awards Ceremony",
  description: "The Pinnacle of School Science Excellence organized by the Science Society of D.S. Senanayake College.",
};

export default function EsperHomePage() {
  return (
    <main className="min-h-screen bg-[#070707] text-white flex flex-col selection:bg-[#ffd57e]/30 selection:text-[#ffd57e]">
      <HeroSection />
      <CountdownSection />
      <AwardsSection />
      <ConcludedSection />
      <VenueSection />
      <DeranaSection />
      <Footer />
    </main>
  );
}
