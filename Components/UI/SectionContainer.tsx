type SectionContainerProps = {
  children: React.ReactNode;
};

export default function SectionContainer({
  children,
}: SectionContainerProps) {
  return (
    <section
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "100px 40px",
      }}
    >
      {children}
    </section>
  );
}