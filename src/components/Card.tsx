import React from 'react';

interface CardProps {
  img: string;
  alt?: string;
  title: string;
  description: string;
  link: string;
}
const Card: React.FC<CardProps> =
({ img, alt='Image', title, description , link, ...aosProps })=>{
  return(
    <div {...aosProps} className="flex flex-col justify-center items-center p-4 h-[500px] w-[300px] md:w-[400px] lg:w-[400px] border border-width-3">
      <img className="rounded-md w-80 h-96 " src={img} alt={alt} />
      <h2 className="text-lg py-6 font-semibold animate-bounce">{title}</h2>
      <p className="text-sm text-center mt-1 text-gray-400 animate-pulse">{description}</p>
      <a href={link} className="w-full flex justify-center items-center py-3 rounded-md text-white bg-rose-700 hover:bg-rose-700">
        View Project
      </a>

    </div>
  );
};
export default Card;
