import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy | Sinavro",
  description: "Sinavro privacy policy in 24 supported languages",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <PrivacyPolicy />
    </main>
  );
}
