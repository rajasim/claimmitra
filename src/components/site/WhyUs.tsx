import { Scale, HeartHandshake, Wallet, Lock } from "lucide-react";
import { Reveal } from "./Reveal";

const points = [
  { Icon: Scale, title: "Insurance experts, not call centres", desc: "Ex-insurance, legal & ombudsman professionals review every case." },
  { Icon: Wallet, title: "No upfront charges", desc: "Pay only a small registration fee. Bulk fee is success-based." },
  { Icon: HeartHandshake, title: "Customer-first approach", desc: "One dedicated case manager. Real-time updates on WhatsApp." },
  { Icon: Lock, title: "Bank-grade data security", desc: "ISO 27001 processes. Your documents stay private — always." },
];

export function WhyUs() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-page grid lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Why ClaimsMitra</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
              We work for you.<br />Not the insurer.
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
              We're the team you call when the system says no. Independent, regulated, and
              relentless about getting you what you're owed.
            </p>
          </Reveal>
        </div>

        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="h-full bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <div className="h-10 w-10 rounded-xl bg-primary-soft text-primary grid place-items-center">
                  <p.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
