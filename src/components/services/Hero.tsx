"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[45%_55%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Technical Excellence
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Our Specialized Repair Services
          </h1>
          <p className="mt-6 max-w-md text-base text-body">
            Expert restoration for premium electronics. We combine decades of
            technical mastery with genuine components to return your
            high-end equipment to factory specifications.
          </p>

          <div className="mt-8">
            <a
              href="#solutions"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-primary-dark active:scale-95"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Schedule Service
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/serviceheroimg.png"
            alt="Huma Electronics technicians repairing a microwave, robot vacuum, speaker, and circuit board on a workshop bench"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
