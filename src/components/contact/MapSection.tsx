"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ADDRESS =
  "6, Belshalat 17 Building, Suq Al Kabeer, Bur Dubai, Dubai, United Arab Emirates";

// Google Maps embed — no API key required. Swap the query for the exact
// pin/place once the workshop has a verified Google Maps listing.
const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.2958775584098!2d55.29084907437914!3d25.260630429130288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43a39b31dac7%3A0x1d54e33902559dae!2sHuma%20Electronics!5e0!3m2!1sen!2sin!4v1789230864079!5m2!1sen!2sin";

export default function MapSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-14 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-2xl"
      >
        <iframe
          title="Huma Electronics workshop location"
          src={MAP_SRC}
          width="100%"
          height="420"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block"
        />

        <div className="absolute left-4 top-4 max-w-xs rounded-2xl bg-[#0F1E3D] p-4 text-white shadow-lg sm:left-6 sm:top-6">
          <p className="text-sm font-bold tracking-wide text-primary">HUMA ELECTRIC</p>
          <div className="mt-2 flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-white/80">
              6, Belshalat 17 Building
              <br />
              Suq Al Kabeer, Bur Dubai
              <br />
              Dubai, United Arab Emirates
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
