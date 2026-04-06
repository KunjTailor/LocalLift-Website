'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Mail, Clock, Phone, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';

function ContactForm() {
  const searchParams = useSearchParams();
  const planName = searchParams.get('plan');
  
  // Track submission status
  const [status, setStatus] = React.useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formsubmit.co/ajax/team@localliftstudios.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <Card className="p-8 md:p-12 border-border-color shadow-card bg-white text-center flex flex-col items-center justify-center min-h-[400px]">
        <div className="w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-sans font-bold text-lift-navy mb-4">Request Received</h3>
        <p className="text-slate-text text-base max-w-md mx-auto mb-2">
          Thank you for reaching out. We have received your inquiry.
        </p>
        <p className="text-slate-text text-sm max-w-md mx-auto">
           Kunj or Aryan will review your details and email you back at the address provided within <strong className="text-lift-navy">1 business day</strong>.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </Card>
    );
  }

  return (
    <Card className="p-6 md:p-8 border-border-color shadow-card bg-white relative">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Formsubmit Settings */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Website Inquiry" />

        {planName && (
          <div className="bg-soft-blue p-4 rounded-[12px] flex items-center justify-between border border-border-color/50 mb-2">
            <span className="text-sm font-semibold text-lift-navy">Selected package:</span>
            <Badge className="bg-lift-blue text-white capitalize">{planName} Plan</Badge>
            <input type="hidden" name="selected_plan" value={planName} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-lift-navy">Full Name <span className="text-error">*</span></label>
            <input 
              id="name" 
              name="name"
              type="text" 
              className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all disabled:opacity-50" 
              placeholder="John Doe" 
              required 
              disabled={status === 'submitting'}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-lift-navy">Email Address <span className="text-error">*</span></label>
            <input 
              id="email" 
              name="email"
              type="email" 
              className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all disabled:opacity-50" 
              placeholder="john@company.com" 
              required 
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="business" className="text-sm font-semibold text-lift-navy">Business Name <span className="text-error">*</span></label>
            <input 
              id="business" 
              name="business_name"
              type="text" 
              className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all disabled:opacity-50" 
              placeholder="Acme Services" 
              required 
              disabled={status === 'submitting'}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-semibold text-lift-navy">Current Website URL</label>
            <input 
              id="url" 
              name="website_url"
              type="url" 
              className="w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all disabled:opacity-50" 
              placeholder="https://example.com" 
              disabled={status === 'submitting'}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="help" className="text-sm font-semibold text-lift-navy">What do you need help with? <span className="text-error">*</span></label>
          <textarea 
            id="help" 
            name="message"
            rows={4} 
            className="w-full rounded-[12px] border border-border-color bg-white p-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue focus:border-transparent transition-all resize-none disabled:opacity-50" 
            placeholder="Please describe your current challenges or goals quickly..." 
            required 
            disabled={status === 'submitting'}
          />
        </div>

        {status === 'error' && (
          <p className="text-error text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
        )}

        <Button 
          type="submit" 
          size="lg" 
          className="w-full md:w-auto mt-2 transition-all relative disabled:bg-slate-300"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </Button>
      </form>
    </Card>
  );
}


export default function Contact() {
  return (
    <div className="bg-cloud min-h-screen pt-24 md:pt-32 pb-24 px-4">
      <div className="container mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="text-center mb-16">
          <Reveal>
            <Badge className="mb-4">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-sans font-extrabold text-lift-navy mb-6 tracking-tight">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-slate-text max-w-2xl mx-auto font-body">
              Fill out the form below or email us directly. We'll reply within 1 business day.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 pl-0">
           {/* Direct Contact Info */}
           <RevealList className="md:col-span-1 space-y-6">
              <Card className="p-6 border-border-color shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Email us</h4>
                <a href="mailto:team@localliftstudios.com" className="text-lift-blue text-sm hover:underline font-semibold block transition-all">team@localliftstudios.com</a>
              </Card>

              <Card className="p-6 border-border-color shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Response time</h4>
                <p className="text-slate-text text-sm font-medium">Within 1 business day</p>
              </Card>

              <Card className="p-6 border-border-color shadow-sm bg-white">
                <div className="w-10 h-10 rounded-full bg-soft-blue text-lift-blue flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">Book a call</h4>
                <p className="text-slate-text text-sm mb-4 font-medium">Schedule a 15-minute intro call directly with the founders.</p>
                <Button variant="outline" asChild className="w-full text-xs h-9">
                  <Link href="https://calendly.com/localliftstudio/quick-intro-call" target="_blank" rel="noopener noreferrer">View Calendar</Link>
                </Button>
              </Card>
           </RevealList>

           {/* Contact Form Wrapper */}
           <div className="md:col-span-2">
             <Reveal>
               <React.Suspense fallback={<div className="h-[400px] w-full bg-white rounded-card animate-pulse border border-border-color" />}>
                 <ContactForm />
               </React.Suspense>
             </Reveal>
           </div>
        </div>
      </div>
    </div>
  );
}

