import assert from 'node:assert/strict';
import test from 'node:test';

import { submitContactForm } from '../app/contact/actions.ts';

function validFormData() {
  const formData = new FormData();
  formData.set('name', '  Jamie Rivera  ');
  formData.set('business_name', '  Rivera Electric  ');
  formData.set('email', 'jamie@example.com');
  formData.set('business_type', 'Electrical');
  formData.set('message', 'We need a professional five-page website.');
  formData.set('preferred_contact', 'Email');
  return formData;
}

function useTestEmailProvider() {
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalFromEmail = process.env.RESEND_FROM_EMAIL;

  process.env.RESEND_API_KEY = 're_test_local_lift';
  process.env.RESEND_FROM_EMAIL = 'LocalLift Studios <website@send.localliftstudios.com>';

  return () => {
    if (originalApiKey === undefined) {
      delete process.env.RESEND_API_KEY;
    } else {
      process.env.RESEND_API_KEY = originalApiKey;
    }

    if (originalFromEmail === undefined) {
      delete process.env.RESEND_FROM_EMAIL;
    } else {
      process.env.RESEND_FROM_EMAIL = originalFromEmail;
    }
  };
}

test('rejects an incomplete inquiry before contacting the form provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  try {
    const result = await submitContactForm(new FormData());

    assert.equal(result.success, false);
    assert.equal(result.error, 'Please complete the required fields.');
    assert.deepEqual(Object.keys(result.fieldErrors ?? {}).sort(), [
      'business_name',
      'business_type',
      'email',
      'message',
      'name',
      'preferred_contact',
    ]);
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects an invalid email address before contacting the form provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('email', 'not-an-email');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.email, 'Enter a valid email address.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('silently accepts a honeypot submission without contacting the form provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('_honey', 'https://spam.example');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.deepEqual(result, { success: true });
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('sends a normalized allow-listed plain-text inquiry to Resend', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  const formData = validFormData();
  formData.set('phone', '  (610) 555-0123  ');
  formData.set('website_url', '  https://riveraelectric.example  ');
  formData.set('inquiry_type', 'Website build');
  formData.set('unexpected', 'must not be forwarded');

  let requestUrl = '';
  let requestInit;
  globalThis.fetch = async (url, init) => {
    requestUrl = String(url);
    requestInit = init;
    return new Response(JSON.stringify({ success: 'true' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  };

  try {
    const result = await submitContactForm(formData);

    assert.deepEqual(result, { success: true });
    assert.equal(requestUrl, 'https://api.resend.com/emails');
    assert.equal(requestInit?.method, 'POST');
    assert.equal(requestInit?.headers?.Authorization, 'Bearer re_test_local_lift');
    assert.equal(requestInit?.headers?.['Content-Type'], 'application/json');
    assert.equal(requestInit?.headers?.['User-Agent'], 'LocalLift-Website/1.0');
    assert.deepEqual(JSON.parse(String(requestInit?.body)), {
      from: 'LocalLift Studios <website@send.localliftstudios.com>',
      to: ['team@localliftstudios.com'],
      reply_to: 'jamie@example.com',
      subject: 'New LocalLift website inquiry',
      text: [
        'New LocalLift website inquiry',
        '',
        'Name: Jamie Rivera',
        'Business: Rivera Electric',
        'Email: jamie@example.com',
        'Phone: (610) 555-0123',
        'Website: https://riveraelectric.example',
        'Business type: Electrical',
        'Inquiry type: Website build',
        'Preferred contact: Email',
        '',
        'Message:',
        'We need a professional five-page website.',
      ].join('\n'),
    });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});

test('does not contact Resend when its server-only API key is missing', async () => {
  const originalFetch = globalThis.fetch;
  const originalApiKey = process.env.RESEND_API_KEY;
  let fetchCalls = 0;

  delete process.env.RESEND_API_KEY;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(validFormData());

    assert.deepEqual(result, {
      success: false,
      error: "We couldn't send your request. Please try again or email us directly.",
    });
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalApiKey === undefined) {
      delete process.env.RESEND_API_KEY;
    } else {
      process.env.RESEND_API_KEY = originalApiKey;
    }
  }
});

test('does not contact Resend when its verified-domain sender is missing', async () => {
  const originalFetch = globalThis.fetch;
  const originalApiKey = process.env.RESEND_API_KEY;
  const originalFromEmail = process.env.RESEND_FROM_EMAIL;
  let fetchCalls = 0;

  process.env.RESEND_API_KEY = 're_test_local_lift';
  delete process.env.RESEND_FROM_EMAIL;
  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(validFormData());

    assert.deepEqual(result, {
      success: false,
      error: "We couldn't send your request. Please try again or email us directly.",
    });
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
    if (originalApiKey === undefined) delete process.env.RESEND_API_KEY;
    else process.env.RESEND_API_KEY = originalApiKey;
    if (originalFromEmail === undefined) delete process.env.RESEND_FROM_EMAIL;
    else process.env.RESEND_FROM_EMAIL = originalFromEmail;
  }
});

test('uses the configured verified-domain sender address', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  process.env.RESEND_FROM_EMAIL = 'LocalLift Studios <inquiries@send.localliftstudios.com>';
  let submittedBody = '';

  globalThis.fetch = async (_url, init) => {
    submittedBody = String(init?.body);
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(validFormData());

    assert.deepEqual(result, { success: true });
    assert.equal(
      JSON.parse(submittedBody).from,
      'LocalLift Studios <inquiries@send.localliftstudios.com>',
    );
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});

test('returns a useful error when the form provider is unavailable', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  globalThis.fetch = async () => {
    throw new Error('network unavailable');
  };

  try {
    const result = await submitContactForm(validFormData());

    assert.deepEqual(result, {
      success: false,
      error: "We couldn't send your request. Please try again or email us directly.",
    });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});

test('returns a useful error when Resend rejects the request', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  globalThis.fetch = async () => new Response('{"message":"forbidden"}', { status: 403 });

  try {
    const result = await submitContactForm(validFormData());

    assert.deepEqual(result, {
      success: false,
      error: "We couldn't send your request. Please try again or email us directly.",
    });
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});

test('rejects a malformed optional website URL before contacting the provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('website_url', 'not a website');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.website_url, 'Enter a complete website URL.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects an overlong inquiry message before contacting the provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('message', 'x'.repeat(3001));

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.message, 'Keep your message under 3,000 characters.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects an unsupported contact preference before contacting the provider', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('preferred_contact', 'Carrier pigeon');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.preferred_contact, 'Choose a valid contact preference.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('rejects a business type that is not offered by the form', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('business_type', 'Enterprise software');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.business_type, 'Choose a listed business type.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('collapses control characters in single-line fields before delivery', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  const formData = validFormData();
  formData.set('name', 'Jamie\nRivera');
  formData.set('business_name', 'Rivera\tElectric');
  formData.set('phone', '(610) 555-0123\r\next. 4');
  let submittedBody = '';

  globalThis.fetch = async (_url, init) => {
    submittedBody = String(init?.body);
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);
    const text = JSON.parse(submittedBody).text;

    assert.deepEqual(result, { success: true });
    assert.match(text, /Name: Jamie Rivera/);
    assert.match(text, /Business: Rivera Electric/);
    assert.match(text, /Phone: \(610\) 555-0123 ext\. 4/);
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});

test('requires a phone number when phone is the preferred contact method', async () => {
  const originalFetch = globalThis.fetch;
  let fetchCalls = 0;
  const formData = validFormData();
  formData.set('preferred_contact', 'Phone');

  globalThis.fetch = async () => {
    fetchCalls += 1;
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, false);
    assert.equal(result.fieldErrors?.phone, 'Add a phone number or choose email.');
    assert.equal(fetchCalls, 0);
  } finally {
    globalThis.fetch = originalFetch;
  }
});

test('normalizes an unsupported inquiry type to a general question', async () => {
  const originalFetch = globalThis.fetch;
  const restoreEmailProvider = useTestEmailProvider();
  const formData = validFormData();
  formData.set('inquiry_type', '<script>unexpected</script>');
  let submittedBody = '';

  globalThis.fetch = async (_url, init) => {
    submittedBody = String(init?.body);
    return new Response('{}', { status: 200 });
  };

  try {
    const result = await submitContactForm(formData);

    assert.equal(result.success, true);
    assert.match(JSON.parse(submittedBody).text, /Inquiry type: General question/);
  } finally {
    globalThis.fetch = originalFetch;
    restoreEmailProvider();
  }
});
