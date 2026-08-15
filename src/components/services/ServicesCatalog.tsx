"use client";

import { SERVICES } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesCatalog() {
  return (
    <section id="catalog" className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading
        title="Complete Electronics Service & Support"
        subtitle="We offer specialized repair and maintenance across a vast spectrum of consumer electronics and domestic appliances."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard
            key={service.id}
            icon={SERVICE_ICONS[service.icon]}
            title={service.title}
            caption={service.subtitle}
            items={service.details}
            variant="book"
            href={`/?category=${service.id}#booking`}
          />
        ))}
      </div>
    </section>
  );
}
