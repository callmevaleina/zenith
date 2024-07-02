"use client";
import React, { useState } from "react";
import { cn } from "../utils/cn";

interface IArticlesCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
}

const ArticlesCard = ({
  image,
  title,
  description,
  author,
  date,
}: IArticlesCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 rounded-[3px] w-[360px] h-[450px] transition-all duration-600 bg-white border-[0.5px] border-extraLightGray shadow-sm",
        isHovered && "shadow-2xl"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img className="w-full" src={image} alt={title} />
      <div className="px-6 pt-4 pb-8 flex flex-col gap-4">
        <div
          className={cn(
            "font-medium text-[16px] mb-2 text-darkGray",
            isHovered && "text-redPrimary"
          )}
        >
          {title}
        </div>
        <div className="flex gap-6 text-sm text-[#8f949d] items-center">
          <span>
            Posted By <span className="font-bold text-darkGray">{author}</span>
          </span>
          <div className="w-[1px] h-4 bg-[#e1e5eb]" />
          <span>{date}</span>
        </div>
        <p className="text-grayText text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ArticlesCard;
