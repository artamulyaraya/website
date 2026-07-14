type SectionDescriptionProps = {
  children: React.ReactNode;
};

export default function SectionDescription({
  children,
}: SectionDescriptionProps) {
  return (
    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto 60px",
        textAlign: "center",
        lineHeight: "1.8",
        color: "#cfcfcf",
        fontSize: "20px",
      }}
    >
      {children}
    </p>
  );
}