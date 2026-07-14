import SectionContainer from "../UI/SectionContainer";
import SectionTitle from "../UI/SectionTitle";

import { industries } from "@/lib/industries";

export default function Industries() {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow="INDUSTRIES"
        title="Industries We Support"
      />

      <ul>
        {industries.map((industry) => (
          <li key={industry.title}>
            {industry.title}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}