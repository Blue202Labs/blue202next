"use server";

import { ContactFormType, FormState } from "@/app/lib/contactForm.type";

export async function sendContactForm(
  formState: FormState,
  formData: FormData
) {
  try {
    const request = {
      name: formData.get("yourName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      companyName: formData.get("companyName"),
      inquiryType: formData.get("inquiryType"),
      message: formData.get("message"),
    };

    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ADDRESS!, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });

    if (response.ok) {
      return FormState.Sent;
    } else {
      return FormState.Failed;
    }
  } catch {
    return FormState.Failed;
  }
}
