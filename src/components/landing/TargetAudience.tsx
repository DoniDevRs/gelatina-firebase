
import { Check } from "lucide-react";

const audience = [
  "Mulheres que sentem fome constante",
  "Quem não quer usar injeções",
  "Quem sofre com compulsão noturna",
  "Quem quer algo simples e aplicável no dia a dia"
];

export function TargetAudience() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
          Para quem é esse método?
        </h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-1 gap-4">
        {audience.map((item, index) => (
          <div 
            key={index} 
            className="flex items-center gap-4 bg-secondary/10 p-5 rounded-2xl border border-primary/5 transition-all hover:bg-secondary/20 group"
          >
            <div className="bg-primary text-white p-1 rounded-full shrink-0 shadow-sm group-hover:scale-110 transition-transform">
              <Check size={18} strokeWidth={3} />
            </div>
            <span className="font-subheadline font-semibold text-foreground text-lg">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
