"use client";
 
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactInfo } from "@/data/services";
import { staggerContainer, staggerItem } from "@/lib/animations";
 
export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We&apos;re here to help. Reach out to us through any of these channels.
            </p>
          </div>
        </ScrollReveal>
 
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = Icons[info.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={index}
                variants={staggerItem}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-8 shadow-lg text-center group cursor-pointer"
              >
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:shadow-xl transition-shadow">
                  {IconComponent && <IconComponent className="h-8 w-8 text-white" />}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-lg">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-gray-600">{info.value}</p>
                )}
              </motion.div>
            );
          })}
        </motion.div>
 
        <ScrollReveal delay={0.4}>
          <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Visit our centre today or call us to discuss your requirements
            </p>
            <motion.a
              href="tel:+919859298707"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Call Now: +919859298707
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
