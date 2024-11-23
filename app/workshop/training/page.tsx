"use client";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const TrainingPage = () => {
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
    <div className="lg:h-[45rem] h-[105rem] w-full rounded-md dark:bg-black bg-white relative flex flex-col items-center justify-center antialiased font-circular my-32">
      <div className="max-w-2xl mx-auto p-4 flex justify-center items-center flex-col gap-y-6 text-center">
        <h1 className="relative z-10 text-4xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-purple-800 to-black dark:to-white  text-center font-sans font-bold">
          Training
        </h1>
        <p className="text-neutral-500 dark:text-neutral-300 max-w-lg mx-auto my-2 text-sm lg:text-lg text-center relative z-10">
          <span className="font-semibold dark:text-purple-500 text-purple-700">
            Training Overview
          </span>
          : Empower professionals with practical training in RPA, Operational
          Excellence, and Leadership Coaching. Gain hands-on experience,
          certification guidance, and post-training support to foster
          innovation, efficiency, and leadership growth across industries.
        </p>
        <div className="flex justify-center items-center lg:flex-row flex-col lg:gap-x-4 gap-y-6 z-20 lg:p-6 p-2">
          <CardSpotlightComponent1 />
          <CardSpotlightComponent2 />
          <CardSpotlightComponent3 />
        </div>
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

function CardSpotlightComponent1() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-purple-700">
        Robotic Process Automation
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Automate tasks, drive innovation:
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Automate Processes, Empower Innovation" />
          <Step title="Streamline Workflows with RPA" />
          <Step title="Master RPA, Transform Operations" />
          <Step title="Efficiency Through RPA Expertise" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Master RPA tools and certifications to automate tasks and innovate.
      </p>
    </CardSpotlight>
  );
}

function CardSpotlightComponent2() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-purple-700">
        Operational Excellence
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Master operational strategies to enhance processes, drive efficiency,
        and lead effectively:
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Optimize Processes, Achieve Excellence" />
          <Step title="Streamline Operations, Lead Success" />
          <Step title="Efficiency Redefined Through Excellence" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Enhance processes, boost efficiency, and lead with operational
        excellence.
      </p>
    </CardSpotlight>
  );
}

function CardSpotlightComponent3() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-purple-700">
        Coaching for Leadership and Growth
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Develop leadership skills to inspire, mentor, and drive team success.:
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Inspire Growth, Lead Effectively" />
          <Step title="Empower Teams, Transform Leadership" />
          <Step title="Coaching Leaders, Building Futures" />
          <Step title="Unlock Potential, Achieve Greatness" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Master coaching skills to nurture talent and lead with impact.
      </p>
    </CardSpotlight>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-muted-foreground">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-purple-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

export default TrainingPage;
