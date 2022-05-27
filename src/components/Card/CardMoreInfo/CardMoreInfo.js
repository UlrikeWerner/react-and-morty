import "./CardMoreInfo.css";

export default function CardMoreInfo({ gender, location, species, status }) {
  return (
    <section>
      <p>gender: {gender}</p>
      <p>location: {location}</p>
      <p>species: {species}</p>
      <p>status: {status}</p>
    </section>
  );
}
