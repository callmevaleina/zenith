"use client";
import React from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGooglePlusG,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm px-4 md:px-28 border-t-[0.5px] border-extraLightGray py-8">
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
          <div className="md:mr-4 text-center text-sm text-lightGray md:text-left">
            &copy;Copyright. Designed And Developed By Themesine
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 text-lightGray">
          <a
            href="tel:+12227778888"
            className="flex items-center mb-2 md:mb-0 md:mr-4 hover:text-redPrimary transition-colors text-xs"
          >
            <FaPhoneAlt className="mr-2" />
            <span>+1 (222) 777 8888</span>
          </a>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:text-white hover:bg-redPrimary p-2 rounded-full bg-extraLightGray transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-redPrimary p-2 rounded-full bg-extraLightGray transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-redPrimary p-2 rounded-full bg-extraLightGray transition-colors"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="hover:text-white hover:bg-redPrimary p-2 rounded-full bg-extraLightGray transition-colors"
            >
              <FaGooglePlusG />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
