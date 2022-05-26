import React from "react";
import Card from "../Card/Card";
import "./Home.css";

export default function Home({ persons, toggleIsBookmarked }) {
  return (
    <main className="home">
      {persons.map((person) => {
        return (
          <Card
            key={person.id}
            id={person.id}
            isBookmarked={person.isBookmarked}
            src={person.image}
            name={person.name}
            gender={person.gender}
            location={person.location.name}
            species={person.species}
            status={person.status}
            toggleIsBookmarked={toggleIsBookmarked}
          />
        );
      })}
    </main>
  );
}
