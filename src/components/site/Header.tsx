import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/knowledge", label: "Knowledge" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 md:h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-9 w-9 rounded-xl bg-navy grid place-items-center shadow-soft">
            <ShieldCheck className="h-5 w-5 text-primary-foreground" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-lg font-semibold tracking-tight">
              Claims<span className="text-accent">Mitra</span>
            </span>
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Your claim. Resolved.
            </span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm text-foreground/70 hover:text-foreground rounded-md transition-colors"
              activeProps={{ className: "px-4 py-2 text-sm text-foreground font-medium rounded-md bg-secondary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+911800123456" className="text-sm text-muted-foreground hover:text-foreground">
            1800-123-456
          </a>
          <Button asChild size="sm" className="rounded-full">
            <Link to="/contact">Start Claim</Link>
          </Button>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden h-10 w-10 grid place-items-center rounded-lg hover:bg-secondary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container-page py-4 flex flex-col gap-1">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg hover:bg-secondary text-foreground/80"
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="rounded-full mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Start Claim</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
