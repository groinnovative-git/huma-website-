"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { value: "20+", label: "Years Experience" },
  { value: "30k+", label: "Successful Repairs" },
  { value: "98%", label: "Satisfaction Rate" },
];

export default function AboutHero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[48%_52%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Your Trusted Partner for Reliable Electronic Care &{" "}
            <span className="text-primary">Expert Appliance Solutions</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-body">
            For over two decades, Huma Electronics has stood as a beacon of
            technical excellence in the heart of the city. We don&apos;t just
            repair devices; we restore the digital pulse of your home and
            business.
          </p>

          <div className="mt-8 flex flex-wrap gap-8 sm:gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-primary">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl"
        >
          <Image
            src="/aboutimg.png"
            alt="The Huma Electronics Workshop storefront, with TV, audio, and appliance repair signage"
            fill
            priority
            sizes="(min-width: 1024px) 600px, 100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
