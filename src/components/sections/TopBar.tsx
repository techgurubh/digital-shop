"use client";
 
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";
import { slideDown } from "@/lib/animations";
 
export default function TopBar() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideDown}
      className="bg-blue-900 text-white py-2 text-sm"
    >
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Phone className="h-4 w-4" />
          <a href="tel:+919876543210" className="hover:text-blue-300 transition-colors">
            +91 98765 43210
          </a>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          <span>Main Road, Guwahati, Assam - 781001</span>
        </div>
      </div>
    </motion.div>
  );
}
