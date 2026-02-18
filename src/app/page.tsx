
import { Logo } from "@/components/landing/Logo";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Benefits } from "@/components/landing/Benefits";
import { CareSection } from "@/components/landing/CareSection";
import { SocialProof } from "@/components/landing/SocialProof";
import { Offer } from "@/components/landing/Offer";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="
      px-6 flex justify-center sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <Logo />
      </header>
      
      <Hero />
      <HowItWorks />
      <Benefits />
      <CareSection />
      <SocialProof />
      <Offer />
      <FAQ />
      <Footer />
    </main>
  );
}
