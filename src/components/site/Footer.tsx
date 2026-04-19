import { Link } from "@tanstack/react-router";
import { ShieldCheck, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-primary-foreground mt-24">
      <div className="container-page py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-white/10 grid place-items-center">
              <ShieldCheck className="h-5 w-5" strokeWidth={2.2} />
            </div>
            <span className="font-display text-xl font-semibold">
              Claims<span className="text-accent">Mitra</span>
            </span>
          </div>
          <p className="mt-4 text-sm text-white/70 max-w-sm leading-relaxed">
            We help policyholders resolve rejected, delayed and short-settled insurance claims —
            with experts, not call centres.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm text-white/70">
            <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> 1800-123-456</span>
            <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> hello@claimsmitra.in</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Mumbai · Bengaluru · Delhi</span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Services</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/services" className="hover:text-white">Rejected Claims</Link></li>
            <li><Link to="/services" className="hover:text-white">Delayed Claims</Link></li>
            <li><Link to="/services" className="hover:text-white">Short Settlements</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-white/90">Company</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/knowledge" className="hover:text-white">Knowledge Hub</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <span>© {new Date().getFullYear()} ClaimsMitra Advisory Pvt. Ltd. All rights reserved.</span>
          <span>Not an insurance company. We help you resolve claims with your insurer.</span>
        </div>
      </div>
    </footer>
  );
}
