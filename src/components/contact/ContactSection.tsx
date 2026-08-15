"use client";

import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function ContactSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-14 lg:pb-16">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[58%_42%]">
        <ContactForm />
        <ContactInfo />
      </div>
    </section>
  );
}
