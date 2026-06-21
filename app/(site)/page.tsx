export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <section className="max-w-3xl w-full text-center space-y-8">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900">
          Witty Networks
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Intelligent infrastructure. Reliable partnerships. Built for the field.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="/services"
            className="px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors"
          >
            Our Services
          </a>
          <a
            href="/contact"
            className="px-8 py-3 border border-gray-900 text-gray-900 rounded-lg font-medium hover:bg-gray-50 transition-colors"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </main>
  );
}
