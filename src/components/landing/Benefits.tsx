
import { Heart, Clock, Utensils, Zap, Feather } from "lucide-react";

const benefits = [
  {
    title: "Redução natural da fome",
    description: "Sinta o controle do seu apetite sem precisar de substâncias artificiais.",
    icon: Feather
  },
  {
    title: "Saciedade prolongada",
    description: "Sinta-se satisfeita por muito mais tempo após as refeições.",
    icon: Clock
  },
  {
    title: "Menos compulsão noturna",
    description: "Diga adeus à vontade de atacar a geladeira à noite.",
    icon: Heart
  },
  {
    title: "Estratégia prática",
    description: "Pode ser feita com gelatina comum do supermercado, sem complicações.",
    icon: Utensils
  },
  {
    title: "Simplicidade real",
    description: "Uma estratégia simples que se encaixa perfeitamente no seu dia a dia.",
    icon: Zap
  }
];

export function Benefits() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
          Benefícios de quem faz a Gelatina Anti-Caneta
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-secondary/30 p-8 rounded-[2rem] border border-white shadow-sm flex flex-col gap-4 transition-all hover:shadow-md hover:bg-secondary/50 group"
          >
            <div className="bg-white p-3 rounded-2xl w-fit text-primary shadow-sm group-hover:scale-110 transition-transform">
              <benefit.icon size={28} />
            </div>
            <h3 className="font-subheadline text-xl font-bold text-foreground">
              {benefit.title}
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
