import React from 'react';
import { MdEmail } from 'react-icons/md';


const Contact = () => {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
        <h1 className='text-4xl sm:text-6xl items-center font-bold mt-14 mb-10 text-rose-600 animate-bounce'>Get In Touch</h1>
        <p className='flex flex-row text-xl sm:text-2xl bg-rose-500 py-7 rounded-md px-7  '><MdEmail className='text-2xl sm:text-3xl mr-2 '/>ayeshaiqbal771@gmail.com</p>
        <p className='text-lg sm:text-xl mb-28 '>Feel free to reach out for any inquiries or collaboration opportunities.</p>

      
    </div>
  );
};

export default Contact;
