"use client";
 
import { motion } from "framer-motion";
import { Building2, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
 
const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
 
const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];
 
export default function Footer() {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
 
  return (
    <footer className="bg-gray-900 text-gray-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
      
      <svg
        className="absolute top-0 left-0 right-0 text-white"
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 48h1440V0c-240 48-480 48-720 24C480 0 240 0 0 24z"
          fill="currentColor"
        />
      </svg>
 
      <div className="container mx-auto px-4 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-white text-xl font-bold">CSC Assam</h3>
                <p className="text-sm text-gray-400">Digital Service Centre</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted partner for all digital and government services in Assam. 
              Providing quality service since 2013.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="h-10 w-10 rounded-full bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
            </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500 group-hover:w-2 transition-all" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Document Services
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Online Applications
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Ticket & Hotel Booking
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                PVC Card Printing
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-blue-500" />
                Digital Services
              </li>
            </ul>
          </motion.div>
 
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-white text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <a href="tel:+919876543210" className="hover:text-blue-400 transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <a href="mailto:info@cscassam.in" className="hover:text-blue-400 transition-colors">
                  info@cscassam.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-blue-500 mt-1 flex-shrink-0" />
                <span>Main Road, Guwahati, Assam - 781001</span>
              </li>
            </ul>
          </motion.div>
          </div>
 
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} CSC Assam. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Made with <span className="text-red-500">❤</span> in Assam
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
