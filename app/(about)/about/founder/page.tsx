"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";
import Link from "next/link";

const FounderPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen font-circular">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 lg:my-20"
        >
          <div className="text-3xl md:text-7xl font-semibold dark:text-white text-center">
            Championing People Success, Transforming Cultures, and Leading with
            Purpose
          </div>
          <div className="flex justify-center items-center flex-col gap-y-1 font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
            <h1>Mr. Faisal Sayed</h1>
            <p className="text-lg">Business & Leadership Coach</p>
          </div>
          <Link
            href="/portfolio.pdf"
            target="_blank"
            className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2"
          >
            My Portfolio
          </Link>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default FounderPage;
