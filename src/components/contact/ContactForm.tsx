"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Wrench, User, Phone, Mail, Monitor, FileText, ArrowRight, Loader2, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "@/lib/services";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_CONTACT,
  EMAILJS_TEMPLATE_AUTOREPLY,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/emailjs";

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

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    appliance: "",
    description: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    if (!form.fullName || !form.phone) return;

    setStatus("sending");
    try {
      // Match your EmailJS template variables exactly
      const templateParams = {
        name: form.fullName,
        phone: form.phone,
        email: form.email,
        service: form.appliance || "Not specified",
        message: form.description || "No description provided",
        reply_to: form.email,
      };

      // Send main contact email
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_CONTACT,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Send auto-reply to customer (needs their email)
      if (form.email) {
        try {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_AUTOREPLY,
            templateParams,
            EMAILJS_PUBLIC_KEY
          );
        } catch {
          // Auto-reply is optional
        }
      }

      setStatus("sent");
      setForm({ fullName: "", email: "", phone: "", appliance: "", description: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  const isSending = status === "sending";

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
          <FieldLabel icon={Mail} htmlFor="contact-email">
            Email
          </FieldLabel>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
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

      {status === "sent" && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2.5 text-sm font-medium text-green-700">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Request sent! We&apos;ll get back to you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          Something went wrong. Please try again.
        </div>
      )}

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSending}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary-dark px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-primary active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSending ? (
          <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        )}
        {isSending ? "Sending..." : "Send Repair Request"}
      </button>
    </motion.div>
  );
}
