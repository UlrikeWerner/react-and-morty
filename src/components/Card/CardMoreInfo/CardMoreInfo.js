import "./CardMoreInfo.css";
import "../../color-chart.css";

export default function CardMoreInfo({
  id,
  gender,
  location,
  species,
  status,
}) {
  return (
    <>
      <p>gender: {gender}</p>
      <p>location: {location}</p>
      <p>species: {species}</p>
      <p>status: {status}</p>
    </>
  );
}
