"use client";
 
import { motion } from "framer-motion";
import { PriceTable as PriceTableType } from "@/types";
import { staggerItem } from "@/lib/animations";
 
interface PriceTableProps {
  table: PriceTableType;
  index: number;
}
 
export default function PriceTable({ table, index }: PriceTableProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-xl bg-white p-6 shadow-lg border border-gray-100"
    >
      <h3 className="mb-6 text-xl font-bold text-gray-900 border-b-2 border-blue-500 pb-3">
        {table.title}
      </h3>
      <div className="space-y-3">
        {table.items.map((item, idx) => (
          <motion.div
            key={idx}
            variants={staggerItem}
            className="flex items-start justify-between border-b border-gray-100 pb-3 last:border-0"
          >
            <div className="flex-1">
              <p className="font-medium text-gray-800">{item.service}</p>
              {item.details && (
                <p className="text-xs text-gray-500 mt-1">{item.details}</p>
              )}
            </div>
            <span className="ml-4 font-bold text-blue-600 whitespace-nowrap">
              {item.price}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
