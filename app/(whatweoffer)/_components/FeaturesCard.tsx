import React from "react";
import { useId } from "react";

export function FeatureCards() {
  return (
    <div className="py-20 lg:p-10 font-circular">
      <h1 className="my-6 dark:text-white lg:text-5xl text-3xl font-semibold text-center capitalize lg:mb-10">
        IT & ITES Services
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-8 md:gap-2 gap-2 max-w-7xl mx-auto lg:p-0 p-4">
        {grid.map((feature) => (
          <div
            key={feature.title}
            className="relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden"
          >
            <Grid size={20} />
            <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
              {feature.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400 mt-4 text-base font-normal relative z-20">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Feature {
  title: string;
  description: string;
}

const grid: Feature[] = [
  {
    title: "Cloud Solutions",
    description:
      "Scalable, secure, and flexible services for data storage and processing.",
  },
  {
    title: "AI Solutions",
    description:
      "Intelligent systems transforming processes through automation and predictive insights.",
  },
  {
    title: "Contact Center Solutions",
    description:
      "Omnichannel customer support enhancing communication and service efficiency.",
  },
  {
    title: "Web Development",
    description:
      "Custom, responsive websites delivering optimized user experiences and functionality.",
  },
  {
    title: "App Development",
    description:
      "Mobile and desktop applications tailored for seamless user interaction.",
  },
  {
    title: "RPA",
    description:
      "Automated workflows increasing efficiency by minimizing repetitive human tasks.",
  },
  {
    title: "Digitalizations strategy",
    description:
      "Transforming analog processes into automated, digital-driven operations and services.",
  },
  {
    title: "CRM",
    description:
      "Centralized customer relationship management for improved engagement and retention.",
  },
];

interface GridProps {
  pattern?: number[][];
  size?: number;
}

export const Grid: React.FC<GridProps> = ({ pattern, size }) => {
  const p = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full  mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

interface GridPatternProps {
  width: number;
  height: number;
  x: string;
  y: string;
  squares?: number[][];
  className?: string;
}

export const GridPattern: React.FC<GridPatternProps> = ({
  width,
  height,
  x,
  y,
  squares,
  ...props
}) => {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
};
