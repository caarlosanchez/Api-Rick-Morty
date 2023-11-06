import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Characters from './components/characters/Characters';
import Pagination from './components/pagination/Pagination';

function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const baseURL = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data =>{
      setCharacters(data.results);
      setInfo(data.info);
    })
    .catch(error => console.log(error))
  };

  const onPrevious = () =>{
      fetchCharacters(info.prev);
  }
  const onNext = () =>{
    fetchCharacters(info.next);
  }

  useEffect(()=>{
      fetchCharacters(baseURL);
  }, [])

 


  return (
    <>
    <Navbar brand="RICK AND MORTY" />

    <Pagination 
    prev={info.prev} 
    next={info.next} 
    onPrevious={onPrevious} 
    onNext={onNext}/>

    <Characters characters={characters} />

    <Pagination 
    prev={info.prev} 
    next={info.next} 
    onPrevious={onPrevious} 
    onNext={onNext}/>
    
    <Navbar brand="RICK AND MORTY" />
    </>
  )
}

export default App
