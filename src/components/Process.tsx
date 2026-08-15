"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Contact Us",
    description: "Reach out via phone, WhatsApp, or our online portal.",
    filled: true,
  },
  {
    number: "02",
    title: "Diagnose",
    description: "Our technicians perform a thorough analysis of the issue.",
    filled: false,
  },
  {
    number: "03",
    title: "Service",
    description: "Precision repair using high-grade replacement parts.",
    filled: false,
  },
  {
    number: "04",
    title: "Fix It",
    description: "Verified testing and handoff of your restored device.",
    filled: true,
  },
];

export default function Process() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Our Service Process" />

      <div className="relative mt-10">
        <div
          className="absolute left-6 top-6 hidden h-px w-[calc(100%-3rem)] bg-border lg:block"
          aria-hidden="true"
        />
        <div
          className="absolute left-1/2 top-6 h-[calc(100%-3rem)] w-px -translate-x-1/2 bg-border lg:hidden"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col items-center text-center"
            >
              <span
                className={
                  step.filled
                    ? "relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-base font-bold text-white"
                    : "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary bg-surface text-base font-bold text-primary"
                }
              >
                {step.number}
              </span>
              <div className="mt-6 w-full rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <h3 className="text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-sm text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
