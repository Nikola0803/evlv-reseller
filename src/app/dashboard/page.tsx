import type { Metadata } from "next";
import { PartnerDashboardPreview } from "./PartnerDashboardPreview";

export const metadata: Metadata = {
  title: "Partner Command Preview",
  description: "Preview the EVLV Partner Network operating dashboard.",
  robots: { index: false, follow: false },
};

export default function PartnerDashboardPage() {
  return <PartnerDashboardPreview />;
}

