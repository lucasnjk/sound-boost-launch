
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Users, Clock, Shield, Star } from "lucide-react";

export default function AudioTurboSalesPage() {
  const handleCTAClick = () => {
    console.log("CTA clicked - redirect to payment");
    // Here you would integrate with your payment processor
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-white text-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4" />
              Pré-venda por tempo limitado
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Transforme seu áudio em som profissional com IA —{" "}
              <span className="text-blue-600">em apenas 1 minuto</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Mesmo que você grave com o celular e não saiba editar, seu conteúdo pode parecer produzido por estúdio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={handleCTAClick}
              >
                <Play className="w-5 h-5 mr-2" />
                Quero meu áudio profissional
              </Button>
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <Users className="w-4 h-4" />
                +2.847 criadores já transformaram seus áudios
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 space-y-20">
        {/* Problem Section */}
        <section className="bg-red-50 border border-red-100 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-red-900">
            Seu áudio pode estar sabotando seu conteúdo
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <div className="text-red-600 font-bold text-3xl mb-2">80%</div>
              <p className="text-slate-700">das pessoas pulam conteúdos com áudio ruim</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <div className="text-red-600 font-bold text-2xl mb-2">Som fraco</div>
              <p className="text-slate-700">faz seguidores desistirem antes da proposta</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-red-200">
              <div className="text-red-600 font-bold text-2xl mb-2">Você grava</div>
              <p className="text-slate-700">direitinho, mas é o áudio que estraga tudo</p>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            O que você vai aprender
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Como tratar qualquer áudio com IA gratuita</h3>
                  <p className="text-slate-600">Ferramentas poderosas sem custo algum</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Passo a passo simples e direto</h3>
                  <p className="text-slate-600">Sem complicação, sem tecnicalidades</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Aplicação prática universal</h3>
                  <p className="text-slate-600">Vídeos, stories, podcasts, aulas e mais</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg">Configurações profissionais</h3>
                  <p className="text-slate-600">Deixe o som limpo e profissional</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bonus Section */}
        <section className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Bônus exclusivos
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-lg mb-2">Checklist de Gravação Rápida</h3>
              <p className="text-slate-600">Nunca mais esqueça um detalhe importante</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-lg mb-2">Template de Configuração Ideal</h3>
              <p className="text-slate-600">Copie e cole as configurações perfeitas</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-purple-200">
              <h3 className="font-semibold text-lg mb-2">Mini-aula: Celular Pro</h3>
              <p className="text-slate-600">Grave com celular e soe como microfone caro</p>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-purple-800 bg-purple-100 inline-block px-6 py-3 rounded-full">
              Valor real agregado: +R$ 97 — somente na pré-venda
            </p>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="bg-green-50 border border-green-200 rounded-2xl p-8 md:p-12 text-center">
          <Shield className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-900">
            Garantia total de 7 dias
          </h2>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Se você aplicar o método e não perceber uma melhora clara no seu áudio,
            tem 7 dias pra pedir reembolso. Sem perguntas, sem enrolação.
          </p>
        </section>

        {/* Pricing Section */}
        <section className="text-center space-y-8 bg-slate-900 text-white rounded-2xl p-8 md:p-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Clock className="w-4 h-4" />
              Oferta por tempo limitado
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold">
              Apenas R$ <span className="text-blue-400">35</span>
            </h2>
            
            <div className="space-y-2">
              <p className="text-slate-300 line-through text-xl">De R$ 70</p>
              <p className="text-lg text-slate-300">Depois volta pro preço normal. Garante agora!</p>
            </div>
          </div>
          
          <Button 
            size="lg" 
            className="text-xl px-12 py-6 bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
            onClick={handleCTAClick}
          >
            Quero transformar meu áudio agora
          </Button>
        </section>

        {/* FAQ Section */}
        <section className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Perguntas frequentes
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Preciso saber editar?</h3>
              <p className="text-slate-700">Não. O método é feito pra quem nunca editou nada.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Precisa pagar pela ferramenta?</h3>
              <p className="text-slate-700">Não. É gratuita e fácil de usar.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Quanto tempo pra ver resultado?</h3>
              <p className="text-slate-700">Menos de 1 minuto após aplicar o método.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl">
              <h3 className="font-bold text-lg mb-2">Tem garantia?</h3>
              <p className="text-slate-700">Sim! 7 dias incondicionais.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-200">
          <p className="text-slate-500">
            Desenvolvido por [Seu Nome] — especialista em conteúdo e estratégia de funil.
          </p>
        </footer>
      </div>
    </main>
  );
}
