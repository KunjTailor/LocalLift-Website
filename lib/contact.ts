export type ContactField =
  | 'name'
  | 'business_name'
  | 'email'
  | 'phone'
  | 'website_url'
  | 'business_type'
  | 'message'
  | 'preferred_contact';

export interface ContactFormState {
  success: boolean;
  error?: string;
  fieldErrors?: Partial<Record<ContactField, string>>;
}

export const businessTypes = [
  'Landscaping or hardscaping',
  'Contracting or remodeling',
  'Auto detailing',
  'Pressure washing',
  'Painting',
  'Roofing',
  'Electrical',
  'Plumbing',
  'Another local service business',
] as const;

const requiredFields: ContactField[] = [
  'name',
  'business_name',
  'email',
  'business_type',
  'message',
  'preferred_contact',
];

export function validateContactSubmission(formData: FormData): ContactFormState {
  const fieldErrors: Partial<Record<ContactField, string>> = {};

  for (const field of requiredFields) {
    if (!String(formData.get(field) ?? '').trim()) {
      fieldErrors[field] = 'This field is required.';
    }
  }

  const email = String(formData.get('email') ?? '').trim();
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    fieldErrors.email = 'Enter a valid email address.';
  }

  const websiteUrl = String(formData.get('website_url') ?? '').trim();
  if (websiteUrl) {
    try {
      const parsedUrl = new URL(websiteUrl);
      if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
        throw new Error('Unsupported protocol');
      }
    } catch {
      fieldErrors.website_url = 'Enter a complete website URL.';
    }
  }

  const businessType = String(formData.get('business_type') ?? '').trim();
  if (
    businessType &&
    !businessTypes.includes(businessType as (typeof businessTypes)[number])
  ) {
    fieldErrors.business_type = 'Choose a listed business type.';
  }

  const preferredContact = String(formData.get('preferred_contact') ?? '').trim();
  if (preferredContact && !['Email', 'Phone', 'Either'].includes(preferredContact)) {
    fieldErrors.preferred_contact = 'Choose a valid contact preference.';
  }
  if (preferredContact === 'Phone' && !String(formData.get('phone') ?? '').trim()) {
    fieldErrors.phone = 'Add a phone number or choose email.';
  }

  const fieldLimits: Partial<Record<ContactField, [number, string]>> = {
    name: [100, 'Keep your name under 100 characters.'],
    business_name: [120, 'Keep the business name under 120 characters.'],
    email: [254, 'Keep the email address under 254 characters.'],
    phone: [40, 'Keep the phone number under 40 characters.'],
    website_url: [500, 'Keep the website URL under 500 characters.'],
    business_type: [100, 'Keep the business type under 100 characters.'],
    message: [3000, 'Keep your message under 3,000 characters.'],
    preferred_contact: [20, 'Choose a valid contact preference.'],
  };

  for (const [field, [limit, message]] of Object.entries(fieldLimits) as [
    ContactField,
    [number, string],
  ][]) {
    if (String(formData.get(field) ?? '').trim().length > limit) {
      fieldErrors[field] = message;
    }
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      success: false,
      error: 'Please complete the required fields.',
      fieldErrors,
    };
  }

  return { success: true };
}
