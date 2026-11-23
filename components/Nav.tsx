"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { site } from "@/content/site";

const items = [
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Contact", href: "/#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="border-line sticky top-0 z-40 border-b bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5 sm:px-8">
        <Link href="/" className="font-serif text-lg font-semibold">
          {site.name}
        </Link>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7 text-[14px] font-medium">
            {items.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="text-muted hover:text-ink">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className="-mr-2 flex items-center gap-2 p-2 text-[14px] font-medium md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} aria-hidden /> : <Menu size={20} aria-hidden />}
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-line border-t md:hidden">
          <ul className="mx-auto max-w-5xl px-5 py-2 sm:px-8">
            {items.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="block py-3 text-[14px] font-medium" onClick={() => setOpen(false)}>
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
