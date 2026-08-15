"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Wrench, Heart } from "lucide-react";
import FeatureCard from "../ui/FeatureCard";

const values = [
  {
    icon: BadgeCheck,
    title: "Reliability",
    description:
      "Our clients depend on us for consistency. We provide transparent timelines and guaranteed results that stand the test of time.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    description:
      "Continuous training keeps our technicians skilled in both classic electronics and modern smart appliances.",
  },
  {
    icon: Heart,
    title: "Satisfaction",
    description:
      "The job isn't finished until you are completely satisfied. We pride ourselves on clear communication and empathetic service.",
  },
];

export default function MissionValues() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-2xl text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Mission &amp; Values
        </h2>
        <p className="mt-2 text-sm font-semibold text-primary">The Core</p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {values.map((value) => (
          <FeatureCard key={value.title} {...value} iconTile />
        ))}
      </div>
    </section>
  );
}
