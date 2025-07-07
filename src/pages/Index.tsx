
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, Clock, Shield, Star } from "lucide-react";

export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    console.log("CTA clicked - redirect to payment");
    // Here you would integrate with your payment processor
  };

  return (
    <main className="min-h-screen bg-primary text-tertiary font-hanken">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 text-secondary px-6 py-3 rounded-full text-sm font-medium backdrop-blur-sm">
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
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold"
                onClick={handleCTAClick}
              >
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
          
          <Button 
            size="lg" 
            className="text-xl px-16 py-8 bg-secondary hover:bg-secondary/90 text-tertiary border-0 shadow-2xl shadow-secondary/25 transition-all duration-300 transform hover:scale-105 hover:shadow-secondary/40 font-hanken font-semibold"
            onClick={handleCTAClick}
          >
            Quero transformar meu áudio agora
          </Button>
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
              <h3 className="font-bricolage font-bold text-xl mb-3 text-tertiary">Precisa pagar pela ferramenta?</h3>
              <p className="text-tertiary/70 text-lg">Não. É gratuita e fácil de usar.</p>
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
    </main>
  );
}
