import React from "react";
import PokemonPage from "./PokemonPage";
import {useState, useEffect} from "react";

function App() {

  const [pokemons, setPokemons]= useState([])

  const fetchPokemons = async ()=>{
    const request = await fetch ("http://localhost:3001/pokemon")
    const response = await request.json()

    console.log(response)
    setPokemons(response)
  }

  useEffect(()=>{fetchPokemons()}, [])

  return (
    <div className="App">
      <PokemonPage pokemons={pokemons} setPokemons={setPokemons}/>
    </div>
  );
}

export default App;
