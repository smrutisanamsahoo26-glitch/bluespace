"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { company, stats } from "@/data/site";

const checklist = [
  "Turnkey renovation teams",
  "Verified hardware partners",
  "Pan-India delivery",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-[#081538] via-[#040b1f] to-[#01030a] p-8 sm:p-12 shadow-[0_50px_120px_rgba(3,7,18,0.8)]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid gap-10 md:grid-cols-[1.1fr,0.9fr]"
      >
        <div>
          <p className="text-sm uppercase tracking-[0.4em] text-secondary">
            Infrastructure partner
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white md:text-5xl">
            BlueSpace builds modern campuses and supplies secure hardware suites
            for institutions that can’t slow down.
          </h1>
          <p className="mt-6 text-lg text-white/70">
            Renovate. Equip. Install. Maintain. A single partner for project
            execution across government & private education ecosystems.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/contact">
                Start a Project
                <ArrowUpRight className="ml-2 size-5" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
          <ul className="mt-8 flex flex-col gap-3 text-sm text-white/80 sm:flex-row">
            {checklist.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-secondary" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-white/5 p-4 text-white/80"
              >
                <p className="text-3xl font-semibold text-white">{stat.value}</p>
                <p className="text-xs uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="noise-overlay relative rounded-[28px] border border-white/5 bg-gradient-to-br from-primary/40 via-secondary/10 to-white/10 p-8">
          <div className="absolute inset-x-6 top-6 h-6 rounded-full bg-white/15 blur-2xl" />
          <div className="relative">
            <Image
              src="/hero-illustration.svg"
              alt="BlueSpace project showcase"
              width={540}
              height={540}
              className="h-auto w-full"
              priority
            />
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm text-white/60">Trusted by</p>
              <div className="mt-2 flex flex-wrap gap-3 text-white">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Government EPC Cells
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  Private Universities
                </span>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  CSR Foundations
                </span>
              </div>
            </div>
            <div className="mt-4 text-sm text-white/70">
              Pricing shared post discovery call.
              <br />
              Mail us at{" "}
              <a
                href={`mailto:${company.email}`}
                className="text-secondary underline"
              >
                {company.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

