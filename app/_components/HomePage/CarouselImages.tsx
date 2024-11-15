"use client";

import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function CarouselImages() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="w-full h-full py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        className="lg:mt-10 lg:mb-4 dark:text-white text-black font-unbounded lg:text-4xl text-2xl font-semibold capitalize lg:ml-10 ml-6"
      >
        Actually Why <span className="lowercase">n</span>
        <span className="text-purple-700 dark:text-purple-500 lg:text-5xl text-3xl">
          X
        </span>
        <span className="lowercase">tribe</span>?
      </motion.h1>
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Our Purpose",
    title:
      "At nXtribe, our purpose is to empower businesses to thrive in the digital age by delivering tailored HR, Training, and Digital Success solutions.",
    src: "/images/carousel/purpose.jpg",
  },
  {
    category: "Our Winning Approach",
    title:
      "At nXtribe, our approach is centered around understanding and addressing the unique needs of each client with precision and expertise.",
    src: "/images/carousel/winning.jpg",
  },
  {
    category: "Customized Solutions",
    title:
      "We tailor our services to meet the specific needs of each client, ensuring personalized and effective solutions. We Provide Scalability & Flexibility of Solutions.",
    src: "/images/carousel/solutions.jpg",
  },

  {
    category: "Expert Team",
    title:
      "Our team of experienced professionals possesses the skills and knowledge to address complex business challenges with confidence.",
    src: "/images/carousel/team.jpg",
  },
  {
    category: "Cutting-Edge Technology",
    title:
      "nXtribe integrates advanced tools to deliver top-notch client solutions, ensuring rigorous quality standards and fostering continuous innovation.",
    src: "/images/carousel/tech.jpg",
  },
  {
    category: "Client-Centric Approach",
    title:
      "At nXtribe, we prioritize client needs, aiming to surpass expectations and forge enduring partnerships founded on trust and transparency.",
    src: "/images/carousel/client.jpg",
  },
];
