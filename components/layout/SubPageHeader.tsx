import Image from "next/image";
import React from "react";

interface SubPageHeaderProps {
  title: string;
  image: string;
  imageAlt?: string;
}

const SubPageHeader: React.FC<SubPageHeaderProps> = ({
  title,
  image,
  imageAlt = "Header image",
}) => {
  return (
    <header className='relative w-full h-[40vh] overflow-hidden'>
      <div className='absolute inset-0 z-0'>
        <Image
          src={image}
          alt={imageAlt}
          fill
          className='object-cover'
          priority
        />
        <div className='absolute inset-0 bg-black/30' />
      </div>

      <div className='relative z-10 flex items-center justify-center h-full'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-light font-display text-center px-4 drop-shadow-lg'>
          {title}
        </h1>
      </div>
    </header>
  );
};

export default SubPageHeader;
