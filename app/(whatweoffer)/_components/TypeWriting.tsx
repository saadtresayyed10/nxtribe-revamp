"use client";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
export function TypeWriting() {
  const words = [
    {
      text: "Transforming",
    },
    {
      text: "Clicks",
    },
    {
      text: "Into",
    },
    {
      text: "Conversation.",
      className: "text-purple-700 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] font-circular">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        The road to digital success starts from here
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Learn More
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact
        </button>
      </div>
    </div>
  );
}
