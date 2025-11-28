"use client";

import { motion } from "framer-motion";

import { serviceHighlights } from "@/data/site";

export function WhyUs() {
  return (
    <section className="space-y-6 rounded-3xl border border-white/5 bg-gradient-to-br from-[#081539] via-[#030816] to-[#01030a] p-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.5em] text-secondary">
            Why choose us
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-white">
            Built for government & private mandates
          </h2>
        </div>
        <p className="max-w-lg text-white/70">
          Cross-functional teams, pre-vetted contractors, and OEM alliances give
          you a single throat to choke—from RFP to handover.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {serviceHighlights.map((highlight, index) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-lg"
          >
            <div className="flex items-center gap-3">
              <highlight.icon className="size-10 rounded-2xl bg-secondary/20 p-2 text-secondary" />
              <div>
                <p className="text-lg font-semibold text-white">
                  {highlight.title}
                </p>
                <p className="text-sm text-white/70">
                  {highlight.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

