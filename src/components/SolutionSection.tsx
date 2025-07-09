
import React from "react";
import { CheckCircle } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight">
        O que você vai aprender
      </h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Como tratar qualquer áudio com IA gratuita</h3>
              <p className="text-tertiary/70 text-lg">Ferramentas poderosas sem custo algum</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Passo a passo simples e direto</h3>
              <p className="text-tertiary/70 text-lg">Sem complicação, sem tecnicalidades</p>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Aplicação prática universal</h3>
              <p className="text-tertiary/70 text-lg">Vídeos, stories, podcasts, aulas e mais</p>
            </div>
          </div>
          <div className="flex items-start gap-6 p-6 bg-black/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
            <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Configurações profissionais</h3>
              <p className="text-tertiary/70 text-lg">Deixe o som limpo e profissional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
