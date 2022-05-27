import React, { useState } from "react";
import CardMoreInfo from "./CardMoreInfo/CardMoreInfo";
import "./Card.css";

export default function Card({
  id,
  isBookmarked,
  src,
  name,
  gender,
  location,
  species,
  status,
  toggleIsBookmarked,
}) {
  const [showMore, setShowMore] = useState("false");
  return (
    <section className="card" key={id}>
      <div className="cardImageWrapper">
        <svg
          viewBox="0 0 24 24"
          onClick={() => {
            toggleIsBookmarked(id);
          }}
        >
          <path
            className={isBookmarked ? "marked" : ""}
            d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
          />
        </svg>
        <img src={src} alt={name} />
      </div>
      <h2 className="name">{name}</h2>
      <button
        type="button"
        onClick={() => {
          setShowMore(!showMore);
        }}
      >
        {showMore ? "Show details" : "Show less"}
      </button>
      {showMore ? (
        ""
      ) : (
        <CardMoreInfo
          key={id}
          gender={gender}
          location={location}
          species={species}
          status={status}
        />
      )}
    </section>
  );
}
