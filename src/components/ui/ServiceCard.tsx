"use client";
 
import { motion } from "framer-motion";
import Image from "next/image";
import { Service } from "@/types";
import * as Icons from "lucide-react";
 
interface ServiceCardProps {
  service: Service;
  index: number;
}
 
export default function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = Icons[service.icon as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
 
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -5 }}
      className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80"
    >
      <div className="relative h-full w-full">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
      </div>
 
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/90 backdrop-blur-sm transition-all duration-300 group-hover:bg-blue-600">
          {IconComponent && <IconComponent className="h-6 w-6" />}
        </div>
        <h3 className="mb-2 text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-200 opacity-0 transition-all duration-300 group-hover:opacity-100">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}
