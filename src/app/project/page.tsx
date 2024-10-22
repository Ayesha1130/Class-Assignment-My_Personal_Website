'use client';
import React , {useEffect} from 'react';
import Card from '@/components/Card';
import 'aos/dist/aos.css';
import AOS from 'aos';



const Project = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with default settings
  }, []);


const cardData = [
  {
    img:'/image/hello.PNG',
    title:'Hello World',
    description:'',
    link:'https://github.com/Ayesha1130/nextjs-hello-world.git',
    aos:{
      'data-aos':'flip-left',
      'data-aos-easing' :'ease-out-cubic',
      'data-aos-duration' : '2000'

    }
},
{
  img:'/image/inven.PNG',
  title:'Inventory-Management-System',
  description:'',
  link:'https://github.com/Ayesha1130/Inventory-Management-System.git',
  aos:{
    'data-aos':'flip-left',
    'data-aos-easing' :'ease-out-cubic',
    'data-aos-duration' : '2000'

  }
},
{
  img:'/image/stud.PNG',
  title:'Student_Management_System',
  description:'',
  link:'https://github.com/Ayesha1130/Student_Management_System.git',
  aos:{
    'data-aos':'flip-left',
    'data-aos-easing' :'ease-out-cubic',
    'data-aos-duration' : '2000'

  }
},

{
  img:'/image/Adven.PNG',
  title:'Adventure Game',
  description:'',
  link:'https://github.com/Ayesha1130/Adventure_Game_Project.git',
  aos:{
    'data-aos':'flip-left',
    'data-aos-easing' :'ease-out-cubic',
    'data-aos-duration' : '2000'

  }
},

{
  img:'/image/res.PNG ',
  title:'Static Interactive Resume Builder',
  description:'',
  link:'https://github.com/Ayesha1130/Hackathons_Milestone_1_2.git',
  aos:{
    'data-aos':'flip-left',
    'data-aos-easing' :'ease-out-cubic',
    'data-aos-duration' : '2000'

  }
},

{
  img:'/image/Adven.PNG',
  title:'OOP Project',
  description:'',
  link:'https://github.com/Ayesha1130/OOP-My-Bank-Project.git',
  aos:{
    'data-aos':'flip-left',
    'data-aos-easing' :'ease-out-cubic',
    'data-aos-duration' : '2000'

  }
},
  
];
return(
  <div className='flex flex-col items-center mt-40 '>
    <h1 className=' text-5xl md:text-6xl animate-bounce text-rose-700 font-bold mb-10'>My Projects</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-10 mb-24'>
      {cardData.map((card,index)=>(
        <Card
         key={index} 
        img={card.img }
        title={card.title}
        description={card.description}
        link={card.link}
        {...card.aos}
        />
      ))}
    </div>

  </div>

);
};

export default Project;
