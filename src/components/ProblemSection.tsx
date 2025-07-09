
import React from "react";

export function ProblemSection() {
  return (
    <section className="bg-gradient-to-br from-red-900/20 to-red-800/20 border border-red-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
      <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-8 text-red-200 tracking-tight">
        Seu áudio pode estar sabotando seu conteúdo
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-black/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-red-400 font-bold text-4xl mb-3 font-bricolage">80%</div>
          <p className="text-tertiary/80 text-lg">das pessoas pulam conteúdos com áudio ruim</p>
        </div>
        <div className="bg-black/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-red-400 font-bold text-2xl mb-3 font-bricolage">Som fraco</div>
          <p className="text-tertiary/80 text-lg">faz seguidores desistirem antes da proposta</p>
        </div>
        <div className="bg-black/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-red-400 font-bold text-2xl mb-3 font-bricolage">Você grava</div>
          <p className="text-tertiary/80 text-lg">direitinho, mas é o áudio que estraga tudo</p>
        </div>
      </div>
    </section>
  );
}
