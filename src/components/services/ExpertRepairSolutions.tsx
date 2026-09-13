"use client";

import SectionHeading from "../ui/SectionHeading";
import SolutionCard from "./SolutionCard";

const solutions = [
  {
    id: "tv",
    title: "TV & Display Solutions",
    image: "/Rectangle%20497.png",
    alt: "Technician working on a TV circuit board at a workbench",
    items: [
      "LED, OLED & QLED Screens",
      "Smart TV Mainboards",
      "Panel Backlight Restoration",
      "Home Cinema Projectors",
    ],
  },
  {
    id: "audio",
    title: "Audio & Hi-Fi Sound",
    image: "/Rectangle%20498.png",
    alt: "Glowing vacuum tubes on an audio amplifier circuit board",
    items: [
      "Home Theater Systems",
      "Professional Amplifiers",
      "Smart Multi-room Speakers",
      "Vintage Hi-Fi Restoration",
    ],
  },
  {
    id: "appliances",
    title: "Premium Appliances",
    image: "/Rectangle%20499.png",
    alt: "Modern living room and kitchen with premium home appliances",
    items: [
      "Microwave & Induction Ovens",
      "Built-in Dishwashers",
    ],
  },
];

export default function ExpertRepairSolutions() {
  return (
    <section id="solutions" className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading title="Expert Repair Solutions" />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map(({ id, ...solution }) => (
          <SolutionCard key={id} {...solution} />
        ))}
      </div>
    </section>
  );
}
