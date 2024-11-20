"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "framer-motion";

const PuposePage = () => {
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
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl lg:text-7xl font-semibold dark:text-white text-center mt-20">
            Empowering Growth, Inspiring Excellence, and Transforming
            Possibilities
          </div>
          <div className="flex justify-center items-center flex-col gap-y-6 font-extralight text-xl lg:text-4xl dark:text-neutral-200 py-4 text-center lg:w-[80%]">
            <h1>Our Purpose</h1>
            <p className="lg:text-lg text-base">
              At nXtribe, our purpose is to harness the power of{" "}
              <span className="dark:text-purple-500 text-purple-700 font-semibold">
                IT & ITES
              </span>{" "}
              to drive innovation and accelerate business growth. We specialize
              in creating tailored, cutting-edge solutions that enhance
              efficiency and enable organizations to scale. By leveraging our
              deep expertise and the latest technologies, we empower businesses
              to unlock their full potential, offering infinite possibilities in
              a constantly evolving digital landscape.
            </p>
            <p className="text-lg">
              Our{" "}
              <span className="dark:text-purple-500 text-purple-700 font-semibold">
                HRO & CHRO
              </span>{" "}
              services are designed to elevate human potential and transform
              organizational cultures. We partner with businesses to develop
              strategic human resource solutions, including talent acquisition,
              leadership development, performance management, and employee
              engagement. Our mission is to build resilient, people-first
              workplaces that thrive on collaboration, innovation, and
              sustainable growth.
            </p>
            <p className="text-lg">
              Through{" "}
              <span className="dark:text-purple-500 text-purple-700 font-semibold">
                Training & Coaching
              </span>
              , we unlock individual and team potential, inspiring continuous
              learning and growth. Our programs are crafted to foster
              leadership, drive performance, and cultivate a culture of
              empowerment. We believe that by equipping individuals with the
              tools and skills they need, we create the foundation for both
              personal and organizational success.
            </p>
            <p className="text-lg">
              In the realm of{" "}
              <span className="dark:text-purple-500 text-purple-700 font-semibold">
                Digital Marketing
              </span>
              , nXtribe is dedicated to amplifying our client&apos;s reach and
              driving measurable results. We craft data-driven strategies that
              resonate with target audiences and deliver impactful, lasting
              connections. By combining creativity with analytics, we help
              businesses stand out in the digital world, transforming online
              presence into enduring success.
            </p>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

export default PuposePage;
