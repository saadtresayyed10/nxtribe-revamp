"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export function Testimonials() {
  return (
    <section>
      <h1 className="lg:my-6 dark:text-white font-unbounded lg:text-4xl font-semibold text-center capitalize">
        Testimonials
      </h1>
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
