import type { Metadata } from "next";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "LaunchCraft's privacy policy — how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://launchcrafts.in/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="flex flex-col">
      <section className="py-20 px-6 text-center border-b border-hairline">
        <FadeIn>
          <p className="text-[10px] tracking-[0.35em] uppercase text-brand-green mb-4">Legal</p>
          <h1 className="text-4xl sm:text-5xl italic text-foreground mb-6">Privacy Policy</h1>
          <div className="w-12 h-px bg-hairline mx-auto mb-6" />
          <p className="text-sm text-muted max-w-md mx-auto leading-relaxed" style={{ fontFamily: "var(--font-secondary)" }}>
            Last updated: November 2026
          </p>
        </FadeIn>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto prose-launchcraft space-y-8" style={{ fontFamily: "var(--font-secondary)" }}>
          <div>
            <h2 className="text-xl italic text-foreground mb-3">1. Information We Collect</h2>
            <p className="text-sm text-muted leading-relaxed">
              We collect information you provide directly, including your name, email address, phone number (optional),
              and project details when you use our contact form or logo maker lead form. We also collect usage data
              through Google Analytics (page views, device type, approximate location).
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">2. How We Use Your Information</h2>
            <p className="text-sm text-muted leading-relaxed">
              We use your information to: respond to project inquiries, deliver the services you request,
              follow up about logos created with our free tool, improve our website and services, and
              send occasional updates about our work (only if you&rsquo;ve opted in).
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">3. Data Sharing</h2>
            <p className="text-sm text-muted leading-relaxed">
              We do not sell, rent, or share your personal information with third parties for marketing purposes.
              We may share data with service providers who help us operate our business (e.g., email delivery, hosting),
              and they are bound by confidentiality obligations.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">4. Cookies &amp; Analytics</h2>
            <p className="text-sm text-muted leading-relaxed">
              We use Google Analytics to understand how visitors use our site. This service may use cookies to
              collect anonymous usage data. We also use Cloudflare Turnstile for bot protection, which may set
              necessary cookies. You can control cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">5. Data Security</h2>
            <p className="text-sm text-muted leading-relaxed">
              We implement reasonable technical and organizational measures to protect your personal data.
              All data is transmitted over HTTPS. However, no method of transmission over the internet is
              100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">6. Your Rights</h2>
            <p className="text-sm text-muted leading-relaxed">
              You may request access to, correction of, or deletion of your personal data at any time by
              contacting us at launchcrafts.in@gmail.com. We will respond to your request within 30 days.
            </p>
          </div>

          <div>
            <h2 className="text-xl italic text-foreground mb-3">7. Contact</h2>
            <p className="text-sm text-muted leading-relaxed">
              For privacy-related questions, please email us at launchcrafts.in@gmail.com.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
