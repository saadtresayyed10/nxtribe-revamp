import { AnimatedTabsSwitcher } from "../_components/AnimatedTabsSwitcher";
import { TypeWriting } from "../_components/TypeWriting";

const DigitalMarketingPage = () => {
  return (
    <div className="flex justify-center items-center flex-col w-full min-h-screen">
      <TypeWriting />
      <AnimatedTabsSwitcher />
    </div>
  );
};

export default DigitalMarketingPage;
