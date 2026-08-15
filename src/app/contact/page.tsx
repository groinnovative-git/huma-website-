import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/Hero";
import ContactSection from "@/components/contact/ContactSection";
import FaqSection from "@/components/contact/FaqSection";
import MapSection from "@/components/contact/MapSection";

export const metadata: Metadata = {
  title: "Contact | Huma Electronics",
  description:
    "Book a technical expert, chat with us on WhatsApp, or visit the Huma Electronics workshop in Bur Dubai for premium electronics repair and diagnostics.",
};

export default function ContactPage() {
  return (
    <>
      <Header active="contact" />
      <main>
        <ContactHero />
        <ContactSection />
        <FaqSection />
        <MapSection />
      </main>
      <Footer />
    </>
  );
}
