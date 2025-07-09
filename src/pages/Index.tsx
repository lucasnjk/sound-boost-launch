
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, Clock, Shield, Star } from "lucide-react";

export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    console.log("CTA clicked - redirect to payment");
    // Here you would integrate with your payment processor
  };

  return (
    <main className="min-h-screen bg-black text-tertiary font-hanken">
      {/* Promotional Banner */}
      <div className="w-full bg-secondary text-tertiary text-center py-3 px-4">
        <p className="text-sm md:text-base font-semibold">
          Oferta EXCLUSIVA por tempo limitado: de R$79,90 por R$49,90
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 border border-secondary/30 text-secondary rounded-full text-sm font-medium backdrop-blur-sm bg-[#454545]/0 px-[34px] py-[14px]">
              <Star className="w-4 h-4" />
              Pré-venda por tempo limitado
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bricolage font-bold leading-tight text-tertiary tracking-tight">
              Transforme seu áudio em som profissional com IA —{" "}
              <span className="text-secondary">em apenas 1 minuto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-tertiary/80 max-w-4xl mx-auto leading-relaxed font-light">
              Mesmo que você grave com o celular e não saiba editar, seu conteúdo pode parecer produzido por estúdio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Button size="lg" className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold" onClick={handleCTAClick}>
                <Play className="w-5 h-5 mr-2" />
                Quero meu áudio profissional
              </Button>
              <div className="flex items-center gap-2 text-sm text-tertiary/60">
                <Users className="w-4 h-4" />
                +2.847 criadores já transformaram seus áudios
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-24">
        {/* Problem Section */}
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

        {/* Promotional Section */}
        <section className="bg-gradient-to-br from-secondary/30 to-secondary/20 border border-secondary/40 rounded-3xl p-8 md:p-12 text-center backdrop-blur-sm">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-tertiary tracking-tight">
              Adquira agora o preset <span className="text-secondary">Storm Pro</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-tertiary/70 text-lg">
                O método completo para transformar qualquer áudio em som profissional usando IA gratuita
              </p>
              
              <div className="space-y-2">
                <p className="text-tertiary/60 line-through text-lg">de R$79,90</p>
                <div className="text-4xl md:text-6xl font-bricolage font-bold text-secondary tracking-tight">
                  12X R$5,01
                </div>
                <p className="text-xl text-tertiary/80">ou R$49,90 à vista.</p>
              </div>
            </div>
            
            <Button size="lg" className="text-xl px-16 py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold" onClick={handleCTAClick}>
              Compre Agora - Oferta Limitada
            </Button>
            
            <p className="text-sm text-tertiary/60">
              ⏰ Esta oferta expira em breve!
            </p>
          </div>
        </section>

        {/* Solution Section */}
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

        {/* Guarantee Section */}
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

        {/* Pricing Section */}
        <section className="text-center space-y-8 bg-black/90 border border-tertiary/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bricolage font-bold tracking-tight text-tertiary">
              Adquira agora meu preset <span className="text-secondary">Storm Pro</span>
            </h2>
            
            <div className="space-y-2">
              <p className="text-tertiary/60 line-through text-lg">de R$79,90</p>
              <div className="text-5xl md:text-7xl font-bricolage font-bold text-secondary tracking-tight">
                12X R$5,01
              </div>
              <p className="text-xl text-tertiary/80">ou R$49,90 à vista.</p>
            </div>
          </div>
          
          <Button size="lg" className="text-xl px-16 py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold" onClick={handleCTAClick}>
            Compre Agora
          </Button>
        </section>

        {/* About Me Section */}
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

        {/* FAQ Section */}
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

        {/* Footer */}
        <footer className="text-center py-2.5 border-t border-tertiary/20">
          <p className="text-tertiary/50 text-lg">
            © 2025 | lucasnjk – Todos os Direitos Reservados.
          </p>
        </footer>
      </div>
    </main>
  );
}
