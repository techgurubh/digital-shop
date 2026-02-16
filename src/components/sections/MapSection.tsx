"use client";
 
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeUp } from "@/lib/animations";
 
export default function MapSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Centre
            </h2>
            <p className="text-lg text-gray-600">
              Find us on the map and visit us for any service
            </p>
          </div>
        </ScrollReveal>
 
        <ScrollReveal variants={fadeUp} delay={0.2}>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.7441832719!2d91.75313931501658!3d26.14489198346973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5918035e01d9%3A0x8e5e6d4c5c5c5c5c!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CSC Assam Location"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
