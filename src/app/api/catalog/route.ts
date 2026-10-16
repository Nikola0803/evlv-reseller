import { NextResponse } from "next/server";
import { getPublicCatalog } from "@/lib/crm-catalog";

export const dynamic = "force-dynamic";

export async function GET() {
  const products = await getPublicCatalog();
  return NextResponse.json({ products, syncedAt: new Date().toISOString() }, {
    headers: { "Cache-Control": "no-store, max-age=0" },
  });
}
