"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="lg:h-[32rem] h-[58rem] relative w-full bg-black flex flex-col items-center justify-center gap-y-6 overflow-hidden">
      <div className="w-full absolute inset-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#A83DF1"
        />
      </div>
      <div className="flex justify-center items-center flex-col gap-y-8 text-white font-unbounded font-medium capitalize mt-4">
        <div className="self-start pl-4 lg:pl-16 flex flex-col gap-y-3">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.8 }}
            className="lg:text-6xl text-3xl"
          >
            Empowering People, Amplifying Reach, Unlocking Potential, and
            Delivering Infinite Solutions.
          </motion.h1>
          {/* <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "backOut", delay: 1.2 }}
            className="lg:text-4xl text-2xl"
          >
            Empowering People, Elevating Performance.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.0, ease: "backOut", delay: 1.4 }}
            className="lg:text-4xl text-2xl"
          >
            Driving Digital Success, Amplifying Your Reach.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "backOut", delay: 1.6 }}
            className="lg:text-4xl text-2xl"
          >
            Innovative Solutions, Infinite Possibilities.
          </motion.h1> */}
        </div>
        <div className="flex self-start items-center  gap-x-10 flex-row">
          <div className="lg:px-16 px-8 font-circular lg:text-lg text-base text-muted-foreground lg:mt-6 mt-3 lg:w-[60%]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 1.2 }}
            >
              <span className="lowercase">n</span>Xtribe is a premier provider
              of tailored HR, Training, and Digital Marketing Success solutions,
              empowering diverse businesses to excel. Backed by a team of
              seasoned professionals, we deliver exceptional services with
              unmatched Speed, Clarity, and Confidence. Our strategic alliances
              with industry leaders and dedication to innovation position us at
              the forefront of the market, enabling us to craft cutting-edge,
              results-oriented solutions that drive growth and success for our
              clients.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: "easeOut", delay: 1.6 }}
            className="flex justify-center items-center lg:flex-row flex-col gap-y-6 lg:gap-x-12 absolute lg:right-10 right-24 lg:mt-40 mt-[480px]"
          >
            <Link
              href="https://blog.nxtribe.com/"
              target="_blank"
              className="lg:px-10 px-20 py-2 bg-purple-600 text-black text-base rounded-md w-full lg:w-min"
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="lg:px-10 px-12 py-2 bg-neutral-700 text-muted-foreground text-base rounded-md lg:w-full"
            >
              Need Help
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
