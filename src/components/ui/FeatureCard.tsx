"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export default function FeatureCard({
  icon: Icon,
  title,
  description,
  iconTile = false,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  iconTile?: boolean;
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
      {iconTile ? (
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
          <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
        </div>
      ) : (
        <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
      )}
      <h3 className="mt-4 text-base font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-muted">{description}</p>
    </motion.div>
  );
}
