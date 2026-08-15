"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Settings } from "lucide-react";

const hours = [
  { label: "Mon - Sat", value: "10.00AM–9.00PM" },
  { label: "Sunday", value: "Emergency Only" },
];

export default function WorkshopCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="relative overflow-hidden rounded-2xl bg-[#0F1E3D] p-5 text-white shadow-sm"
    >
      <Settings
        className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 text-white/5"
        aria-hidden="true"
      />

      <div className="relative flex items-center gap-2">
        <MapPin className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold">Huma Electronics workshop</p>
      </div>
      <p className="relative mt-2 text-sm text-white/70">
        6, Belshalat 17 Building
        <br />
        Suq Al Kabeer, Bur Dubai
        <br />
        Dubai, United Arab Emirates
      </p>

      <div className="relative mt-5 flex items-center gap-2 border-t border-white/10 pt-5">
        <Clock className="h-5 w-5 text-primary" aria-hidden="true" />
        <p className="text-sm font-semibold">Service Hours</p>
      </div>
      <dl className="relative mt-2 space-y-1">
        {hours.map((row) => (
          <div key={row.label} className="flex items-center justify-between text-sm">
            <dt className="text-white/70">{row.label}</dt>
            <dd className="text-white/90">{row.value}</dd>
          </div>
        ))}
      </dl>
    </motion.div>
  );
}
