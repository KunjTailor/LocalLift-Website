import * as React from 'react';
import { LegalLayout } from '@/components/animations/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" highlight={['Privacy']} lastUpdated="April 2026">
      <p>
        LocalLift (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we
        collect, use, and share your personal information when you visit our website (localliftstudio.com) or use our
        web design services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information such as your name, email address, phone number, and business details when
        you fill out forms on our website or contact us directly. We only collect the information necessary to provide
        our services to you.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Communicate with you regarding our services and your projects.</li>
        <li>Provide, maintain, and improve our website and design services.</li>
        <li>Send promotional materials (only if you have explicitly opted in).</li>
      </ul>

      <h2>3. Data Security and Sharing</h2>
      <p>
        We do not sell, trade, or rent your personal identification information to others. We employ appropriate data
        collection, storage, and processing practices and security measures to protect against unauthorized access or
        disclosure.
      </p>

      <h2>4. Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this
        site, please contact us at:
      </p>
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
