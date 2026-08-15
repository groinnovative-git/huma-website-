"use client";

import { Headphones, ShieldCheck, Wrench, HeartHandshake } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import FeatureCard from "./ui/FeatureCard";

const features = [
  {
    icon: Headphones,
    title: "Wide Support",
    description: "Comprehensive care for all major brands and models.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Service",
    description: "Consistent, high-quality repairs you can always count on.",
  },
  {
    icon: Wrench,
    title: "Experienced Tech",
    description: "Certified professionals with decades of combined expertise.",
  },
  {
    icon: HeartHandshake,
    title: "Customer First",
    description: "We don't just fix electronics; we solve your problems.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading
        title="Why Choose Huma Electronics?"
        subtitle="Building trust through technical precision and customer-focused service models."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
