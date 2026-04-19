import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { TrustSection } from "@/components/site/TrustSection";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { WhyUs } from "@/components/site/WhyUs";
import { KnowledgeHub } from "@/components/site/KnowledgeHub";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <WhyUs />
      <KnowledgeHub />
      <ContactSection />
    </>
  );
}
