const services = [
  {
    title: "Infrastructure Build-Out",
    description:
      "End-to-end deployment of servers, networking, and containerized services tailored to your operation.",
  },
  {
    title: "Managed Intelligence",
    description:
      "AI-assisted operations — scheduling, support routing, and knowledge management via the Witty platform.",
  },
  {
    title: "Field Engineering Support",
    description:
      "On-site and remote technical support. Our engineers are backed by Witty's knowledge base for faster resolution.",
  },
  {
    title: "Consulting by Appointment",
    description:
      "Strategy sessions for teams planning infrastructure, AI integration, or scaling their technical operations.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-4xl mx-auto space-y-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Services</h1>
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-xl p-6 space-y-3">
              <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
              <p className="text-gray-600 leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </main>
  );
}
