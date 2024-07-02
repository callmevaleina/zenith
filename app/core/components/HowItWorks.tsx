"use client";
import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { GiBinoculars } from "react-icons/gi";
import { FaMapLocationDot } from "react-icons/fa6";
import ServiceCard from "./ServiceCard";

const HowItWorks = () => {
  const servicesCardsData = [
    {
      icon: <FaRegLightbulb />,
      title: "Choose What To Do",
    },
    {
      icon: <GiBinoculars />,
      title: "Find That You Want",
    },
    {
      icon: <FaMapLocationDot />,
      title: "Explore Amazing Places",
    },
  ];
  return (
    <div className="text-grayTitle static md:relative w-full pb-32 flex items-center flex-col gap-16 mt-[850px] md:mt-0">
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-2xl font-medium">HOW IT WORKS</h2>
        <p className="text-grayText text-[16px]">
          Learn More about how our website works
        </p>
      </div>
      <div className="w-full flex justify-center items-center gap-6 md:flex-row flex-col">
        {servicesCardsData.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
