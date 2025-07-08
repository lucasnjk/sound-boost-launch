import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, Clock, Shield, Star } from "lucide-react";
export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    console.log("CTA clicked - redirect to payment");
    // Here you would integrate with your payment processor
  };
  return <main className="min-h-screen bg-primary text-tertiary font-hanken">
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
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-red-400 font-bold text-4xl mb-3 font-bricolage">80%</div>
              <p className="text-tertiary/80 text-lg">das pessoas pulam conteúdos com áudio ruim</p>
            </div>
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-red-400 font-bold text-2xl mb-3 font-bricolage">Som fraco</div>
              <p className="text-tertiary/80 text-lg">faz seguidores desistirem antes da proposta</p>
            </div>
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <div className="text-red-400 font-bold text-2xl mb-3 font-bricolage">Você grava</div>
              <p className="text-tertiary/80 text-lg">direitinho, mas é o áudio que estraga tudo</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight">
            O que você vai aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-primary/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Como tratar qualquer áudio com IA gratuita</h3>
                  <p className="text-tertiary/70 text-lg">Ferramentas poderosas sem custo algum</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-primary/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Passo a passo simples e direto</h3>
                  <p className="text-tertiary/70 text-lg">Sem complicação, sem tecnicalidades</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6 p-6 bg-primary/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Aplicação prática universal</h3>
                  <p className="text-tertiary/70 text-lg">Vídeos, stories, podcasts, aulas e mais</p>
                </div>
              </div>
              <div className="flex items-start gap-6 p-6 bg-primary/50 rounded-2xl border border-tertiary/10 backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 text-green-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bricolage font-bold text-xl text-tertiary mb-2">Configurações profissionais</h3>
                  <p className="text-tertiary/70 text-lg">Deixe o som limpo e profissional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-gradient-to-br from-secondary/30 to-secondary/20 border border-secondary/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold mb-12 text-center text-tertiary tracking-tight">
            Bônus exclusivos
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-secondary">Checklist de Gravação Rápida</h3>
              <p className="text-tertiary/70 text-lg">Nunca mais esqueça um detalhe importante</p>
            </div>
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-secondary">Template de Configuração Ideal</h3>
              <p className="text-tertiary/70 text-lg">Copie e cole as configurações perfeitas</p>
            </div>
            <div className="bg-primary/80 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-secondary">Mini-aula: Celular Pro</h3>
              <p className="text-tertiary/70 text-lg">Grave com celular e soe como microfone caro</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-xl font-bricolage font-bold text-secondary bg-secondary/20 border border-secondary/30 inline-block px-8 py-4 rounded-2xl backdrop-blur-sm">
              Valor real agregado: +R$ 97 — somente na pré-venda
            </p>
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
        <section className="text-center space-y-10 bg-gradient-to-br from-primary to-primary/90 border border-tertiary/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/30 to-red-500/30 border border-red-500/50 text-red-200 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
              <Clock className="w-4 h-4" />
              Oferta por tempo limitado
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bricolage font-bold tracking-tight">
              Apenas R$ <span className="text-secondary">35</span>
            </h2>
            
            <div className="space-y-3">
              <p className="text-tertiary/60 line-through text-2xl">De R$ 70</p>
              <p className="text-xl text-tertiary/80">Depois volta pro preço normal. Garante agora!</p>
            </div>
          </div>
          
          <Button size="lg" className="text-xl px-16 py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold" onClick={handleCTAClick}>
            Quero transformar meu áudio agora
          </Button>
        </section>

        {/* About Me Section */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight mb-16">Sobre mim</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-primary/50 border border-tertiary/10 rounded-3xl p-8 backdrop-blur-sm overflow-hidden px-[9px] py-[30px] mx-0 my-0">
                <div className="aspect-square bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-2xl flex items-center justify-center border border-secondary/20">
                  <div className="text-center text-tertiary/60">
                    <Users className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm">Sua foto aqui</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bricolage font-bold text-tertiary">
                Quem é Lucas do Carmo?
              </h3>
              <div className="bg-primary/50 border border-tertiary/10 rounded-2xl p-8 backdrop-blur-sm">
                <p className="text-lg text-tertiary/80 leading-relaxed mb-6">Eu sei o que é começar do zero. Antes de viver exclusivamente das redes sociais, trabalhei dandoár diárias em supermercados e passei três anos em uma empresa de estofados, onde comecei na linha de produção e conquistei a posição de social media. Essa trajetória me deu a visão prática e estratégica que aplico hoje como Filmmaker, Designer Gráfico e Social Media.</p>
                <p className="text-lg text-tertiary/80 leading-relaxed mb-6">Com mais de sete anos de experiência no digital, já alcancei +3.5M de views, mais de 3M de alcance em um único mês e contribui para o crescimento de +60k seguidores nas contas que gerencio. Sou formado em Mídias Sociais pela UNESA e atualmente faço Pós-Graduação em Marketing de Alta Performance.</p>
                <p className="text-lg text-tertiary/80 leading-relaxed">Hoje vivo exclusivamente das redes sociais e tenho a liberdade que tanto sonhei e que muitas outras pessoas sonham. E o Meu objetivo? É fazer com que você possa alcançar essa liberdade também sem varinha de condão ou receita miraculosa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bricolage font-bold text-center text-tertiary tracking-tight">
            Perguntas frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Preciso saber editar?</h3>
              <p className="text-tertiary/70 text-lg">Não. O método é feito pra quem nunca editou nada.</p>
            </div>
            <div className="bg-primary/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary py-[10px]">Precisa pagar pela ferramenta?</h3>
              <p className="text-tertiary/70 text-xs">© 2024 | lucasnjk – Todos os Direitos Reservados.</p>
            </div>
            <div className="bg-primary/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Quanto tempo pra ver resultado?</h3>
              <p className="text-tertiary/70 text-lg">Menos de 1 minuto após aplicar o método.</p>
            </div>
            <div className="bg-primary/50 border border-tertiary/10 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Tem garantia?</h3>
              <p className="text-tertiary/70 text-lg">Sim! 7 dias incondicionais.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-16 border-t border-tertiary/20">
          <p className="text-tertiary/50 text-lg">
            Desenvolvido por [Seu Nome] — especialista em conteúdo e estratégia de funil.
          </p>
        </footer>
      </div>
    </main>;
}