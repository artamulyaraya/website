import { industries } from "@/lib/industries";
import IndustryCard from "./IndustryCard";

export default function IndustryGrid() {
  return (
    <section>
      {industries.map((industry) => (
        <IndustryCard
          key={industry.title}
          title={industry.title}
          description={industry.description}
        />
      ))}
    </section>
  );
}