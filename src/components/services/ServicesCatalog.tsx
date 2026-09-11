"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SERVICES } from "@/lib/services";
import { SERVICE_ICONS } from "@/lib/service-icons";
import SectionHeading from "../ui/SectionHeading";
import ServiceCard from "../ui/ServiceCard";

export default function ServicesCatalog() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  useEffect(() => {
    if (!categoryParam) return;
    const match = SERVICES.find((service) => service.id === categoryParam);
    if (!match) return;

    const el = document.getElementById(categoryParam);
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });

    const showTimer = setTimeout(() => setHighlightedId(categoryParam), 0);
    const hideTimer = setTimeout(() => setHighlightedId(null), 2000);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [categoryParam]);

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
            id={service.id}
            icon={SERVICE_ICONS[service.icon]}
            title={service.title}
            caption={service.subtitle}
            items={service.details}
            variant="book"
            href={`/?category=${service.id}#booking`}
            highlighted={service.id === highlightedId}
          />
        ))}
      </div>
    </section>
  );
}
