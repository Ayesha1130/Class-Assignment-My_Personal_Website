import React from 'react'
import Hero from '@/components/Hero'
import About from './about/page'
import Skills from './skills/page'
import Project from './project/page'
import Contact from './contact/page'


const page = () => {
  return (
    <div>
  
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
      
    </div>
  )
}

export default page
