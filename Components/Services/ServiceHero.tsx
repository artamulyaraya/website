import PageHero from "@/Components/UI/PageHero";
import { servicesHero } from "@/lib/servicesPage";

export default function ServiceHero() {
  return (
    <PageHero
      eyebrow={servicesHero.eyebrow}
      title={servicesHero.title}
    />
  );
}