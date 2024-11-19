import { LampBg } from "../../_components/LampBg";

const Contents = [
  {
    title: "Talent Acquisition & Recruitment:",
    desc: "We streamline the entire hiring process by identifying, attracting, and securing the best talent available. By understanding organizational goals, we ensure that every candidate aligns with both the skill requirements and culture of the company. Our comprehensive approach encompasses market research, strategic outreach, and targeted evaluation. Through innovative strategies and technology-driven practices, we deliver high-performing talent capable of driving growth and adapting to ever-changing industry dynamics. The goal is not just to fill roles but to cultivate a workforce that thrives, grows, and evolves with the organization's ambitions, creating a mutually beneficial and lasting impact.",
  },
  {
    title: "Talent Sourcing:",
    desc: "Our approach to talent sourcing is about uncovering and engaging the highest-caliber candidates who fit your specific needs, both now and for future growth. Leveraging cutting-edge tools, networks, and deep industry expertise, we proactively identify top-tier talent. We prioritize nurturing relationships, reaching passive candidates, and tapping into diverse pools of expertise often overlooked. By combining data analytics, personal engagement, and strategic mapping, our sourcing practices ensure you gain access to unique and qualified talent who align with your organization's mission, culture, and objectives.",
  },
  {
    title: "Building EVP (Employee Value Proposition):",
    desc: "A compelling Employee Value Proposition (EVP) communicates what makes working at your company unique and rewarding. We work closely with you to develop, enhance, and showcase benefits, culture, career growth, and values that differentiate your organization in the talent market. By focusing on what matters most to your people—be it professional development, workplace flexibility, or meaningful impact—our tailored EVP strategies strengthen employee loyalty, attract exceptional talent, and amplify your brand reputation. This consistent message ensures current and potential employees clearly see the value in joining and staying with your organization.",
  },
  {
    title: "Candidate Attraction:",
    desc: "Our candidate attraction strategies are designed to make your organization stand out as an employer of choice. We create compelling campaigns, craft authentic employer branding, and leverage targeted marketing channels to engage prospective candidates who resonate with your mission and values. By using data-driven insights, we optimize messaging to reach the right audiences, generate interest, and inspire top talent to consider your opportunities. Whether through digital media, community outreach, or events, we shape impactful narratives that captivate and connect with candidates, building lasting impressions that drive talent engagement.",
  },
  {
    title: "Hiring & Onboarding:",
    desc: "We transform hiring and onboarding into a seamless journey, starting with efficient talent selection and extending into immersive new-hire experiences. Our methods blend technology, personal connection, and clarity, helping candidates transition smoothly into their new roles. We focus on fostering a sense of belonging and equipping new hires with the tools, culture alignment, and support they need to excel. Through our comprehensive onboarding solutions, productivity and engagement accelerate, setting up individuals—and teams—for sustainable, high-impact performance, all while creating meaningful first impressions.",
  },
  {
    title: "Compliances:",
    desc: "Our compliance solutions are designed to help you navigate complex regulatory frameworks and ethical standards with confidence. We ensure all recruitment, hiring, and employment practices align with relevant laws, industry regulations, and best practices. From background checks and equal opportunity measures to privacy protections and labor laws, our commitment to compliance mitigates legal risks and safeguards your organization’s integrity. With regular audits, updates, and proactive guidance, we create a compliant and ethical work environment, fostering trust among employees, candidates, and partners.",
  },
];

const HRPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen">
      <LampBg />

      <h1 className="lg:mb-10 text-white font-unbounded lg:text-5xl text-2xl font-semibold text-center capitalize">
        What Do We Offer
      </h1>

      {Contents.map((content) => (
        <div className="flex flex-col items-start lg:gap-y-8 font-circular font-extralight bg-black text-white lg:p-12 w-full">
          <h1 className="uppercase font-semibold lg:text-4xl text-purple-500">
            {content.title}
          </h1>
          <p className="text-muted-foreground lg:text-xl">{content.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default HRPage;
