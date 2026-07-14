import SectionContainer from "../UI/SectionContainer";
import SectionTitle from "../UI/SectionTitle";
import SectionDescription from "../UI/SectionDescription";

import { whoWeAre } from "@/lib/about";

export default function WhoWeAre() {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow={whoWeAre.eyebrow}
        title={whoWeAre.title}
      />

      <SectionDescription>
        {whoWeAre.description}
      </SectionDescription>
    </SectionContainer>
  );
}