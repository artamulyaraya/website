import SectionContainer from "../UI/SectionContainer";
import SectionTitle from "../UI/SectionTitle";

import { whyContactUs } from "@/lib/contactPage";

export default function WhyContactUs() {
  return (
    <SectionContainer>
      <SectionTitle
        eyebrow="WHY CONTACT US"
        title="Why International Buyers Choose AMR"
      />

      <ul>
        {whyContactUs.map((item) => (
          <li key={item}>
            ✓ {item}
          </li>
        ))}
      </ul>
    </SectionContainer>
  );
}