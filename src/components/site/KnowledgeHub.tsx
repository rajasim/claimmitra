import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

type Post = {
  tag: string;
  title: string;
  read: string;
  preview: string;
  content: { heading?: string; body: string }[];
};

const posts: Post[] = [
  {
    tag: "Health",
    title: "Why health insurance claims get rejected — and how to fight back",
    read: "6 min",
    preview:
      "From pre-existing disease clauses to missing documents, here are the real reasons insurers reject health claims — and the exact steps to overturn them.",
    content: [
      {
        body: "Every year, thousands of policyholders are stunned when their health insurance claim — the very reason they bought a policy — is rejected. The rejection letter usually arrives in dense legal language, leaving families confused and financially exposed at the worst possible time.",
      },
      {
        heading: "The most common reasons insurers reject health claims",
        body: "Pre-existing disease (PED) clauses are the single biggest reason. Insurers argue that the illness existed before the policy was bought, even when the link is weak. Other frequent reasons include non-disclosure on the proposal form, treatment at a non-network hospital without intimation, missing investigation reports, and waiting-period violations for specific procedures.",
      },
      {
        heading: "What to do the moment you receive a rejection",
        body: "Do not accept the first 'No'. Request the detailed rejection note in writing and ask for the clause number relied upon. Insurers are bound by IRDAI rules to give a clear, clause-wise reason. Once you have it, you can challenge each ground specifically rather than arguing in general terms.",
      },
      {
        heading: "Building a strong appeal",
        body: "Collect the original policy wording, the discharge summary, all diagnostic reports, and the doctor's certificate explaining the cause and timeline of the illness. A treating doctor's note clarifying that the condition is not pre-existing carries significant weight. File a written representation with the insurer's grievance officer first — most insurers must respond within 14 days.",
      },
      {
        heading: "When to escalate",
        body: "If the grievance officer does not resolve it, escalate to the Insurance Ombudsman, which is free and binding on the insurer up to ₹50 lakh. For larger claims or complex disputes, consumer courts and the IRDAI's integrated grievance system (IGMS) are the next steps. Most genuine claims that look 'lost' are actually winnable at this stage with the right paperwork.",
      },
    ],
  },
  {
    tag: "Motor",
    title: "Short settlement in motor claims: what insurers don't tell you",
    read: "4 min",
    preview:
      "Surveyors often approve only a fraction of the actual repair cost. Learn how depreciation, salvage value, and 'consumables' quietly shrink your payout.",
    content: [
      {
        body: "You file a motor claim for ₹80,000 of damage and the insurer sanctions ₹38,000. This is called a 'short settlement', and it is far more common than outright rejection. Most car owners accept it because they do not know it can be challenged.",
      },
      {
        heading: "Where the deductions come from",
        body: "Three quiet line-items eat into your payout: depreciation on plastic, rubber and metal parts; the cost of 'consumables' like nuts, bolts, grease and coolant (unless you bought a consumables add-on); and salvage value of the damaged parts that the surveyor estimates the garage can re-sell.",
      },
      {
        heading: "How to push back",
        body: "Always ask for the surveyor's report — you are entitled to it. Cross-check each deduction line against your policy schedule. If you have a zero-depreciation cover, no part-rate depreciation should apply. Get a written estimate from an authorised workshop and submit it as evidence of the true repair cost.",
      },
      {
        heading: "When to escalate",
        body: "If the gap is significant, file a written grievance citing the policy clauses and surveyor's deductions. Motor short-settlement disputes are among the most successful at the Insurance Ombudsman because the math is objective and easy to prove.",
      },
    ],
  },
  {
    tag: "Life",
    title: "A step-by-step guide to filing a life insurance claim dispute",
    read: "8 min",
    preview:
      "Death claims are emotionally hard and procedurally tricky. This guide walks nominees through every document, deadline and escalation route.",
    content: [
      {
        body: "Filing a life insurance claim during grief is brutal. Insurers know this, and the paperwork can feel designed to wear nominees down. Here is the cleanest path to a fair settlement.",
      },
      {
        heading: "Documents you must gather first",
        body: "Original policy document, death certificate from the municipal authority, claim form (Form A), nominee's KYC and bank details, and the medical cause-of-death certificate. For accidental or unnatural deaths, add the FIR, post-mortem report and police final report.",
      },
      {
        heading: "Early-claim scrutiny",
        body: "Claims filed within 3 years of policy issuance face deeper scrutiny under Section 45 of the Insurance Act. Insurers can investigate the proposal form and reject for non-disclosure. After 3 years, the policy becomes incontestable except in cases of proven fraud.",
      },
      {
        heading: "If the claim is repudiated",
        body: "Demand the full investigation report and the specific clause invoked. Most repudiations are based on alleged non-disclosure of medical history. Counter with treating doctors' records that show the timeline. If the insurer cannot prove the policyholder knew about the condition before signing, the rejection usually does not hold.",
      },
      {
        heading: "Escalation timeline",
        body: "Step 1: Internal grievance officer (14 days). Step 2: Insurance Ombudsman, free and binding up to ₹50 lakh (typically 3–6 months). Step 3: Consumer Forum or civil court for higher amounts. Keep every email and acknowledgement — paper trails win cases.",
      },
    ],
  },
  {
    tag: "Claims",
    title: "What to do if your insurance claim is delayed",
    read: "5 min",
    preview:
      "IRDAI has strict timelines for claim settlement. If your insurer is dragging its feet, you have more leverage than you think — including interest on the delay.",
    content: [
      {
        body: "Insurers are not allowed to sit on claims indefinitely. IRDAI's Protection of Policyholders' Interests rules set firm timelines, and breaching them entitles you to interest at 2% above the bank rate.",
      },
      {
        heading: "The official timelines",
        body: "Health claims: settled or rejected within 30 days of receiving the last document. Motor claims: surveyor must inspect within 48 hours, report within 15 days, settlement within 30 days of report. Life claims: 30 days for documented claims, up to 120 days if investigation is needed.",
      },
      {
        heading: "Triggering the delay clause",
        body: "Send a written email to the insurer marking the date you submitted the last document. If they cross the timeline, send a follow-up quoting Regulation 9 of IRDAI (Protection of Policyholders' Interests) Regulations, 2017, and demand interest on the delayed amount.",
      },
      {
        heading: "Escalation that actually works",
        body: "File a complaint on IRDAI's Bima Bharosa portal (formerly IGMS). It generates a token number the insurer must respond to. In our experience, 60% of stuck claims move within two weeks of an IGMS complaint being raised.",
      },
    ],
  },
  {
    tag: "Policy",
    title: "Common mistakes people make while buying an insurance policy",
    read: "5 min",
    preview:
      "Most claim rejections are caused at the time of buying, not at the time of claiming. Avoid these six mistakes before you sign the proposal form.",
    content: [
      {
        body: "Insurers love to say 'insurance is a contract of utmost good faith'. In practice, this means any small mistake on the proposal form can be used against you years later. Here is what to watch for before you sign.",
      },
      {
        heading: "1. Letting an agent fill the form for you",
        body: "Agents often tick 'No' on every health question to push the policy through. When a claim arises, the insurer compares your medical records and rejects for non-disclosure. Always fill the form yourself, even if it takes longer.",
      },
      {
        heading: "2. Hiding pre-existing conditions",
        body: "Disclose every diagnosed condition, surgery and regular medication — even if the agent says it 'doesn't matter'. The waiting period is far less painful than a rejected claim a decade later.",
      },
      {
        heading: "3. Ignoring sub-limits and co-pay",
        body: "A ₹10 lakh policy with a 1% room rent sub-limit and 20% co-pay can pay out half of what you expect. Read the policy schedule, not just the brochure.",
      },
      {
        heading: "4. Not checking the network hospital list",
        body: "Cashless only works at network hospitals. Confirm your preferred hospitals are on the list before buying — networks shrink and grow every year.",
      },
      {
        heading: "5. Skipping the free-look period",
        body: "You have 15–30 days to read the actual policy document and cancel for a full refund. Use it. The brochure and the contract are not the same thing.",
      },
    ],
  },
  {
    tag: "Motor",
    title: "Motor insurance claim process: a no-jargon walkthrough",
    read: "6 min",
    preview:
      "From the accident scene to the cashless garage, here is exactly what to do in the first 24 hours to protect your motor claim.",
    content: [
      {
        body: "Most motor claim disputes are decided in the first 24 hours after the accident. What you photograph, who you call, and what you write down can mean the difference between a smooth payout and months of arguing.",
      },
      {
        heading: "At the accident scene",
        body: "Move to safety first. Photograph the vehicles in their original position, the number plates, the surroundings and any injuries. Do not admit fault, even informally — your policy can be voided. Exchange details with the other driver: name, phone, vehicle number, insurer.",
      },
      {
        heading: "Intimate the insurer immediately",
        body: "Call the insurer's 24x7 helpline within 24 hours and get a claim reference number. Delayed intimation is a top reason for rejection. For third-party injury or any death, an FIR is mandatory.",
      },
      {
        heading: "Cashless vs reimbursement",
        body: "Cashless: tow the car to a network garage; the insurer settles directly. Reimbursement: you pay first and claim later. Cashless is faster but the surveyor's estimate decides the repair scope. Stay involved — ask the workshop to share the estimate before work begins.",
      },
      {
        heading: "Settlement and paperwork",
        body: "After repair, sign the satisfaction note only after inspecting the work. Keep copies of the surveyor's report, repair invoice, payment receipt and claim discharge voucher. If anything looks short, raise it before signing — once the discharge voucher is signed 'in full and final', reopening the claim is hard.",
      },
    ],
  },
  {
    tag: "Policy",
    title: "How to check your policy for hidden errors before a claim arises",
    read: "4 min",
    preview:
      "A 10-minute audit of your policy schedule today can save a rejected claim tomorrow. Here is the checklist we use for every client.",
    content: [
      {
        body: "Most people file their policy document away and never read it. Then, at claim time, they discover a typo in the date of birth or a wrong nominee. Five minutes a year prevents most of these disasters.",
      },
      {
        heading: "Verify your personal details",
        body: "Name spelling, date of birth, gender, address and contact number. A mismatch with your KYC documents can stall a claim. If anything is wrong, file an endorsement request immediately — it is free.",
      },
      {
        heading: "Check the nominee section",
        body: "Confirm the nominee's name, relationship and percentage share. After marriage, divorce, or the birth of a child, update the nominee in writing. An outdated nominee causes some of the ugliest claim disputes.",
      },
      {
        heading: "Read the schedule of benefits",
        body: "Sum insured, room rent limits, co-pay, sub-limits for specific procedures, and the list of permanent exclusions. If your policy excludes something you assumed was covered, you have time to switch or buy a rider before a claim arises.",
      },
      {
        heading: "Confirm premium and renewal date",
        body: "A lapsed policy has no claim value. Set a calendar reminder 30 days before renewal. For health policies, continuous renewal also protects your accumulated waiting periods and no-claim bonus.",
      },
    ],
  },
  {
    tag: "Health",
    title: "How to fight a rejected health claim — without going to court",
    read: "5 min",
    preview:
      "Most rejected claims are won at the grievance and Ombudsman stage, not in court. Here is the exact escalation ladder and what to send at each step.",
    content: [
      {
        body: "Going to court should be the last option, not the first. The Indian insurance grievance system, when used correctly, resolves the majority of disputes within 90 days at zero cost.",
      },
      {
        heading: "Step 1 — Insurer's grievance officer",
        body: "Every insurer must publish a grievance officer's name, email and phone. Send a clear, dated representation: policy number, claim number, what was claimed, what was rejected, and the specific clause-wise rebuttal. Attach all supporting documents. The insurer must respond within 14 days.",
      },
      {
        heading: "Step 2 — IRDAI Bima Bharosa portal",
        body: "If unresolved, file on bimabharosa.irdai.gov.in. This generates a token the insurer is regulator-bound to address. It also creates a public paper trail that strengthens later escalation.",
      },
      {
        heading: "Step 3 — Insurance Ombudsman",
        body: "Free, binding on the insurer up to ₹50 lakh, no lawyer required. File Form P-II with copies of the policy, claim form, rejection letter and your representation. Hearings are informal and most cases close in 3–6 months.",
      },
      {
        heading: "Step 4 — Consumer Forum",
        body: "For claims above ₹50 lakh or where the Ombudsman award is unsatisfactory, the District/State Consumer Commission is the next step. Awards often include compensation for mental harassment plus interest, but timelines are longer.",
      },
      {
        heading: "What makes appeals succeed",
        body: "Specificity wins. Quote the policy clause, attach the medical evidence that contradicts the insurer's reason, and stick to facts. Emotional letters are easy to dismiss; clause-by-clause rebuttals are not.",
      },
    ],
  },
];

