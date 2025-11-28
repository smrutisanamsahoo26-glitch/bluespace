import type { Metadata } from "next";
import { Mail, MapPinned, Phone } from "lucide-react";

import { ContactForm } from "@/components/sections/contact-form";
import { Card } from "@/components/ui/card";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact BlueSpace to discuss renovation projects, hardware supply, and installation requirements.",
  openGraph: {
    title: "Contact BlueSpace",
    description:
      "Reach out to BlueSpace for turnkey campus renovation and hardware supply.",
    url: "https://bluespace.example.com/contact",
    images: ["/og-image.png"],
  },
};

const contactDetails = [
  {
    title: "Call us",
    value: company.phone,
    icon: Phone,
    href: `tel:${company.phone}`,
  },
  {
    title: "Email",
    value: company.email,
    icon: Mail,
    href: `mailto:${company.email}`,
  },
  {
    title: "Office",
    value: company.address,
    icon: MapPinned,
  },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-[#050b1c]/80 p-8">
        <p className="text-sm uppercase tracking-[0.5em] text-secondary">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold">
          Share your requirement. We respond within 24 hours.
        </h1>
        <p className="mt-4 text-white/70">
          Tell us about your renovation scope, hardware demand, timelines, and
          constraints. Our project enablement desk will schedule a discovery
          call right away.
        </p>
      </section>
      <div className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
        <ContactForm />
        <div className="space-y-4">
          {contactDetails.map((item) => (
            <Card key={item.title} className="p-6">
              <div className="flex items-start gap-3">
                <item.icon className="size-9 rounded-2xl bg-secondary/15 p-2 text-secondary" />
                <div>
                  <p className="text-sm uppercase tracking-wide text-white/60">
                    {item.title}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-lg font-semibold text-white hover:text-secondary"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-white">
                      {item.value}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

