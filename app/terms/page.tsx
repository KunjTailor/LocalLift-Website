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
        We offer website design, hosting, and maintenance services as described on our Pricing page. Payments are
        required according to the agreed-upon schedule (an initial setup fee plus an ongoing monthly subscription fee).
        Services commence upon receipt of the setup fee.
      </p>

      <h2>3. Ownership &amp; Intellectual Property</h2>
      <p>
        Upon full payment of the setup fee and active status on the monthly plan, the website design structure and the
        content you provided belong to you. We reserve the right to display the final website in our portfolio as
        Sample Work unless explicitly requested otherwise.
      </p>

      <h2>4. Cancellation Policy</h2>
      <p>
        You may cancel your monthly maintenance and hosting plan at any time with 30 days written notice sent to
        team@localliftstudios.com. We will package your website assets and provide them to you for transfer to your own
        hosting provider. No refunds are provided for past months of hosting and support.
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
