import React from "react";
import Card from "../Card/Card";
import "./Home.css";

export default function Home({ persons, setPersons }) {
  return (
    <main className="home">
      {persons.map((person) => {
        return (
          <Card
            key={person.id}
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
      {/* <Card
      isBookmarked={true}
      src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
      name="Rick Sanchez"
    />
    <Card
      isBookmarked={false}
      src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
      name="Morty Smith"
    />
    <Card
      isBookmarked={false}
      src="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
      name="Summer Smith"
/> */}
    </main>
  );
}
