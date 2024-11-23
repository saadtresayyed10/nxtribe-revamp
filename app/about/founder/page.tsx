"use client";

import { AuroraBackground } from "@/components/ui/aurora-background";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { motion } from "framer-motion";
import Image from "next/image";

const FounderPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen font-circular">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 my-20"
        >
          <div className="text-3xl lg:text-7xl font-semibold dark:text-white text-center">
            Championing People Success, Transforming Cultures, and Leading with
            Purpose
          </div>
          <div className="flex justify-center items-center flex-col gap-y-1 font-extralight text-xl lg:text-4xl dark:text-neutral-200 py-4">
            <div className="flex justify-center items-center mt-10 mb-5">
              <Image
                src="/images/founder.png"
                alt="Founder"
                width={170}
                height={170}
                className="rounded-full"
              />
            </div>
            <h1 className="text-3xl lg:text-5xl uppercase font-unbounded">
              Mr. Faisal Sayed
            </h1>
            <div className="flex justify-center items-center lg:w-[60%] text-center mt-6">
              <p className="lg:text-lg text-base">
                Faisal Sayed is the founder of nXtribe as well as seasoned
                Business & Leadership Coach with over 22 years of experience in
                HR across renowned organizations like Vodafone, HP, and SITEL
                India. His expertise encompasses the entire HR lifecycle,
                focusing on talent development, performance management, and
                employee engagement. Faisal holds a Post Graduate Certification
                from IIM Indore and authored &apos;Build Perpetual
                Success&apos;, guiding professionals in their corporate
                journeys. He excels in organizational development, coaching
                leaders, and aligning HR strategies with business goals,
                fostering high-performance cultures and resilience within teams
                while driving digital transformation and process optimization.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center lg:p-10">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10">
              <CardSpotlightComponent1 />
              <CardSpotlightComponent2 />
              <CardSpotlightComponent3 />
              <CardSpotlightComponent4 />
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

function CardSpotlightComponent1() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        IT & ITES
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Transforming Ideas into Digital Solutions" />
          <Step title="Your Partner in Digital Excellence" />
          <Step title="Navigating the Future of Technology Together" />
          <Step title="Efficiency Meets Innovation in Every Byte" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Learn the fundamentals of digital strategy, from online branding to
        leveraging social media and digital marketing tools.
      </p>
    </CardSpotlight>
  );
}

function CardSpotlightComponent2() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Training & Coaching
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Empower Your Journey to Success" />
          <Step title="Unlocking Potential, One Session at a Time" />
          <Step title="Transforming Talent into Triumph" />
          <Step title="Invest in Yourself: Grow, Learn, Succeed" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Explore how AI transforms business strategies with practical
        applications in operations, marketing, and engagement.
      </p>
    </CardSpotlight>
  );
}

function CardSpotlightComponent3() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Digital Marketing
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="Crafting Connections, Driving Results" />
          <Step title="Your Brand, Amplified Online" />
          <Step title="Engage, Inspire, Convert" />
          <Step title="Data-Driven Strategies for Maximum Impact" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Learn to address challenges and provide impactful solutions for
        sustainable business growth.
      </p>
    </CardSpotlight>
  );
}
function CardSpotlightComponent4() {
  return (
    <CardSpotlight className="lg:h-96 lg:w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        HRO & CHRO
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        <ul className="list-none  mt-2 flex justify-center items-start flex-col lg:text-sm">
          <Step title="People-Centric Strategies for Lasting Success" />
          <Step title="Building Teams, Shaping Futures" />
          <Step title="Aligning Talent with Vision for Impactful Change" />
          <Step title="Fostering Culture, Empowering Performance" />
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-base">
        Learn to address challenges and provide impactful solutions for
        sustainable business growth.
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
      className="h-4 w-4 text-white mt-1 flex-shrink-0"
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

export default FounderPage;
