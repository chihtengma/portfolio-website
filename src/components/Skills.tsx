"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { animate, motion } from "framer-motion";

import { skillsData } from "../../lib/data";
import { useSectionInView } from "../../lib/hooks";

const fadeInAnimationVariants = {
   initial: {
      opacity: 0,
      y: 20
   },
   animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
         delay: 0.05 * index
      }
   })
};

const Skills = () => {
   const { ref } = useSectionInView("Skills");

   return (
      <section ref={ref} id="skills" className="mt-10 mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-30">
         <SectionHeading>My Skills</SectionHeading>
         <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {skillsData.map((skill, index) => (
               <motion.li
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  animate="animate"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                  key={index}
                  className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80">
                  {skill}
               </motion.li>
            ))}
         </ul>
      </section>
   );
};

export default Skills;
