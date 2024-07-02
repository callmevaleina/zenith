import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { cn } from "../utils/cn";

interface INavbarProps {
  isFooter?: boolean;
}

const Navbar = ({ isFooter }: INavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        "w-full flex items-center gap-8 px-4 md:gap-0 md:justify-between md:px-60 py-8 bg-white top-0 z-50",
        !isFooter && "sticky shadow-md"
      )}
    >
      {/* Mobile Menu */}
      <div className={cn("md:hidden", isFooter && "hidden")}>
        <button
          className="text-redPrimary p-2 focus:outline-none border rounded-md border-redPrimary"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMenu className="w-6 h-6" />
          )}
        </button>
        {isOpen && (
          <motion.div
            initial={{ translateY: -100, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            exit={{ translateY: -100, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed -top-28 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeMenu}
          >
            <div
              className="bg-white p-8 max-w-screen-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex flex-col gap-4">
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  HOME
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  HOW IT WORKS
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  EXPLORE
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  REVIEW
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  BLOG
                </a>
                <a
                  href="#"
                  className="text-lg font-medium text-black hover:text-redPrimary"
                  onClick={closeMenu}
                >
                  CONTACT
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Desktop Menu*/}
      <div className="hidden md:flex gap-8 items-center font-medium">
        <a href="#" className="text-sm hover:text-redPrimary">
          HOME
        </a>
        <a href="#" className="text-sm hover:text-redPrimary">
          HOW IT WORKS
        </a>
        <a href="#" className="text-sm hover:text-redPrimary">
          EXPLORE
        </a>
        <a href="#" className="text-sm hover:text-redPrimary">
          REVIEW
        </a>
        <a href="#" className="text-sm hover:text-redPrimary">
          BLOG
        </a>
        <a href="#" className="text-sm hover:text-redPrimary">
          CONTACT
        </a>
      </div>

      <div className="text-xl font-bold text-black">
        List<span className="text-redPrimary">Race</span>
      </div>
    </div>
  );
};

export default Navbar;
