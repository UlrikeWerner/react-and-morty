import React from "react";
import Card from "./Card";
import "./Home.css";

const Home = () => (
  <main className="home">
    <Card
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
    />
  </main>
);

export default Home;
