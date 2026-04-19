import { Apple, Bell, Upload, MessageSquareText } from "lucide-react";
import { Reveal } from "./Reveal";
import appImg from "@/assets/app-mockup.jpg";

const features = [
  { Icon: Bell, title: "Real-time updates", desc: "Track every step of your case." },
  { Icon: Upload, title: "1-tap document upload", desc: "Snap, upload, done." },
  { Icon: MessageSquareText, title: "Chat with your case manager", desc: "Always one tap away." },
];

export function AppPromo() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="bg-navy rounded-[2rem] overflow-hidden text-primary-foreground relative">
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(60% 50% at 80% 20%, oklch(0.7 0.14 165 / 0.4), transparent)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-10 p-8 sm:p-14 items-center">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.2em] text-accent">ClaimsMitra App</p>
                <h2 className="mt-3 font-display text-3xl md:text-5xl text-balance">
                  Your claim, in your pocket.
                </h2>
                <p className="mt-4 text-white/70 max-w-md leading-relaxed">
                  File, track and chat about your claim from anywhere. Built for the moments you need answers fast.
                </p>
              </Reveal>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {features.map((f, i) => (
                  <Reveal key={f.title} delay={i * 70}>
                    <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
                      <f.Icon className="h-5 w-5 text-accent" />
                      <div className="mt-3 text-sm font-medium">{f.title}</div>
                      <div className="text-xs text-white/60 mt-1">{f.desc}</div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#" className="flex items-center gap-3 bg-white text-primary rounded-xl px-5 py-3 hover:opacity-90 transition">
                  <Apple className="h-6 w-6" />
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">Download on</span>
                    <span className="block text-sm font-semibold">App Store</span>
                  </span>
                </a>
                <a href="#" className="flex items-center gap-3 bg-white text-primary rounded-xl px-5 py-3 hover:opacity-90 transition">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor"><path d="M3.6 2.4c-.4.3-.6.8-.6 1.4v16.4c0 .6.2 1.1.6 1.4l9.5-9.6L3.6 2.4Zm10.7 8.6 2.6-1.5L4.7 2.1c-.2-.1-.4-.1-.6-.1l10.2 9Zm5.4 3.1L17 12.5l-2.7 2.7 4.4 2.5c.8.5 1.4-.1 1.4-.7v-1.3c0-.6-.2-1.2-.4-1.6Zm-5.4 1.6L4.1 21.9c.2 0 .4 0 .6-.1L17 14.5l-2.7-1.8Z"/></svg>
                  <span className="text-left leading-tight">
                    <span className="block text-[10px] uppercase tracking-wider opacity-70">Get it on</span>
                    <span className="block text-sm font-semibold">Google Play</span>
                  </span>
                </a>
              </div>
            </div>

            <Reveal delay={120} className="lg:justify-self-end">
              <img
                src={appImg}
                alt="ClaimsMitra mobile app"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full max-w-md rounded-3xl shadow-glow animate-float"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
