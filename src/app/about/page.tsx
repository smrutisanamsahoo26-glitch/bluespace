import type { Metadata } from "next";
import { Building2, CheckCircle2, Shield } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about BlueSpace’s mission, vision, and experience delivering renovation and hardware projects for government and private institutions.",
  openGraph: {
    title: "About BlueSpace",
    description:
      "BlueSpace unites architects, engineers, and hardware partners to modernize campuses across India.",
    url: "https://bluespace.example.com/about",
    images: ["/og-image.png"],
  },
};

const principles = [
  {
    title: "Mission",
    copy:
      "Enable every learning space to be safe, smart, and future-proof through a single accountable partner.",
  },
  {
    title: "Vision",
    copy:
      "Become India’s most trusted renovation and hardware execution desk for institutions and civic bodies.",
  },
  {
    title: "Values",
    copy:
      "Transparency, safety-first delivery, inclusive design, and relentless after-service support.",
  },
];

const capability = [
  {
    title: "Government Programs",
    points: [
      "Empanelled vendors & compliance-ready documentation",
      "E-tender participation & GST invoicing",
      "CSR, state, and central schemes experience",
    ],
    icon: Shield,
  },
  {
    title: "Private Institutions",
    points: [
      "Design-led campus upgrades",
      "Flexible phasing to reduce downtime",
      "Premium smart classroom integrations",
    ],
    icon: Building2,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-[#040a1c]/80 p-8">
        <p className="text-sm uppercase tracking-[0.5em] text-secondary">
          About BlueSpace
        </p>
        <h1 className="mt-4 text-4xl font-semibold">
          Two decades of building trust between institutions & infrastructure.
        </h1>
        <p className="mt-4 text-white/70">
          We blend architects, engineers, procurement specialists, and field
          crews into mission squads that shepherd every engagement from
          surveying through commissioning.
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {principles.map((item) => (
          <Card key={item.title} className="bg-white/5">
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-white/70">{item.copy}</CardContent>
          </Card>
        ))}
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {capability.map((cap) => (
          <Card key={cap.title}>
            <CardHeader className="flex flex-row items-center gap-4">
              <cap.icon className="size-10 rounded-2xl bg-secondary/15 p-2 text-secondary" />
              <div>
                <CardTitle>{cap.title}</CardTitle>
                <CardDescription>
                  Tailored playbooks for {cap.title.toLowerCase()}
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 text-white/80">
              {cap.points.map((point) => (
                <p key={point} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-secondary" />
                  {point}
                </p>
              ))}
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-primary/40 to-secondary/30 p-8 text-white">
        <h2 className="text-3xl font-semibold">Experience</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-4xl font-bold">20+ yrs</p>
            <p className="text-sm text-white/70">Program leadership</p>
          </div>
          <div>
            <p className="text-4xl font-bold">1500+</p>
            <p className="text-sm text-white/70">Classrooms modernized</p>
          </div>
          <div>
            <p className="text-4xl font-bold">98%</p>
            <p className="text-sm text-white/70">
              Projects delivered within SLA
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

