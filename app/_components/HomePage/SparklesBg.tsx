"use client";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection() {
  return (
    <div className="lg:h-[32rem] h-[55rem] relative w-full bg-black flex flex-col items-center justify-center gap-y-6 overflow-hidden">
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
      <div className="flex justify-center items-center flex-col gap-y-8 text-white font-unbounded font-medium capitalize">
        <div className="self-start pl-4 lg:pl-16 flex flex-col gap-y-3">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.8 }}
            className="lg:text-4xl text-2xl"
          >
            Innovating Your Path to Digital Success.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "backOut", delay: 0.8 }}
            className="lg:text-4xl text-2xl"
          >
            Fueling Your Vision in the Digital Era.
          </motion.h1>
        </div>
        <div className="flex self-start items-center gap-x-10 flex-row">
          <div className="lg:px-16 px-8 font-circular lg:text-lg text-base text-muted-foreground lg:mt-6 mt-3 lg:w-[60%]">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
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
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
            className="flex justify-center items-center lg:flex-row flex-col gap-y-6 lg:gap-x-12 absolute lg:right-10 right-24 lg:mt-40 mt-[480px]"
          >
            <button className="lg:px-10 px-20 py-2 bg-purple-600 text-black text-base rounded-md w-full lg:w-min">
              Blog
            </button>
            <button className="lg:px-10 py-2 bg-neutral-700 text-muted-foreground text-base rounded-md w-full">
              Need Help
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
