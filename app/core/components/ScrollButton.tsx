import React from "react";
import { motion } from "framer-motion";
import { animateScroll as scroll } from "react-scroll";

const ScrollButton = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <motion.div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        zIndex: 1000,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={scrollToTop}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="36"
        height="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19 14l-7-7-7 7"></path>
      </svg>
    </motion.div>
  );
};

export default ScrollButton;
