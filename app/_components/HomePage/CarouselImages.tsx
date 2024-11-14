"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function CarouselImages() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h1 className="lg:mt-10 lg:mb-4 dark:text-white text-black font-unbounded lg:text-4xl font-semibold capitalize lg:ml-10">
        Actually Why <span className="lowercase">n</span>
        <span className="text-purple-700 dark:text-purple-500 lg:text-5xl">
          X
        </span>
        <span className="lowercase">tribe</span>?
      </h1>
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
