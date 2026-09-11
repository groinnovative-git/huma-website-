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

      <div className="relative mt-12">
        {/* Horizontal connecting line (Desktop) */}
        <div
          className="absolute left-[12.5%] top-[33px] hidden h-[2px] w-[75%] bg-[#bfdbfe] lg:block z-0"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-4 lg:gap-6 relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative flex flex-col items-center"
            >
              <div className="relative flex flex-col items-center bg-transparent z-10">
                {/* Outer dotted ring */}
                <div className="relative flex items-center justify-center rounded-full border border-dotted border-gray-400 p-1 bg-white">
                  {/* Inner solid circle */}
                  <span
                    className={`flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full text-[1.375rem] font-bold tracking-tight ${
                      step.filled
                        ? "bg-[#3b82f6] text-white"
                        : "bg-white text-ink"
                    }`}
                  >
                    {step.number}
                  </span>
                </div>
                {/* Short vertical connector line */}
                <div className="h-6 w-[2px] bg-ink -mt-[2px] relative z-[-1]"></div>
              </div>

              {/* Card */}
              <div className="w-full max-w-[260px] rounded-xl border border-border bg-surface p-5 shadow-sm text-left">
                <h3 className="text-base font-bold text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
