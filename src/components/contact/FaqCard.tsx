"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export default function FaqCard({
  icon: Icon,
  question,
  answer,
}: {
  icon: LucideIcon;
  question: string;
  answer: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
      <h3 className="mt-4 text-base font-semibold text-ink">{question}</h3>
      <p className="mt-2 text-sm text-body">{answer}</p>
    </motion.div>
  );
}
