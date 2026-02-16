"use client";
 
import { motion } from "framer-motion";
import { Send, FileText, Briefcase, CreditCard, Globe, Phone } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { staggerContainer, staggerItem } from "@/lib/animations";
 
const quickServices = [
  { icon: FileText, title: "Documents", color: "from-blue-500 to-blue-600" },
  { icon: CreditCard, title: "PAN Card", color: "from-green-500 to-green-600" },
  { icon: Briefcase, title: "Job Apply", color: "from-purple-500 to-purple-600" },
  { icon: Globe, title: "Online Work", color: "from-orange-500 to-orange-600" },
  { icon: Phone, title: "Booking", color: "from-red-500 to-red-600" },
];
 
export default function ExploreServices() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Quick Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our range of quick services or contact us for any custom requirement
            </p>
          </div>
        </ScrollReveal>
 
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12"
        >
          {quickServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg cursor-pointer group"
              >
                <div
                  className={`h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:shadow-lg transition-shadow`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-center font-semibold text-gray-900">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
 
        <ScrollReveal delay={0.3}>
          <div className="text-center">
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg"
            >
              <Send className="h-5 w-5" />
              Send File / Ask Any Service
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
