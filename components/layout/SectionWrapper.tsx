import React from "react";

interface SectionWrapperProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  title,
  className = "",
  id,
}) => {
  return (
    <section
      id={id}
      className={`
                px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24
                py-8 sm:py-12 md:py-16
                mx-auto max-w-7xl w-full
                ${className}
            `}>
      <h2 className='text-2xl font-bold text-sky text-center font-display'>
        {title}
      </h2>
      {children}
    </section>
  );
};
