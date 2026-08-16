import { Hero } from "@/components/sections/Hero";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { TripTypes } from "@/components/sections/TripTypes";
import { Destinations } from "@/components/sections/Destinations";
import { Services } from "@/components/sections/Services";
import { MidCTA } from "@/components/sections/MidCTA";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { CrossBanner } from "@/components/onertravel/CrossBanner";

/** Homepage no Modo Consultivo (RM Partiu). */
export default function HomePage() {
  return (
    <>
      <Hero />
      <CrossBanner />
      <QuoteForm />
      <TripTypes />
      <Destinations />
      <Services />
      <MidCTA />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
    </>
  );
}
