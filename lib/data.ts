import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import MeowMarket from "../public/MeowMarket.png";
import NASAImg from "../public/NASA_MISSION_CONTROL.png";
import Podium from "../public/Podium.png";
import Evently from "../public/Evently.png";

export const links = [
   {
      name: "Home",
      hash: "#home"
   },
   {
      name: "About",
      hash: "#about"
   },
   {
      name: "Projects",
      hash: "#projects"
   },
   {
      name: "Skills",
      hash: "#skills"
   },
   {
      name: "Experience",
      hash: "#experience"
   },
   {
      name: "Contact",
      hash: "#contact"
   }
] as const;

export const experienceData = [
   {
      title: "FullStack Academy",
      location: "New York City, NY",
      description:
         "I'm a FullStack developer trained at FullStack Academy, where I acquired expertise in both front-end and back-end technologies. With hands-on projects and a focus on industry best practices, I bring a solid foundation in FullStack development and a commitment to creating innovative solutions.",
      icon: React.createElement(LuGraduationCap),
      date: "2023"
   },
   {
      title: "Lead Technician",
      location: "New York City, NY",
      description:
         "I am a seasoned professional with experience as a Lead Technician at Luster Photo Lab, a prominent photo film postproduction facility. In this role, I specialized in darkroom processing, enlarging, digitalization, and proficiently utilized Photoshop for image enhancement. My responsibilities included overseeing various aspects of photo production, ensuring high-quality results, and contributing to the success of a renowned photo lab known for its precision and excellence.",
      icon: React.createElement(CgWorkAlt),
      date: "2015 - 2022"
   }
] as const;

export const projectsData = [
   {
      title: "Meow Market",
      description:
         "A custom fullstack e-commerce platform, integrating product catalog management, inventory tracking, secure payment processing, and user-friendly interface.",
      tags: ["React", "Redux", "Node.js", "Express.js", "BootStrap", "Stripe", "PostgreSQL"],
      imgUrl: MeowMarket,
      link: "https://github.com/jerryc-jpg/MeowMarket"
   },
   {
      title: "Podium",
      description:
         "A comprehensive sports management platform that enables players, teams, and sports organizations to streamline their operations, manage schedules, track performance, and communicate effectively.",
      tags: ["React", "Redux", "Node.js", "Express.js", "BootStrap", "PostgreSQL", "OAuth"],
      imgUrl: Podium,
      link: "https://github.com/Sports-Management-FSA/cap_sports_management"
   },
   {
      title: "NASA Mission Control Project",
      description:
         "The NASA Mission Control System is an innovative project that leverages real-life data and the SpaceX API to create a cutting-edge launch system. ",
      tags: ["React", "Node.js", "Express.js", "MongoDB"],
      imgUrl: NASAImg,
      link: "https://github.com/chihtengma/NASA-PROJECT"
   },
   {
      title: "Evently",
      description: "A comprehensive, full-stack platform for managing events.",
      tags: ["Next.js", "React", "TypeScript", "Stripe", "Tailwind", "Node.js"],
      imgUrl: Evently,
      link: "https://github.com/chihtengma/event-platform"
   }
] as const;

export const skillsData = [
   "HTML",
   "CSS",
   "JavaScript",
   "TypeScript",
   "React",
   "Node.js",
   "Next.js",
   "Git",
   "Tailwind",
   "MongoDB",
   "PostgreSQL",
   "Redux",
   "GraphQL",
   "Apollo",
   "Express",
   "Bootstrap",
   "Firebase",
   "Stripe",
   "Passport.js"
] as const;
