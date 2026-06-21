import { NextRequest, NextResponse } from "next/server";

// Stub — will proxy to Witty agent for field engineer knowledge base queries
export async function POST(_req: NextRequest) {
  return NextResponse.json({ error: "Not yet implemented" }, { status: 501 });
}
