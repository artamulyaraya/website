import PageHero from "@/Components/UI/PageHero";
import SectionContainer from "@/Components/UI/SectionContainer";
import SectionDescription from "@/Components/UI/SectionDescription";

import ContactGrid from "@/Components/Contact/ContactGrid";
import WhyContactUs from "@/Components/Contact/WhyContactUs";
import CTA from "@/Components/CTA";

import {
  contactHero,
  contactIntroduction,
} from "@/lib/contactPage";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactHero.eyebrow}
        title={contactHero.title}
      />

      <SectionContainer>
        <SectionDescription>
          {contactIntroduction.description}
        </SectionDescription>

        <ContactGrid />
      </SectionContainer>

      <WhyContactUs />

      <CTA />
    </>
  );
}