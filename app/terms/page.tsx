import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/Badge';

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[800px]">
        <Reveal>
          <Badge className="mb-4 bg-cloud text-slate-text border-none">Legal</Badge>
          <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-lift-navy mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p className="text-sm font-semibold mb-8">Last updated: April 2026</p>
            <p>Please read these Terms of Service ("Terms") carefully before using the localliftstudio.com website or engaging LocalLift ("us", "we", or "our") for design services.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">1. Acceptance of Terms</h2>
            <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">2. Services and Payment</h2>
            <p>We offer website design, hosting, and maintenance services as described on our Pricing page. Payments are required according to the agreed-upon schedule (an initial setup fee plus an ongoing monthly subscription fee). Services commence upon receipt of the setup fee.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">3. Ownership & Intellectual Property</h2>
            <p>Upon full payment of the setup fee and active status on the monthly plan, the website design structure and the content you provided belong to you. We reserve the right to display the final website in our portfolio as Sample Work unless explicitly requested otherwise.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">4. Cancellation Policy</h2>
            <p>You may cancel your monthly maintenance and hosting plan at any time with 30 days written notice sent to localliftstudio@gmail.com. We will package your website assets and provide them to you for transfer to your own hosting provider. No refunds are provided for past months of hosting and support.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">5. Contact Information</h2>
            <p>For any questions regarding these Terms, please contact us:</p>
            <ul className="mt-4 space-y-1 bg-cloud p-6 rounded-card list-none">
              <li className="font-sans font-bold text-lift-navy">LocalLift Studio</li>
              <li>Downingtown, Pennsylvania</li>
              <li><a href="mailto:localliftstudio@gmail.com" className="text-lift-blue underline">localliftstudio@gmail.com</a></li>
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
