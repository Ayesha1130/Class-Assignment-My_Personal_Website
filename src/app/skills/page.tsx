"use client"
import React from 'react'
import { useEffect } from "react";
import { FaHtml5,FaCss3Alt, FaReact,FaNodeJs  } from "react-icons/fa";
import { RiJavascriptLine, RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";



const Skills = () => {
useEffect(() => {
  AOS.init();
},[]);
  


const skills = [
  {icon: <FaHtml5 className='text-6xl' />, label: 'HTML', color: 'bg-red-800'},
  {icon: <FaCss3Alt className='text-6xl' />, label: 'Css', color: 'bg-orange-600'},
  {icon: <RiJavascriptLine className='text-6xl' />, label: 'JavaScript' , color: 'bg-lime-700'},
  {icon: <SiTypescript className='text-6xl' />, label: 'TypeScript', color: 'bg-cyan-950'},
  {icon: <RiTailwindCssFill className='text-6xl' />, label: 'Tailwind Css', color: 'bg-purple-500'},
  {icon: <FaNodeJs className='text-6xl' />, label: 'Node.js' , color: 'bg-pink-500'},
  {icon: <FaReact className='text-6xl' />, label: 'React.js' , color: 'bg-teal-900'},
  {icon: <RiNextjsLine className='text-6xl' />, label: 'Next.js', color: 'bg-rose-950'},

]

return (
  <div className='flex flex-col items-center p-4 mt-28'>
    <h1 className=' text-5xl md:text-6xl animate-bounce text-rose-700 font-bold'>My Skills</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-28'>
      {skills.map((skill,index)=>(
      <div key={index}
      className={` rounded-md w-64 p-10 flex flex-col items-center ${skill.color}`}
      data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000"
      >
        {skill.icon}
        <p className='text-center text-2xl md:text-3xl font-bold text-white mt-4'>{skill.label}</p>

      </div>
      ))}

    </div>

  </div>
);
};
export default Skills

