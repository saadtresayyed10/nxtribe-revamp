"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const RecruitmentPage = () => {
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
    <div className="h-[40rem] w-full rounded-md dark:bg-black bg-white relative flex flex-col items-center justify-center antialiased font-circular lg:my-32">
      <div className="max-w-2xl mx-auto p-4 flex justify-center items-center flex-col lg:gap-y-6 text-center">
        <h1 className="relative z-10 text-lg lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-black dark:to-white  text-center font-sans font-bold">
          Recruitment
        </h1>
        <p></p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          At nXtribe, our{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Recruitment
          </span>{" "}
          services are centered on finding the perfect match between top talent
          and leading organizations. We take pride in our meticulous approach to
          sourcing, screening, and selecting candidates who bring not only the
          required expertise but also a passion for their work. By understanding
          the unique culture and objectives of each client, we deliver
          candidates who can make an immediate and lasting impact, fostering
          growth and innovation within the company.
        </p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          Our{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Workshops
          </span>{" "}
          complement the recruitment process by equipping new hires and existing
          teams with the skills and knowledge necessary to excel. These
          workshops provide dynamic, interactive learning opportunities designed
          to enhance leadership capabilities, communication proficiency, and
          technical skills. By nurturing continuous learning, we empower teams
          to adapt, innovate, and achieve new heights together.
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

export default RecruitmentPage;
