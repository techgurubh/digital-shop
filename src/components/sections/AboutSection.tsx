"use client";
 
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Users, Award, Clock, ThumbsUp } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { fadeLeft, fadeRight } from "@/lib/animations";
 
const stats = [
  { icon: Users, value: 5000, label: "Happy Customers", suffix: "+" },
  { icon: Award, value: 10, label: "Years Experience", suffix: "+" },
  { icon: Clock, value: 24, label: "Hour Support", suffix: "/7" },
  { icon: ThumbsUp, value: 50, label: "Services", suffix: "+" },
];
 
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
 
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
 
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
 
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
 
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
 
export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal variants={fadeLeft}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About CSC Assam
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  Welcome to CSC Assam, your trusted partner for all digital and government services. 
                  We are committed to providing quick, reliable, and affordable services to our community.
                </p>
                <p>
                  With over a decade of experience, we have served thousands of satisfied customers 
                  across Assam. Our team of dedicated professionals ensures that every service is 
                  delivered with excellence and attention to detail.
                </p>
                <p>
                  From document services and printing to online applications and booking services, 
                  we offer a comprehensive range of solutions under one roof. Our mission is to make 
                  digital and government services accessible to everyone.
                </p>
                <p className="font-semibold text-blue-600">
                  Your convenience is our priority. Visit us today and experience hassle-free service!
                </p>
              </div>
            </div>
          </ScrollReveal>
 
          <ScrollReveal variants={fadeRight}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center"
                  >
                    <div className="h-12 w-12 mx-auto mb-4 rounded-full bg-blue-600 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
