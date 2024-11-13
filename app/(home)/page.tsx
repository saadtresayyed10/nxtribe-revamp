import { BorderButton } from "../_components/HomePage/BorderButton";
import { CarouselImages } from "../_components/HomePage/CarouselImages";
import { Flipwords } from "../_components/HomePage/Flipwords";
import { Services } from "../_components/HomePage/Services";
import { SparklesBg } from "../_components/HomePage/SparklesBg";
import { Testimonials } from "../_components/HomePage/Testimonials";
import { TimeLine } from "../_components/HomePage/TimeLine";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center w-full min-h-screen">
      <SparklesBg />
      <Services />
      <Testimonials />
      <CarouselImages />
      <Flipwords />
      <BorderButton />
      <TimeLine />
    </div>
  );
};

export default HomePage;
