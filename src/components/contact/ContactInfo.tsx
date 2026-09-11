"use client";

import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { PHONE_DISPLAY, EMAIL, WHATSAPP_HREF } from "@/lib/contact";
import InfoCard from "./InfoCard";
import WorkshopCard from "./WorkshopCard";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <InfoCard icon={Phone} title="General Inquiries & Support">
        {PHONE_DISPLAY}
      </InfoCard>

      <InfoCard icon={Mail} title="Send Your Inquiry via Email">
        {EMAIL}
      </InfoCard>

      <InfoCard icon={FaWhatsapp} iconBg="bg-whatsapp" title="Instant Support via WhatsApp">
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-whatsapp hover:underline"
        >
          Chat Now →
        </a>
      </InfoCard>

      <WorkshopCard />
    </div>
  );
}
