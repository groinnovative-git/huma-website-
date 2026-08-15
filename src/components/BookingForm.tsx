"use client";

import { useState } from "react";
import { Calendar, MessageCircle } from "lucide-react";

export default function BookingForm({
  presetApplianceType,
}: {
  presetApplianceType?: string;
}) {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    applianceType: presetApplianceType ?? "",
    serviceType: "",
    description: "",
  });
  const [appliedPreset, setAppliedPreset] = useState(presetApplianceType);

  if (presetApplianceType !== appliedPreset) {
    setAppliedPreset(presetApplianceType);
    if (presetApplianceType) {
      setForm((prev) => ({ ...prev, applianceType: presetApplianceType }));
    }
  }

  function handleChange(field: keyof typeof form, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleBookService() {
    // TODO: wire up to booking API / backend endpoint
    console.log("Book a service", form);
  }

  function handleWhatsApp() {
    // TODO: replace with real WhatsApp business number + prefilled message
    console.log("WhatsApp us", form);
  }

  return (
    <div className="rounded-2xl border border-border bg-surface-alt p-6 sm:p-8">
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
          <label htmlFor="applianceType" className="text-sm font-medium text-ink">
            Appliance Type
          </label>
          <input
            id="applianceType"
            type="text"
            value={form.applianceType}
            onChange={(e) => handleChange("applianceType", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
        </div>
        <div>
          <label htmlFor="serviceType" className="text-sm font-medium text-ink">
            Service Type
          </label>
          <input
            id="serviceType"
            type="text"
            value={form.serviceType}
            onChange={(e) => handleChange("serviceType", e.target.value)}
            className="mt-1.5 w-full rounded-lg border border-border bg-surface px-3.5 py-2.5 text-sm text-ink outline-none focus:border-primary"
          />
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

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={handleBookService}
          className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-dark active:scale-95"
        >
          <Calendar className="h-4 w-4" aria-hidden="true" />
          Book a service
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
