import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Services } from "@/components/Services";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { Testimonials } from "@/components/Testimonials";
import { ContactForm } from "@/components/ContactForm";
import { VisitUs } from "@/components/VisitUs";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="bg-white">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Services />
        <FeaturedProperties />
        <Testimonials />
        <ContactForm />
        <VisitUs />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;