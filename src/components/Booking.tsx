"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { SERVICES } from "@/lib/services";
import SectionHeading from "./ui/SectionHeading";
import BookingForm from "./BookingForm";

export default function Booking() {
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("category");
  const presetApplianceType = SERVICES.find((service) => service.id === categoryId)?.title;

  return (
    <section id="booking" className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Book Your Appliance Service" />

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-border overflow-hidden bg-surface-alt shadow-sm">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[300px] lg:min-h-full bg-[#0a0a1a]"
        >
          <Image
            src="/Assest/contact image.png"
            alt="Huma Electronics services overview"
            fill
            className="object-contain p-4"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <BookingForm presetApplianceType={presetApplianceType} cardClassName="h-full border-0 rounded-none bg-transparent" />
        </motion.div>
      </div>
    </section>
  );
}

