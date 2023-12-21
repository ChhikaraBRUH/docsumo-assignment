import ClientLogos from "@/components/ClientLogos";
import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TestimonialsCarousel />
      <ClientLogos />
      <ContactForm />
    </div>
  );
}
