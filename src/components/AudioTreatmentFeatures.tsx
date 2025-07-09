
import React from "react";
import { Mic, Sparkles, Zap, AudioWaveform } from "lucide-react";

export function AudioTreatmentFeatures() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-secondary tracking-tight">
          Tratamento de áudio profissional com IA em apenas 1 minuto
        </h2>
        <p className="text-xl text-tertiary/80 max-w-4xl mx-auto leading-relaxed">
          Transforme qualquer áudio gravado com celular em som de estúdio profissional usando inteligência artificial gratuita. 
          Sem complicação, sem software caro, sem conhecimento técnico.
        </p>
      </div>
      
      <div className="grid md:grid-cols-4 gap-8">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-secondary/25">
            <Mic className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bricolage font-bold text-xl text-secondary">Qualquer Gravação</h3>
            <p className="text-tertiary/70 text-base leading-relaxed">
              Funciona com áudio do celular, notebook, câmera ou qualquer dispositivo. Não importa a qualidade inicial.
            </p>
          </div>
        </div>
        
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-secondary/25">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bricolage font-bold text-xl text-secondary">IA Gratuita</h3>
            <p className="text-tertiary/70 text-base leading-relaxed">
              Utilizamos ferramentas de inteligência artificial 100% gratuitas e acessíveis para todos.
            </p>
          </div>
        </div>
        
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-secondary/25">
            <Zap className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bricolage font-bold text-xl text-secondary">Resultado Imediato</h3>
            <p className="text-tertiary/70 text-base leading-relaxed">
              Em menos de 1 minuto você já tem seu áudio com qualidade profissional pronto para usar.
            </p>
          </div>
        </div>
        
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl flex items-center justify-center mx-auto shadow-lg shadow-secondary/25">
            <AudioWaveform className="w-10 h-10 text-white" />
          </div>
          <div className="space-y-3">
            <h3 className="font-bricolage font-bold text-xl text-secondary">Som Profissional</h3>
            <p className="text-tertiary/70 text-base leading-relaxed">
              Remove ruídos, equaliza frequências e deixa sua voz limpa como se fosse gravada em estúdio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
