
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Isso substitui remédios?",
    a: "O método é uma alternativa natural focada em saciedade. Recomendamos sempre consultar um médico antes de interromper qualquer tratamento prescrito."
  },
  {
    q: "Preciso parar de comer tudo?",
    a: "Não! O foco é incluir a estratégia da gelatina para controlar a fome, permitindo que você coma melhor sem radicalismos."
  },
  {
    q: "Funciona para qualquer pessoa?",
    a: "Sim, o método utiliza as propriedades naturais da gelatina para promover saciedade, o que beneficia qualquer organismo de forma segura."
  }
];

export function FAQ() {
  return (
    <section className="py-20 px-6 max-w-2xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="font-headline text-3xl font-bold">Dúvidas Frequentes</h2>
      </div>
      <Accordion type="single" collapsible className="w-full space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 bg-white overflow-hidden shadow-sm">
            <AccordionTrigger className="font-subheadline font-semibold text-foreground hover:no-underline py-5">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="font-body text-muted-foreground pb-5">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
