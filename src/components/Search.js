import React from "react";

function Search({pokemons, setPokemons}) {

  const handleSearch = (e)=>{
    console.log(e.target.value)
    // pokemons.filter(e.target.value) ? setPokemons.toLowerCase(e.target.value) : null
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearch} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
