import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Legacy from "@/components/Legacy";
import AboutHero from "@/components/about/Hero";
import MissionValues from "@/components/about/MissionValues";
import MediaPlaceholder from "@/components/about/MediaPlaceholder";

export const metadata: Metadata = {
  title: "About | Huma Electronics",
  description:
    "Two decades of technical excellence in premium electronics repair — the mission, values, and team behind Huma Electronics.",
};

export default function AboutPage() {
  return (
    <>
      <Header active="about" />
      <main>
        <AboutHero />
        <MissionValues />
        <Legacy />
        <MediaPlaceholder />
      </main>
      <Footer />
    </>
  );
}
