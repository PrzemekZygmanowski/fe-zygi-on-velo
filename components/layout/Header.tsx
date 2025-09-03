import Image from "next/image";
import React from "react";

interface HeaderProps {
  image: string;
  title: string;
  height?: string;
}

const Header: React.FC<HeaderProps> = ({ image, title, height = "50vh" }) => {
  return (
    <header
      className='relative w-full flex justify-center items-center overflow-hidden'
      style={{ height }}>
      <div className='absolute top-0 left-0 w-full h-full z-10'>
        <Image src={image} alt={title} fill className='object-cover' priority />
      </div>
      <h1 className='relative z-20 text-neutral-light text-5xl font-display font-bold text-center px-4 shadow-text'>
        {title}
      </h1>
    </header>
  );
};

export default Header;
