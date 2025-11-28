import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Cable,
  CircuitBoard,
  Hammer,
  Laptop,
  Monitor,
  Network,
  Presentation,
  Shield,
  Sparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  hardwareServices,
  renovationServices,
} from "@/data/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore BlueSpace renovation services and hardware supply capabilities for institutions.",
  openGraph: {
    title: "BlueSpace Services",
    description:
      "Turnkey renovation + hardware supply for schools, colleges, and government bodies.",
    url: "https://bluespace.example.com/services",
    images: ["/og-image.png"],
  },
};

const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Monitor,
  Desktop: Monitor,
  Projectors: Presentation,
  Presentation,
  Shield,
  CCTV: Shield,
  "Networking & cables": Cable,
  Network,
  Sparkles,
};

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-[#050b1c]/80 p-8">
        <p className="text-sm uppercase tracking-[0.5em] text-secondary">
          Services
        </p>
        <h1 className="mt-4 text-4xl font-semibold">Everything under one SLA</h1>
        <p className="mt-4 text-white/70">
          From structural upgrades to smart classroom hardware, BlueSpace
          handles scoping, procurement, labor, and installation with a single
          point of accountability.
        </p>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">
            01 — Renovation
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            Renovation Services
          </h2>
          <p className="mt-3 text-white/70">
            Civil, electrical, and interior works led by site engineers, safety
            officers, and QA supervisors.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {renovationServices.map((item) => (
            <Card
              key={item}
              className="flex items-center gap-4 border-white/10 bg-white/5 p-5 text-white/80 transition hover:-translate-y-1 hover:border-secondary/50"
            >
              <Hammer className="size-10 rounded-2xl bg-secondary/20 p-2 text-secondary" />
              <span>{item}</span>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">
            02 — Hardware Supply
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-white">
            Hardware & Smart Infrastructure
          </h2>
          <p className="mt-3 text-white/70">
            OEM partnerships with logistics, asset tagging, deployment, and AMC
            baked in.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {hardwareServices.map((service) => {
            const Icon = iconMap[service.icon] ?? CircuitBoard;
            return (
              <Card
                key={service.title}
                className="border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-secondary/50"
              >
                <CardHeader>
                  <Icon className="size-10 rounded-2xl bg-secondary/20 p-2 text-secondary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2">
                      <Sparkles className="size-4 text-secondary" />
                      OEM certified supply
                    </li>
                    <li className="flex items-center gap-2">
                      <Network className="size-4 text-secondary" />
                      Installation & testing
                    </li>
                    <li className="flex items-center gap-2">
                      <Shield className="size-4 text-secondary" />
                      Warranty & AMC tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}

