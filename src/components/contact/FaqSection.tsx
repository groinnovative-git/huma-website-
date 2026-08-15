"use client";

import { HelpCircle, BadgeCheck, Clock } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FaqCard from "./FaqCard";

const faqs = [
  {
    icon: HelpCircle,
    question: "What is your diagnostic fee?",
    answer:
      "We charge a flat AED 99 for in-home diagnostics, which is fully waived if you proceed with the suggested repair service.",
  },
  {
    icon: BadgeCheck,
    question: "Do you offer a warranty?",
    answer:
      "Warranty applies to eligible products & replacement parts only, subject to the applicable warranty terms and conditions.",
  },
  {
    icon: Clock,
    question: "How fast are repairs?",
    answer:
      "85% of our service requests are resolved within 24 - 48 hours. Genuine spare parts availability is the only factor for rare delays.",
  },
];

export default function FaqSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 py-14 lg:py-16">
      <SectionHeading
        title="Frequently Asked Questions"
        subtitle="Before reaching out, check if your question has already been answered by our technical team."
      />

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        {faqs.map((faq) => (
          <FaqCard key={faq.question} {...faq} />
        ))}
      </div>
    </section>
  );
}
