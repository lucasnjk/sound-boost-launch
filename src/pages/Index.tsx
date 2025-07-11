
import React from "react";
import { PromotionalBanner } from "@/components/PromotionalBanner";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { AudioTreatmentFeatures } from "@/components/AudioTreatmentFeatures";
import { PromotionalSection } from "@/components/PromotionalSection";
import { SolutionSection } from "@/components/SolutionSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { ScrollAnimationWrapper } from "@/components/ScrollAnimationWrapper";

export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    window.open("https://pay.hotmart.com/O100725686T", "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-tertiary font-hanken">
      <PromotionalBanner />

      <HeroSection onCTAClick={handleCTAClick} />

      <div className="max-w-6xl mx-auto px-4 space-y-24">
        <ScrollAnimationWrapper delay={0.1}>
          <ProblemSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2} direction="left">
          <AudioTreatmentFeatures />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1} direction="right">
          <PromotionalSection onCTAClick={handleCTAClick} />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <SolutionSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1} direction="left">
          <GuaranteeSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <PricingSection onCTAClick={handleCTAClick} />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.1}>
          <FAQSection />
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper delay={0.2}>
          <Footer />
        </ScrollAnimationWrapper>
      </div>
    </main>
  );
}
