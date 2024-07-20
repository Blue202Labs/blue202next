import { Static, Type } from "@sinclair/typebox";

export enum InquiryType {
  Default = "Default",
  General = "General",
  Website = "Website",
  WebApp = "WebApp",
  Design = "Design",
  Support = "Support",
}

export const ContactForm = Type.Object({
  name: Type.String(),
  companyName: Type.String(),
  email: Type.String({ format: "email" }),
  phone: Type.String(),
  inquiryType: Type.Enum(InquiryType),
  message: Type.String(),
});

export enum FormState {
  Unsent,
  Loading,
  Sent,
  Failed,
}

export type ContactFormType = Static<typeof ContactForm>;
