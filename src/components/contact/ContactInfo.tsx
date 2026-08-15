"use client";

import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import InfoCard from "./InfoCard";
import WorkshopCard from "./WorkshopCard";

export default function ContactInfo() {
  return (
    <div className="flex flex-col gap-4">
      <InfoCard icon={Phone} title="General Inquiries & Support">
        +971 556371671
      </InfoCard>

      <InfoCard icon={Mail} title="Send Your Inquiry via Email">
        shajuka1970@gmail.com
      </InfoCard>

      <InfoCard icon={FaWhatsapp} iconBg="bg-whatsapp" title="Instant Support via WhatsApp">
        <a
          href="https://wa.me/971556371671"
          className="font-medium text-whatsapp hover:underline"
        >
          Chat Now →
        </a>
      </InfoCard>

      <WorkshopCard />
    </div>
  );
}
