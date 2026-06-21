"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
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
    <div className="px-6 py-24">
      <div className="max-w-xl mx-auto space-y-10">
        <div className="space-y-3">
          <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
            Get in Touch
          </p>
          <h1 className="font-display font-extrabold text-4xl text-wn-text">
            Book a Consultation
          </h1>
          <p className="text-wn-muted leading-relaxed">
            Appointments are 30 minutes, no obligation. Tell us what you&apos;re working on and
            Witty will follow up to confirm a time.
          </p>
        </div>

        {status === "sent" ? (
          <div className="border border-wn-teal/30 bg-wn-teal/10 rounded-xl p-6 text-wn-teal">
            Request received — Witty will be in touch shortly to confirm your appointment.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            {[
              { name: "name", label: "Name", type: "text" },
              { name: "email", label: "Email", type: "email" },
              { name: "company", label: "Company (optional)", type: "text", required: false },
            ].map((f) => (
              <div key={f.name} className="space-y-1.5">
                <label className="text-sm text-wn-muted font-medium">{f.label}</label>
                <input
                  name={f.name}
                  type={f.type}
                  required={f.required !== false}
                  className="w-full bg-wn-surface border border-wn-border rounded-lg px-4 py-2.5 text-wn-text placeholder:text-wn-slate focus:outline-none focus:border-wn-teal transition-colors"
                />
              </div>
            ))}
            <div className="space-y-1.5">
              <label className="text-sm text-wn-muted font-medium">What are you working on?</label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-wn-surface border border-wn-border rounded-lg px-4 py-2.5 text-wn-text placeholder:text-wn-slate focus:outline-none focus:border-wn-teal transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Request Appointment"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">Something went wrong — please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
