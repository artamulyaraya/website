import SectionContainer from "../UI/SectionContainer";
import SectionTitle from "../UI/SectionTitle";

import { whyWorkWithUs } from "@/lib/about";

export default function WhyWorkWithUs() {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow="WHY WORK WITH US"
        title="Why International Buyers Choose AMR"
      />

      <ul>
        {whyWorkWithUs.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SectionContainer>
  );
}