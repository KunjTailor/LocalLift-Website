import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Reveal>
          <h1 className="text-4xl font-sans font-extrabold text-lift-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p>Last updated: [Date]</p>
            <p>LocalLift ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website ([Website URL]) or use our services.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">1. Information We Collect</h2>
            <p>We may collect personal information such as your name, email address, phone number, and business details when you fill out forms on our website or contact us directly.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to communicate with you, provide our services, improve our website, and send promotional materials (only if you have opted in).</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">3. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us at hello@locallift.local.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
