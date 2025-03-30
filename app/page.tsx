import { CardHoverEffectDemo } from "@/components/Cards";
import HeroSectionOne from "@/components/HeroSection";
import { WobbleCardDemo } from "@/components/ui/WobbleCard";
import Waitlist from "@/components/WaitList";
import FAQ from "@/components/Faqs"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-purple-300">
      <HeroSectionOne />
      </div>
      <CardHoverEffectDemo />
      <WobbleCardDemo />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>

  );
}
