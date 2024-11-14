"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function HeroSection() {
  return (
    <div className="lg:h-[32rem] h-[15rem] relative w-full bg-black flex flex-col items-center justify-center gap-y-6 overflow-hidden">
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
      <div className="flex justify-center items-center flex-col lg:gap-y-8 text-white font-unbounded font-medium capitalize">
        <div className="self-start pl-4 lg:pl-16 flex flex-col lg:gap-y-3">
          <h1 className="lg:text-4xl text-2xl">
            Innovating Your Path to Digital Success.
          </h1>
          <h1 className="lg:text-4xl text-2xl">
            Fueling Your Vision in the Digital Era.
          </h1>
        </div>
        <div className="flex self-start items-center gap-x-10 flex-row">
          <div className="lg:px-16 font-circular lg:text-lg text-muted-foreground lg:mt-6 w-[60%]">
            <p>
              nXtribe is a premier provider of tailored HR, Training, and
              Digital Marketing Success solutions, empowering diverse businesses
              to excel. Backed by a team of seasoned professionals, we deliver
              exceptional services with unmatched Speed, Clarity, and
              Confidence. Our strategic alliances with industry leaders and
              dedication to innovation position us at the forefront of the
              market, enabling us to craft cutting-edge, results-oriented
              solutions that drive growth and success for our clients.
            </p>
          </div>
          <div className="flex justify-center items-center lg:gap-x-12 absolute right-10 lg:mt-40">
            <button className="lg:px-10 py-2 bg-purple-600 text-black lg:text-base rounded-md">
              Why Us
            </button>
            <button className="lg:px-10 py-2 bg-neutral-700 text-muted-foreground lg:text-base rounded-md">
              Need Help
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
