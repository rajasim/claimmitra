import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ClaimWizard } from "./ClaimWizard";
import heroImg from "@/assets/hero-claims.jpg";

export function Hero() {
  return (
    <section className="relative bg-hero overflow-hidden">
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="container-page relative pt-12 md:pt-20 pb-20 md:pb-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7 animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-card border border-border text-xs">
              <ShieldCheck className="h-3.5 w-3.5 text-accent" />
              IRDAI guidelines · 12,400+ claims resolved
            </span>
            <h1 className="mt-5 font-display font-medium text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-[4.25rem] text-balance">
              Your insurance claim,
              <span className="block">
                <span className="italic text-accent">resolved</span> — not rejected.
              </span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl text-balance">
              ClaimsMitra fights for policyholders when claims get rejected, delayed or
              short-settled. Real experts. No upfront charges. Pay only when we recover.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="rounded-full h-12 px-7 bg-navy text-primary-foreground hover:opacity-90">
                <Link to="/contact">
                  Check Your Claim Now <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-12 px-7">
                <Link to="/services">How it works</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-background bg-secondary"
                    style={{
                      backgroundImage: `linear-gradient(135deg, oklch(0.${60 + i} 0.1 ${i * 80}), oklch(0.${50 + i} 0.12 ${i * 60}))`,
                    }}
                  />
                ))}
              </div>
              <div className="text-sm">
                <div className="flex items-center gap-1 text-foreground">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" />
                  ))}
                  <span className="ml-1 font-medium">4.8 / 5</span>
                </div>
                <span className="text-muted-foreground">from 2,300+ verified clients</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <img
                src={heroImg}
                alt="Claims expert reviewing documents"
                width={1280}
                height={1280}
                className="w-full aspect-[4/5] object-cover rounded-3xl shadow-elevated mb-[-180px] hidden lg:block"
              />
              <div className="lg:absolute lg:-bottom-10 lg:-left-16 lg:w-[110%]">
                <ClaimWizard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
