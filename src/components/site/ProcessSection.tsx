import { FileText, ScanSearch, CheckCheck, Receipt, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";

const steps = [
  { Icon: FileText, title: "Submit your case", desc: "Share your claim details and documents in 5 minutes." },
  { Icon: ScanSearch, title: "Document review", desc: "Our experts audit your policy, denial letter and paperwork." },
  { Icon: CheckCheck, title: "Case acceptance", desc: "We accept only cases with a strong recovery probability." },
  { Icon: Receipt, title: "Registration fee", desc: "A small flat fee — refunded if we don't pursue the case." },
  { Icon: Trophy, title: "Resolution", desc: "We negotiate, escalate and recover. You get paid." },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.2em] text-accent">How it works</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
              From frustration to resolution — in 5 steps.
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 relative">
          <div className="hidden md:block absolute top-7 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <ol className="grid md:grid-cols-5 gap-10 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100}>
                <li className="text-center md:text-left">
                  <div className="relative mx-auto md:mx-0 h-14 w-14 rounded-2xl bg-navy text-primary-foreground grid place-items-center shadow-soft">
                    <s.Icon className="h-6 w-6" />
                    <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-accent text-accent-foreground text-xs font-semibold grid place-items-center">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
