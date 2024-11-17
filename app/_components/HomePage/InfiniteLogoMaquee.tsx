import Marquee from "@/components/ui/marquee";

const logos = [
  {
    name: "Steamz",
    img: "/images/logo-carousel/steamz.jpeg",
  },
  {
    name: "Alwan",
    img: "/images/logo-carousel/alwan.jpeg",
  },
  {
    name: "Ariss",
    img: "/images/logo-carousel/ariss.jpeg",
  },
  {
    name: "Derby",
    img: "/images/logo-carousel/derby.png",
  },
  {
    name: "Ami",
    img: "/images/logo-carousel/ami.png",
  },
];

export function InfiniteLogoMarquee() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden bg-white dark:bg-white lg:p-10 p-6 mt-10">
      <div className="flex flex-row gap-4 overflow-hidden">
        <Marquee className="w-full justify-center overflow-hidden [--duration:20s] [--gap:3rem]">
          {logos.map((data, idx) => (
            <img
              key={idx}
              src={data.img}
              alt={data.name}
              className="mx-auto h-24 w-24 object-contain cursor-pointer rounded-xl  transition-all duration-300"
            />
          ))}
        </Marquee>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 lg:w-10 w-4 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 lg:w-10 w-4 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
