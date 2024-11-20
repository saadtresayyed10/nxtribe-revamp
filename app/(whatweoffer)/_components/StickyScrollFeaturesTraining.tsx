"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Leadership & Executive Development",
    description:
      " Cultivating executive presence, leadership, emotional intelligence, and trust-building to inspire, guide, and influence effectively. We focus on creating resilient teams, strategic management, and adaptability, fostering environments where leaders and their teams thrive.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/images/training/leadership.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Communication & Networking",
    description:
      "Mastering communication for impactful interactions, successful networking, and relationship-building, both online (social media) and offline, to connect meaningfully and drive success.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "Innovation & Agility",
    description:
      "Emphasizing strategic digital innovation and transformation, encouraging agility and creativity as strengths, while aligning with customer needs to deliver excellence in service and experiences.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    ),
  },
  {
    title: "Operational Excellence & Integrity",
    description:
      "Measuring impact, driving effectiveness and efficiency, and maintaining unwavering integrity to build high-performing, sustainable, and purpose-driven organizations.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white"></div>
    ),
  },
];
export function StickyScrollFeaturesTraining() {
  return (
    <div className="p-10 font-circular">
      <StickyScroll content={content} />
    </div>
  );
}
