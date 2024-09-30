'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import 'aos/dist/aos.css'; // Import AOS styles
import { useEffect } from 'react';
import AOS from 'aos';
import { FaGithub,FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  });
  return (
    <div className="flex flex-col items-center justify-center mt-20 p-4  ">
      <h1 className="text-4xl md:text-5xl font-bold text-center ">
        <span className="text-rose-700">Welcome To My Portfolio</span>
        <Typewriter
          options={{
            strings: [' Hey ! Ayesha Iqbal Here <br>  I`m Front End Developer'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>

      <Image
        src="/image/mini.png"
        className="rounded-md bg-rose-700 mt-9"
        alt="Image"
        data-aos="zoom-out-up"
        width={200}
        height={200}
      />

      <div className="text-xl md:text-xl font-semibold items-center mb-5 mt-6 animate-pulse">
        <p>I'm a front end developer with a passion for technology.</p>
        <p>I have a keen eye for detail and a strong communication skills.</p>
        <p>I'm currently available for freelance work.</p>
      </div>
      <div className="flex  gap-6 items-center mt-4">
          <a href="https://github.com/Ayesha1130">
            <FaGithub className="  size-12 bg-rose-500 rounded" />
          </a>
          <a href="https://www.linkedin.com/in/ayesha-iqbal-2613402b4/">
            <FaLinkedin className="rounded size-12 bg-rose-500" />
          </a>
        </div>
    </div>
  );
};

export default Hero;
