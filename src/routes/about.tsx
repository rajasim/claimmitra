import { createFileRoute } from "@tanstack/react-router";
import { TrustSection } from "@/components/site/TrustSection";
import { WhyUs } from "@/components/site/WhyUs";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About ClaimsMitra — India's Trusted Claim Resolution Partner" },
      { name: "description", content: "We're an independent team of insurance, legal and ombudsman experts helping Indian policyholders win the claims they deserve." },
      { property: "og:title", content: "About ClaimsMitra" },
      { property: "og:description", content: "Independent. Regulated. Relentless. Meet the team behind 12,400+ resolved claims." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="bg-hero pt-16 md:pt-24 pb-10">
        <div className="container-page max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">About us</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-balance">
            Built by insurance insiders. <span className="italic text-accent">For everyone else.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">
            ClaimsMitra was founded by ex-insurance executives, claim adjusters and legal
            professionals who saw too many honest policyholders lose to opaque processes.
            We exist to level the playing field — one resolved claim at a time.
          </p>
        </div>
      </section>
      <TrustSection />
      <WhyUs />
      <ContactSection />
    </>
  );
}
