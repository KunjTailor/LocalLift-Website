'use client';

import * as React from 'react';
import Link from 'next/link';
import { CheckCircle2, LoaderCircle, Mail } from 'lucide-react';
import { submitContactForm } from '@/app/contact/actions';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { businessTypes, type ContactField, type ContactFormState } from '@/lib/contact';
import { siteConfig } from '@/lib/site';

type InquiryType = 'Website build' | 'Free website review' | 'General question';
type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

interface ContactFormProps {
  id: string;
  inquiryType: InquiryType;
  title: string;
  description: string;
  submitLabel: string;
}

const controlClassName =
  'min-h-12 w-full rounded-input border border-border-color bg-white px-4 text-base text-lift-navy outline-none transition-colors placeholder:text-slate-text focus:border-transparent focus:ring-2 focus:ring-lift-blue disabled:cursor-wait disabled:bg-slate-50 disabled:opacity-70';

const initialResponse: ContactFormState = { success: false };

export function ContactForm({
  id,
  inquiryType,
  title,
  description,
  submitLabel,
}: ContactFormProps) {
  const [status, setStatus] = React.useState<SubmissionStatus>('idle');
  const [response, setResponse] = React.useState<ContactFormState>(initialResponse);
  const [preferredContact, setPreferredContact] = React.useState('');
  const formRef = React.useRef<HTMLFormElement>(null);
  const feedbackRef = React.useRef<HTMLDivElement>(null);
  const successTitleRef = React.useRef<HTMLHeadingElement>(null);

  const isSubmitting = status === 'submitting';
  const fieldErrors = response.fieldErrors ?? {};
  const fieldId = (field: ContactField) => `${id}-${field}`;
  const errorId = (field: ContactField) => `${fieldId(field)}-error`;

  React.useEffect(() => {
    if (status === 'success') {
      successTitleRef.current?.focus();
    } else if (status === 'error') {
      feedbackRef.current?.focus();
    }
  }, [status]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setResponse(initialResponse);
    setStatus('submitting');

    try {
      const nextResponse: ContactFormState = await submitContactForm(formData);
      setResponse(nextResponse);

      if (nextResponse.success) {
        form.reset();
        setPreferredContact('');
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setResponse({
        success: false,
        error: "We couldn't send your request. Please try again or email us directly.",
      });
      setStatus('error');
    }
  };

  const resetForm = () => {
    setResponse(initialResponse);
    setPreferredContact('');
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <Card
        id={id}
        className="scroll-mt-32 border-lift-blue/20 bg-white p-8 text-center shadow-card md:p-12"
        role="status"
        aria-live="polite"
        aria-labelledby={`${id}-title`}
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10 text-success">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </div>
        <h2
          ref={successTitleRef}
          id={`${id}-title`}
          tabIndex={-1}
          className="text-2xl font-bold text-lift-navy outline-none md:text-3xl"
        >
          Request received
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-text">
          Thanks for sharing the details. We’ll review your request and follow up using your preferred contact method.
        </p>
        <p className="mt-3 text-sm text-slate-text">
          Need to add something?{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-bold text-lift-blue underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
          >
            Email us directly
          </a>
          .
        </p>
        <Button type="button" variant="outline" className="mt-8" onClick={resetForm}>
          Send Another Request
        </Button>
      </Card>
    );
  }

  return (
    <Card id={id} className="scroll-mt-32 border-lift-blue/20 bg-white p-6 shadow-card sm:p-8">
      <div className="border-b border-border-color pb-6">
        <p className="text-xs font-bold tracking-[0.14em] text-lift-blue uppercase">
          Short inquiry form
        </p>
        <h2 id={`${id}-title`} className="mt-2 text-2xl font-bold text-lift-navy md:text-3xl">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-text sm:text-base">
          {description}
        </p>
        <p className="mt-3 text-xs font-semibold text-slate-text">
          Fields marked <span className="text-error">*</span> are required.
        </p>
      </div>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-7 space-y-6"
        aria-busy={isSubmitting}
      >
        <input type="hidden" name="inquiry_type" value={inquiryType} />
        <div className="absolute -left-[10000px] h-px w-px overflow-hidden" aria-hidden="true">
          <label htmlFor={`${id}-company-website`}>Leave this field blank</label>
          <input
            id={`${id}-company-website`}
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            maxLength={100}
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={fieldId('name')} className="text-sm font-bold text-lift-navy">
              Name <span className="text-error" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('name')}
              name="name"
              type="text"
              required
              maxLength={100}
              autoComplete="name"
              autoCapitalize="words"
              placeholder="Jamie Rivera"
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? errorId('name') : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.name ? (
              <p id={errorId('name')} className="text-sm font-semibold text-error">
                {fieldErrors.name}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor={fieldId('business_name')} className="text-sm font-bold text-lift-navy">
              Business name <span className="text-error" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('business_name')}
              name="business_name"
              type="text"
              required
              maxLength={120}
              autoComplete="organization"
              autoCapitalize="words"
              placeholder="Rivera Electric"
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.business_name)}
              aria-describedby={fieldErrors.business_name ? errorId('business_name') : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.business_name ? (
              <p id={errorId('business_name')} className="text-sm font-semibold text-error">
                {fieldErrors.business_name}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={fieldId('email')} className="text-sm font-bold text-lift-navy">
              Email <span className="text-error" aria-hidden="true">*</span>
            </label>
            <input
              id={fieldId('email')}
              name="email"
              type="email"
              required
              maxLength={254}
              autoComplete="email"
              inputMode="email"
              spellCheck={false}
              placeholder="jamie@example.com"
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? errorId('email') : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.email ? (
              <p id={errorId('email')} className="text-sm font-semibold text-error">
                {fieldErrors.email}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor={fieldId('phone')} className="text-sm font-bold text-lift-navy">
              Phone{' '}
              {preferredContact === 'Phone' ? (
                <span className="text-error" aria-hidden="true">*</span>
              ) : (
                <span className="font-medium text-slate-text">(optional)</span>
              )}
            </label>
            <input
              id={fieldId('phone')}
              name="phone"
              type="tel"
              required={preferredContact === 'Phone'}
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
              placeholder="(610) 555-0123"
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.phone)}
              aria-describedby={fieldErrors.phone ? errorId('phone') : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.phone ? (
              <p id={errorId('phone')} className="text-sm font-semibold text-error">
                {fieldErrors.phone}
              </p>
            ) : null}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor={fieldId('website_url')} className="text-sm font-bold text-lift-navy">
              Current website URL <span className="font-medium text-slate-text">(optional)</span>
            </label>
            <input
              id={fieldId('website_url')}
              name="website_url"
              type="url"
              maxLength={500}
              autoComplete="url"
              inputMode="url"
              spellCheck={false}
              placeholder="https://example.com"
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.website_url)}
              aria-describedby={fieldErrors.website_url ? errorId('website_url') : undefined}
              disabled={isSubmitting}
            />
            {fieldErrors.website_url ? (
              <p id={errorId('website_url')} className="text-sm font-semibold text-error">
                {fieldErrors.website_url}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <label htmlFor={fieldId('business_type')} className="text-sm font-bold text-lift-navy">
              Type of business <span className="text-error" aria-hidden="true">*</span>
            </label>
            <select
              id={fieldId('business_type')}
              name="business_type"
              required
              defaultValue=""
              className={controlClassName}
              aria-invalid={Boolean(fieldErrors.business_type)}
              aria-describedby={fieldErrors.business_type ? errorId('business_type') : undefined}
              disabled={isSubmitting}
            >
              <option value="" disabled>
                Select your business type
              </option>
              {businessTypes.map((businessType) => (
                <option key={businessType} value={businessType}>
                  {businessType}
                </option>
              ))}
            </select>
            {fieldErrors.business_type ? (
              <p id={errorId('business_type')} className="text-sm font-semibold text-error">
                {fieldErrors.business_type}
              </p>
            ) : null}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor={fieldId('message')} className="text-sm font-bold text-lift-navy">
            What would you like help with? <span className="text-error" aria-hidden="true">*</span>
          </label>
          <textarea
            id={fieldId('message')}
            name="message"
            required
            rows={5}
            maxLength={3000}
            placeholder="Tell us about your services, current website, and what you want the new site to help customers do."
            className={`${controlClassName} resize-y py-3`}
            aria-invalid={Boolean(fieldErrors.message)}
            aria-describedby={fieldErrors.message ? errorId('message') : undefined}
            disabled={isSubmitting}
          />
          {fieldErrors.message ? (
            <p id={errorId('message')} className="text-sm font-semibold text-error">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>

        <fieldset
          className="space-y-3"
          aria-invalid={Boolean(fieldErrors.preferred_contact)}
          aria-describedby={
            fieldErrors.preferred_contact ? errorId('preferred_contact') : undefined
          }
        >
          <legend className="text-sm font-bold text-lift-navy">
            Preferred contact method <span className="text-error" aria-hidden="true">*</span>
          </legend>
          <div className="grid gap-3 sm:grid-cols-3">
            {['Email', 'Phone', 'Either'].map((method) => (
              <label
                key={method}
                className="flex min-h-12 cursor-pointer items-center gap-3 rounded-input border border-border-color bg-white px-4 text-sm font-semibold text-lift-navy transition-colors hover:border-lift-blue/50 has-checked:border-lift-blue has-checked:bg-soft-blue has-focus-visible:ring-2 has-focus-visible:ring-lift-blue has-focus-visible:ring-offset-2"
              >
                <input
                  type="radio"
                  name="preferred_contact"
                  value={method}
                  required
                  checked={preferredContact === method}
                  onChange={() => setPreferredContact(method)}
                  className="h-4 w-4 accent-lift-blue outline-none"
                  disabled={isSubmitting}
                />
                {method === 'Either' ? 'No preference' : method}
              </label>
            ))}
          </div>
          {fieldErrors.preferred_contact ? (
            <p id={errorId('preferred_contact')} className="text-sm font-semibold text-error">
              {fieldErrors.preferred_contact}
            </p>
          ) : null}
        </fieldset>

        {status === 'error' && response.error ? (
          <div
            ref={feedbackRef}
            tabIndex={-1}
            role="alert"
            className="rounded-card border border-error/25 bg-red-50 p-4 text-sm leading-6 text-error outline-none focus:ring-2 focus:ring-error focus:ring-offset-2"
          >
            <p className="font-bold">{response.error}</p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1 inline-flex font-bold underline underline-offset-4"
            >
              Email {siteConfig.email} instead
            </a>
          </div>
        ) : null}

        <p className="sr-only" role="status" aria-live="polite" aria-atomic="true">
          {isSubmitting ? 'Sending your request.' : ''}
        </p>

        <div className="flex flex-col gap-4 border-t border-border-color pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs leading-5 text-slate-text">
            We only use these details to respond to your inquiry. Read our{' '}
            <Link
              href="/privacy"
              className="font-bold text-lift-blue underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <Button type="submit" size="lg" className="w-full shrink-0 sm:w-auto" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <LoaderCircle className="mr-2 h-5 w-5 motion-safe:animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              submitLabel
            )}
          </Button>
        </div>

        <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-slate-text">
          <Mail className="h-4 w-4 shrink-0 text-lift-blue" aria-hidden="true" />
          Prefer email?{' '}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-bold text-lift-blue underline-offset-4 hover:underline focus-visible:rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lift-blue focus-visible:ring-offset-2"
          >
            {siteConfig.email}
          </a>
        </p>
      </form>
    </Card>
  );
}
