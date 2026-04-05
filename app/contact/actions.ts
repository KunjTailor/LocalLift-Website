'use server';

export async function submitContactForm(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  
  // We'll use the Formspree endpoint that matches your email
  const response = await fetch("https://formspree.io/f/localliftstudio@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error("Formspree server-side error:", errorData);
    return { success: false, error: "Failed to send message" };
  }

  return { success: true };
}
