import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-image");

  return (
    <section className="relative pb-20 px-6 flex flex-col items-center text-center overflow-hidden pt-8 md:pt-12">
      <div className="animate-fade-in space-y-6 max-w-4xl mx-auto">
        <p className="font-subheadline text-xs font-semibold uppercase tracking-widest text-primary/80">
          MÉTODO NATURAL DE EMAGRECIMENTO
        </p>

        <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
          <span className="block">
            Reduza até <span className="text-primary">2kg em 14 dias.</span>
          </span>

          <span className="block">
            Controlando sua fome de forma <span className="text-primary">natural</span>
          </span>
        </h1>

        <p className="font-subheadline text-lg md:text-2xl font-bold text-foreground/90 max-w-2xl mx-auto px-4">
          Sem injeções. Sem fórmulas caras.
        </p>

        <p className="font-body text-muted-foreground text-base md:text-lg leading-relaxed px-4 max-w-2xl mx-auto">
          Descubra como usar gelatina comum do jeito certo para aumentar a saciedade naturalmente.
        </p>
      </div>

      <div className="mt-12 mb-10 relative animate-fade-in [animation-delay:200ms] w-full">
        <div className="relative w-full max-w-[450px] h-[480px] md:h-[600px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white transition-all duration-500">
          <Image
            src={heroImage?.imageUrl || "https://i.imgur.com/6RBrV2x.png"}
            alt="Gelatina Anti-Caneta Method"
            fill
            className="object-cover"
            priority
            data-ai-hint="wellness beauty"
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="animate-fade-in [animation-delay:400ms] w-full max-w-sm">
        <Button
          className="w-full h-14 text-lg font-subheadline font-bold bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
        >
          QUERO COMEÇAR MEU PROTOCOLO
        </Button>
      </div>
    </section>
  );
}
