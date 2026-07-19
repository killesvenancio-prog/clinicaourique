import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specialties from "@/components/Specialties";
import BeforeAfter from "@/components/BeforeAfter";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col">
        <Hero />
        <About />
        <Specialties />
        <BeforeAfter />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
