import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
import MyLocationOutlinedIcon from "@mui/icons-material/MyLocationOutlined";
import { IoStorefrontOutline, IoCarSportOutline } from "react-icons/io5";
import { BsBackpack3 } from "react-icons/bs";
import { PiBuildingApartment } from "react-icons/pi";
import { GiMedicines } from "react-icons/gi";
import CategoryCard from "./CategoryCard";
import AlertModal from "./AlertModal";

interface CategoryCardData {
  icon: React.ReactNode;
  title: string;
  listings: number;
}

const categoriesCardsData: CategoryCardData[] = [
  {
    icon: <IoStorefrontOutline className="text-[50px]" />,
    title: "Restaurant",
    listings: 150,
  },
  {
    icon: <BsBackpack3 className="text-[50px]" />,
    title: "Destination",
    listings: 214,
  },
  {
    icon: <PiBuildingApartment className="text-[50px]" />,
    title: "Hotels",
    listings: 185,
  },
  {
    icon: <GiMedicines className="text-[50px]" />,
    title: "Healthcare",
    listings: 200,
  },
  {
    icon: <IoCarSportOutline className="text-[50px]" />,
    title: "Automotive",
    listings: 120,
  },
];

const Hero: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [alertMessage, setAlertMessage] = useState<string>("");

  const handleSearch = async () => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ location }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.places.length > 0) {
        setAlertMessage("Some places found");
      } else {
        setAlertMessage("No places found");
      }
      setAlertOpen(true);
      setSearchTerm("");
      setLocation("");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleCloseAlert = () => {
    setAlertOpen(false);
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.placeholder = "";
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement>,
    placeholder: string
  ) => {
    e.target.placeholder = placeholder;
  };

  return (
    <div className="relative w-full h-screen mb-48">
      <Image
        src="/assets/hero.png"
        alt="Background Hero"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-[-1]"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative flex flex-col items-center justify-center h-full text-white text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[32px] md:text-[48px] leading-[1.4em] font-bold mb-4 md:w-[55%]"
        >
          BEST PLACE TO FIND AND EXPLORE THAT ALL YOU NEED
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-md md:text-lg mb-8 md:w-2/3"
        >
          Find Best Place, Restaurant, Hotel, Real State and many more things in
          just One click
        </motion.p>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col w-[250px] md:w-full gap-4 justify-center items-center mb-8 md:flex-row"
        >
          <div className="flex flex-col md:flex-row items-center justify-between bg-white h-[150px] md:h-[70px] text-black rounded-[3px] shadow-lg p-4 md:space-x-4">
            <div className="flex items-center justify-between mb-4 md:mb-0 gap-4 w-full">
              <label className="text-extraDarkGray font-medium">What?</label>
              <input
                className="md:w-[300px] border-none outline-none appearance-none text-sm placeholder:text-gray placeholder:text-sm"
                type="text"
                placeholder="Ex: Place, Restaurant, Food, Automobile"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleFocus}
                onBlur={(e) =>
                  handleBlur(e, "Ex: Place, Restaurant, Food, Automobile")
                }
              />
              <FormatListBulletedOutlinedIcon className="fill-black" />
            </div>
            <div className="w-[0.5px] h-full bg-lightGray/20" />
            <div className="flex items-center mb-4 md:mb-0 gap-4 w-full">
              <label className="text-extraDarkGray font-medium">Location</label>
              <input
                className="md:w-[300px] border-none outline-none appearance-none text-sm placeholder:text-gray placeholder:text-sm"
                type="text"
                placeholder="Ex: London, New York, Rome"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onFocus={handleFocus}
                onBlur={(e) => handleBlur(e, "Ex: London, New York, Rome")}
              />
              <MyLocationOutlinedIcon className="fill-black" />
            </div>
          </div>
          <button
            className="flex justify-center items-center text-white text-sm rounded-[3px] w-[170px] h-[70px] bg-redPrimary gap-2 hover:bg-red-500"
            onClick={handleSearch}
          >
            <span>Search</span>
            <SearchOutlinedIcon className="fill-white text-lg" />
          </button>
        </motion.div>
      </div>
      <div className="flex flex-col px-8 md:px-0 md:flex-row md:flex-wrap md:justify-center gap-8 mt-4 md:-mt-24 md:relative z-40">
        {categoriesCardsData.map((categoryCard, index) => (
          <CategoryCard
            key={index}
            icon={categoryCard.icon}
            title={categoryCard.title}
            listings={categoryCard.listings}
          />
        ))}
      </div>
      <AlertModal
        open={alertOpen}
        onClose={handleCloseAlert}
        message={alertMessage}
      />
    </div>
  );
};

export default Hero;
