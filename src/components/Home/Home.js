import React from "react";
import Card from "../Card/Card";
import "./Home.css";

export default function Home({ persons }) {
  return (
    <main className="home">
      {persons.map((person) => {
        return (
          <Card
            key={person.id}
            id={person.id}
            isBookmarked={false}
            src={person.image}
            name={person.name}
            gender={person.gender}
            location={person.location.name}
            species={person.species}
            status={person.status}
          />
        );
      })}
    </main>
  );
}
