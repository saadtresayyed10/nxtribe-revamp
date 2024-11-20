"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const OrgAndDevPage = () => {
  const placeholders = [
    "Feel free to ask any question:",
    "Feel free to ask any question:",
    "Feel free to ask any question:",
    "Feel free to ask any question:",
    "Feel free to ask any question:",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
  };

  return (
    <div className="h-[40rem] w-full rounded-md dark:bg-black bg-white relative flex flex-col items-center justify-center antialiased font-circular my-32">
      <div className="max-w-2xl mx-auto p-4 flex justify-center items-center flex-col gap-y-6 text-center">
        <h1 className="relative z-10 text-3xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-black dark:to-white  text-center font-sans font-bold">
          Organizations & Development
        </h1>
        <p></p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          nXtribe&apos;s{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Organization & Development
          </span>{" "}
          services are dedicated to building resilient, adaptive, and
          forward-thinking organizations. We work with companies to create
          robust frameworks that drive organizational growth, streamline
          operations, and strengthen employee engagement. By assessing company
          culture, identifying key growth areas, and aligning strategic goals,
          we help shape organizations into dynamic ecosystems capable of
          thriving in an ever-changing market landscape.
        </p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          Through our comprehensive{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Workshops
          </span>
          , we focus on nurturing leadership, fostering collaboration, and
          promoting innovative thinking. These workshops are tailored to inspire
          employees at every level, instilling a sense of ownership and a drive
          for continuous improvement. By investing in development, we ensure
          that individuals and teams are well-equipped to lead, innovate, and
          contribute meaningfully to their organization&apos;s long-term
          success.
        </p>
        <PlaceholdersAndVanishInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default OrgAndDevPage;
