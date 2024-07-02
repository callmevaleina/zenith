"use client";
import React, { useState } from "react";

interface IServiceCardProps {
  icon: React.ReactNode;
  title: string;
}

const ServiceCard = ({ icon, title }: IServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-[3px] w-[360px] h-[390px] custom-shadow p-6 transition-all duration-300 ${
        isHovered ? "bg-redPrimary" : "bg-white"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`mb-4 bg-extraLightGray p-4 rounded-full text-[32px] ${
          isHovered ? "text-redPrimary bg-white" : "!text-grayIcon"
        }`}
      >
        {icon}
      </div>
      <h3
        className={`text-[16px] font-medium mb-2 ${
          isHovered ? "text-white" : "text-darkGray"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm text-center ${
          isHovered ? "text-white" : "text-grayText"
        }`}
      >
        Lorem ipsum dolor sit amet, consecte adipisicing elit, sed do eiusmod
        tempor incididunt ut laboremagna aliqua.
      </p>
      <button
        className={`mt-4 px-4 py-2 text-xs rounded-[3px] ${
          isHovered
            ? "bg-white !text-redPrimary"
            : "bg-white border-[0.5px] border-lightGray !text-grayText"
        }`}
      >
        Read More
      </button>
    </div>
  );
};
export default ServiceCard;
