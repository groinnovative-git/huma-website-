"use client";

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 text-center lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="mx-auto text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
          Let&apos;s Restore Your <span className="text-primary">Peace of Mind</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base text-body">
          Expert diagnostic services and rapid repairs for premium home
          electronics. We&apos;re here to ensure your smart home remains
          smart.
        </p>
      </motion.div>
    </section>
  );
}
