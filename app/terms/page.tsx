import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4 max-w-[800px]">
        <Reveal>
          <h1 className="text-4xl font-sans font-extrabold text-lift-navy mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p>Last updated: [Date]</p>
            <p>Please read these Terms of Service ("Terms") carefully before using the LocalLift website or services.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">2. Services and Payment</h2>
            <p>We offer website design, hosting, and maintenance services as described on our Pricing page. Payments are required according to the agreed-upon schedule (setup fee + monthly fee).</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">3. Ownership</h2>
            <p>Upon full payment of the setup fee and active status on the monthly plan, the website design and content you provided belong to you.</p>
            <h2 className="text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">4. Cancellation</h2>
            <p>You may cancel your monthly maintenance plan at any time with 30 days written notice. Certain transfer fees or processes may apply if you wish to migrate your site to another host.</p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
