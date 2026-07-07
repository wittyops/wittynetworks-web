"use client";

import { useEffect, useState } from "react";

// Cal.com embed — set your Cal.com username/event-slug in NEXT_PUBLIC_CAL_LINK
// e.g. NEXT_PUBLIC_CAL_LINK=tony-wittynetworks/discovery
// Create your account at https://cal.com and set up a "Discovery Call" event type first.
const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? "";

function CalEmbed() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!CAL_LINK) return;

    // Load the Cal.com embed script once
    if (!document.getElementById("cal-embed-script")) {
      const script = document.createElement("script");
      script.id = "cal-embed-script";
      script.src = "https://app.cal.com/embed/embed.js";
      script.async = true;
      script.onload = () => {
        const cal = (window as unknown as { Cal?: (cmd: string, opts?: unknown) => void }).Cal;
        if (cal) {
          cal("init", { origin: "https://app.cal.com" });
          cal("inline", {
            elementOrSelector: "#cal-inline",
            calLink: CAL_LINK,
            layout: "month_view",
          });
          cal("ui", {
            theme: "dark",
            styles: { branding: { brandColor: "#14B8A6" } },
          });
        }
        setReady(true);
      };
      document.head.appendChild(script);
    } else {
      setReady(true);
    }
  }, []);

  if (!CAL_LINK) return null;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-wn-border" />
        <span className="text-wn-muted text-xs font-mono uppercase tracking-widest">
          — or pick a time directly —
        </span>
        <div className="h-px flex-1 bg-wn-border" />
      </div>
      <div
        id="cal-inline"
        className={`w-full rounded-xl overflow-hidden border border-wn-border min-h-[600px] transition-opacity ${ready ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
}

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
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
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <p className="text-wn-teal text-sm font-display font-bold uppercase tracking-widest">
            Get in Touch
          </p>
          <h1 className="font-display font-extrabold text-4xl text-wn-text">
            Book a Discovery Call
          </h1>
          <p className="text-wn-muted leading-relaxed">
            30 minutes, no obligation. Tell us what you&apos;re working on and we&apos;ll figure
            out together whether we&apos;re the right fit.
          </p>
        </div>

        {/* Inquiry form */}
        {status === "sent" ? (
          <div className="border border-wn-teal/30 bg-wn-teal/10 rounded-xl p-6 text-wn-teal space-y-1">
            <p className="font-semibold">Request received.</p>
            <p className="text-sm text-wn-teal/80">
              We&apos;ll be in touch shortly to confirm your appointment.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { name: "name", label: "Name", type: "text" },
                { name: "email", label: "Email", type: "email" },
              ].map((f) => (
                <div key={f.name} className="space-y-1.5">
                  <label className="text-sm text-wn-muted font-medium">{f.label}</label>
                  <input
                    name={f.name}
                    type={f.type}
                    required
                    className="w-full bg-wn-surface border border-wn-border rounded-lg px-4 py-2.5 text-wn-text placeholder:text-wn-slate focus:outline-none focus:border-wn-teal transition-colors"
                  />
                </div>
              ))}
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-wn-muted font-medium">
                Company <span className="text-wn-slate">(optional)</span>
              </label>
              <input
                name="company"
                type="text"
                className="w-full bg-wn-surface border border-wn-border rounded-lg px-4 py-2.5 text-wn-text placeholder:text-wn-slate focus:outline-none focus:border-wn-teal transition-colors"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-sm text-wn-muted font-medium">
                What are you working on?
              </label>
              <textarea
                name="message"
                rows={4}
                required
                placeholder="Describe your environment, what's broken, or what you're trying to build."
                className="w-full bg-wn-surface border border-wn-border rounded-lg px-4 py-2.5 text-wn-text placeholder:text-wn-slate focus:outline-none focus:border-wn-teal transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 bg-wn-teal text-wn-midnight font-semibold rounded-lg hover:bg-wn-teal-muted transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending…" : "Send Request"}
            </button>
            {status === "error" && (
              <p className="text-red-400 text-sm text-center">
                Something went wrong — please try again or email us directly.
              </p>
            )}
          </form>
        )}

        {/* Cal.com inline embed — only renders if NEXT_PUBLIC_CAL_LINK is set */}
        <CalEmbed />

        {/* Direct contact */}
        <div className="border-t border-wn-border pt-8 space-y-2">
          <p className="text-wn-muted text-sm">Prefer email?</p>
          <a
            href="mailto:info@wittynetworks.com"
            className="text-wn-teal text-sm hover:text-wn-text transition-colors"
          >
            info@wittynetworks.com
          </a>
        </div>
      </div>
    </div>
  );
}
