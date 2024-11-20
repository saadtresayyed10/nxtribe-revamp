import { AnimatedTabsSwitcherHRO } from "../_components/AnimatedTabSwitcherHRO";
import { LampBg } from "../_components/LampBg";

const HRPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen">
      <LampBg />
      <AnimatedTabsSwitcherHRO />
    </div>
  );
};

export default HRPage;
