import { Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesGrid from "@/components/ServicesGrid";
import Expertise from "@/components/Expertise";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Booking from "@/components/Booking";
import GoogleReviews from "@/components/GoogleReviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <Expertise />
        <WhyChooseUs />
        <Process />
        <Suspense fallback={null}>
          <Booking />
        </Suspense>
        <GoogleReviews />
      </main>
      <Footer />
    </>
  );
}
