import React from "react";

interface AboutComponentProps {
  title: string;
  image: string;
  text: string;
  altText?: string;
}

export const AboutComponent: React.FC<AboutComponentProps> = ({
  title,
  image,
  text,
  altText,
}) => {
  return (
    <div className='flex flex-col items-center space-y-4 p-6 content'>
      <h2 className='text-2xl font-bold text-center text-sky'>{title}</h2>
      <img
        src={image}
        alt={altText || title}
        className='w-64 h-64 rounded-full object-cover'
      />
      <p className='text-center text-neutral-dark max-w-md font-sans'>{text}</p>
    </div>
  );
};
