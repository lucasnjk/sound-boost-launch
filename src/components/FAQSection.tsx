
import React from "react";

export function FAQSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight">
        Perguntas frequentes
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-black/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Preciso saber editar?</h3>
          <p className="text-tertiary/70 text-lg">Não. O método é feito pra quem nunca editou nada.</p>
        </div>
        <div className="bg-black/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Precisa pagar pela ferramenta?</h3>
          <p className="text-tertiary/70 text-lg">Não. É gratuita e fácil de usar.</p>
        </div>
        <div className="bg-black/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Quanto tempo pra ver resultado?</h3>
          <p className="text-tertiary/70 text-lg">Menos de 1 minuto após aplicar o método.</p>
        </div>
        <div className="bg-black/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
          <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Tem garantia?</h3>
          <p className="text-tertiary/70 text-lg">Sim! 7 dias incondicionais.</p>
        </div>
      </div>
    </section>
  );
}
