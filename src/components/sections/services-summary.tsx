import { Hammer, Laptop, PlugZap, ShieldCheck, Sparkles } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Renovation Programs",
    description:
      "Design-to-handover modernization for classrooms, labs, auditoriums, hostels, and admin blocks.",
    icon: Hammer,
    points: [
      "Civil, electrical, HVAC, interiors",
      "Project managers & certified labor",
      "Compliance-ready documentation",
    ],
  },
  {
    title: "Hardware Supply",
    description:
      "Enterprise-grade laptops, desktops, projectors, CCTV, and networking kits sourced from OEM partners.",
    icon: Laptop,
    points: [
      "Imaging & asset tagging",
      "Installation & training",
      "Warranty + AMC management",
    ],
  },
];

const badges = [
  { label: "Smart classrooms", icon: Sparkles },
  { label: "CCTV & access", icon: ShieldCheck },
  { label: "Campus networking", icon: PlugZap },
];

export function ServicesSummary() {
  return (
    <section className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Renovation + mission-critical hardware
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {badges.map((badge) => (
            <span
              key={badge.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-wide text-white/70"
            >
              <badge.icon className="size-4 text-secondary" />
              {badge.label}
            </span>
          ))}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <Card key={service.title} className="h-full transition hover:-translate-y-1 hover:border-secondary/50 hover:shadow-secondary/30">
            <CardHeader>
              <service.icon className="size-10 rounded-2xl border border-white/10 bg-white/5 p-2 text-secondary" />
              <CardTitle>{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-white/70">
              {service.points.map((point) => (
                <div key={point} className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-secondary" />
                  {point}
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

