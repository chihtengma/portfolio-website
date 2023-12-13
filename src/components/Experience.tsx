"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { experienceData } from "../../lib/data";
import "react-vertical-timeline-component/style.min.css";
import { useSectionInView } from "../../lib/hooks";
import { useTheme } from "@/context/themeContext";

const Experience = () => {
   const { ref } = useSectionInView("Experience");
   const { theme } = useTheme();

   return (
      <section id="experience" ref={ref} className="scroll-mt-28 mb-10 mt-10 sm:mb-10">
         <SectionHeading>My Experience</SectionHeading>
         <VerticalTimeline lineColor="" animate={false}>
            {experienceData.map(({ title, location, description, date, icon }, index) => (
               <React.Fragment key={index}>
                  <VerticalTimelineElement
                     contentStyle={{
                        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0,0,0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem"
                     }}
                     contentArrowStyle={{
                        borderRight:
                           theme === "light" ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)"
                     }}
                     date={date}
                     icon={icon}
                     iconStyle={{
                        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.5)",
                        fontSize: "1.5rem"
                     }}>
                     <h3 className="font-semibold capitalize dark:text-white/75 ">{title}</h3>
                     <p className="font-normal !mt-0 text-gray-600">{location}</p>
                     <p>{description}</p>
                  </VerticalTimelineElement>
               </React.Fragment>
            ))}
         </VerticalTimeline>
      </section>
   );
};

export default Experience;
