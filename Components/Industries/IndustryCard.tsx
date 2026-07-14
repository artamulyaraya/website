type IndustryCardProps = {
  title: string;
  description: string;
};

export default function IndustryCard({
  title,
  description,
}: IndustryCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}