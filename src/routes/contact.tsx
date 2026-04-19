import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact ClaimsMitra — Talk to a Claim Expert in 2 Hours" },
      { name: "description", content: "Submit your insurance claim case to ClaimsMitra. Our experts review every case within 2 working hours. Call 1800-123-456." },
      { property: "og:title", content: "Contact ClaimsMitra" },
      { property: "og:description", content: "We respond within 2 working hours. Call, email or submit your case online." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-hero pt-16 md:pt-24 pb-6">
        <div className="container-page max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-balance">
            Let's get your claim resolved.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Share a few details. A claims expert will reach out within 2 working hours.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
