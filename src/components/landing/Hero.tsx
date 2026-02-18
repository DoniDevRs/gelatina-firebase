
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function Hero() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-image");

  return (
    <section className="relative pt-12 pb-20 px-6 flex flex-col items-center text-center">
      <div className="animate-fade-in space-y-4 max-w-2xl mx-auto">
        <p className="font-subheadline text-xs font-semibold uppercase tracking-widest text-primary/80">
          MÉTODO NATURAL DE EMAGRECIMENTO
        </p>
        
        <h1 className="font-headline text-4xl md:text-5xl font-bold leading-tight text-foreground">
          Elimine até <span className="text-primary">2kg em 14 dias</span> de forma natural
        </h1>
        
        <p className="font-body text-muted-foreground text-lg leading-relaxed px-4">
          A alternativa natural que muitas mulheres estão testando antes de recorrer às canetas emagrecedoras.
        </p>
      </div>

      <div className="mt-10 mb-10 relative animate-fade-in [animation-delay:200ms]">
        <div className="relative w-64 h-[450px] md:w-80 md:h-[550px] mx-auto overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white">
          <Image
            src={heroImage?.imageUrl || "https://i.imgur.com/jy3Ti3R.png"}
            alt="Gelatina Anti-Caneta Method"
            fill
            className="object-cover"
            priority
            data-ai-hint="wellness beauty"
          />
        </div>
        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="animate-fade-in [animation-delay:400ms] w-full max-w-sm">
        <Button 
          className="w-full h-14 text-lg font-subheadline font-bold bg-primary hover:bg-accent text-white rounded-full shadow-lg transition-all transform hover:scale-105 active:scale-95"
        >
          QUERO COMEÇAR AGORA
        </Button>
      </div>
    </section>
  );
}
