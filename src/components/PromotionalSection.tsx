
import React from "react";
import { Button } from "@/components/ui/button";

interface PromotionalSectionProps {
  onCTAClick: () => void;
}

export function PromotionalSection({ onCTAClick }: PromotionalSectionProps) {
  return (
    <section className="bg-gradient-to-br from-secondary/30 to-secondary/20 border border-secondary/40 rounded-3xl p-6 md:p-12 text-center backdrop-blur-sm">
      <div className="space-y-6">
        <h2 className="text-2xl md:text-5xl font-bricolage font-bold text-tertiary tracking-tight">
          Adquira agora o <span className="text-secondary">AudioTurbo Pro</span>
        </h2>
        
        <div className="space-y-4">
          <p className="text-tertiary/70 text-base md:text-lg">
            O método completo para transformar qualquer áudio em som profissional usando IA gratuita
          </p>
          
          <div className="space-y-2">
            <p className="text-tertiary/60 line-through text-lg">de R$89,90</p>
            <div className="text-3xl md:text-6xl font-bricolage font-bold text-secondary tracking-tight">
              5X R$8,86
            </div>
            <p className="text-lg md:text-xl text-tertiary/80">ou R$40,00 à vista.</p>
          </div>
        </div>
        
        <Button 
          size="lg" 
          className="text-lg md:text-xl px-8 md:px-16 py-6 md:py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold w-full max-w-xs md:max-w-none md:w-auto" 
          onClick={onCTAClick}
        >
          <span className="block sm:hidden">Compre Agora</span>
          <span className="hidden sm:block">Compre Agora - Oferta Limitada</span>
        </Button>
        
        <p className="text-sm text-tertiary/60">
          ⏰ Esta oferta expira em breve!
        </p>
      </div>
    </section>
  );
}
