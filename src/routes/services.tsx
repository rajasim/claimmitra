import { createFileRoute, Link } from "@tanstack/react-router";
import { ServicesSection } from "@/components/site/ServicesSection";
import { ProcessSection } from "@/components/site/ProcessSection";
import { ContactSection } from "@/components/site/ContactSection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Rejected, Delayed & Short-Settled Claims | ClaimsMitra" },
      { name: "description", content: "We resolve rejected, delayed and short-settled insurance claims across health, motor and life insurance — for policyholders across India." },
      { property: "og:title", content: "Insurance Claim Resolution Services — ClaimsMitra" },
      { property: "og:description", content: "Real experts. No upfront charges. Pay only when we recover." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-hero pt-16 md:pt-24 pb-10">
        <div className="container-page text-center max-w-3xl mx-auto animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Our services</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-balance">
            We fight every kind of claim dispute.
          </h1>
          <p className="mt-5 text-muted-foreground text-balance">
            From health to motor to life insurance — if your claim has been rejected, delayed or
            short-settled, we have a specialist team for it.
          </p>
          <Button asChild className="mt-7 rounded-full bg-navy text-primary-foreground">
            <Link to="/contact">Start your case <ArrowRight className="h-4 w-4 ml-1" /></Link>
          </Button>
        </div>
      </section>
      <ServicesSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
