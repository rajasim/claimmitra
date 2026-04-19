import { useState } from "react";
import { Phone, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Reveal } from "./Reveal";

export function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section className="py-20 md:py-28 bg-secondary/40">
      <div className="container-page grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.2em] text-accent">Get help today</p>
            <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
              Talk to a claims expert.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Share your case and we'll review it within 2 working hours. No bots, no scripts.
            </p>
          </Reveal>

          <div className="mt-8 space-y-4">
            <a href="tel:+911800123456" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <span className="h-11 w-11 rounded-xl bg-primary-soft text-primary grid place-items-center"><Phone className="h-5 w-5"/></span>
              <div>
                <div className="text-xs text-muted-foreground">Call us</div>
                <div className="font-medium">1800-123-456 · Toll free</div>
              </div>
            </a>
            <a href="mailto:hello@claimsmitra.in" className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition">
              <span className="h-11 w-11 rounded-xl bg-accent-soft text-accent grid place-items-center"><Mail className="h-5 w-5"/></span>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="font-medium">hello@claimsmitra.in</div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={80}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="bg-card border border-border rounded-3xl p-7 shadow-soft"
            >
              {sent ? (
                <div className="py-12 text-center animate-fade-up">
                  <div className="mx-auto h-14 w-14 rounded-full bg-accent-soft grid place-items-center">
                    <CheckCircle2 className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl">We've got your case</h3>
                  <p className="mt-2 text-sm text-muted-foreground">An expert will call you within 2 working hours.</p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Your name</label>
                      <Input required placeholder="Full name" className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-muted-foreground">Mobile</label>
                      <Input required inputMode="tel" placeholder="+91" className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-muted-foreground">Email</label>
                      <Input type="email" placeholder="you@email.com" className="mt-1.5 h-12 rounded-xl" />
                    </div>
                    <div className="sm:col-span-2">
                      <label className="text-xs font-medium text-muted-foreground">Tell us about your claim</label>
                      <Textarea required placeholder="Insurer, claim type, what happened…" className="mt-1.5 min-h-32 rounded-xl" />
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-xs text-muted-foreground max-w-sm">
                      By submitting you agree to our terms. We never share your data.
                    </p>
                    <Button type="submit" size="lg" className="rounded-full bg-navy text-primary-foreground hover:opacity-90">
                      Submit case <Send className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
