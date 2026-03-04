import { motion } from "framer-motion";
import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experiență & Profesionalism", description: "Oana știe exact ce ți se potrivește. Ani de experiență în frumusețe." },
  { icon: Users, title: "Clienți Mulțumiți", description: "4.8 stele din 23 recenzii. Clientele noastre revin mereu cu drag." },
  { icon: Clock, title: "Program Flexibil", description: "Deschis până la ora 22:00 pentru confortul tău maxim." },
  { icon: ThumbsUp, title: "Atmosferă Plăcută", description: "Un salon prietenos unde te simți ca acasă, de fiecare dată." },
];

const WhyUsSection = () => {
  return (
    <section id="despre" className="py-24 px-6 lg:px-16 bg-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-rose-gold font-body text-sm tracking-[0.2em] uppercase mb-3">De Ce Noi</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            De Ce Să Alegi Oana Maxx
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5 items-start bg-background/60 rounded-2xl p-6 border border-border"
            >
              <div className="w-12 h-12 bg-gradient-rose rounded-xl flex items-center justify-center flex-shrink-0">
                <reason.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{reason.title}</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {[
            { name: "Aly P", text: "Am căutat și am fost în 4 saloane și doar la Oana am găsit ceea ce voiam. Singura care a știut ce vreau și a realizat! Recomand cu cea mai mare încredere ❤️" },
            { name: "Madalina Tinca", text: "La Oana Maxx, nu e doar o coafură – e o experiență! Zâmbete, relaxare și un păr care arată minunat de fiecare dată. Oana știe exact ce ți se potrivește! 💖" },
          ].map((review) => (
            <div key={review.name} className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-rose-gold">★</span>
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm italic leading-relaxed mb-4">"{review.text}"</p>
              <p className="font-body font-semibold text-foreground text-sm">{review.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
