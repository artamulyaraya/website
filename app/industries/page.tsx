import PageHero from "@/Components/UI/PageHero";
import SectionContainer from "@/Components/UI/SectionContainer";
import SectionDescription from "@/Components/UI/SectionDescription";

import IndustryGrid from "@/Components/Industries/IndustryGrid";
import CTA from "@/Components/CTA";

import {
  industriesHero,
  industriesIntroduction,
} from "@/lib/industriesPage";

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow={industriesHero.eyebrow}
        title={industriesHero.title}
      />

      <SectionContainer>
        <SectionDescription>
          {industriesIntroduction.description}
        </SectionDescription>

        <IndustryGrid />
      </SectionContainer>

      <CTA />
    </>
  );
}