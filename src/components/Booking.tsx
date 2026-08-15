"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import {
  AirVent,
  Refrigerator,
  WashingMachine,
  Microwave,
  Tv,
  Wrench,
} from "lucide-react";
import { SERVICES } from "@/lib/services";
import SectionHeading from "./ui/SectionHeading";
import BookingForm from "./BookingForm";

const nodes = [
  { icon: AirVent, label: "AC Repair", style: "left-1/2 top-0 -translate-x-1/2" },
  { icon: Refrigerator, label: "Refrigerator Repair", style: "left-0 top-1/3" },
  { icon: WashingMachine, label: "Washing Machine Repair", style: "right-0 top-1/3" },
  { icon: Microwave, label: "Microwave Repair", style: "left-4 bottom-0" },
  { icon: Tv, label: "TV Repair", style: "right-4 bottom-0" },
];

function BookingIllustration() {
  return (
    <div className="relative h-full min-h-[420px] w-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#0A1A3A] to-[#0E2451] p-8">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(96,165,250,0.25), transparent 40%), radial-gradient(circle at 80% 80%, rgba(96,165,250,0.2), transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto flex h-full max-w-sm items-center justify-center">
        <div className="relative aspect-square w-full">
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            aria-hidden="true"
          >
            <line x1="50" y1="50" x2="50" y2="6" stroke="#3b82f6" strokeWidth="0.6" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="8" y2="34" stroke="#3b82f6" strokeWidth="0.6" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="92" y2="34" stroke="#3b82f6" strokeWidth="0.6" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="14" y2="92" stroke="#3b82f6" strokeWidth="0.6" strokeDasharray="2 2" />
            <line x1="50" y1="50" x2="86" y2="92" stroke="#3b82f6" strokeWidth="0.6" strokeDasharray="2 2" />
          </svg>

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary shadow-[0_0_30px_rgba(59,130,246,0.7)]">
            <Wrench className="h-7 w-7 text-white" aria-hidden="true" />
          </div>

          {nodes.map((node) => (
            <div
              key={node.label}
              className={`absolute flex flex-col items-center gap-1.5 ${node.style}`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 ring-1 ring-blue-400/50 backdrop-blur">
                <node.icon className="h-5 w-5 text-blue-300" aria-hidden="true" />
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-blue-100">
                {node.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Booking() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const presetApplianceType = SERVICES.find((service) => service.id === categoryId)?.title;

  return (
    <section id="booking" className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Book Your Appliance Service" />

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <BookingIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <BookingForm presetApplianceType={presetApplianceType} />
        </motion.div>
      </div>
    </section>
  );
}
