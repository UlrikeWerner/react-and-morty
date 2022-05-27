import "./App.css";
import { useEffect, useState } from "react";
import "./components/color-chart.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [persons, setPersons] = useState([]);

  function toggleIsBookmarked(id) {
    setPersons(
      persons.map((person) => {
        if (person.id === id) {
          person.isBookmarked = !person.isBookmarked;
        }
        return person;
      })
    );
  }

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";

    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPersons(
        data.results.map((element) => {
          return { ...element, isBookmarked: Math.random() < 0.5 };
        })
      );
    }
    fetchData(url);
  }, []);

  return (
    <>
      <Header />
      <Home persons={persons} toggleIsBookmarked={toggleIsBookmarked} />
      <Footer />
    </>
  );
}

export default App;
