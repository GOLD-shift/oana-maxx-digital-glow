import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, Star, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-salon.jpg";

const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", service: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Bună! Mă numesc ${formData.name}. Aș dori o programare pentru ${formData.service}. Numărul meu: ${formData.phone}`;
    window.open(`https://wa.me/40721524296?text=${encodeURIComponent(message)}`, "_blank");
  };

  const navLinks = [
    { href: "#servicii", label: "Servicii" },
    { href: "#galerie", label: "Galerie" },
    { href: "#despre", label: "Despre Noi" },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Oana Maxx Beauty Salon interior" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/60 to-charcoal/30" />
      </div>

      {/* Nav — sticky */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-16 transition-all duration-300 ${
          scrolled ? "bg-charcoal/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="font-display text-2xl font-bold text-primary-foreground tracking-wide">
            OANA <span className="text-rose-gold">MAXX</span>
          </h2>
          <p className="text-xs tracking-[0.3em] text-rose-gold-light font-body">BEAUTY SALON</p>
        </motion.div>

        {/* Desktop links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="hidden md:flex items-center gap-6 text-sm text-primary-foreground/80 font-body"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-rose-gold transition-colors">
              {link.label}
            </a>
          ))}
          <a
            href="tel:0721524296"
            className="bg-gradient-rose px-5 py-2.5 rounded-full text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Sună Acum
          </a>
        </motion.div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-primary-foreground p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Meniu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[68px] left-0 right-0 z-40 bg-charcoal/95 backdrop-blur-md border-t border-rose-gold/20 flex flex-col px-6 py-4 gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-primary-foreground/80 font-body text-base py-2 border-b border-white/10 hover:text-rose-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:0721524296"
              onClick={() => setMenuOpen(false)}
              className="bg-gradient-rose text-primary-foreground font-body font-semibold text-center py-3 rounded-full mt-2 hover:opacity-90 transition-opacity"
            >
              Sună Acum — 0721 524 296
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content — pt-24 pentru a compensa nav-ul fixed */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 px-6 lg:px-16 pt-32 lg:pt-36 pb-20">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 max-w-xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rose-gold text-rose-gold" />
              ))}
            </div>
            <span className="text-rose-gold-light text-sm font-body">4.8 / 5 — 23 recenzii</span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Frumusețea ta,
            <br />
            <span className="text-gradient-rose">pasiunea noastră</span>
          </h1>

          <p className="text-primary-foreground/70 text-lg font-body mb-8 leading-relaxed">
            Salon de coafură, cosmetică și make-up în Păulești. Experiență premium, rezultate impecabile.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 text-sm text-primary-foreground/60 font-body">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-rose-gold" />
              <span>Str. Gentianei 33, Păulești</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-gold" />
              <span>Deschis până la 22:00</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-md"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-primary-foreground/95 backdrop-blur-xl rounded-2xl p-8 shadow-elevated"
          >
            <h3 className="font-display text-2xl font-semibold text-foreground mb-2">Programează-te Acum</h3>
            <p className="text-muted-foreground text-sm font-body mb-6">Completează formularul și te contactăm rapid</p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Numele tău"
                required
                maxLength={100}
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all font-body text-sm"
              />
              <input
                type="tel"
                placeholder="Număr de telefon"
                required
                maxLength={15}
                pattern="[0-9]{10}"
                title="Introdu un număr de telefon valid (10 cifre)"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground placeholder:text-muted-foreground border border-border focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all font-body text-sm"
              />
              <select
                required
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground border border-border focus:border-rose-gold focus:ring-1 focus:ring-rose-gold outline-none transition-all font-body text-sm"
              >
                <option value="">Alege serviciul</option>
                <option value="Coafură">Coafură</option>
                <option value="Cosmetică">Cosmetică</option>
                <option value="Make-up">Make-up</option>
                <option value="Manichiură">Manichiură</option>
                <option value="Altele">Altele</option>
              </select>
              <button
                type="submit"
                className="w-full bg-gradient-rose text-primary-foreground py-3.5 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Programează-te pe WhatsApp
              </button>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-4 font-body">
              Sau sună direct:{" "}
              <a href="tel:0721524296" className="text-rose-gold font-medium">
                0721 524 296
              </a>
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
