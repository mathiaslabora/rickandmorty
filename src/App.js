import Barra from "./components/Barra";
import React, { useState, useEffect } from 'react';
import Personajes from "./components/Personajes";
import Paginas from "./components/Paginas";



function App() {
  const urlRandM = "https://rickandmortyapi.com/api/character";

  const [personajes, setpersonajes] = useState([]);
  const [info, setInfo] = useState({});
  const fPersonajes = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setpersonajes(data.results);
        setInfo(data.info);
      })
      .catch(error => console.log(error))
  }

  const onPrev = () => {
    fPersonajes(info.prev)
  }

  const onNext = () => {
    fPersonajes(info.next)
  }

  useEffect(() => {
    fPersonajes(urlRandM);
  })
  return (
    <>
      <Barra titulo={"Rick and Morty"} />

      <div className="container mt-3">
        <Paginas prev={info.prev} next={info.next} onPrev={onPrev} onNext={onNext} />
        <Personajes personajes={personajes} />
        <Paginas />
      </div>
    </>
  );
}

export default App;
