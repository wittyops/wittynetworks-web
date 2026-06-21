import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[80vh] flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-wn-teal/30 bg-wn-teal/10 text-wn-teal text-xs font-medium tracking-wide uppercase">
            Infrastructure · Intelligence · Field Support
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl leading-tight text-wn-text max-w-3xl">
            Intelligent infrastructure.{" "}
            <span className="text-wn-teal">Built for the field.</span>
          </h1>
          <p className="text-lg text-wn-muted leading-relaxed max-w-2xl">
            Witty Networks delivers managed systems, smart operations, and field engineering backed
            by Witty — your always-available operations intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors"
            >
              Book a Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-wn-border text-wn-text rounded-lg hover:border-wn-slate transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Signal strip */}
      <section className="border-y border-wn-border bg-wn-surface/40 py-12 px-6">
        <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-8 text-center">
          {[
            { label: "Infrastructure", value: "End-to-end build, deploy, and manage" },
            { label: "Intelligence", value: "Witty — your operations AI, first stop" },
            { label: "Field Support", value: "Engineers backed by deep knowledge" },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="font-display font-bold text-wn-teal text-sm uppercase tracking-widest">
                {item.label}
              </p>
              <p className="text-wn-muted text-sm">{item.value}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
