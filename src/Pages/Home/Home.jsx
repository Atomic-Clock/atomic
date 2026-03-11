import HeroSection from "./Sections/HeroSection";
// import InfoSlider from "./Sections/InfoSlider";
import AtomicInfoSection from "./Sections/AtomicInfoSection";
import StabilitySection from "./Sections/StabilitySection";
//import PlatformOverview from "./Sections/PlatformOverview";

export default function Home() {
  return (
    <div className="bg-[#0b0f1a] text-white">
      <HeroSection />
      {/* <InfoSlider /> */}
      <AtomicInfoSection />
      <StabilitySection />
      {/* <PlatformOverview /> */}
    </div>
  );
}
