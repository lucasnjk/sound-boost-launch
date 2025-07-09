
import React from "react";
import { Shield } from "lucide-react";

export function GuaranteeSection() {
  return (
    <section className="bg-gradient-to-br from-green-900/30 to-emerald-900/30 border border-green-500/30 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
      <Shield className="w-20 h-20 text-green-400 mx-auto mb-8" />
      <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-8 text-green-200 tracking-tight">
        Garantia total de 7 dias
      </h2>
      <p className="text-xl text-tertiary/80 max-w-3xl mx-auto leading-relaxed">
        Se você aplicar o método e não perceber uma melhora clara no seu áudio,
        tem 7 dias pra pedir reembolso. Sem perguntas, sem enrolação.
      </p>
    </section>
  );
}
