import PageHero from "@/Components/UI/PageHero";
import SectionContainer from "@/Components/UI/SectionContainer";
import SectionDescription from "@/Components/UI/SectionDescription";

import Services from "@/Components/Services";
import CTA from "@/Components/CTA";

import {
  servicesHero,
  servicesIntroduction,
} from "@/lib/servicesPage";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow={servicesHero.eyebrow}
        title={servicesHero.title}
      />

      <SectionContainer>
        <SectionDescription>
          {servicesIntroduction.description}
        </SectionDescription>

        <Services />
      </SectionContainer>

      <CTA />
    </>
  );
}