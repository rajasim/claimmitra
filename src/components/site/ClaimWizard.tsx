import { useState } from "react";
import { ArrowRight, ArrowLeft, CheckCircle2, FileX2, Clock4, IndianRupee, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Issue = "rejected" | "delayed" | "short";

const issues: { id: Issue; label: string; desc: string; Icon: typeof FileX2 }[] = [
  { id: "rejected", label: "Claim Rejected", desc: "Insurer denied your claim", Icon: FileX2 },
  { id: "delayed", label: "Claim Delayed", desc: "Stuck for weeks or months", Icon: Clock4 },
  { id: "short", label: "Short Settlement", desc: "Paid less than approved", Icon: IndianRupee },
];

export function ClaimWizard() {
  const [step, setStep] = useState(0);
  const [issue, setIssue] = useState<Issue | null>(null);
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");
  const [done, setDone] = useState(false);

  const total = 4;
  const progress = ((step + (done ? 1 : 0)) / total) * 100;

  const next = () => setStep((s) => Math.min(total - 1, s + 1));
  const back = () => setStep((s) => Math.max(0, s - 1));

  return (
    <div className="relative bg-card rounded-3xl shadow-elevated border border-border/70 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-1 bg-secondary">
        <div
          className="h-full bg-accent-grad transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="h-7 w-7 rounded-full bg-accent-soft grid place-items-center">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
            </span>
            <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Free Claim Check · 60 seconds
            </span>
          </div>
          <span className="text-xs text-muted-foreground">
            Step {Math.min(step + 1, total)} / {total}
          </span>
        </div>

        {!done && step === 0 && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl sm:text-3xl text-balance">
              What happened with your claim?
            </h3>
            <p className="text-sm text-muted-foreground mt-1">Pick the closest match.</p>
            <div className="mt-5 grid gap-3">
              {issues.map(({ id, label, desc, Icon }) => (
                <button
                  key={id}
                  onClick={() => {
                    setIssue(id);
                    setTimeout(next, 180);
                  }}
                  className={`group flex items-center gap-4 p-4 rounded-2xl border text-left transition-all hover:border-primary hover:shadow-soft ${
                    issue === id ? "border-primary bg-primary-soft" : "border-border bg-background"
                  }`}
                >
                  <span className="h-11 w-11 rounded-xl bg-secondary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block font-medium">{label}</span>
                    <span className="block text-xs text-muted-foreground">{desc}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        )}

        {!done && step === 1 && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl sm:text-3xl">What is the claim amount?</h3>
            <p className="text-sm text-muted-foreground mt-1">An estimate is fine.</p>
            <div className="mt-5 relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">₹</span>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^\d]/g, ""))}
                placeholder="2,50,000"
                inputMode="numeric"
                className="h-14 pl-9 text-lg rounded-xl"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {["50000", "100000", "300000", "500000"].map((v) => (
                <button
                  key={v}
                  onClick={() => setAmount(v)}
                  className="px-3 py-1.5 text-xs rounded-full border border-border hover:border-primary hover:bg-primary-soft transition"
                >
                  ₹{Number(v).toLocaleString("en-IN")}
                </button>
              ))}
            </div>
          </div>
        )}

        {!done && step === 2 && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl sm:text-3xl">Brief description</h3>
            <p className="text-sm text-muted-foreground mt-1">
              A few lines help our experts review faster.
            </p>
            <Textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="e.g. Health insurance claim rejected citing pre-existing condition…"
              className="mt-5 min-h-32 rounded-xl"
            />
          </div>
        )}

        {!done && step === 3 && (
          <div className="animate-slide-up">
            <h3 className="font-display text-2xl sm:text-3xl">Where can our expert reach you?</h3>
            <p className="text-sm text-muted-foreground mt-1">No spam. Used only for your case.</p>
            <div className="mt-5 grid gap-3">
              <Input placeholder="Your name" className="h-12 rounded-xl" />
              <Input placeholder="Mobile number" inputMode="tel" className="h-12 rounded-xl" />
            </div>
          </div>
        )}

        {done && (
          <div className="animate-slide-up text-center py-4">
            <div className="mx-auto h-14 w-14 rounded-full bg-accent-soft grid place-items-center">
              <CheckCircle2 className="h-7 w-7 text-accent" />
            </div>
            <h3 className="mt-4 font-display text-2xl">Eligibility looks strong</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm mx-auto">
              Based on your inputs, your case qualifies for review. A claims expert will call you
              within <strong>2 working hours</strong>.
            </p>
            <Button
              className="mt-6 rounded-full"
              onClick={() => {
                setStep(0);
                setIssue(null);
                setAmount("");
                setDesc("");
                setDone(false);
              }}
            >
              Start another check
            </Button>
          </div>
        )}

        {!done && (
          <div className="mt-6 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={back}
              disabled={step === 0}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4 mr-1" /> Back
            </Button>
            <Button
              onClick={() => (step === total - 1 ? setDone(true) : next())}
              className="rounded-full bg-navy text-primary-foreground hover:opacity-90"
              disabled={
                (step === 0 && !issue) ||
                (step === 1 && !amount) ||
                (step === 2 && desc.length < 5)
              }
            >
              {step === total - 1 ? "Check Your Claim Now" : "Continue"}
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
