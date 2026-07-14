import SectionContainer from "../UI/SectionContainer";
import SectionTitle from "../UI/SectionTitle";
import SectionDescription from "../UI/SectionDescription";

import { whatWeDo } from "@/lib/about";

export default function WhatWeDo() {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={whatWeDo.eyebrow}
        title={whatWeDo.title}
      />

      <SectionDescription>
        {whatWeDo.description}
      </SectionDescription>
    </SectionContainer>
  );
}