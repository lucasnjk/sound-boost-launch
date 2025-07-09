
import React from "react";
import { Button } from "@/components/ui/button";
import { Play, Users, Star } from "lucide-react";
import { AnimatedAudioBackground } from "./AnimatedAudioBackground";
import { motion } from "framer-motion";

interface HeroSectionProps {
  onCTAClick: () => void;
}

export function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
      
      <AnimatedAudioBackground />
      
      <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
        <div className="text-center space-y-8">
          <motion.div 
            className="inline-flex items-center gap-2 border border-secondary/30 text-secondary rounded-full text-sm font-medium backdrop-blur-sm bg-[#454545]/0 px-[34px] py-[14px]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Star className="w-4 h-4" />
            Pré-venda por tempo limitado
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-7xl font-bricolage font-bold leading-tight text-tertiary tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforme seu áudio em som profissional com IA —{" "}
            <span className="text-secondary">em apenas 1 minuto</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-tertiary/80 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Mesmo que você grave com o celular e não saiba editar, seu conteúdo pode parecer produzido por estúdio.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold" onClick={onCTAClick}>
              <Play className="w-5 h-5 mr-2" />
              Quero meu áudio profissional
            </Button>
            <div className="flex items-center gap-2 text-sm text-tertiary/60">
              <Users className="w-4 h-4" />
              +2.847 criadores já transformaram seus áudios
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
