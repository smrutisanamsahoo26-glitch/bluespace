"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";

import { navLinks, company } from "@/data/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/10 bg-[#070f24]/80 px-5 py-3 text-sm shadow-[0_20px_80px_rgba(3,7,18,0.55)] md:mt-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="text-base text-white">BlueSpace</span>
          <span className="hidden text-xs text-white/60 sm:inline">
            Infrastructure Studio
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-full px-4 py-2 text-white/70 transition hover:text-white",
                pathname === link.href && "bg-white/10 text-white",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <span className="text-white/70">{company.phone}</span>
          <Button asChild size="sm">
            <Link href="/contact">
              <Phone className="mr-2 size-4" />
              Contact
            </Link>
          </Button>
        </div>
        <button
          className="rounded-full border border-white/20 p-2 text-white md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-auto mt-3 flex max-w-6xl flex-col gap-3 rounded-3xl border border-white/10 bg-[#050c1d]/95 p-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl px-4 py-3 text-white/80",
                  pathname === link.href && "bg-white/10 text-white",
                )}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full" size="lg">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Phone className="mr-2 size-4" />
                Quick Call
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

