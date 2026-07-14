import { services } from "../../lib/services";

export default function ServiceList() {
  return (
    <section>
      {services.map((service) => (
        <div key={service.title}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
}