import { CardHoverEffectDemo } from "@/components/Cards";
import HeroSectionOne from "@/components/HeroSection";
import { WobbleCardDemo } from "@/components/ui/WobbleCard";
import Waitlist from "@/components/WaitList";
import FAQ from "@/components/Faqs"
import Footer from "@/components/Footer"
import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className="">
      {/* Banner Image */}
      {/* <div className="w-full relative mt-28">
        {/* Banner Image */}
        {/* <Image
          src="/revolution.png"
          alt="Banner"
          width={1920}  // Full width
          height={300}   // Adjust height proportionally
          className="w-full object-cover"
          priority
        />
      </div> */}
    </div>
    <div>
      <div className="bg-gradient-to-b from-blue-400">
      <HeroSectionOne />
      </div>
      <CardHoverEffectDemo />
      <WobbleCardDemo />
      <Waitlist />
      <FAQ />
      <Footer />
    </div>
    </>

  );
}
