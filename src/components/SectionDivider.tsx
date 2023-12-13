"use client";

import React from "react";
import { motion } from "framer-motion";

const SectionDivider = () => {
   const sectionDividerMotionOptions = {
      initial: {
         opacity: 0,
         y: 100
      },
      animate: {
         opacity: 1,
         y: 0
      },
      transition: {
         delay: 0.125
      }
   };

   return (
      <motion.div
         initial={sectionDividerMotionOptions.initial}
         animate={sectionDividerMotionOptions.animate}
         transition={sectionDividerMotionOptions.transition}
         className="bg-gray-200 my-24 h-16 w-1 rounded-full hidden sm:block dark:bg-opacity-20"></motion.div>
   );
};

export default SectionDivider;
