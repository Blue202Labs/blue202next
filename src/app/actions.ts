"use server";

import { ContactFormType } from "@/utils/contactForm.type";
import { FormState } from "./components/Contact";

export async function SendContactForm(
  contactBody: ContactFormType
): Promise<FormState> {
  try {
    const response = await fetch(process.env.NEXT_PUBLIC_CONTACT_ADDRESS!, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactBody),
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
