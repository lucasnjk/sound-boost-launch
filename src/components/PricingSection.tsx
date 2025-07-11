
import React from "react";
import { Button } from "@/components/ui/button";

interface PricingSectionProps {
  onCTAClick: () => void;
}

export function PricingSection({ onCTAClick }: PricingSectionProps) {
  return (
    <section className="text-center space-y-8 bg-black/90 border border-tertiary/20 rounded-3xl p-6 md:p-12 backdrop-blur-sm">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bricolage font-bold tracking-tight text-tertiary">
          Adquira agora o <span className="text-secondary">AudioTurbo Pro</span>
        </h2>
        
        <div className="space-y-2">
          <p className="text-tertiary/60 line-through text-lg">de R$89,90</p>
          <div className="text-4xl md:text-7xl font-bricolage font-bold text-secondary tracking-tight">
            5X R$8,86
          </div>
          <p className="text-xl text-tertiary/80">ou R$40,00 à vista.</p>
        </div>
      </div>
      
      <Button 
        size="lg" 
        className="text-lg md:text-xl px-8 md:px-16 py-6 md:py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold w-full max-w-xs md:max-w-none md:w-auto" 
        onClick={onCTAClick}
      >
        Compre Agora
      </Button>
    </section>
  );
}
