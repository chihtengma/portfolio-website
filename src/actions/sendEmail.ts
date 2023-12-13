"use server";
import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "../../lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
   const senderEmail = formData.get("senderEmail");
   const message = formData.get("message");

   if (!validateString(senderEmail, 500)) {
      return {
         error: "Invalid sender email"
      };
   }
   if (!validateString(message, 5000)) {
      return {
         error: "Invalid message"
      };
   }

   let data;
   try {
      await resend.emails.send({
         from: "Contact From <onboarding@resend.dev>",
         to: "chihtengma416@gmail.com",
         subject: "Message from portfolio website contact form",
         reply_to: senderEmail as string, // Added "as string" because eventhought we set the input and textarea "required" in the Contact component, but TypeScript still thinks it might be a null value, so we add this type to let TypeScript compiler know that we know it will be a string type
         react: React.createElement(ContactFormEmail, {
            message: message as string, // Same as above
            senderEmail: senderEmail as string // Same as above
         })
      });
   } catch (error: unknown) {
      return {
         error: getErrorMessage(error)
      };
   }

   return {
      data
   };
};
