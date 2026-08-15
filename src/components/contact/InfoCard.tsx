"use client";

import type { ReactNode, ComponentType } from "react";
import { motion } from "framer-motion";

export default function InfoCard({
  icon: Icon,
  iconBg = "bg-primary",
  title,
  children,
}: {
  icon: ComponentType<{ className?: string }>;
  iconBg?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      className="flex items-start gap-4 rounded-2xl bg-primary-soft p-5 shadow-sm transition-shadow hover:shadow-md"
    >
      <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg} text-white`}>
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <p className="text-sm font-semibold text-ink">{title}</p>
        <div className="mt-1 text-sm text-body">{children}</div>
      </div>
    </motion.div>
  );
}
