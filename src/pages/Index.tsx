
import React from "react";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { AudioTreatmentFeatures } from "@/components/AudioTreatmentFeatures";
import { PromotionalSection } from "@/components/PromotionalSection";
import { SolutionSection } from "@/components/SolutionSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { PricingSection } from "@/components/PricingSection";
import { AboutMeSection } from "@/components/AboutMeSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    console.log("CTA clicked - redirect to payment");
    // Here you would integrate with your payment processor
  };

  return (
    <main className="min-h-screen bg-black text-tertiary font-hanken">
      <PromotionalBanner />

      <HeroSection onCTAClick={handleCTAClick} />

      <div className="max-w-6xl mx-auto px-4 space-y-24">
        <ProblemSection />
        <AudioTreatmentFeatures />
        <PromotionalSection onCTAClick={handleCTAClick} />
        <SolutionSection />
        <GuaranteeSection />
        <PricingSection onCTAClick={handleCTAClick} />
        <AboutMeSection />
        <FAQSection />
        <Footer />
      </div>
    </main>
  );
}
