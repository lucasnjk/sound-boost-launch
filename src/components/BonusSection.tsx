import React from "react";

export function BonusSection() {
  return (
    <section className="bg-gradient-to-br from-secondary/20 to-secondary/30 border border-secondary/40 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-secondary/20 px-6 py-3 rounded-full mb-6">
          <span className="text-2xl">🎁</span>
          <span className="text-secondary font-bricolage font-bold text-lg">BÔNUS EXCLUSIVO</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-4 text-tertiary tracking-tight">
          Aprenda a Clonar Sua Voz com IA
        </h2>
        <p className="text-tertiary/80 text-xl max-w-3xl mx-auto">
          Um módulo completo para você criar sua própria voz artificial e revolucionar sua produção de conteúdo
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-black/80 border border-secondary/20 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-secondary text-4xl mb-4">🎤</div>
          <h3 className="text-tertiary font-bricolage font-bold text-xl mb-3">
            Clonagem Profissional
          </h3>
          <p className="text-tertiary/80 text-lg">
            Aprenda as técnicas avançadas para criar uma réplica perfeita da sua voz usando inteligência artificial
          </p>
        </div>

        <div className="bg-black/80 border border-secondary/20 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-secondary text-4xl mb-4">⚡</div>
          <h3 className="text-tertiary font-bricolage font-bold text-xl mb-3">
            Aplicação Prática
          </h3>
          <p className="text-tertiary/80 text-lg">
            Como usar sua voz clonada em podcasts, vídeos, audiobooks e muito mais sem perder a naturalidade
          </p>
        </div>

        <div className="bg-black/80 border border-secondary/20 p-8 rounded-2xl backdrop-blur-sm">
          <div className="text-secondary text-4xl mb-4">💰</div>
          <h3 className="text-tertiary font-bricolage font-bold text-xl mb-3">
            Monetização Inteligente
          </h3>
          <p className="text-tertiary/80 text-lg">
            Estratégias para transformar sua voz clonada em uma fonte de renda escalável e automatizada
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-secondary/30 to-secondary/40 border border-secondary/50 rounded-2xl p-6 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-tertiary/60 line-through text-xl font-hanken">De R$ 297,00</span>
          <span className="text-secondary font-bricolage font-bold text-2xl">GRÁTIS</span>
          <span className="bg-secondary text-tertiary px-4 py-2 rounded-full font-bricolage font-bold text-sm">
            VALOR: R$ 197,00
          </span>
        </div>
        <p className="text-tertiary font-hanken text-lg">
          <strong>Este bônus será SEU</strong> quando você garantir o AudioTurbo hoje mesmo!
        </p>
      </div>
    </section>
  );
}