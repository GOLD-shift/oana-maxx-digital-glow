import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Trebuie să fac programare?", a: "Da, recomandăm programarea în avans pentru a vă asigura locul. Ne puteți contacta telefonic la 0721 524 296 sau prin WhatsApp." },
  { q: "Ce program aveți?", a: "Suntem deschiși zilnic, cu program flexibil până la ora 22:00. Contactați-ne pentru programări în weekend." },
  { q: "Unde sunteți situați?", a: "Ne găsiți pe Strada Gentianei 33, 107400 Păulești. Avem parcare disponibilă." },
  { q: "Ce servicii oferiți?", a: "Oferim coafură (tuns, vopsit, balayage), cosmetică facială, make-up profesional și manichiură cu gel/semipermanent." },
  { q: "Acceptați plata cu cardul?", a: "Da, acceptăm plata atât cash cât și cu cardul." },
  { q: "Oferiți servicii pentru mirese?", a: "Absolut! Oferim pachete complete pentru mirese: coafură, make-up și manichiură. Contactați-ne pentru detalii și proba de coafură." },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-cream">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Întrebări</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Întrebări Frecvente</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-soft"
              >
                <AccordionTrigger className="font-display text-base font-medium text-foreground hover:text-rose-gold hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-body text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
