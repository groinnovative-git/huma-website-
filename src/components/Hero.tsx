"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

const HERO_IMAGES = [
  {
    src: "/image 3.png",
    alt: "Technician soldering a circuit board during repair",
  },
  {
    src: "/image 1.png",
    alt: "Technician closely inspecting a soldered circuit board",
  },
  {
    src: "/image 2 (2).png",
    alt: "Technician repairing the internal board of a flat-screen TV",
  },
];

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

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
          className="relative ml-auto aspect-[639/578] w-[85%]"
          style={{
            WebkitMaskImage: "url('/Vector.png')",
            maskImage: "url('/Vector.png')",
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
          }}
        >
          <AnimatePresence mode="sync">
            {HERO_IMAGES.map(
              (image, index) =>
                index === activeIndex && (
                  <motion.div
                    key={image.src}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={index === 0}
                      className="object-cover object-top"
                    />
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
