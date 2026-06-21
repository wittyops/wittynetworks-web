import Link from "next/link";

const services = [
  {
    title: "Infrastructure Build-Out",
    tag: "Core",
    description:
      "End-to-end deployment of servers, networking, containerized services, and managed endpoints. We spec it, build it, document it.",
  },
  {
    title: "Managed Intelligence (Witty)",
    tag: "AI Ops",
    description:
      "AI-assisted operations — scheduling, client triage, support routing, and knowledge management via the Witty platform.",
  },
  {
    title: "Field Engineering Support",
    tag: "Field",
    description:
      "On-site and remote technical support. Our engineers are backed by Witty's live knowledge base for faster, more accurate resolution.",
  },
  {
    title: "Consulting by Appointment",
    tag: "Strategy",
    description:
      "Focused sessions for teams planning infrastructure, AI integration, or scaling their technical operations. No retainer required.",
  },
];

export default function ServicesPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="space-y-4 max-w-2xl">
          <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
            What We Do
          </p>
          <h1 className="font-display font-extrabold text-4xl text-wn-text">Services</h1>
          <p className="text-wn-muted leading-relaxed">
            Everything we deliver is built around durability, clear ownership, and measurable
            outcomes. No guesswork, no bloat.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-wn-border bg-wn-surface/30 rounded-xl p-6 space-y-3 hover:border-wn-teal/40 transition-colors"
            >
              <span className="inline-block text-xs font-mono text-wn-teal bg-wn-teal/10 border border-wn-teal/20 px-2 py-0.5 rounded">
                {s.tag}
              </span>
              <h2 className="font-display font-bold text-lg text-wn-text">{s.title}</h2>
              <p className="text-wn-muted text-sm leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="border border-wn-border bg-wn-surface/20 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display font-bold text-wn-text">Ready to talk?</p>
            <p className="text-wn-muted text-sm mt-1">Consultations are by appointment — 30 min, no obligation.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 px-6 py-3 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors text-sm"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}
