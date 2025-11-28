import Link from "next/link";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company } from "@/data/site";

export function ContactCTA() {
  return (
    <section className="rounded-3xl border border-secondary/40 bg-gradient-to-r from-secondary/30 via-primary/40 to-primary/30 p-8 text-white shadow-[0_30px_80px_rgba(10,42,108,0.6)]">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-white/70">
            Let’s build
          </p>
          <h2 className="mt-2 text-3xl font-semibold">Ready for your brief?</h2>
          <p className="mt-3 text-white/80">
            Share your renovation or hardware requirement. We’ll respond within
            24 hours with a discovery schedule.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="ghost" className="bg-white/10">
            <a href={`tel:${company.phone}`}>
              <PhoneCall className="mr-2 size-4" />
              {company.phone}
            </a>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact">
              Contact Team
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/80">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
          <Mail className="size-4" />
          {company.email}
        </span>
      </div>
    </section>
  );
}

