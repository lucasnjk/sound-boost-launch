
import React from "react";

export function AboutMeSection() {
  return (
    <section className="space-y-12">
      <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight mb-16">
        <span className="text-secondary">Quem é Lucas do Carmo?</span>
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="relative">
            <img 
              src="/lovable-uploads/52d494a7-2ad0-43fc-bdc3-94c59aab7f53.png" 
              alt="Lucas do Carmo" 
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <p className="text-lg text-tertiary/80 leading-relaxed">
            Eu sei o que é começar do zero. Antes de viver exclusivamente das redes sociais, 
            trabalhei dando diárias em supermercados e passei três anos em uma empresa de estofados, 
            onde comecei na linha de produção e conquistei a posição de social media. Essa trajetória 
            me deu a visão prática e estratégica que aplico hoje como Filmmaker, Designer Gráfico e Social Media.
          </p>
          <p className="text-lg text-tertiary/80 leading-relaxed">
            Com mais de sete anos de experiência no digital, já alcancei +3.5M de views, mais de 3M 
            de alcance em um único mês e contribui para o crescimento de +60k seguidores nas contas que gerencio. 
            Sou formado em Mídias Sociais pela UNESA e atualmente faço Pós-Graduação em Marketing de Alta Performance.
          </p>
          <p className="text-lg text-tertiary/80 leading-relaxed">
            Hoje vivo exclusivamente das redes sociais e tenho a liberdade que tanto sonhei e que muitas 
            outras pessoas sonham. E o Meu objetivo? É fazer com que você possa alcançar essa liberdade 
            também sem varinha de condão ou receita miraculosa.
          </p>
        </div>
      </div>
    </section>
  );
}
