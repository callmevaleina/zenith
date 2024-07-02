"use client";
import React, { useState } from "react";

interface ICategoryCardProps {
  icon: React.ReactNode;
  title: string;
  listings: number;
}

const CategoryCard = ({ icon, title, listings }: ICategoryCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center rounded-[3px] w-[205px] h-[170px] custom-shadow p-6 transition-all duration-300 ${isHovered ? "bg-redPrimary text-white" : "bg-white text-darkGray"}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`mb-4 ${isHovered ? "text-white" : "text-extraDarkGray"}`}>{icon}</div>
      <h3 className={`text-[16px] font-medium mb-2 ${isHovered ? "text-white" : "text-darkGray"}`}>{title}</h3>
      <p className={`text-sm ${isHovered ? "text-white" : "text-grayText"}`}>{listings} listings</p>
    </div>
  );
};

export default CategoryCard;
