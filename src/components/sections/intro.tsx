export function Intro() {
  return (
    <section className="grid gap-8 rounded-3xl border border-white/5 bg-[#050b1c]/80 p-8 md:grid-cols-2">
      <div>
        <p className="text-sm uppercase tracking-[0.5em] text-secondary">
          Who we are
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-white">
          A single partner for renovation, hardware supply, and on-ground
          installation.
        </h2>
      </div>
      <div className="space-y-4 text-white/70">
        <p>
          BlueSpace orchestrates campus upgrades for schools, colleges, and
          public institutions—covering design, civil works, interiors,
          electricals, IoT, and hardware procurement under one program office.
        </p>
        <p>
          Pricing is scoped after discovery workshops so you pay only for what
          your project actually needs.
        </p>
      </div>
    </section>
  );
}

