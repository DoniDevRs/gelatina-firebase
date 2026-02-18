
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Sem injeções",
  "Sem fórmulas caras",
  "Sem radicalismo",
  "Estratégia simples e prática"
];

export function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="font-subheadline text-xs font-bold text-primary uppercase tracking-widest block mb-3">
          COMO FUNCIONA
        </span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
          O Método Antes da Caneta
        </h2>
        <div className="space-y-4 font-body text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          <p>
            As canetas emagrecedoras ficaram famosas por reduzir o apetite. Mas nem toda mulher quer aplicar injeções.
          </p>
          <p>
            Agora, uma estratégia simples está chamando atenção: 
            <span className="text-foreground font-semibold"> usar a gelatina comum do jeito certo</span> para aumentar a saciedade naturalmente.
          </p>
        </div>
      </div>

      <div className="max-w-md mx-auto space-y-4 mb-12">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-primary/10 transition-transform hover:-translate-y-1"
          >
            <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
              <Check size={20} />
            </div>
            <span className="font-subheadline font-semibold text-foreground">{feature}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button 
          className="w-full max-w-sm h-14 text-lg font-subheadline font-bold bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-all"
        >
          QUERO COMEÇAR AGORA
        </Button>
      </div>
    </section>
  );
}
