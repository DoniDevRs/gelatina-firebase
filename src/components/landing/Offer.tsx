"use client";

import { Check, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import handleCheckout from "@/lib/handleCheckout";

const inclusions = [
  "Protocolo estruturado de 14 dias",
  "Estratégia natural de saciedade",
  "Checklist diário de acompanhamento",
  "Guia prático em PDF ilustrado",
  "Acesso imediato"
];

export function Offer() {
  return (
    <section id="offer" className="py-20 px-6">
      <div className="max-w-2xl mx-auto bg-white rounded-[3rem] border-2 border-primary/20 shadow-2xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-primary text-white px-8 py-2 rounded-bl-[2rem] text-sm font-bold shadow-md">
          OFERTA LIMITADA
        </div>

        <h2 className="font-headline text-3xl font-bold text-foreground mb-8">
          Método Gelatina Anti-Caneta
        </h2>

        <div className="space-y-4 mb-6 text-left max-w-xs mx-auto">
          {inclusions.map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="text-primary"><Check size={20} strokeWidth={3} /></div>
              <span className="font-body font-medium text-foreground/80">{item}</span>
            </div>
          ))}
        </div>

        <p className="font-body text-sm text-muted-foreground mb-10 italic max-w-xs mx-auto">
          “Material pensado para ser simples, aplicável e realista.”
        </p>

        <div className="mb-8">
          <p className="font-body text-muted-foreground line-through text-lg">De R$97,00</p>
          <div className="flex items-center justify-center gap-2">
            <span className="font-subheadline text-2xl font-bold align-top mt-2">R$</span>
            <span className="font-headline text-6xl font-bold text-primary">19,90</span>
          </div>
          <p className="font-subheadline font-semibold text-accent mt-2">Pagamento único • Acesso vitalício</p>
        </div>

        <p className="font-body text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
          Menos que o valor de uma pizza 🍕 — e pode transformar sua relação com a fome.
        </p>

        <Button
          onClick={handleCheckout}
          className="w-full h-16 text-xl font-bold bg-primary hover:bg-primary/90 rounded-full transition-all transform hover:scale-105"
        >
          QUERO COMEÇAR AGORA
        </Button>

        <div className="bg-blue-50/50 p-6 rounded-3xl flex flex-col items-center gap-2 border border-blue-100 mt-8">
          <div className="text-blue-500 mb-1"><ShieldCheck size={32} /></div>
          <h3 className="font-subheadline font-bold text-blue-900">Garantia Total de 7 Dias</h3>
          <p className="font-body text-sm text-blue-800 leading-relaxed">
            Se você não gostar ou não achar útil, devolvemos 100% do seu dinheiro. Sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
