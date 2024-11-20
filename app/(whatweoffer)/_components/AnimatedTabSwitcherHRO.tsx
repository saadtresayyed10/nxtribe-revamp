"use client";

import { Tabs } from "@/components/ui/tabs";

const Contents = [
  {
    title: ":",
    desc: "",
  },
  {
    title: "Talent Sourcing:",
    desc: "Our approach to talent sourcing is about uncovering and engaging the highest-caliber candidates who fit your specific needs, both now and for future growth. Leveraging cutting-edge tools, networks, and deep industry expertise, we proactively identify top-tier talent. We prioritize nurturing relationships, reaching passive candidates, and tapping into diverse pools of expertise often overlooked. By combining data analytics, personal engagement, and strategic mapping, our sourcing practices ensure you gain access to unique and qualified talent who align with your organization's mission, culture, and objectives.",
  },
  {
    title: "():",
    desc: "",
  },
  {
    title: ":",
    desc: "",
  },
  {
    title: " & Onboarding:",
    desc: "",
  },
  {
    title: ":",
    desc: "",
  },
];

export function AnimatedTabsSwitcherHRO() {
  const tabs = [
    {
      title: "TA&R",
      value: "Talent Acquisition",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Talent Acquisition & Recruitment:</p>
          <p className="lg:text-2xl lowercase mt-4">
            We simplify hiring by finding, attracting, and securing top talent.
            By aligning candidates with skills and culture, we deliver
            high-performing individuals who adapt and thrive, ensuring lasting
            organizational growth and a strong workforce aligned with your
            goals.
          </p>
        </div>
      ),
    },
    {
      title: "EVP",
      value: "EVP",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Building Employee Value Proposition:</p>
          <p className="lg:text-2xl lowercase mt-4">
            We create compelling EVPs that highlight unique benefits, culture,
            and growth opportunities. Our strategies attract top talent, boost
            employee loyalty, and strengthen brand reputation by aligning with
            what matters most to current and future employees.
          </p>
        </div>
      ),
    },
    {
      title: "Candidate Attraction",
      value: "Candidate Attraction",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Candidate Attraction:</p>
          <p className="lg:text-2xl lowercase mt-4">
            Our strategies position your organization as an employer of choice.
            Using authentic branding, data-driven insights, and targeted
            campaigns, we engage top talent through impactful narratives that
            resonate with your mission and values.
          </p>
        </div>
      ),
    },
    {
      title: "Hiring",
      value: "Hiring",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Hiring & Onboarding:</p>
          <p className="lg:text-2xl lowercase mt-4">
            We streamline hiring and onboarding by blending technology and
            personal connection. New hires feel supported and aligned, enabling
            fast engagement and productivity while fostering a sense of
            belonging and long-term success.
          </p>
        </div>
      ),
    },
    {
      title: "Compliances",
      value: "Compliances",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Compliances:</p>
          <p className="lg:text-2xl lowercase mt-4">
            We ensure your recruitment and hiring align with regulations and
            ethical standards. Our proactive compliance measures reduce risks,
            protect your organization, and foster trust among employees,
            candidates, and stakeholders.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center -mt-20 mb-20 font-circular lg:p-0 p-10">
      <Tabs tabs={tabs} />
    </div>
  );
}
