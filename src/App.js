import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [listPokemon, setListPokemon] = useState([])


  const consultaPokemon = () => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then(res => {
      setListPokemon(res.data.results.map(p => p.name))
    })

  }

  return (
    <div className="App">
      <button onClick={consultaPokemon} >Fetch Pokemon</button>
      {
        listPokemon.map((pokemon) => (
          <li key={pokemon.id}>{pokemon}</li>
        ))
      }
    </div>
  );
}
export default App;
