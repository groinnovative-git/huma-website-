"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const cards = [
  {
    key: "tv",
    title: "TV Repair & Panel Service",
    description:
      "Expert handling of premium OLED and QLED panels. We restore your visual experience with original components and precision tools.",
    src: "/Rectangle%20497.png",
    alt: "Technician repairing a TV circuit board in a workshop",
    span: "lg:col-span-3",
    aspect: "aspect-[755/278]",
  },
  {
    key: "audio",
    title: "Audio System Service",
    description: null,
    src: "/Rectangle%20498.png",
    alt: "Glowing vacuum tubes on an audio amplifier circuit board",
    span: "lg:col-span-2",
    aspect: "aspect-[532/278]",
  },
  {
    key: "kitchen",
    title: "Kitchen Appliances",
    description: null,
    src: "/Rectangle%20500.png",
    alt: "Technician servicing a microwave among kitchen appliances",
    span: "lg:col-span-2",
    aspect: "aspect-[532/278]",
  },
  {
    key: "home",
    title: "Home Appliance Service",
    description:
      "Total care for your smart home ecosystem. From maintenance to major repairs, we ensure your household runs flawlessly.",
    src: "/Rectangle%20499.png",
    alt: "Modern living room and kitchen interior with a smart TV",
    span: "lg:col-span-3",
    aspect: "aspect-[755/278]",
  },
];

export default function Expertise() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Our Specialized Expertise" />

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-5">
        {cards.map((card) => (
          <motion.div
            key={card.key}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            whileHover={{ y: -4 }}
            className={`relative overflow-hidden rounded-2xl ${card.aspect} ${card.span}`}
          >
            <Image src={card.src} alt={card.alt} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3 className="text-lg font-semibold text-white">{card.title}</h3>
              {card.description && (
                <p className="mt-1 max-w-sm text-sm text-white/80">
                  {card.description}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
