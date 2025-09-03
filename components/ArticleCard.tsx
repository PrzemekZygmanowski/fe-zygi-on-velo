"use client";

import { useMobileView } from "@/hooks/useMobileView";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  date: string;
  direction?: "vertical" | "horizontal";
  reverse?: boolean;
}

const BREAKPOINT_MOBILE = 768;

export const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  articleUrl,
  date,
  direction = "vertical",
  reverse,
}) => {
  const isMobile = useMobileView(BREAKPOINT_MOBILE);

  const isHorizontal = !isMobile && direction === "horizontal";
  const isVertical = isMobile || direction === "vertical";

  const rootClass = clsx(
    "content flex overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-[1.02]",
    isMobile
      ? "flex-col"
      : isHorizontal
      ? reverse
        ? "flex-row-reverse"
        : "flex-row"
      : reverse
      ? "flex-col-reverse"
      : "flex-col"
  );

  const imageWrapClass = clsx(
    "relative overflow-hidden",
    (isMobile || isVertical) && "w-full h-48",
    isHorizontal && "w-1/3 basis-1/3 shrink-0 min-h-[12rem]"
  );

  const imageClass = "object-cover";

  const bodyClass = clsx("p-4", isHorizontal && "flex-1");

  return (
    <article className={rootClass}>
      <div className={imageWrapClass}>
        <Image
          src={imageUrl}
          alt={title}
          fill
          className={imageClass}
          sizes={
            isMobile
              ? "100vw"
              : isHorizontal
              ? "(min-width: 768px) 33vw, 100vw"
              : "100vw"
          }
        />
      </div>

      <div className={bodyClass}>
        <h3 className='mb-2 line-clamp-2 font-display text-xl text-sky'>
          {title}
        </h3>

        <p className='mb-2 font-sans text-sm text-neutral-dark'>{date}</p>

        <p className='mb-4 line-clamp-3 font-sans text-neutral-dark'>
          {description}
        </p>

        <Link
          href={articleUrl}
          aria-label={`Czytaj więcej: ${title}`}
          className='inline-block font-sans font-medium text-earth transition-colors hover:text-sky'>
          Read More →
        </Link>
      </div>
    </article>
  );
};
