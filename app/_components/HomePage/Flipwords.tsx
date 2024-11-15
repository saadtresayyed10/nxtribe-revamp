import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function Flipwords() {
  const words = [
    "Making Way For Success.",
    "Chasing Nuanced Excellence.",
    "Having Cross Industry Expertise.",
    "A Tribe with Collaborative Efforts.",
  ];

  return (
    <div className="my-10 lg:mr-32 flex justify-center items-center px-4">
      <div className="font-circular lg:text-3xl text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        At{" "}
        <span className="font-semibold text-purple-700 dark:text-purple-500 underline underline-offset-4">
          nXtribe
        </span>{" "}
        we are -
        <FlipWords
          words={words}
          className="lg:text-xl text-base font-unbounded"
        />
        <br />
        Welcome to our tribe.
      </div>
    </div>
  );
}
