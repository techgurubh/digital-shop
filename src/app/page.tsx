import TopBar from "@/components/sections/TopBar";
import Header from "@/components/sections/Header";
import HeroSlideshow from "@/components/sections/HeroSlideshow";
import ExploreServices from "@/components/sections/ExploreServices";
import ServiceShowcase from "@/components/sections/ServiceShowcase";
import PricingSection from "@/components/sections/PricingSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import MapSection from "@/components/sections/MapSection";
import Footer from "@/components/sections/Footer";
 
export default function Home() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSlideshow />
      <ExploreServices />
      <ServiceShowcase />
      <PricingSection />
      <AboutSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </main>
  );
}
