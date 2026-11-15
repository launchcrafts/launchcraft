import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "LaunchCraft's terms of service — the rules and guidelines for using our website and services.",
  alternates: { canonical: "https://launchcrafts.in/terms" },
};

export default function TermsPage() {
  return (
    <main className="flex flex-col">
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Terms of Service</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-secondary)" }}>
            Last updated: November 2026
          </p>
        </FadeIn>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto prose-launchcraft space-y-8" style={{ fontFamily: "var(--font-secondary)" }}>
          <div>
            <h2 className="text-xl italic text-foreground mb-3">1. Acceptance of Terms</h2>
            <p className="text-sm text-muted leading-relaxed">
              By accessing and using launchcrafts.in, you accept and agree to be bound by these Terms of Service.
              If you do not agree to these terms, please do not use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">2. Services</h2>
            <p className="text-sm text-muted leading-relaxed">
              LaunchCraft provides web development, AI automation, and brand identity services. Specific project terms,
              deliverables, timelines, and pricing are agreed upon separately for each engagement.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">3. Free Logo Maker</h2>
            <p className="text-sm text-muted leading-relaxed">
              Our AI Logo Maker is provided free of charge for personal and commercial use. Logos are generated
              using AI and may not be eligible for copyright or trademark protection in all jurisdictions.
              LaunchCraft does not guarantee exclusivity of AI-generated designs. Daily generation limits apply.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">4. Intellectual Property</h2>
            <p className="text-sm text-muted leading-relaxed">
              All website content, design, code, and branding on launchcrafts.in are the property of LaunchCraft
              unless otherwise stated. Client project deliverables are transferred to the client upon full payment
              as specified in individual project agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">5. Limitation of Liability</h2>
            <p className="text-sm text-muted leading-relaxed">
              LaunchCraft provides this website and its tools &ldquo;as is&rdquo; without warranties of any kind.
              We are not liable for any indirect, incidental, or consequential damages arising from your use
              of our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">6. User Conduct</h2>
            <p className="text-sm text-muted leading-relaxed">
              You agree not to misuse our services, submit false information through our forms, attempt to
              overwhelm our systems, or use our tools for any unlawful purpose.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">7. Changes to Terms</h2>
            <p className="text-sm text-muted leading-relaxed">
              We may update these terms from time to time. Continued use of our website after changes
              constitutes acceptance of the updated terms.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">8. Contact</h2>
            <p className="text-sm text-muted leading-relaxed">
              For questions about these terms, please email us at launchcrafts.in@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
