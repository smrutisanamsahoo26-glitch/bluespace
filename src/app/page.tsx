import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { Intro } from "@/components/sections/intro";
import { ServicesSummary } from "@/components/sections/services-summary";
import { WhyUs } from "@/components/sections/why-us";
import { ContactCTA } from "@/components/sections/contact-cta";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover how BlueSpace renovates campuses and equips institutions with modern hardware.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <ServicesSummary />
      <WhyUs />
      <ContactCTA />
    </>
  );
}
