import { Suspense } from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ServicesHero from "@/components/services/Hero";
import ExpertRepairSolutions from "@/components/services/ExpertRepairSolutions";
import ServicesCatalog from "@/components/services/ServicesCatalog";
import ServiceBeyondExpectations from "@/components/services/ServiceBeyondExpectations";
import CtaBanner from "@/components/services/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Huma Electronics",
  description:
    "Expert restoration for premium electronics — TV & display repair, audio & hi-fi service, and premium appliance repair, backed by certified technicians and comprehensive warranty coverage.",
};

export default function ServicesPage() {
  return (
    <>
      <Header active="services" />
      <main>
        <ServicesHero />
        <ExpertRepairSolutions />
        <Suspense fallback={null}>
          <ServicesCatalog />
        </Suspense>
        <ServiceBeyondExpectations />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
