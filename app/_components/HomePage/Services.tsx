import { cn } from "@/lib/utils";
import {
  IconViewfinder,
  IconCloud,
  IconCurrencyDollar,
  IconBook,
  IconHeart,
  IconHelp,
  IconPencil,
  IconTerminal2,
} from "@tabler/icons-react";

export function Services() {
  const features = [
    {
      title: "Talent Acquisition & Recruitment",
      description:
        "Attracting top talent, optimizing hiring, and building exceptional teams.",
      icon: <IconViewfinder />,
    },
    {
      title: "Organizational Development",
      description:
        "Building culture, managing change, maximizing performance, driving goal success.",
      icon: <IconTerminal2 />,
    },
    {
      title: "CHRO & HR Services",
      description:
        "Strategic HR leadership, talent growth, culture building, and performance excellence.",
      icon: <IconBook />,
    },
    {
      title: "Training & Coaching (For Individuals and Teams)",
      description:
        "Developing skills and enhancing performance through tailored training and coaching.",
      icon: <IconPencil />,
    },
    {
      title: "Employee Wellness",
      description:
        "Promoting health, well-being, and work-life balance for employees.",
      icon: <IconHeart />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, everything straightforward.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Customer Support",
      description:
        "We are available to help you out at any the time. Let us know by filling in the form.",
      icon: <IconHelp />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 lg:gap-0 gap-4 py-10 lg:p-0 p-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "bg-white flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800 border-neutral-400",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-30 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-black dark:text-black">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10 text-black">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-purple-600 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-black">
          {title}
        </span>
      </div>
      <p className="text-black text-sm dark:text-black max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
