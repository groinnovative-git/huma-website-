import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { PHONE_HREF, WHATSAPP_HREF, INSTAGRAM_HREF } from "@/lib/contact";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "About", href: "/about" },
];
const serviceLinks = [
  { label: "Tv Repair", href: "/services?category=tv-display" },
  { label: "Audio Restoration", href: "/services?category=audio-sound" },
  { label: "Home Appliances", href: "/services?category=home-appliances" },
  { label: "Multi-Brand Services", href: "/services?category=multi-brand" },
];

export default function Footer() {
  return (
    <footer className="mt-auto rounded-t-3xl bg-surface-alt">
      <div className="mx-auto max-w-[1200px] px-6 py-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-lg font-bold text-primary">HUMA ELECTRONICS</p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Defining the standard for premium electronics repair and
              maintenance since 2008. Technical excellence guaranteed.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Quick links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Our services</h4>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-body hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ink">Stay Connected</h4>
            <div className="mt-4 flex items-center gap-3">
              <a
                href={PHONE_HREF}
                aria-label="Phone"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={INSTAGRAM_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
              >
                <InstagramIcon />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-primary-dark"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink px-6 py-4">
        <p className="mx-auto max-w-[1200px] text-center text-xs text-white/60">
          <span suppressHydrationWarning>© {new Date().getFullYear()}</span>{" "}
          <span className="font-semibold text-white">Huma Electronics</span>.
          All rights reserved.
          <span className="mx-2 text-white/30">|</span>
          Designed &amp; Developed by{" "}
          <a
            href="https://groinnovative.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-white hover:text-primary"
          >
            GroInnovative
          </a>
        </p>
      </div>
    </footer>
  );
}
