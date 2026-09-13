"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function CtaBanner() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl bg-primary-dark px-6 py-12 text-center sm:px-12 lg:py-14"
      >
        <Image
          src="/Assest/services image.png"
          alt="Services Background"
          fill
          className="object-cover opacity-60 pointer-events-none"
        />
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Ready to Restore Your Electronics?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/85">
            Book your service online today and get a preliminary diagnosis
            within 24 hours. Our technical team is standing by to help.
          </p>
          <div className="mt-8">
            <Link
              href="/#booking"
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-sm font-medium text-primary shadow-sm transition-transform hover:-translate-y-0.5 hover:shadow-md active:scale-95"
            >
              Book Service Now
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
