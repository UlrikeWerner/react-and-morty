import "./App.css";
import { useEffect, useState } from "react";
import "./components/color-chart.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    const url = "https://rickandmortyapi.com/api/character/";

    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();
      setPersons(
        data.results.map((element) => {
          const randomBoolean = Math.random() < 0.5;
          element["isBookmarked"] = randomBoolean;
          return element;
        })
      );
      console.log(data.results);
    }
    fetchData(url);
  }, []);

  return (
    <>
      <Header />
      <Home persons={persons} setPersons={setPersons} />
      <Footer />
    </>
  );
}

export default App;
