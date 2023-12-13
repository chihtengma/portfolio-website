"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "../../lib/hooks";

const About = () => {
   const { ref } = useSectionInView("About");

   const sectionMotionOptions = {
      initial: {
         opacity: 0,
         y: 100
      },
      animate: {
         opacity: 1,
         y: 0
      },
      transition: {
         delay: 0.175
      }
   };

   return (
      <motion.section
         id="about"
         ref={ref}
         initial={sectionMotionOptions.initial}
         animate={sectionMotionOptions.animate}
         transition={sectionMotionOptions.transition}
         className="mb-10 max-w-[45rem] text-center leading-8 sm:mb-5 scroll-mt-28">
         <SectionHeading>About Me</SectionHeading>
         <p className="mb-3">
            Greetings! After seven fulfilling years as a seasoned film technician, I've decided to embark on a
            transformative journey into the world of <span className="font-bold">web development</span>. Eager for
            continuous learning and fascinated by emerging technologies, I bid farewell to my film career, enrolled in a
            <span className="font-bold"> web development bootcamp</span>, and emerged as a skilled graduate.
            <br />
            I'm now actively seeking opportunities as a <span className="font-bold">web developer</span>, bringing a
            unique blend of creativity and technical expertise to innovative projects. Beyond my professional pursuits,
            I'm thrilled to share that I'll be stepping into the role of a parent next year. Join me as I apply my honed
            skills, creativity, and dedication to the dynamic field of{" "}
            <span className="font-bold">web development</span>. Let's build something extraordinary together!
         </p>
      </motion.section>
   );
};

export default About;
