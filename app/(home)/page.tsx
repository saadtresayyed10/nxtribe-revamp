import { CarouselImages } from "../_components/HomePage/CarouselImages";
import { Flipwords } from "../_components/HomePage/Flipwords";
import GoalsAndValues from "../_components/HomePage/GoalsAndValues";
import { InfiniteLogoMarquee } from "../_components/HomePage/InfiniteLogoMaquee";
import RandomPopUp from "../_components/HomePage/RandomPopUp";
import { Services } from "../_components/HomePage/Services";
import { HeroSection } from "../_components/HomePage/SparklesBg";
import { Testimonials } from "../_components/HomePage/Testimonials";
import { TimeLine } from "../_components/HomePage/TimeLine";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <InfiniteLogoMarquee />
      <RandomPopUp />
      <GoalsAndValues />
      <Flipwords />
      <CarouselImages />
      <div>
        <h1 className="lg:mt-10 lg:mb-20 dark:text-white font-unbounded lg:text-5xl text-2xl font-semibold text-center capitalize">
          Services we offer
        </h1>
        <Services />
      </div>
      <TimeLine />
      <Testimonials />
    </div>
  );
};

export default HomePage;
