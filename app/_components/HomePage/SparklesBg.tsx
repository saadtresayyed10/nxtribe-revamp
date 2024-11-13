"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Flipwords } from "./Flipwords";

export function SparklesBg() {
  return (
    <div className="lg:h-[40rem] h-[15rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Build great products
      </h1> */}
      <h1 className="text-4xl text-white text-center font-bold">Hello</h1>
    </div>
  );
}
