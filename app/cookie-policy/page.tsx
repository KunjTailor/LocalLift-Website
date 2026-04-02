import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/Badge';

export default function CookiePolicy() {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[800px]">
        <Reveal>
          <Badge className="mb-4 bg-cloud text-slate-text border-none">Legal</Badge>
          <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-lift-navy mb-8">Cookie Notice</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p className="text-sm font-semibold mb-8">Last updated: April 2026</p>
            <p>This Cookie Notice explains how LocalLift ("we", "us", or "our") uses cookies and similar technologies when you visit our website at localliftstudio.com.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">What internal cookies do we use?</h2>
            <p>We use essential cookies to ensure our website functions correctly. These include session storage required for security, network management, and accessibility preferences. These cookies do not store personally identifiable information.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">Analytics Cookies</h2>
            <p>We may use analytics cookies (such as basic traffic monitoring) to help us understand how visitors interact with our website to improve our user experience. This data is aggregated and anonymous.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">Managing Cookies</h2>
            <p>You can manage your cookie preferences through your browser settings at any time. If you disable essential cookies, some parts of the site may not function properly.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">Contact Us</h2>
            <p>If you have any questions about our use of cookies, please contact us at:</p>
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
