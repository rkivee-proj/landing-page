'use client'
import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ScrollIndicator = () => {
  const handleClick = () => {
    window.scrollBy({
      top: 100,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex flex-col items-center gap-2 text-dark-text cursor-pointer hover:opacity-80"
        onClick={handleClick}
      >
        <span className="text-xs">Scroll to explore</span>
        <ArrowDown size={16} />
      </motion.div>
    </motion.div>
  );
};

export default ScrollIndicator;
