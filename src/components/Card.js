import React from "react";
import "./Card.css";

const Card = ({ isBookmarked, src, name }) => (
  <section className="card">
    <div className="cardImageWrapper">
      <svg viewBox="0 0 24 24">
        <path
          className={isBookmarked ? "marked" : ""}
          d="M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z"
        />
      </svg>
      <img src={src} alt={name} />
    </div>
    <h2 className="name">{name}</h2>
    <button type="button">Show details</button>
  </section>
);

export default Card;
