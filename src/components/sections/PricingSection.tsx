"use client";
 
import ScrollReveal from "@/components/ui/ScrollReveal";
import PriceTable from "@/components/ui/PriceTable";
import { priceTables } from "@/data/services";
 
export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Affordable and competitive rates for all our services
            </p>
          </div>
        </ScrollReveal>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {priceTables.map((table, index) => (
            <PriceTable key={table.id} table={table} index={index} />
          ))}
        </div>
 
        <ScrollReveal delay={0.4}>
          <div className="mt-12 text-center bg-blue-50 border border-blue-100 rounded-xl p-8">
            <p className="text-gray-700 text-lg">
              <span className="font-semibold text-blue-600">Note:</span> Prices may vary based on urgency and complexity. 
              Contact us for bulk orders and special requirements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
