import { StickyScrollFeaturesTraining } from "../../_components/StickyScrollFeaturesTraining";
import { WarpSpeedHero } from "../../_components/WarpSpeedHero";

const TrainingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen">
      <WarpSpeedHero />
      <StickyScrollFeaturesTraining />
    </div>
  );
};

export default TrainingPage;
