import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6 lg:px-16 bg-charcoal relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-rose-gold font-body text-sm tracking-[0.2em] uppercase mb-4">Hai la Salon</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
            Programează-te Astăzi și<br />
            <span className="text-gradient-rose">Strălucește Mâine</span>
          </h2>
          <p className="text-primary-foreground/60 font-body text-lg mb-10 max-w-xl mx-auto">
            Nu mai aștepta. Sună acum sau trimite un mesaj pe WhatsApp și vei avea parte de o experiență de neuitat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0721524296"
              className="bg-gradient-rose text-primary-foreground px-8 py-4 rounded-full font-body font-semibold text-base hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              0721 524 296
            </a>
            <a
              href="https://maps.google.com/?q=Strada+Gentianei+33+Paulesti"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-rose-gold/40 text-rose-gold px-8 py-4 rounded-full font-body font-semibold text-base hover:bg-rose-gold/10 transition-colors flex items-center justify-center gap-2"
            >
              <MapPin className="w-5 h-5" />
              Vezi pe Hartă
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-primary-foreground">
            OANA <span className="text-rose-gold">MAXX</span>
          </h3>
          <p className="text-xs tracking-[0.2em] text-rose-gold-light font-body">BEAUTY SALON</p>
        </div>
        <p className="text-primary-foreground/40 text-sm font-body">
          © 2026 Oana Maxx Beauty Salon. Toate drepturile rezervate.
        </p>
      </div>
    </section>
  );
};

export default CTASection;
