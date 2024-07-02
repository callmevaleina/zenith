"use client";
import React from "react";
import CustomSelect, { IOption } from "./CustomSelect";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Link from "next/link";

const Header = () => {
  const languages: IOption[] = [
    { value: "en", label: "EN" },
    { value: "bn", label: "BN" },
    { value: "ab", label: "AB" },
  ];

  const currencies: IOption[] = [
    { value: "usd", label: "USD" },
    { value: "eur", label: "EUR" },
    { value: "bdt", label: "BDT" },
  ];

  return (
    <div className="w-full flex flex-col items-center py-[10px] px-[18px] border-b-[0.1px] border-lightGray/10 md:flex-row">
      <div className="w-full flex gap-8 items-center">
        <CustomSelect options={languages} />
        <CustomSelect options={currencies} />
        <SearchOutlinedIcon className="fill-grayText text-lg" />
      </div>
      <div className="w-full flex gap-8 items-center py-2 text-sm md:text-xs md:justify-end md:py-0">
        <Link href="tel:+12227776565">+1 222 777 6565</Link>
        <button className="text-lightGray">Sign In</button>
        <button className="text-lightGray">Register</button>
      </div>
    </div>
  );
};

export default Header;
