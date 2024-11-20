"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Form } from "@/app/contact/_components/Form";

export default function RandomPopUp() {
  const [showPopup, setShowPopup] = useState(false);
  const [isClosed, setIsClosed] = useState(false); // Track if user closed it once

  useEffect(() => {
    const handleScroll = () => {
      if (!isClosed && window.scrollY > 300) {
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
      className="font-circular fixed bottom-4 right-4 z-50 w-full max-w-xs bg-gradient-to-br from-white to-white p-2 shadow-lg rounded-lg border dark:border-gray-300 border-black dark:bg-gradient-to-br dark:from-black dark:to-black"
    >
      <div className="flex justify-between items-center">
        <button
          className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
          onClick={handleClose}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      <Form />
    </motion.div>
  );
}
