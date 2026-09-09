import * as React from 'react';
import { LegalLayout } from '@/components/animations/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" highlight={['Terms']} lastUpdated="April 2026">
      <p>
        Please read these Terms of Service (&quot;Terms&quot;) carefully before using the localliftstudio.com website or
        engaging LocalLift (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;) for design services.
      </p>

      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the
        terms, you may not access the service.
      </p>

      <h2>2. Services and Payment</h2>
      <p>
        We offer website design and build services as described on our Pricing page. The standard service is The
        Complete Launch Package, a flat $500 one-time project fee. Payment timing is stated in the applicable proposal
        or invoice, and the full balance is due before final launch or handoff unless agreed otherwise in writing.
      </p>

      <h2>3. Ownership &amp; Intellectual Property</h2>
      <p>
        Upon full payment of the project fee, the website design structure, its files, and the content you provided
        belong to you, along with the agreed access. No further payment to LocalLift is required after handoff. We
        reserve the right to display the final website in our portfolio as Sample Work unless explicitly requested
        otherwise.
      </p>

      <h2>4. Third-Party Costs &amp; Post-Launch Fixes</h2>
      <p>
        You are responsible for domain registration, hosting, premium software, and other third-party services
        associated with the website, paid directly to those providers. We correct build issues within the delivered
        scope free of charge for 14 days after launch. New pages, redesigns, or additional functionality are quoted
        separately.
      </p>

      <h2>5. Contact Information</h2>
      <p>For any questions regarding these Terms, please contact us:</p>
      <ul className="!list-none !pl-0 mt-4 space-y-1 bg-cloud p-6 rounded-card">
        <li className="font-sans font-bold text-lift-navy">LocalLift Studio</li>
        <li>Downingtown, Pennsylvania</li>
        <li>
          <a href="mailto:team@localliftstudios.com">team@localliftstudios.com</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
