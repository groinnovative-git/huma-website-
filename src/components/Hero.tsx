"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-12 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-[45%_55%]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Expert Repair & Service for Your{" "}
            <span className="text-primary">Home Electronics</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-body">
            Experience peace of mind with Huma Electronics. From advanced TV
            diagnostics to high-end kitchen and cleaning appliance
            restoration, we bring expert technical support directly to your
            doorstep.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-dark px-6 py-3 text-sm font-medium text-white transition-transform hover:bg-primary active:scale-95"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
              Book a Service
            </a>

            <div className="flex items-center gap-3">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-primary text-primary">
                <motion.span
                  className="flex"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                >
                  <Clock className="h-7 w-7" aria-hidden="true" />
                </motion.span>
              </span>
              <div>
                <p className="text-base font-bold text-ink">24 Hr</p>
                <p className="text-sm text-muted">Response Time</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px]"
        >
          <Image
            src="/Emergency AC Repair at Home – Technician in 60 Minutes.jpg"
            alt="Technician in blue uniform servicing a wall-mounted air conditioner in a living room"
            fill
            priority
            className="object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
