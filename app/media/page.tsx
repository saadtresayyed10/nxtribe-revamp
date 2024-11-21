"use client";

import { motion } from "framer-motion";
import { VideoPlayer } from "./_components/video-player";
import { CoolMode } from "@/components/ui/cool-mode";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const youtube = [
  {
    link: "https://www.youtube.com/embed/SDKCWNWcsKo?si=A2nT4kfAUy17wnVQ",
    image: "/digi-pointer.jpg",
  },
  {
    link: "https://www.youtube.com/embed/ps09Fv_BCrw?si=3I4U308dGIqB0uMV",
    image: "/hr-pointer.jpg",
  },
];

const MediaPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="my-10 dark:text-white font-unbounded lg:text-5xl text-3xl font-semibold text-center capitalize"
      >
        Watch Some Videos
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut", delay: 1.2 }}
        className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 lg:mt-10 p-6 "
      >
        {youtube.map((video, idx) => (
          <VideoPlayer
            key={idx}
            darkImage={video.image}
            lightImage={video.image}
            darkLink={video.link}
            lightLink={video.link}
          />
        ))}
      </motion.div>
      <CoolMode>
        <Button className="font-circular">
          <Link href="https://www.youtube.com/@nXtribe" target="_blank">
            Subscribe
          </Link>
        </Button>
      </CoolMode>
    </div>
  );
};

export default MediaPage;
