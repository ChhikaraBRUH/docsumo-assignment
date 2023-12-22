import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import Menu from "@/components/Menu";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <div>
      <Menu />
      <HeroSection />
      <TestimonialsCarousel />
      <ClientLogos />
      <ContactForm />
    </div>
  );
}
