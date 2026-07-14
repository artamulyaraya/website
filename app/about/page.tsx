import PageHero from "@/Components/UI/PageHero";
import WhoWeAre from "@/Components/About/WhoWeAre";
import WhatWeDo from "@/Components/About/WhatWeDo";
import Industries from "@/Components/About/Industries";
import WhyWorkWithUs from "@/Components/About/WhyWorkWithUs";
import MissionVision from "@/Components/About/MissionVision";
import CTA from "@/Components/CTA";

import { aboutHero } from "@/lib/about";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutHero.eyebrow}
        title={aboutHero.title}
      />

      <WhoWeAre />
      <WhatWeDo />
      <Industries />
      <WhyWorkWithUs />
      <MissionVision />

      <CTA />
    </>
  );
}