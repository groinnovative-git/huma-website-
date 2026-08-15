"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";

const bullets = [
  "high-quality spare parts for reliable, long-lasting repairs",
  "Certified experts delivering precise, reliable repairs.",
  "Comprehensive Warranty Coverage",
];

export default function ServiceBeyondExpectations() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Service Beyond Expectations" />

      <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative aspect-[4/3] overflow-hidden rounded-2xl"
        >
          <Image
            src="/Rectangle%20518.png"
            alt="Bright Huma Electronics repair lab with a technician at a microscope and diagnostic equipment"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-3xl font-bold text-ink">
            Service Excellence <span className="text-primary">Guaranteed</span>
          </h3>
          <p className="mt-4 text-base text-body">
            We believe that premium electronics deserve premium service. Our
            workshop is equipped with the latest diagnostic tools to ensure
            every repair meets stringent quality standards.
          </p>

          <ul className="mt-6 space-y-3">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-sm bg-primary" aria-hidden="true" />
                <span className="text-sm text-body">{bullet}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
