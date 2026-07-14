import SectionTitle from "./SectionTitle";

type PageHeroProps = {
  eyebrow: string;
  title: string;
};

export default function PageHero({
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <section
      style={{
        padding: "160px 40px 100px",
        background: "#111",
      }}
    >
      <SectionTitle
        eyebrow={eyebrow}
        title={title}
      />
    </section>
  );
}