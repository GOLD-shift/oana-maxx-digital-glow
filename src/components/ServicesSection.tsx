import { motion } from "framer-motion";
import { Scissors, Sparkles, Palette, Heart } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Coafură",
    description: "Tuns, vopsit, balayage, tratamente capilare și coafuri pentru orice ocazie.",
  },
  {
    icon: Sparkles,
    title: "Cosmetică",
    description: "Tratamente faciale, curățare ten, hidratare profundă și îngrijire personalizată.",
  },
  {
    icon: Palette,
    title: "Make-up",
    description: "Make-up profesional pentru evenimente, nunți, ședințe foto și zi de zi.",
  },
  {
    icon: Heart,
    title: "Manichiură",
    description: "Manichiură cu gel, semipermanent, nail art și îngrijirea unghiilor.",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicii" className="py-24 px-6 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-gold font-body text-sm tracking-[0.2em] uppercase mb-3">Ce Oferim</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Serviciile Noastre
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card rounded-2xl p-8 text-center hover:shadow-elevated transition-all duration-500 border border-border hover:border-rose-gold-light"
            >
              <div className="w-14 h-14 bg-rose-gold-light/30 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-gradient-rose group-hover:text-primary-foreground transition-all duration-500">
                <service.icon className="w-6 h-6 text-rose-gold group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
