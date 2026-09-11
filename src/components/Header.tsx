"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { PHONE_HREF } from "@/lib/contact";

type NavKey = "home" | "services" | "contact" | "about";

const navLinks: { key: NavKey; label: string; href: string }[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "services", label: "Services", href: "/services" },
  { key: "contact", label: "Contact", href: "/contact" },
  { key: "about", label: "About", href: "/about" },
];

export default function Header({ active = "home" }: { active?: NavKey }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/Assest/logo.svg"
            alt="Huma Electronics"
            width={151}
            height={28}
            priority
            className="h-10 w-auto -my-2"
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className={
                link.key === active
                  ? "text-sm font-medium text-primary"
                  : "text-sm font-medium text-body hover:text-primary"
              }
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary-soft"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call now
          </a>
          <Link
            href="/#booking"
            className="inline-flex items-center rounded-lg bg-primary-dark px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-primary"
          >
            Book a Service
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2.5 text-ink lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-4" aria-label="Primary mobile">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className={
                  link.key === active
                    ? "text-sm font-medium text-primary"
                    : "text-sm font-medium text-body"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-primary px-4 py-2 text-sm font-medium text-primary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Call now
            </a>
            <Link
              href="/#booking"
              className="inline-flex items-center justify-center rounded-lg bg-primary-dark px-4 py-2 text-sm font-medium text-white"
            >
              Book a Service
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
