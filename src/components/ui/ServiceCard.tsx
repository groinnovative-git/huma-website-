"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ServiceCard({
  icon: Icon,
  title,
  caption,
  items,
  variant = "navigate",
  href = "#",
}: {
  icon: LucideIcon;
  title: string;
  caption: string;
  items?: string[];
  variant?: "navigate" | "book";
  href?: string;
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
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-soft">
        <Icon className="h-6 w-6 text-primary" aria-hidden="true" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-1 text-sm text-muted">{caption}</p>

      {items && items.length > 0 && (
        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-body">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <Link
        href={href}
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
      >
        {variant === "book" ? "Book Service" : "View Services"}
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </motion.div>
  );
}
