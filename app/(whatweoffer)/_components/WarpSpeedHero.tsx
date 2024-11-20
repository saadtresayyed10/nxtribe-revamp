import React from "react";
import { Cover } from "@/components/ui/cover";

export function WarpSpeedHero() {
  return (
    <div>
      <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center lg:mt-6 mt-10 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-circular uppercase">
        Empowering Growth
        <br /> at <Cover className="lg:p-4">warp speed</Cover>
      </h1>
    </div>
  );
}
