"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

export function LampBg() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="-mt-20 bg-gradient-to-br lg:from-black from-white to-white lg:to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl font-circular"
      >
        HR & <br /> CHRO
      </motion.h1>
    </LampContainer>
  );
}
