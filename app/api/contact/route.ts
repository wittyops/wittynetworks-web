import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Push to ntfy for immediate notification
  const ntfyUrl = process.env.NTFY_URL;
  const ntfyTopic = process.env.NTFY_TOPIC ?? "witty-contact";
  if (ntfyUrl) {
    await fetch(`${ntfyUrl}/${ntfyTopic}`, {
      method: "POST",
      headers: {
        Title: `New inquiry — ${name}`,
        Priority: "default",
        Tags: "envelope",
        ...(process.env.NTFY_TOKEN && { Authorization: `Bearer ${process.env.NTFY_TOKEN}` }),
      },
      body: `From: ${name} <${email}>\n\n${message}`,
    }).catch(() => {}); // non-blocking
  }

  // TODO: Phase 2 — route through Witty agent for triage + calendar booking

  return NextResponse.json({ ok: true });
}
