import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string; // Optional string for custom classes
  reverse?: boolean; // Direction of animation (reverse if true)
  pauseOnHover?: boolean; // Pause animation on hover
  children?: React.ReactNode; // Content inside the marquee
  vertical?: boolean; // Determines if the marquee scrolls vertically
  repeat?: number; // Number of repetitions
  [key: string]: string | number | boolean | undefined | React.ReactNode; // Additional props with flexible types
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
