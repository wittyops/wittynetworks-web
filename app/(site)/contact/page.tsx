"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-24">
      <div className="max-w-xl mx-auto space-y-10">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">Get in Touch</h1>
          <p className="mt-3 text-gray-600">
            Consultations are by appointment. Tell us what you&apos;re working on and we&apos;ll
            find a time that works.
          </p>
        </div>

        {status === "sent" ? (
          <div className="p-6 bg-gray-50 rounded-xl text-gray-700">
            Thanks — we&apos;ll be in touch shortly to confirm your appointment.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                name="name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                name="email"
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900"
              />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700">What are you working on?</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full px-8 py-3 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-700 transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Request Appointment"}
            </button>
            {status === "error" && (
              <p className="text-red-600 text-sm">Something went wrong — please try again.</p>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
