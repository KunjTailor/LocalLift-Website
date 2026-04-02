import * as React from 'react';
import { Reveal } from '@/components/animations/Reveal';
import { Badge } from '@/components/ui/Badge';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[800px]">
        <Reveal>
          <Badge className="mb-4 bg-cloud text-slate-text border-none">Legal</Badge>
          <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-lift-navy mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-text font-body space-y-6">
            <p className="text-sm font-semibold mb-8">Last updated: April 2026</p>
            <p>LocalLift ("we", "our", or "us") respects your privacy. This Privacy Policy explains how we collect, use, and share your personal information when you visit our website (localliftstudio.com) or use our web design services.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">1. Information We Collect</h2>
            <p>We may collect personal information such as your name, email address, phone number, and business details when you fill out forms on our website or contact us directly. We only collect the information necessary to provide our services to you.</p>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">2. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Communicate with you regarding our services and your projects.</li>
              <li>Provide, maintain, and improve our website and design services.</li>
              <li>Send promotional materials (only if you have explicitly opted in).</li>
            </ul>
            
            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">3. Data Security and Sharing</h2>
            <p>We do not sell, trade, or rent your personal identification information to others. We employ appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access or disclosure.</p>

            <h2 className="text-xl md:text-2xl font-sans font-bold text-lift-navy mt-10 mb-4">4. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:</p>
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
