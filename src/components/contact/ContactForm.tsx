"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, User, Phone, Monitor, FileText, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/services";

function FieldLabel({
  icon: Icon,
  htmlFor,
  children,
}: {
  icon: LucideIcon;
  htmlFor: string;
  children: string;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-muted"
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      {children}
    </label>
  );
}

const fieldClassName =
  "mt-1.5 w-full rounded-lg border-0 bg-[#F1F5F9] px-3.5 py-2.5 text-sm text-ink outline-none ring-1 ring-transparent focus:ring-primary";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    appliance: "",
    description: "",
  });

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit() {
    // TODO: wire up to booking/support API endpoint
    console.log("Send repair request", form);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-border bg-surface p-6 shadow-sm sm:p-8"
    >
      <div className="flex items-center gap-4">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white">
          <Wrench className="h-6 w-6" aria-hidden="true" />
        </span>
        <div>
          <p className="text-lg font-semibold text-ink">Book a Technical Expert</p>
          <p className="text-sm text-muted">Fast-track repair scheduling</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <FieldLabel icon={User} htmlFor="contact-fullName">
            Full Name
          </FieldLabel>
          <input
            id="contact-fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className={fieldClassName}
          />
        </div>
        <div>
          <FieldLabel icon={Phone} htmlFor="contact-phone">
            Phone Number
          </FieldLabel>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className={fieldClassName}
          />
        </div>

        <div className="sm:col-span-2">
          <FieldLabel icon={Monitor} htmlFor="contact-appliance">
            Select Appliance
          </FieldLabel>
          <select
            id="contact-appliance"
            value={form.appliance}
            onChange={(e) => handleChange("appliance", e.target.value)}
            className={fieldClassName}
          >
            <option value="">Choose an appliance</option>
            {SERVICES.map((service) => (
              <option key={service.id} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <FieldLabel icon={FileText} htmlFor="contact-description">
            Problem Description
          </FieldLabel>
          <textarea
            id="contact-description"
            rows={5}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className={`${fieldClassName} resize-none`}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-dark px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary active:scale-[0.99]"
      >
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
        Send Repair Request
      </button>
    </motion.div>
  );
}
