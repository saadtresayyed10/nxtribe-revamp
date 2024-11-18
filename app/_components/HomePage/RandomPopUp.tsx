"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function RandomPopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosed, setIsClosed] = useState(false); // Track if user closed it once

  useEffect(() => {
    const handleScroll = () => {
      if (!isClosed && window.scrollY > 100) {
        // Only show if user hasn't closed it
        setShowPopup(true);
      }
    };

    // Attach scroll listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClosed]);

  const handleClose = () => {
    setShowPopup(false);
    setIsClosed(true);
  };

  if (!showPopup) return null; // Do not render the popup if it's not visible

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4, ease: "circOut", delay: 0.4 }}
      className="font-circular fixed bottom-4 right-4 z-50 w-full max-w-xs bg-gradient-to-br from-purple-200 to-white  p-4 shadow-lg rounded-lg border dark:border-gray-300 border-black dark:bg-gradient-to-br dark:from-purple-900 dark:to-black"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Schedule a Call
        </h2>
        <button
          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <p className="mt-2 text-gray-800 dark:text-gray-200">
        Call us at:{" "}
        <span className="font-semibold hover:underline transition underline-offset-4">
          +91 911-281-4584
        </span>
      </p>
    </motion.div>
  );
}
