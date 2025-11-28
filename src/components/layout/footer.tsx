import Link from "next/link";

import { company, navLinks } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030817]">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <p className="text-lg font-semibold text-white">{company.name}</p>
          <p className="mt-2 text-sm text-white/70">{company.tagline}</p>
          <p className="mt-4 text-sm text-white/70">{company.address}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Contact
          </p>
          <div className="mt-3 space-y-2 text-sm text-white">
            <a href={`mailto:${company.email}`} className="block text-white/80">
              {company.email}
            </a>
            <a href={`tel:${company.phone}`} className="block text-white/80">
              {company.phone}
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/70">
            Quick Links
          </p>
          <div className="mt-3 flex flex-wrap gap-2 text-sm text-white/70">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-full border border-white/10 px-4 py-1 hover:bg-white/10"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 py-4 text-center text-xs text-white/50">
        © {new Date().getFullYear()} {company.name}. All rights reserved.
      </div>
    </footer>
  );
}

