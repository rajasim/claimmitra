import { Link } from "@tanstack/react-router";
import { FileX2, Clock4, IndianRupee, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";

const services = [
  {
    Icon: FileX2,
    title: "Rejected Claims",
    desc: "Denied citing pre-existing conditions, policy clauses, or paperwork? We build a counter-case and represent you.",
    accent: "bg-[oklch(0.95_0.04_25)] text-[oklch(0.45_0.15_25)]",
  },
  {
    Icon: Clock4,
    title: "Delayed Claims",
    desc: "Stuck for weeks with no response? We escalate through grievance channels and IRDAI to force a decision.",
    accent: "bg-warm text-[oklch(0.4_0.12_75)]",
  },
  {
    Icon: IndianRupee,
    title: "Short Settlement",
    desc: "Insurer paid less than approved? We audit deductions, fight unfair cuts and recover the balance.",
    accent: "bg-accent-soft text-[oklch(0.35_0.1_165)]",
  },
];

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-page">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">What we solve</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
                Three problems. One team that fixes them.
              </h2>
            </div>
            <Link to="/services" className="text-sm font-medium underline-offset-4 hover:underline">
              See all services →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <Link
                to="/services"
                className="group block h-full bg-card border border-border rounded-3xl p-7 hover:-translate-y-1 hover:shadow-elevated transition-all duration-300"
              >
                <div className={`h-12 w-12 rounded-2xl grid place-items-center ${s.accent}`}>
                  <s.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Learn more <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
