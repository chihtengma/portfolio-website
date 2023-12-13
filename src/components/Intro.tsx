"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "../../lib/hooks";
import { useActiveSectionContext } from "@/context/activeSectonContext";

const Intro = () => {
   const imageSrc = "https://avatars.githubusercontent.com/u/117555908?v=4";

   const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

   const introImgMotionOptions = {
      initialProp: {
         opacity: 0,
         scale: 0
      },
      animateProp: {
         opacity: 1,
         scale: 1
      },
      transitionProp: {
         type: "tween",
         duration: 0.2
      }
   };

   const introSpanMotionOptions = {
      initialProp: {
         opacity: 0,
         scale: 0
      },
      animateProp: {
         opacity: 1,
         scale: 1
      },
      transitionProp: {
         type: "spring",
         duration: 0.7,
         delay: 0.1,
         stiffness: 125
      }
   };
   const introHeaderMotionOptions = {
      initialProp: {
         opacity: 0,
         y: 100
      },
      animateProp: {
         opacity: 1,
         y: 0
      }
   };
   const introSocialMotionOptions = {
      initialProp: {
         opacity: 0,
         y: 100
      },
      animateProp: {
         opacity: 1,
         y: 0
      },
      tranistion: {
         delay: 0.1
      }
   };

   const { ref } = useSectionInView("Home", 0.5);

   return (
      <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
         <div className="flex items-center justify-center">
            <div className="relative">
               <motion.div
                  initial={introImgMotionOptions.initialProp}
                  animate={introImgMotionOptions.animateProp}
                  transition={introImgMotionOptions.transitionProp}>
                  <Image
                     src={imageSrc}
                     alt="Intro Photo"
                     width="192"
                     height="192"
                     quality="95"
                     priority={true}
                     className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                  />
               </motion.div>

               <motion.span
                  initial={introSpanMotionOptions.initialProp}
                  animate={introSpanMotionOptions.animateProp}
                  transition={introSpanMotionOptions.transitionProp}
                  className="absolute bottom-0 right-0 text-4xl">
                  👋
               </motion.span>
            </div>
         </div>

         <motion.h1
            initial={introHeaderMotionOptions.initialProp}
            animate={introHeaderMotionOptions.animateProp}
            className="mb-10 mt-4 px-4 text-lg font-medium !leading-[1.25] sm:text-2xl">
            <span className="font-bold">Hello I'm ChihTeng.</span> A professional film technician turned{" "}
            <span className="font-bold">full-stack developer.</span> Driven to make a meaningful impact through
            technology.
         </motion.h1>

         <motion.div
            initial={introSocialMotionOptions.initialProp}
            animate={introSocialMotionOptions.animateProp}
            transition={introSocialMotionOptions.tranistion}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium">
            <Link
               href="#contact"
               className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition dark:bg-opacity-90"
               onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
               }}>
               Contact Me <BsArrowRight className="opacity-70 group-hover:translate-x-1.5 transition" />
            </Link>
            <a
               className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer dark:bg-white/10"
               href="/CV.pdf"
               target="_blank"
               rel="noopener noreferrer">
               Download CV <HiDownload className="opacity-60 group-hover:translate-y-1.5 transition" />
            </a>
            <a
               className="bg-white p-4  text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
               href="https://www.linkedin.com/in/chihtengma/"
               target="_blank"
               rel="noreferrer">
               <BsLinkedin />
            </a>
            <a
               className="bg-white p-4  text-[1.35rem] flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]  hover:text-gray-950 active:scale-105 transition cursor-pointer dark:bg-white/10 dark:text-white/60"
               href="https://github.com/chihtengma"
               target="_blank"
               rel="noreferrer">
               <FaGithubSquare />
            </a>
         </motion.div>
      </section>
   );
};

export default Intro;
