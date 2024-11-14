import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimeLine() {
  const data = [
    {
      title: "Join",
      content: (
        <div className="font-circular">
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-base font-normal mb-8 capitalize">
            We tailor our services to meet the specific needs of each client,
            ensuring personalized and effective solutions. We Provide
            Scalability & Flexibility of Solutions.
          </p>
        </div>
      ),
    },
    {
      title: "Connect",
      content: (
        <div className="font-circular">
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-base font-normal mb-8 capitalize">
            Our team of experienced professionals possesses the skills and
            knowledge to address complex business challenges with confidence.
          </p>
        </div>
      ),
    },
    {
      title: "Explore",
      content: (
        <div className="font-circular">
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-base font-normal mb-8">
            Nxtribe Experts integrate the latest tools and platforms to deliver
            state-of-the-art solutions for our clients.
          </p>
        </div>
      ),
    },
    {
      title: "Grow",
      content: (
        <div className="font-circular">
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-base font-normal mb-8">
            Nxtribe maintains rigorous quality standards to meet or exceed
            benchmarks; coupled with commitment to Innovation.
          </p>
        </div>
      ),
    },
    {
      title: "Success",
      content: (
        <div className="font-circular">
          <p className="text-neutral-800 dark:text-neutral-200 lg:text-base font-normal mb-8">
            At nxtribe, we prioritize the needs and goals of our clients above
            all else, striving to exceed expectations and build lasting
            partnerships based on trust, transparency, and mutual success..
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
