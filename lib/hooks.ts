import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/activeSectonContext";
import { SectionName } from "./types";

export const useSectionInView = (sectionName: SectionName, threshold = 0.75) => {
   const { ref, inView } = useInView({
      threshold: threshold
   });
   const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

   useEffect(() => {
      if (inView && Date.now() - timeOfLastClick > 1000) {
         setActiveSection(sectionName);
      }
   }, [inView, setActiveSection, timeOfLastClick, sectionName]);

   return {
      ref
   };
};
