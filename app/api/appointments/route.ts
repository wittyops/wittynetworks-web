import { NextRequest, NextResponse } from "next/server";

// Stub — will be routed through Witty agent (CalDAV + notification integration)
export async function GET(_req: NextRequest) {
  return NextResponse.json({ appointments: [] });
}

export async function POST(_req: NextRequest) {
  return NextResponse.json({ error: "Not yet implemented" }, { status: 501 });
}
