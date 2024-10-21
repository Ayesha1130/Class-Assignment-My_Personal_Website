"use client";
import React from "react";
import { useEffect } from "react";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import {
  RiJavascriptLine,
  RiTailwindCssFill,
  RiNextjsLine,
} from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    {
      icon: <FaHtml5 className="text-6xl bg-rose-700 rounded-md" />,
      label: "HTML",
      discription: "Hypertext Markup Language",
       border: "border  border-width-2",
    },
    {
      icon: <FaCss3Alt className="text-6xl  bg-rose-700 rounded-md" />,
      label: "Css",
      discription: "Cascading Style Sheets",
      border: "border  border-width-2",
    },
    {
      icon: <RiJavascriptLine className="text-6xl  bg-rose-700 rounded-md" />,
      label: "JavaScript",
      discription: "A versatile programming language",
      border: "border  border-width-2",
    },
    {
      icon: <SiTypescript className="text-6xl  bg-rose-700 rounded-md" />,
      label: "TypeScript",
      discription: "A superset of JavaScript with static types",
      border: "border  border-width-2",
    },
    {
      icon: <RiTailwindCssFill className="text-6xl  bg-rose-700 rounded-md" />,
      label: "Tailwind Css",
      discription:
        "A utility-first CSS framework for creating custom designs quickly.",
        border: "border  border-width-2",
    },
    {
      icon: <FaNodeJs className="text-6xl  bg-rose-700 rounded-md" />,
      label: "Node.js",
      discription: "JavaScript runtime built on Chromes V8 engine.",
      border: "border  border-width-2",
    },
    {
      icon: <FaReact className="text-6xl  bg-rose-700 rounded-md" />,
      label: "React.js",
      discription:
        " javaScript Labrary for building dynamic interfaces using reuseable component",
        border: "border  border-width-2",
    },
    {
      icon: <RiNextjsLine className="text-6xl  bg-rose-700 rounded-md" />,
      label: "Next.js",
      discription:
        "A versatile programming language known for its readability.",

        border: "border  border-width-2",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4 mt-28">
      <h1 className=" text-5xl md:text-6xl animate-bounce text-rose-700 font-bold">
        My Skills
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-28">
        {skills.map((skill, index) => (
          <div
            key={index}
            className={` rounded-md w-64 p-10 flex flex-col items-center ${skill.border}`}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            {skill.icon}
            <p className="text-center text-2xl md:text-3xl font-bold text-white mt-4">
              {skill.label}
            </p>
            <p className="text-center text-sm md:text-lg  text-rose-700 font-bold italic">
              {skill.discription}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Skills;
