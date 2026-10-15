import type { Metadata } from "next";
import { PartnerSetupWizard } from "./PartnerSetupWizard";

export const metadata: Metadata = { title: "Partner Setup Preview", robots: { index: false, follow: false } };

export default function PartnerSetupPage() { return <PartnerSetupWizard />; }

