'use client';

import * as React from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Mail, Clock, Phone, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';
import { Reveal, RevealList } from '@/components/animations/Reveal';
import { PageHero } from '@/components/animations/PageHero';
import { Magnetic } from '@/components/animations/MagneticButton';

function ContactForm() {
  const searchParams = useSearchParams();
  const planName = searchParams.get('plan');

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
          Accept: 'application/json',
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
      <Card className="relative p-10 md:p-14 border-border-color shadow-card bg-white text-center flex flex-col items-center justify-center min-h-[400px] overflow-hidden">
        <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-success/10 blur-3xl" />
        <div className="relative w-16 h-16 bg-success/10 text-success rounded-full flex items-center justify-center mb-6 animate-[float_3s_ease-in-out_infinite]">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="relative text-2xl font-sans font-bold text-lift-navy mb-4">Request Received</h3>
        <p className="relative text-slate-text text-base max-w-md mx-auto mb-2">
          Thank you for reaching out. We have received your inquiry.
        </p>
        <p className="relative text-slate-text text-sm max-w-md mx-auto">
          Kunj or Aryan will review your details and email you back at the address provided within{' '}
          <strong className="text-lift-navy">1 business day</strong>.
        </p>
        <Button variant="outline" className="relative mt-8" onClick={() => setStatus('idle')}>
          Send Another Message
        </Button>
      </Card>
    );
  }

  const inputBase =
    'w-full h-12 rounded-input border border-border-color bg-white px-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue/40 focus:border-lift-blue transition-all disabled:opacity-50';

  return (
    <Card className="relative p-6 md:p-8 border-border-color shadow-card bg-white overflow-hidden">
      <div aria-hidden className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-lift-blue/5 blur-3xl pointer-events-none" />
      <form onSubmit={handleSubmit} className="relative space-y-6">
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_subject" value="New Website Inquiry" />

        {planName && (
          <div className="bg-gradient-to-r from-soft-blue to-white p-4 rounded-[12px] flex items-center justify-between border border-lift-blue/20 mb-2">
            <span className="text-sm font-semibold text-lift-navy">Selected package:</span>
            <Badge className="bg-gradient-to-r from-lift-blue to-purple-500 text-white capitalize border-none">
              {planName} Plan
            </Badge>
            <input type="hidden" name="selected_plan" value={planName} />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-semibold text-lift-navy">
              Full Name <span className="text-error">*</span>
            </label>
            <input id="name" name="name" type="text" className={inputBase} placeholder="John Doe" required disabled={status === 'submitting'} />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold text-lift-navy">
              Email Address <span className="text-error">*</span>
            </label>
            <input id="email" name="email" type="email" className={inputBase} placeholder="john@company.com" required disabled={status === 'submitting'} />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="business" className="text-sm font-semibold text-lift-navy">
              Business Name <span className="text-error">*</span>
            </label>
            <input id="business" name="business_name" type="text" className={inputBase} placeholder="Acme Services" required disabled={status === 'submitting'} />
          </div>
          <div className="space-y-2">
            <label htmlFor="url" className="text-sm font-semibold text-lift-navy">
              Current Website URL
            </label>
            <input id="url" name="website_url" type="url" className={inputBase} placeholder="https://example.com" disabled={status === 'submitting'} />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="help" className="text-sm font-semibold text-lift-navy">
            What do you need help with? <span className="text-error">*</span>
          </label>
          <textarea
            id="help"
            name="message"
            rows={4}
            className="w-full rounded-[12px] border border-border-color bg-white p-4 text-sm font-body text-lift-navy placeholder:text-muted-slate focus:outline-none focus:ring-2 focus:ring-lift-blue/40 focus:border-lift-blue transition-all resize-none disabled:opacity-50"
            placeholder="Please describe your current challenges or goals quickly..."
            required
            disabled={status === 'submitting'}
          />
        </div>

        {status === 'error' && (
          <p className="text-error text-sm font-medium">Something went wrong. Please try again or email us directly.</p>
        )}

        <Magnetic strength={0.18}>
          <Button
            type="submit"
            size="lg"
            className="w-full md:w-auto mt-2 group relative overflow-hidden disabled:bg-slate-300"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <span className="relative z-10 flex items-center">
                  Send Message
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </>
            )}
          </Button>
        </Magnetic>
      </form>
    </Card>
  );
}

export default function Contact() {
  const cards = [
    {
      Icon: Mail,
      title: 'Email us',
      body: (
        <a href="mailto:team@localliftstudios.com" className="text-lift-blue text-sm hover:underline font-semibold">
          team@localliftstudios.com
        </a>
      ),
    },
    {
      Icon: Clock,
      title: 'Response time',
      body: <p className="text-slate-text text-sm font-medium">Within 1 business day</p>,
    },
  ];

  return (
    <div className="bg-cloud min-h-screen">
      <PageHero
        badge="Contact Us"
        title="Get in touch"
        highlight={['touch']}
        subtitle="Fill out the form below or email us directly. We'll reply within 1 business day."
      />

      <div className="container mx-auto max-w-[1100px] px-4 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <RevealList className="md:col-span-1 space-y-5">
            {cards.map(({ Icon, title, body }) => (
              <Card key={title} className="group p-6 border-border-color shadow-sm bg-white hover:shadow-card hover:-translate-y-1 hover:border-lift-blue/40 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-soft-blue text-lift-blue flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-sans font-bold text-lift-navy mb-1">{title}</h4>
                {body}
              </Card>
            ))}

            <Card className="group p-6 border-border-color shadow-sm bg-white hover:shadow-card hover:-translate-y-1 hover:border-lift-blue/40 transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-soft-blue text-lift-blue flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                <Phone className="w-5 h-5" />
              </div>
              <h4 className="font-sans font-bold text-lift-navy mb-1">Book a call</h4>
              <p className="text-slate-text text-sm mb-4 font-medium">
                Schedule a 15-minute intro call directly with the founders.
              </p>
              <Button variant="outline" asChild className="w-full text-xs h-9">
                <Link
                  href="https://calendly.com/localliftstudio/quick-intro-call"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Calendar
                </Link>
              </Button>
            </Card>
          </RevealList>

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
