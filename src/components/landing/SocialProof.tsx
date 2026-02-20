
import Image from "next/image";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function SocialProof() {
  const resultImg = PlaceHolderImages.find(img => img.id === "before-after");

  return (
    <section className="py-20 px-6 bg-secondary/20">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-headline text-3xl font-bold">O que as mulheres estão dizendo</h2>
      </div>

      <div className="max-w-lg mx-auto bg-white rounded-[2.5rem] overflow-hidden shadow-xl border border-primary/5">
        <div className="relative h-80 w-full">
          <Image 
            src={resultImg?.imageUrl || "https://picsum.photos/seed/wellness2/600/800"} 
            alt="Resultado" 
            fill 
            className="object-cover"
            data-ai-hint="healthy woman"
          />
          <div className="absolute bottom-4 left-4 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
            Resultado Real
          </div>
        </div>
        <div className="p-8 text-center">
          <div className="flex justify-center gap-1 mb-4 text-primary">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <blockquote className="font-headline text-2xl italic text-foreground mb-4 leading-snug">
            "Minha fome noturna diminuiu muito. Sinto que finalmente encontrei algo que não agride meu corpo."
          </blockquote>
          <p className="font-subheadline font-bold text-primary">— Juliana S.</p>
        </div>
      </div>

      <div className="mt-12 text-center space-y-1 animate-fade-in [animation-delay:400ms]">
        <div className="text-lg mb-1">⭐⭐⭐⭐⭐</div>
        <p className="font-subheadline font-semibold text-foreground/80">
          Mais de 120 mulheres já começaram o protocolo
        </p>
        <p className="font-body text-sm text-muted-foreground">
          Avaliação média: 4,8/5
        </p>
      </div>
    </section>
  );
}
