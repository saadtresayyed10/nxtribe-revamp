"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const TalentPage = () => {
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
          Talent Acquisition
        </h1>
        <p></p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          At nXtribe, our{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Talent Acquisition
          </span>{" "}
          services are designed to connect organizations with top-tier talent
          that drives business success. We go beyond traditional hiring
          practices, leveraging a strategic and data-driven approach to identify
          candidates who align with our client&apos;s unique goals and values.
          By focusing on both skill and cultural fit, we ensure that every new
          hire not only excels in their role but also contributes to a thriving
          workplace culture.
        </p>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          Our{" "}
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Workshops
          </span>{" "}
          offer immersive learning experiences aimed at fostering growth,
          innovation, and collaboration. Tailored to meet the needs of diverse
          teams and industries, these workshops cover a broad range of
          topics—from leadership development and communication skills to
          cutting-edge technology and market trends. By engaging participants
          through interactive and hands-on sessions, we empower individuals and
          teams to transform knowledge into actionable impact within their
          organizations.
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

export default TalentPage;
