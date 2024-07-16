"use client";

import React, { FormEvent, useState } from "react";
import SectionHeading from "./SectionHeading";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

import SubmitBtn from "./SubmitBtn";

const Contact = () => {
   const { ref } = useSectionInView("Contact");
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

   const aboutMotionOptions = {
      initial: {
         opacity: 0
      },
      whileInView: {
         opacity: 1
      },
      transition: {
         duration: 1
      },
      viewport: {
         once: true
      }
   };

   return (
      <motion.section
         ref={ref}
         initial={aboutMotionOptions.initial}
         whileInView={aboutMotionOptions.whileInView}
         transition={aboutMotionOptions.transition}
         viewport={aboutMotionOptions.viewport}
         id="contact"
         className="mt-10 mb-20 sm:mb-28 w-[min(100% ,38rem)] text-center">
         <SectionHeading>Contact Me</SectionHeading>
         <p className="text-gray-700 -mt-5 dark:text-white/80">
            Please contact me directly at{" "}
            <a className="underline" href="mailto:chihtengma416@gmail.com">
               chihtengma416@gmail.com
            </a>{" "}
            or through this form.
         </p>

         <form
            className="mt-10 flex flex-col dark:text-black"
            action={async (formData) => {
               const { data, error } = await sendEmail(formData);
               if (error) {
                  toast.error(error);
                  return;
               }
               toast.success("Email sent successfully!");
               setEmail("");
               setMessage("");
            }}>
            <input
               type="email"
               name="senderEmail"
               value={email}
               placeholder="Your email"
               className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline"
               required
               maxLength={500}
               onChange={(ev) => setEmail(ev.target.value)}
            />
            <textarea
               placeholder="Your message"
               name="message"
               value={message}
               className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline"
               required
               maxLength={5000}
               onChange={(ev) => setMessage(ev.target.value)}
            />
            <SubmitBtn />
         </form>
      </motion.section>
   );
};

export default Contact;
