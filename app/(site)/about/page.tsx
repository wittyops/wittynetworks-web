export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">About Witty Networks</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Witty Networks delivers managed infrastructure, intelligent systems, and field engineering
          services built around reliability and deep technical knowledge. We don&apos;t just deploy
          systems — we own the outcome.
        </p>
        {/* TODO: expand with team, values, Witty agent intro */}
      </div>
    </main>
  );
}
