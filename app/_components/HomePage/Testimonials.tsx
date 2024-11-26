"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";
import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function Testimonials() {
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
    <section ref={ref}>
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={controls}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 40 },
        }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.6 }}
        className="my-10 dark:text-white font-unbounded lg:text-5xl text-3xl font-semibold text-center capitalize"
      >
        Testimonials
      </motion.h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}
export const projects = [
  {
    title: "Glen",
    description:
      "I was particularly impressed by Faisal's ability to handle even the toughest clients—effortlessly.",
    link: "/",
  },
  {
    title: "Malini",
    description:
      "Faisal comes across as an extremely focused calm, balanced and knowledgeable professional. Indeed, it was a pleasure having him in my team and working with him very closely on couple of global projects. Faisal comes with strong Business acumen and is passionate about people processes and capability building.",
    link: "/",
  },
  {
    title: "Atul",
    description:
      "He is a great change leader in an organisation and impact people and culture in a positive manner.",
    link: "/",
  },
  {
    title: "Deekshant",
    description: "Faisal is an excellent testament of a leader and a coach.",
    link: "/",
  },
  {
    title: "Gajanand",
    description:
      "Faisal has outstanding capability to develop people and train them.",
    link: "/",
  },
  {
    title: "Saad",
    description: "Faisal Sir is such an excellent mentor.",
    link: "/",
  },
];
