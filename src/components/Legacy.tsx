"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

export default function Legacy() {
  return (
    <section id="legacy" className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Our Legacy" />

      <div className="mt-8 grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl bg-border lg:max-w-sm"
        >
          <Image
            src="/founde.png"
            alt="Founder of Huma Electronics in his office"
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
          <h3 className="text-2xl font-bold text-ink">
            Your Trusted Electronics Service Partner
          </h3>
          <p className="mt-4 text-base text-body">
            At Huma Electronics, we believe that high-end equipment deserves
            high-end care. Founded on the principles of technical integrity
            and customer satisfaction, we have grown into the region&apos;s
            leading specialist for consumer electronics restoration.
          </p>
          <p className="mt-4 text-base text-body">
            Our workshop is equipped with state-of-the-art diagnostic tools
            that allow us to pinpoint issues that others might miss. We pride
            ourselves on our transparency, professional conduct, and the
            long-term relationships we build with our clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
