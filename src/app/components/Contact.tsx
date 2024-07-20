"use client";

import {
  BaseSyntheticEvent,
  ChangeEventHandler,
  ReactNode,
  useState,
} from "react";
import { BeatLoader } from "react-spinners";
import { PopUp } from "../home/PopUp";
import { FormState, InquiryType } from "../../utils/contactForm.type";
import { sendContactForm } from "../actions";
import { useFormState, useFormStatus } from "react-dom";

const initialFormData = {
  yourName: "",
  email: "",
  phone: "",
  companyName: "",
  inquiryType: InquiryType.Default,
  message: "",
};

export const Contact = () => {
  const [validated, setValidated] = useState(true);
  const [formState, submitAction] = useFormState(
    sendContactForm,
    FormState.Unsent
  );

  const handleChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    validateProperty(name, value);
  };

  const validateProperty = (id: string, value: string) => {
    const target = document.querySelector(`#${id}`) as HTMLInputElement;
    const parent = target.parentElement;
    const label = document.querySelector(
      `#label-${target.id}`
    ) as HTMLLabelElement;

    if (target.id !== "inquiryType" && value === "") {
      parent?.classList.add("border-red-400");
      label?.classList.add("text-red-500");

      setValidated(false);
      return false;
    } else {
      parent?.classList.remove("border-red-400");
      label?.classList.remove("text-red-500");

      setValidated(true);
      return true;
    }
  };
  /*
  const handleSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();

    let validated = true;
    for (const [key, value] of Object.entries(formData)) {
      if (!validateProperty(key, value)) {
        validated = false;
      }
    }
    setValidated(validated);

    if (!validated) {
      return;
    }
  };*/

  let showPopUp =
    formState === FormState.Sent || formState === FormState.Failed;

  return (
    <>
      {showPopUp && (
        <PopUp
          show={showPopUp}
          id="popup-contact"
          closeCallback={() => {
            showPopUp = false;
          }}
          heading={
            formState === FormState.Sent && showPopUp
              ? "Inquiry Sent"
              : "Something went wrong!"
          }
          message={
            formState === FormState.Sent
              ? "Thank you for contacting us! We aim to reply promptly."
              : "Apologies, try emailing us at info@blue202labs.com if this issue persists."
          }
        />
      )}
      <form
        id="contact"
        action={submitAction}
        className="flex flex-col max-w-2xl mx-auto gap-2 md:gap-8 px-4 md:px-0 mb-32 scroll-m-20 overflow-hidden transition duration-200"
      >
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <div
            className={
              "mb-4 flex flex-col pt-6 border-b-2 border-slate-500 focus-within:border-blue-accent "
            }
          >
            <Label htmlFor="yourName">Your Name</Label>
            <input
              type="text"
              id="yourName"
              name="yourName"
              onChange={handleChange}
              className="w-full px-3 py-2 outline-none text-2xl text-slate-600 font-light text-start"
            />
          </div>
          <div
            className={
              "mb-4 flex flex-col pt-6 border-b-2 border-slate-500 focus-within:border-blue-accent "
            }
          >
            <Label htmlFor="companyName">Company Name</Label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              onChange={handleChange}
              className="w-full px-3 py-2 outline-none text-2xl text-slate-600 font-light text-start"
            />
          </div>
        </div>

        <InputElement type="email" id="email" onChange={handleChange}>
          Email
        </InputElement>

        <InputElement type="tel" id="phone" onChange={handleChange}>
          Phone
        </InputElement>

        <div className="mb-4 flex flex-col md:flex-row pt-6 border-b-2 border-slate-500 focus-within:border-blue-accent">
          <Label className="pr-24 py-2" htmlFor="inquiryType">
            Inquiry Type
          </Label>
          <select
            id="inquiryType"
            name="inquiryType"
            onChange={handleChange}
            className="w-full bg-white text-xl md:text-2xl font-light text-slate-600 md:pl-20"
            required
          >
            <option value="">Select Inquiry Type</option>
            <option value={InquiryType.General}>General Inquiry</option>
            <option value={InquiryType.Website}>Website</option>
            <option value={InquiryType.WebApp}>Web App/Software</option>
            <option value={InquiryType.Design}>Design/Marketing</option>
            <option value={InquiryType.Support}>Support</option>
          </select>
        </div>

        <div className="mb-4 flex flex-col">
          <Label htmlFor="message" className="pt-6 pb-2">
            Message
          </Label>
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            className="w-full px-3 py-2 border-slate-500 border-2 outline-none focus:border-blue-accent text-lg md:text-2xl font-light text-slate-600"
            rows={6}
            required
          ></textarea>
        </div>
        {!validated && (
          <p className="text-lg -mt-8 text-red-500">
            Please fill out required fields.
          </p>
        )}
        <div className="mb-4 place-self-end">
          <SubmitButton />
        </div>
      </form>
    </>
  );
};

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="text-2xl md:text-3xl flex flex-row items-center h-18 gap-2 group hover:text-blue-accent"
    >
      <div>Submit</div>
      {pending && <BeatLoader size={10} />}
      {!pending && (
        <svg
          className="w-6 md:w-full"
          width={35}
          height="20"
          viewBox="0 0 24 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="fill-black group-hover:fill-blue-accent"
            d="M22.7399 8.70711C23.1304 8.31658 23.1304 7.68342 22.7399 7.29289L16.3759 0.928932C15.9854 0.538408 15.3522 0.538408 14.9617 0.928932C14.5712 1.31946 14.5712 1.95262 14.9617 2.34315L20.6186 8L14.9617 13.6569C14.5712 14.0474 14.5712 14.6805 14.9617 15.0711C15.3522 15.4616 15.9854 15.4616 16.3759 15.0711L22.7399 8.70711ZM0 9H22.0328V7H0V9Z"
          />
        </svg>
      )}
    </button>
  );
};

const InputElement: React.FC<{
  type: string;
  id: string;
  className?: string;
  labelClassName?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children: ReactNode;
}> = ({ type, id, className, labelClassName, onChange, children }) => {
  return (
    <div
      className={
        "mb-4 flex flex-col md:flex-row pt-6 border-b-2 border-slate-500 focus-within:border-blue-accent " +
        className
      }
    >
      <Label htmlFor={id} className={labelClassName}>
        {children}
      </Label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={onChange}
        className="w-full px-3 py-1 outline-none text-xl 3xl:text-2xl text-end text-slate-600 font-light"
        required
      />
    </div>
  );
};

const Label: React.FC<{
  htmlFor: string;
  className?: string;
  children: ReactNode;
}> = ({ htmlFor, className, children }) => {
  return (
    <label
      id={`label-${htmlFor}`}
      htmlFor={htmlFor}
      className={
        "block text-slate-700 font-body-sans font-bold text-xl md:text-2xl 3xl:text-3xl uppercase text-nowrap " +
        className
      }
    >
      {children}
    </label>
  );
};
