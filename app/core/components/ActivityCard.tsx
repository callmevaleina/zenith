"use client";
import React, { useState } from "react";
import { CiLocationOn, CiExport, CiHeart } from "react-icons/ci";
import Image from "next/image";
import { cn } from "../utils/cn";
import { FaExpandArrowsAlt } from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import { motion } from "framer-motion";
import { DestinationType } from "../enums/detination-type.enum";

export interface IActivityCardProps {
  imageUrl: string;
  name: string;
  rating: number;
  reviews: number;
  priceRange: string;
  type: DestinationType;
  profileImageUrl: string;
  description: string;
  status: string;
  category: string;
}

const ActivityCard = ({
  imageUrl,
  name,
  rating,
  reviews,
  priceRange,
  type,
  profileImageUrl,
  description,
  status,
  category,
}: IActivityCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`flex flex-col items-center justify-center gap-4 rounded-[3px] w-[360px] h-[500px] transition-all my-4 duration-600 bg-white border-[0.5px] border-extraLightGray ${
        isHovered
          ? "shadow-xl border-none"
          : "border-[0.5px] border-extraLightGray"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-full">
        <Image
          className="w-full"
          src={imageUrl}
          alt={name}
          width={350}
          height={170}
          layout="responsive"
        />
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-0 left-0 px-4 pb-4 flex justify-between w-full items-center"
          >
            <div>
              <button className="text-white text-xs bg-redPrimary px-2 py-[2px] rounded">
                {category}
              </button>
            </div>
            <div className="flex gap-2 text-sm">
              <button className="text-white bg-darkGray px-2 py-1 hover:text-blue-500">
                <FaExpandArrowsAlt />
              </button>
              <button className="text-white bg-darkGray px-2 py-1 hover:text-blue-500">
                <FiBookmark />
              </button>
            </div>
          </motion.div>
        )}
      </div>
      <div className="px-4 pr-8 flex flex-col gap-2">
        <div className="font-medium text-[16px] mb-2 text-darkGray">{name}</div>
        <div className="flex items-center mb-2 text-xs gap-2 text-gray">
          <div className="flex gap-2 items-center">
            <span
              className={cn(
                "text-white font-medium text-[10px] px-2 py-[2px] rounded",
                type === DestinationType.Automotive && "bg-orangeAutomotive",
                type === DestinationType.Destination && "bg-yellowDestination",
                type === DestinationType.Hotel && "bg-greenHotel",
                type === DestinationType.Restaurant && "bg-blueRestaurant",
                type === DestinationType.RealState && "bg-purpleRealState"
              )}
            >
              {rating.toFixed(1)}
            </span>
            <span className="">{reviews} Reviews</span>
          </div>
          <div className="w-[1px] h-4 bg-[#e1e5eb]" />
          <div className="">
            From <span className="text-redPrimary">{priceRange}</span>
          </div>
          <div className="w-[1px] h-4 bg-[#e1e5eb]" />
          <span className="">{type}</span>
        </div>
        <div className="flex gap-6">
          <Image
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
            src={profileImageUrl}
            alt={name}
          />
          <p className="text-grayText text-[11px] leading-5">{description}</p>
        </div>
        <div className="w-full h-[1px] bg-[#e1e5eb] mt-4" />
      </div>

      <div className="flex w-full justify-between pl-4 pr-8 pb-8">
        <span
          className={`inline-block text-xs text-green-500 ${
            status === "Close Now" ? "text-red-500" : "text-green-500"
          } mr-2`}
        >
          {status}
        </span>
        <div className="flex items-center gap-6 text-sm text-darkGray">
          <button
            className={`hover:text-green-500   ${
              status === "Close Now"
                ? "hover:text-red-500"
                : "hover:text-green-500"
            }`}
          >
            <CiLocationOn />
          </button>
          <button
            className={`hover:text-green-500   ${
              status === "Close Now"
                ? "hover:text-red-500"
                : "hover:text-green-500"
            }`}
          >
            <CiExport />
          </button>
          <button
            className={`hover:text-green-500   ${
              status === "Close Now"
                ? "hover:text-red-500"
                : "hover:text-green-500"
            }`}
          >
            <CiHeart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
