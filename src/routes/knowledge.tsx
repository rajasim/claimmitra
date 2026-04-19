import { createFileRoute } from "@tanstack/react-router";
import { KnowledgeHub } from "@/components/site/KnowledgeHub";
import { ContactSection } from "@/components/site/ContactSection";

export const Route = createFileRoute("/knowledge")({
  head: () => ({
    meta: [
      { title: "Knowledge Hub — Insurance Claim Guides & FAQs | ClaimsMitra" },
      { name: "description", content: "Guides, explainers and FAQs to help you understand insurance claims, rejections, delays, and how to get your rightful settlement." },
      { property: "og:title", content: "Insurance Claim Knowledge Hub — ClaimsMitra" },
      { property: "og:description", content: "Know your rights. Read guides on rejections, delays and short settlements." },
    ],
  }),
  component: KnowledgePage,
});

function KnowledgePage() {
  return (
    <>
      <section className="bg-hero pt-16 md:pt-24 pb-6">
        <div className="container-page max-w-3xl animate-fade-up">
          <p className="text-xs uppercase tracking-[0.2em] text-accent">Knowledge hub</p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl text-balance">
            Plain-English answers about your claim.
          </h1>
        </div>
      </section>
      <KnowledgeHub />
      <ContactSection />
    </>
  );
}
