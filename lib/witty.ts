// Witty agent client
// Phase 1: stub
// Phase 2: proxy requests to Witty's OpenWebUI/Hermes endpoint

const WITTY_ENDPOINT = process.env.WITTY_ENDPOINT ?? "";

export interface WittyQuery {
  role: "client" | "engineer";
  message: string;
  context?: Record<string, unknown>;
}

export interface WittyResponse {
  reply: string;
  actions?: { type: string; payload: unknown }[];
}

export async function queryWitty(query: WittyQuery): Promise<WittyResponse> {
  if (!WITTY_ENDPOINT) {
    return { reply: "Witty is not yet configured." };
  }
  const res = await fetch(WITTY_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(query),
  });
  return res.json();
}
