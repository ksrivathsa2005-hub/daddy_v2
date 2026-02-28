import { HeroSection } from "@/components/sections/HeroSection";
import { VisionSection } from "@/components/sections/VisionSection";
import { PlatformSection } from "@/components/sections/PlatformSection";
import { ExecutionSection } from "@/components/sections/ExecutionSection";
import { BuildPlanSection } from "@/components/sections/BuildPlanSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { CapitalSection } from "@/components/sections/CapitalSection";
import { WhySection } from "@/components/sections/WhySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <PlatformSection />
      <ExecutionSection />
      <BuildPlanSection />
      <TeamSection />
      <CapitalSection />
      <WhySection />
    </>
  );
}
