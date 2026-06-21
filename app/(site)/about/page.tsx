export default function AboutPage() {
  return (
    <div className="px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-16">
        <div className="space-y-4">
          <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
            Who We Are
          </p>
          <h1 className="font-display font-extrabold text-4xl text-wn-text">About Witty Networks</h1>
        </div>

        <div className="space-y-6 text-wn-muted leading-relaxed">
          <p>
            Witty Networks is the infrastructure and intelligent systems arm of The Witty Group. We
            deploy, manage, and operate technical environments for businesses that can&apos;t afford
            downtime, confusion, or slow support.
          </p>
          <p>
            We don&apos;t just hand over a system and leave. We build with documentation, train with
            context, and stay available — backed by Witty, our operations intelligence that means
            answers are never more than a message away.
          </p>
        </div>

        <div className="border-l-2 border-wn-teal pl-6 space-y-2">
          <p className="font-display font-bold text-wn-text">Witty — The Knowledgeable Ursine</p>
          <p className="text-wn-muted text-sm leading-relaxed">
            Our AI operations layer. Books appointments, triages client requests, supports field
            engineers with live knowledge base access, and monitors the systems we manage. Witty
            is the first stop — for clients and for our team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 text-sm">
          {[
            { label: "Holding Company", value: "The Witty Group" },
            { label: "Sector", value: "IT Infrastructure & Systems" },
            { label: "Operations Lead", value: "Tony Thomas, COO" },
            { label: "Executive", value: "Richard Buntyn, CEO" },
          ].map((item) => (
            <div key={item.label} className="border border-wn-border rounded-lg p-4">
              <p className="text-wn-muted text-xs font-mono mb-1">{item.label}</p>
              <p className="text-wn-text font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
