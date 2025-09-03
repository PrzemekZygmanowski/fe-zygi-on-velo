import React from "react";

interface TextContentProps {
  title: string;
  text: string;
  titleClassName?: string;
  textClassName?: string;
  containerClassName?: string;
}

export const TextContent: React.FC<TextContentProps> = ({
  title,
  text,
  titleClassName = "",
  textClassName = "",
  containerClassName = "",
}) => {
  return (
    <div className={`space-y-4 content ${containerClassName}`}>
      <h2
        className={`text-2xl font-bold text-sky text-center font-display
         ${titleClassName}`}>
        {title}
      </h2>
      <p className={`text-base text-neutral-dark font-sans ${textClassName}`}>
        {text}
      </p>
    </div>
  );
};
