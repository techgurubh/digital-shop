"use client";
 
import ScrollReveal from "@/components/ui/ScrollReveal";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";
 
export default function ServiceShowcase() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive digital and government services to meet all your needs
            </p>
          </div>
        </ScrollReveal>
 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
