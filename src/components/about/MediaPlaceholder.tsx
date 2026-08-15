"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  { src: "/legacy-1.jpg", alt: "Technician repairing a JBL Bluetooth speaker" },
  { src: "/legacy-2.jpg", alt: "Technician repairing a microwave oven control board" },
  {
    src: "/WhatsApp%20Image%202026-08-06%20at%207.00.07%20PM.jpeg",
    alt: "Technician soldering a TV mainboard",
  },
];

const loopImages = [...galleryImages, ...galleryImages];

export default function MediaPlaceholder() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-14 lg:pb-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-surface to-transparent" />

        <motion.div
          className="flex w-max gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        >
          {loopImages.map((image, i) => (
            <div
              key={`${image.src}-${i}`}
              className="relative h-64 w-96 shrink-0 overflow-hidden rounded-3xl"
            >
              <Image src={image.src} alt={image.alt} fill className="object-cover" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
