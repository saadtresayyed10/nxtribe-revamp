import { CarouselImages } from "../_components/HomePage/CarouselImages";
import { Flipwords } from "../_components/HomePage/Flipwords";
import { Services } from "../_components/HomePage/Services";
import { HeroSection } from "../_components/HomePage/SparklesBg";
import { Testimonials } from "../_components/HomePage/Testimonials";
import { TimeLine } from "../_components/HomePage/TimeLine";

const HomePage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen overflow-x-hidden">
      <HeroSection />
      <Flipwords />
      <CarouselImages />
      <div>
        <h1 className="lg:mt-10 lg:mb-4 dark:text-white font-unbounded lg:text-4xl font-semibold text-center capitalize">
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
