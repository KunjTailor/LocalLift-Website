import * as React from 'react';
import { LegalLayout } from '@/components/animations/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Notice" highlight={['Cookie']} lastUpdated="April 2026">
      <p>
        This Cookie Notice explains how LocalLift (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar
        technologies when you visit our website at localliftstudio.com.
      </p>

      <h2>What internal cookies do we use?</h2>
      <p>
        We use essential cookies to ensure our website functions correctly. These include session storage required for
        security, network management, and accessibility preferences. These cookies do not store personally identifiable
        information.
      </p>

      <h2>Analytics Cookies</h2>
      <p>
        We may use analytics cookies (such as basic traffic monitoring) to help us understand how visitors interact
        with our website to improve our user experience. This data is aggregated and anonymous.
      </p>

      <h2>Managing Cookies</h2>
      <p>
        You can manage your cookie preferences through your browser settings at any time. If you disable essential
        cookies, some parts of the site may not function properly.
      </p>

      <h2>Contact Us</h2>
      <p>If you have any questions about our use of cookies, please contact us at:</p>
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
