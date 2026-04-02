import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Reveal>
          <h1 className="text-4xl font-sans font-extrabold text-lift-navy mb-8">Cookie Notice</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p>Last updated: [Date]</p>
            <p>This Cookie Notice explains how LocalLift uses cookies and similar technologies when you visit our website.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">What internal cookies do we use?</h2>
            <p>We use essential cookies to ensure our website functions correctly (e.g., security, network management, and accessibility).</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">Analytics Cookies</h2>
            <p>We may use analytics cookies (like Google Analytics) to help us understand how visitors interact with our website to improve user experience.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">Managing Cookies</h2>
            <p>You can manage your cookie preferences through your browser settings at any time.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
