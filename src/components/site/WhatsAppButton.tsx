import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/911800123456?text=Hi%20ClaimsMitra%2C%20I%20need%20help%20with%20my%20claim"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-accent/40 animate-ping" />
      <span className="relative flex items-center gap-2 bg-accent-grad text-accent-foreground rounded-full pl-3 pr-4 py-3 shadow-glow font-medium text-sm">
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </span>
    </a>
  );
}
