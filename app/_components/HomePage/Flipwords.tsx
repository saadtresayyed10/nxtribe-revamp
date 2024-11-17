"use client";

import React, { useEffect } from "react";
import { FlipWords } from "@/components/ui/flip-words";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function Flipwords() {
  const words = [
    "Making Way For Success.",
    "Chasing Nuanced Excellence.",
    "Having Cross Industry Expertise.",
    "A Tribe with Collaborative Efforts.",
  ];

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      ref={ref}
      className="my-10 lg:mr-32 lg:flex hidden justify-center items-center px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        className="font-circular lg:text-3xl text-2xl mx-auto font-normal text-neutral-600 dark:text-neutral-400"
      >
        At{" "}
        <span className="font-semibold text-purple-700 dark:text-purple-500 underline underline-offset-4">
          nXtribe
        </span>{" "}
        we are -
        <FlipWords
          words={words}
          className="lg:text-xl text-xs font-unbounded"
        />
        <br />
        Welcome to our tribe.
      </motion.div>
    </div>
  );
}