const faqs = [
  {
    q: "Do I pay anything before my claim is recovered?",
    a: "Only a small case-registration fee after we accept your case. Our main fee is success-based — paid only when you receive your money.",
  },
  {
    q: "How long does claim resolution take?",
    a: "Most cases are resolved in 4–10 weeks depending on the insurer, claim type and stage of grievance.",
  },
  {
    q: "What documents do I need to share?",
    a: "Your policy document, claim form, denial letter (if any), medical/incident records, and ID proof. We handle the rest.",
  },
  {
    q: "Is ClaimsMitra an insurance company?",
    a: "No. We're an independent claims-resolution firm working for policyholders against insurers.",
  },
];

export function KnowledgeHub() {
  const [active, setActive] = useState<Post | null>(null);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Knowledge hub</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
                Know your rights as a policyholder.
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Plain-English guides written by claims experts. No jargon, no sales — just what to do when an insurer says no.
              </p>
            </div>
            <Link to="/knowledge" className="text-sm font-medium underline-offset-4 hover:underline">
              Browse all guides →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {posts.slice(0, 4).map((p, i) => (
              <Reveal key={p.title} delay={i * 70}>
                <button
                  onClick={() => setActive(p)}
                  className="group text-left block h-full w-full rounded-3xl border border-border bg-card overflow-hidden hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                >
                  <div className="h-40 bg-navy relative overflow-hidden">
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle at 30% 30%, oklch(0.7 0.14 165 / 0.6), transparent 60%)",
                      }}
                    />
                    <span className="absolute top-4 left-4 text-[10px] tracking-[0.18em] uppercase text-white/80 px-2 py-1 rounded-full bg-white/10 backdrop-blur">
                      {p.tag}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-lg leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                      {p.preview}
                    </p>
                    <div className="mt-4 flex items-center justify-between">
                      <p className="text-xs text-muted-foreground">{p.read} read</p>
                      <span className="text-xs font-medium text-primary group-hover:translate-x-0.5 transition-transform">
                        Read more →
                      </span>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <div className="lg:col-span-5">
            <Reveal>
              <div className="bg-card border border-border rounded-3xl p-7">
                <h3 className="font-display text-2xl">Frequently asked</h3>
                <Accordion type="single" collapsible className="mt-4">
                  {faqs.map((f, i) => (
                    <AccordionItem key={i} value={`f-${i}`}>
                      <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {f.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </Reveal>
          </div>
        </div>

        {/* More guides */}
        <div className="mt-12">
          <Reveal>
            <h3 className="font-display text-2xl md:text-3xl">More guides</h3>
          </Reveal>
          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {posts.slice(4).map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <button
                  onClick={() => setActive(p)}
                  className="group text-left h-full w-full rounded-2xl border border-border bg-card p-5 hover:shadow-elevated hover:-translate-y-0.5 transition-all"
                >
                  <span className="text-[10px] tracking-[0.18em] uppercase text-accent">
                    {p.tag}
                  </span>
                  <h4 className="mt-2 font-display text-base leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h4>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3">
                    {p.preview}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">{p.read} read</p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-2xl p-0 overflow-hidden rounded-2xl">
          {active && (
            <>
              <DialogHeader className="px-6 md:px-8 pt-8 pb-4 border-b border-border">
                <span className="text-[10px] tracking-[0.18em] uppercase text-accent">
                  {active.tag} · {active.read} read
                </span>
                <DialogTitle className="mt-2 font-display text-2xl md:text-3xl leading-tight text-left">
                  {active.title}
                </DialogTitle>
              </DialogHeader>
              <ScrollArea className="max-h-[70vh]">
                <article className="px-6 md:px-8 py-6 space-y-5">
                  {active.content.map((block, idx) => (
                    <div key={idx}>
                      {block.heading && (
                        <h4 className="font-display text-lg md:text-xl mt-2 mb-2">
                          {block.heading}
                        </h4>
                      )}
                      <p className="text-[15px] leading-relaxed text-foreground/85">
                        {block.body}
                      </p>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Need help with a real case? Our experts can review your documents and tell you, free of charge, whether your claim is recoverable.
                    </p>
                  </div>
                </article>
              </ScrollArea>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
