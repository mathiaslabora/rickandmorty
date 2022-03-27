import React, { useState, useEffect } from 'react';
import Barra from '../components/Barra';
import Paginas from '../components/Paginas';
import Episode from '../components/Episode';

const Capitles = (() => {
    const urlRandM = "https://rickandmortyapi.com/api/episode";

    const [info, setInfo] = useState([]);
   const [pages, setPages] = useState({});
    const fCapitles = (url) => {
      fetch(url)
        .then(response => response.json())
        .then((data) => {
          setPages(data.info);
          setInfo(data.results);
        })
        .catch(error => console.log(error))
    }
  
    const onPrev = () => {
      fCapitles(pages.prev)
    }
  
    const onNext = () => {
      fCapitles(pages.next)
    } 
  
    useEffect(() => {
      fCapitles(urlRandM);
    },[]);

    return (
      <>
        <Barra titulo={"Rick and Morty"} />
  
        <div className="container mt-3">
          <Paginas prev={pages.prev} next={pages.next} onPrev={onPrev} onNext={onNext} />
          <Episode espisodes={info} />
          <Paginas prev={pages.prev} next={pages.next} onPrev={onPrev} onNext={onNext} />
        </div>
      </>
    );
  }
)
export default Capitles;