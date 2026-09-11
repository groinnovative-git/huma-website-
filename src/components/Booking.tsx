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

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative min-h-[300px] lg:min-h-[420px] overflow-hidden rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none bg-white"
        >
          <Image
            src="/hoemcontactimg.png"
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
        >
          <BookingForm presetApplianceType={presetApplianceType} cardClassName="rounded-b-2xl rounded-t-none lg:rounded-r-2xl lg:rounded-l-none h-full" />
        </motion.div>
      </div>
    </section>
  );
}

