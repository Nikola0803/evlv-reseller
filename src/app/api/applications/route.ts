import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ApplicationBody = {
  fullName?: unknown;
  email?: unknown;
  phone?: unknown;
  businessName?: unknown;
  audience?: unknown;
  website?: unknown;
  experience?: unknown;
  company?: unknown;
};

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null) as ApplicationBody | null;
  if (!body) return NextResponse.json({ error: "Invalid application." }, { status: 400 });

  if (clean(body.company, 200)) {
    return NextResponse.json({ ok: true }, { status: 201 });
  }

  const fullName = clean(body.fullName, 120);
  const email = clean(body.email, 254).toLowerCase();
  const phone = clean(body.phone, 60);
  const businessName = clean(body.businessName, 160);
  const audience = clean(body.audience, 500);
  const website = clean(body.website, 500);
  const experience = clean(body.experience, 2000);

  if (!fullName || !email || !audience || !experience || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json({ error: "Please complete all required fields with a valid email address." }, { status: 400 });
  }

  const hasDirectCrmAccess = Boolean(process.env.CRM_API_URL && process.env.CRM_ORG_API_KEY && process.env.CRM_STORE_DOMAIN);
  const submissionUrl = hasDirectCrmAccess
    ? `${process.env.CRM_API_URL}/api/store/wholesale/inquiry`
    : process.env.PARTNER_APPLICATION_PROXY_URL || "https://www.evlvpeptides.com/api/wholesale/inquiry";
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (hasDirectCrmAccess) {
    headers["x-store-domain"] = process.env.CRM_STORE_DOMAIN!;
    headers["x-store-api-key"] = process.env.CRM_ORG_API_KEY!;
  }

  const crmResponse = await fetch(submissionUrl, {
    method: "POST",
    headers,
    cache: "no-store",
    body: JSON.stringify({
      programType: "EVLV Partner Reseller",
      companyName: businessName || `${fullName} Partner Application`,
      contactName: fullName,
      email,
      phone: phone || undefined,
      website: website || undefined,
      monthlyVolume: audience,
      message: experience,
    }),
  }).catch(() => null);

  if (!crmResponse) {
    return NextResponse.json({ error: "The EVLV review system could not be reached. Please try again." }, { status: 502 });
  }

  const result = await crmResponse.json().catch(() => ({}));
  if (!crmResponse.ok) {
    console.error("Partner application CRM submission failed", crmResponse.status, result);
    return NextResponse.json({ error: "The application could not be saved. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true }, { status: 201 });
}
