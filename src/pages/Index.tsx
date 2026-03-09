import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import GallerySection from "@/components/GallerySection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
      <WhatsAppFloat />   {/* ← adaugă aici */}
    </main>
  );
};

export default Index;
