"use client";

import { Tabs } from "@/components/ui/tabs";

export function AnimatedTabsSwitcher() {
  const tabs = [
    {
      title: "SEO",
      value: "SEO",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Search Engine Optimization:</p>
          <p className="lg:text-2xl lowercase">
            Boosts online visibility by optimizing website content, structure,
            and technical aspects, increasing organic traffic and improving
            rankings on search engines like Google.
          </p>
        </div>
      ),
    },
    {
      title: "Content Marketing",
      value: "Content Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Content Marketing:</p>
          <p className="lg:text-2xl lowercase">
            Engages target audiences through high-quality, relevant content,
            such as blogs, videos, and infographics, driving traffic, leads, and
            customer loyalty.
          </p>
        </div>
      ),
    },
    {
      title: "Social Media Marketing",
      value: "Social Media Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Social Media Marketing:</p>
          <p className="lg:text-2xl lowercase">
            Connects brands with audiences through platforms like Facebook,
            Instagram, and LinkedIn, building engagement, trust, and driving
            conversions.
          </p>
        </div>
      ),
    },
    {
      title: "PPC",
      value: "PPC",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Pay-Per-Click Advertising:</p>
          <p className="lg:text-2xl lowercase">
            Drives targeted traffic through paid ads on platforms like Google
            and social media, offering immediate visibility and measurable ROI.
          </p>
        </div>
      ),
    },
    {
      title: "Email Marketing",
      value: "Email Marketing",
      content: (
        <div className="w-full overflow-hidden relative h-min rounded-2xl p-14 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Email Marketing:</p>
          <p className="lg:text-2xl lowercase">
            Builds lasting customer relationships through personalized email
            campaigns, increasing engagement, nurturing leads, and boosting
            sales.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] lg:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center -mt-20 mb-20 font-circular">
      <Tabs tabs={tabs} />
    </div>
  );
}
