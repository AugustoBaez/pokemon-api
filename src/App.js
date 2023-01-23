import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [listPokemon, setListPokemon] = useState([])
  const [currentPokemon, setCurrentPokemon] = useState("https://pokeapi.co/api/v2/pokemon")
  const [morePokemon, setMorePokemon] = useState([])

  useEffect(() => {
    axios.get(currentPokemon).then(res => {
      setMorePokemon(res.data.next)
      setListPokemon(res.data.results.map(pokemon => pokemon.name))
    })
  }, [currentPokemon])

  const consultaPokemon = () => {
    setCurrentPokemon(morePokemon)
  }

  return (
    <div className="App">
      <button onClick={consultaPokemon}>Fetch Pokemon</button>
      {
        listPokemon.map((pokemon) => (
          <li>{pokemon}</li>
        ))
      }
    </div>
  );
}
export default App;
