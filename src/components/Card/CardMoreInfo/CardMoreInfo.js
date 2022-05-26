import "./CardMoreInfo.css";

export default function CardMoreInfo({
  showMore,
  gender,
  location,
  species,
  status,
}) {
  return (
    <section className={showMore ? "card--hidden" : ""}>
      <p>gender: {gender}</p>
      <p>location: {location}</p>
      <p>species: {species}</p>
      <p>status: {status}</p>
    </section>
  );
}
