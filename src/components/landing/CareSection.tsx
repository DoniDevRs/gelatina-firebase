
import { ShieldCheck, Sparkle, Wind } from "lucide-react";

const items = [
  {
    title: "Controle Natural",
    desc: "Auxilia no controle da saciedade ao longo do dia.",
    icon: ShieldCheck
  },
  {
    title: "Pele + Colágeno",
    desc: "Gelatina é rica em proteínas que ajudam na firmeza da pele.",
    icon: Sparkle
  },
  {
    title: "Bem-estar Digestivo",
    desc: "Estratégia prática que pode ajudar no equilíbrio alimentar.",
    icon: Wind
  }
];

export function CareSection() {
  return (
    <section className="py-20 px-6 bg-white text-center">
      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
          Cuidado que seu corpo merece
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary mb-2 shadow-inner">
              <item.icon size={32} />
            </div>
            <h3 className="font-subheadline text-xl font-bold">{item.title}</h3>
            <p className="font-body text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
