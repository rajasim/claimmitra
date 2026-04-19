import { Counter } from "./Counter";
import { Reveal } from "./Reveal";
import t1 from "@/assets/t1.jpg";
import t2 from "@/assets/t2.jpg";
import t3 from "@/assets/t3.jpg";
import { Star, Quote } from "lucide-react";

const stats = [
  { label: "Claims resolved", value: 12400, suffix: "+" },
  { label: "Recovered for clients", prefix: "₹", value: 184, suffix: " Cr+" },
  { label: "Happy customers", value: 9800, suffix: "+" },
  { label: "Success rate", value: 92, suffix: "%" },
];

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Health insurance · Mumbai",
    img: t1,
    quote:
      "My ₹3.2L hospital claim was rejected twice. ClaimsMitra fought it and got the full amount in 5 weeks. Worth every rupee.",
  },
  {
    name: "Anita Sharma",
    role: "Motor insurance · Pune",
    img: t2,
    quote:
      "I had given up after 6 months of follow-ups. Their team handled everything — paperwork, calls, the lot. Settled.",
  },
  {
    name: "Vikram Iyer",
    role: "Life insurance · Bengaluru",
    img: t3,
    quote:
      "They explained every step clearly. No jargon, no fake promises. The recovery happened exactly as they said.",
  },
];

export function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container-page">
        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pb-16 border-b border-border">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl md:text-5xl font-medium tracking-tight">
                  <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-20">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.2em] text-accent">Real outcomes</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
                Stories from people we stood by.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <article className="h-full bg-card border border-border rounded-3xl p-7 shadow-soft hover:shadow-elevated transition-shadow">
                  <Quote className="h-6 w-6 text-accent" />
                  <p className="mt-4 text-foreground/90 leading-relaxed">"{t.quote}"</p>
                  <div className="mt-6 flex items-center gap-3">
                    <img src={t.img} alt={t.name} width={48} height={48} loading="lazy"
                      className="h-12 w-12 rounded-full object-cover" />
                    <div>
                      <div className="font-medium text-sm">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                    <div className="ml-auto flex">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-6 items-center opacity-70">
              {["IRDAI", "ISO 27001", "NPCI", "DPIIT", "Razorpay Verified"].map((b) => (
                <div key={b} className="text-center text-xs sm:text-sm font-medium tracking-wider text-muted-foreground border border-border rounded-xl py-3">
                  {b}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
