import Link from "next/link";

const services = [
  {
    tag: "Core",
    title: "Infrastructure Build-Out",
    description:
      "End-to-end deployment of servers, networking, containerized services, and managed endpoints. We spec it, build it, document it, then hand it to you running.",
  },
  {
    tag: "AI Ops",
    title: "Managed Intelligence",
    description:
      "Witty — our AI operations layer — handles appointment scheduling, client triage, support routing, and live knowledge management so your team can focus on delivery.",
  },
  {
    tag: "Field",
    title: "Field Engineering Support",
    description:
      "On-site and remote technical support backed by Witty's live knowledge base. Faster diagnosis, accurate resolution, documented outcomes every time.",
  },
  {
    tag: "Strategy",
    title: "Consulting by Appointment",
    description:
      "Focused 30-minute sessions for teams planning infrastructure, AI integration, or technical scaling. No retainer. No fluff. Just answers.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    body: "We learn your environment, priorities, and constraints. You tell us what's broken, what's slowing you down, and what good looks like.",
  },
  {
    number: "02",
    title: "Scoped Proposal",
    body: "We return a clear scope of work: what gets built, how long it takes, what it costs. No ambiguity — you approve before anything starts.",
  },
  {
    number: "03",
    title: "Build & Handoff",
    body: "We deploy, document, and train your team. Witty stays in the loop — available for ongoing support, questions, and future phases.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[82vh] flex items-center px-6">
        <div className="max-w-5xl mx-auto w-full space-y-8 py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-wn-teal/30 bg-wn-teal/10 text-wn-teal text-xs font-medium tracking-wide uppercase">
            Infrastructure · Intelligence · Field Support
          </div>
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl leading-[1.05] text-wn-text max-w-3xl">
            Intelligent infrastructure.{" "}
            <span className="text-wn-teal">Built for the field.</span>
          </h1>
          <p className="text-lg text-wn-muted leading-relaxed max-w-2xl">
            Witty Networks delivers managed systems, smart operations, and on-site field
            engineering — all backed by Witty, your always-available operations intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-wn-border text-wn-text rounded-lg hover:border-wn-teal/40 transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Signal strip */}
      <section className="border-y border-wn-border bg-wn-surface/30 py-12 px-6">
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

      {/* Services preview */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3 max-w-xl">
            <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
              What We Do
            </p>
            <h2 className="font-display font-extrabold text-3xl text-wn-text">
              Built around reliability.
            </h2>
            <p className="text-wn-muted leading-relaxed">
              Every engagement is scoped, documented, and delivered with clear ownership. We
              don&apos;t build systems and disappear.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="border border-wn-border bg-wn-surface/20 rounded-xl p-6 space-y-3 hover:border-wn-teal/40 hover:bg-wn-surface/40 transition-all"
              >
                <span className="inline-block text-xs font-mono text-wn-teal bg-wn-teal/10 border border-wn-teal/20 px-2 py-0.5 rounded">
                  {s.tag}
                </span>
                <h3 className="font-display font-bold text-wn-text">{s.title}</h3>
                <p className="text-wn-muted text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-wn-teal hover:text-wn-text transition-colors font-medium"
          >
            Full service details →
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-wn-surface/20 border-y border-wn-border px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3 max-w-xl">
            <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
              How It Works
            </p>
            <h2 className="font-display font-extrabold text-3xl text-wn-text">
              From first call to running system.
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="space-y-4">
                <span className="font-mono text-3xl font-bold text-wn-teal/40">
                  {step.number}
                </span>
                <h3 className="font-display font-bold text-wn-text">{step.title}</h3>
                <p className="text-wn-muted text-sm leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-3 max-w-xl">
            <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
              The Team
            </p>
            <h2 className="font-display font-extrabold text-3xl text-wn-text">
              Senior engineers. Decades of field experience.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="border border-wn-border bg-wn-surface/20 rounded-xl p-6 space-y-3">
              <p className="font-display font-bold text-wn-text text-lg">Richard Buntyn</p>
              <p className="text-wn-teal text-sm font-mono">Chief Executive Officer</p>
              <p className="text-wn-muted text-sm leading-relaxed">
                25 years in IT infrastructure and enterprise systems. Richard leads client
                relationships and business operations, bringing deep experience across structured
                cabling, network design, and systems integration.
              </p>
            </div>
            <div className="border border-wn-border bg-wn-surface/20 rounded-xl p-6 space-y-3">
              <p className="font-display font-bold text-wn-text text-lg">Tony Thomas</p>
              <p className="text-wn-teal text-sm font-mono">Chief Technology Officer</p>
              <p className="text-wn-muted text-sm leading-relaxed">
                A+, Network+, CCNA, CCISP, and Server 2024 certified. Tony architects and
                operates the Witty Networks technical stack — from bare metal to containerized
                services — and built the Witty intelligence platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="bg-wn-teal/10 border border-wn-teal/30 rounded-2xl px-8 py-12 text-center space-y-6">
            <h2 className="font-display font-extrabold text-3xl text-wn-text">
              Ready to get started?
            </h2>
            <p className="text-wn-muted max-w-lg mx-auto leading-relaxed">
              Book a 30-minute discovery call. No obligation, no sales pitch — just an honest
              conversation about what you need and whether we&apos;re the right fit.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
