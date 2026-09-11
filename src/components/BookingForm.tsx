"use client";

import { useState } from "react";
import { Calendar, MessageCircle, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_CONTACT,
  EMAILJS_TEMPLATE_AUTOREPLY,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/emailjs";
import { WHATSAPP_NUMBER } from "@/lib/contact";
import { SERVICES } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";

export default function BookingForm({
  presetApplianceType,
  cardClassName,
}: {
  presetApplianceType?: string;
  cardClassName?: string;
}) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    applianceType: presetApplianceType ?? "",
    serviceType: "",
    description: "",
  });
  const [appliedPreset, setAppliedPreset] = useState(presetApplianceType);
  const [status, setStatus] = useState<Status>("idle");

  if (presetApplianceType !== appliedPreset) {
    setAppliedPreset(presetApplianceType);
    if (presetApplianceType) {
      setForm((prev) => ({ ...prev, applianceType: presetApplianceType }));
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleBookService() {
    if (!form.fullName || !form.phone) return;

    setStatus("sending");
    try {
      // Match your EmailJS template variables exactly
      const templateParams = {
        name: form.fullName,
        phone: form.phone,
        email: form.email,
        service: [form.applianceType, form.serviceType].filter(Boolean).join(" — ") || "Not specified",
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
      setForm({
        fullName: "",
        email: "",
        phone: "",
        applianceType: "",
        serviceType: "",
        description: "",
      });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  }

  function handleWhatsApp() {
    const text = [
      `Hi, I'd like to book a service.`,
      `Name: ${form.fullName}`,
      `Phone: ${form.phone}`,
      form.email && `Email: ${form.email}`,
      form.applianceType && `Appliance: ${form.applianceType}`,
      form.serviceType && `Service: ${form.serviceType}`,
      form.description && `Issue: ${form.description}`,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  const isSending = status === "sending";

  return (
    <div className={`border border-border bg-surface-alt p-6 sm:p-8 ${cardClassName ?? "rounded-2xl"}`}>
      <h3 className="text-xl font-semibold text-ink">Book your service</h3>
      <p className="mt-1 text-sm text-muted">
        Fill in the details below and our team will get back to you within 24
        hours
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-ink">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            value={form.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => handleChange("phone", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="applianceType" className="text-sm font-medium text-ink">
            Select Appliance
          </label>
          <select
            id="applianceType"
            value={form.applianceType}
            onChange={(e) => handleChange("applianceType", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
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
          <label htmlFor="description" className="text-sm font-medium text-ink">
            Problem Description
          </label>
          <textarea
            id="description"
            rows={4}
            value={form.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="mt-1.5 w-full resize-none rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
        </div>
      </div>

      {status === "sent" && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-green-50 px-4 py-2.5 text-sm font-medium text-green-700">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Booking sent! We&apos;ll contact you shortly.
        </div>
      )}

      {status === "error" && (
        <div className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm font-medium text-red-700">
          Something went wrong. Please try again or WhatsApp us.
        </div>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleBookService}
          disabled={isSending}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSending ? (
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
          ) : (
            <Calendar className="h-4 w-4" aria-hidden="true" />
          )}
          {isSending ? "Sending..." : "Book a service"}
        </button>
        <button
          type="button"
          onClick={handleWhatsApp}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-whatsapp px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-whatsapp-dark active:scale-95"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp us
        </button>
      </div>
    </div>
  );
}
