'use server';

import type { ContactFormState } from '../../lib/contact.ts';
import { validateContactSubmission } from '../../lib/contact.ts';

export type { ContactField, ContactFormState } from '../../lib/contact.ts';

const deliveryError = {
  success: false,
  error: "We couldn't send your request. Please try again or email us directly.",
} satisfies ContactFormState;

const resendEndpoint = 'https://api.resend.com/emails';
const recipient = 'team@localliftstudios.com';

export async function submitContactForm(formData: FormData) {
  if (String(formData.get('_honey') ?? '').trim()) {
    return { success: true } satisfies ContactFormState;
  }

  const validation = validateContactSubmission(formData);

  if (!validation.success) {
    return validation;
  }

  const readField = (name: string) => String(formData.get(name) ?? '').trim();
  const readSingleLine = (name: string) =>
    readField(name).replace(/[\u0000-\u001f\u007f]+/g, ' ').replace(/\s+/g, ' ');
  const requestedInquiryType = readSingleLine('inquiry_type');
  const inquiryType = ['Website build', 'Free website review', 'General question'].includes(
    requestedInquiryType,
  )
    ? requestedInquiryType
    : 'General question';
  const inquiry = {
    name: readSingleLine('name'),
    business_name: readSingleLine('business_name'),
    email: readField('email'),
    phone: readSingleLine('phone'),
    website_url: readSingleLine('website_url'),
    business_type: readSingleLine('business_type'),
    inquiry_type: inquiryType,
    preferred_contact: readSingleLine('preferred_contact'),
    message: readField('message'),
  };

  const apiKey = process.env.RESEND_API_KEY?.trim();
  const sender = process.env.RESEND_FROM_EMAIL?.trim();

  if (!apiKey || !sender || /[\r\n]/.test(sender)) {
    return deliveryError;
  }

  const text = [
    'New LocalLift website inquiry',
    '',
    `Name: ${inquiry.name}`,
    `Business: ${inquiry.business_name}`,
    `Email: ${inquiry.email}`,
    `Phone: ${inquiry.phone}`,
    `Website: ${inquiry.website_url}`,
    `Business type: ${inquiry.business_type}`,
    `Inquiry type: ${inquiry.inquiry_type}`,
    `Preferred contact: ${inquiry.preferred_contact}`,
    '',
    'Message:',
    inquiry.message,
  ].join('\n');

  try {
    const response = await fetch(resendEndpoint, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'User-Agent': 'LocalLift-Website/1.0',
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: inquiry.email,
        subject: 'New LocalLift website inquiry',
        text,
      }),
      cache: 'no-store',
      signal: AbortSignal.timeout(10_000),
    });

    if (response.ok) {
      return { success: true } satisfies ContactFormState;
    }

    return deliveryError;
  } catch {
    return deliveryError;
  }
}
