"use client";
import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";
import AOS from "aos";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with default settings
  }, []);
  return (
    <div
      className="flex flex-col items-center text-left p-4 md:mt-52 md:flex-row md:p-10 bg-black bg-center bg-cover"
      
    >
      <Image
        src="/image/mini.png"
        className="rounded-full bg-rose-700"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        alt="Ayesha Iqbal "
        width={400}
        height={400}
      />

      <div
        className="flex flex-col items-center md:items-center md:w-4/6 "
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className=" sm:w-3/5 lg:w-1/2 mx-1/2 mx-auto ">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-center  mb-4 text-rose-700 font-bold animate-bounce ">
            About Me
          </h1>
          <h2 className="text-center text-3xl md:text-4xl font-bold">
            <Typewriter
              options={{
                strings: ['Crafting My Tech Journey'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
          <p className="py-4 font-semibold">
            Hello I am Full Stack Developer with passion for creating responsive
            and dynamic web application. I start my journey in IT with GIAIC,
            where I Developed a solid foundation in various web technologies.
          </p>
          <p className="py-4 font-semibold">
            I love building user-friendly interfaces and efficiet back-end
            system.My experience with tailwind help me design beautifull layouts
            quickly,while my knowledge of node.js allow me to create robust
            server-side application
          </p>
          <p className="py-4 font-semibold">
            I am always eager to learn and embrace new challenges in the tech
            world. When I am not coding,you will find me exploring new
            frameworks or working on personal projects to enhance my skills.
          </p>
          <p className="py-4 font-semibold">
            Lets connect and create something amazing together!
          </p>
        </div>
        <div className="flex flex-col-1 gap-7 items-center p-4">
          <a href="https://github.com/Ayesha1130">
            <FaGithub className="  size-12 bg-rose-500 rounded" />
          </a>
          <a href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
            <FaLinkedin className="rounded size-12 bg-rose-500" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
