import React from 'react'

import './PokeSearchResult.css'

const PokeSearchResult = ()=> {
  const isPokemonSelected = true;
  return (
    <div className="poke-result-card">
      {isPokemonSelected ? (
        <div>
          <p>Name</p>
          <p>Id</p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )} 
    </div>
  )
}

export default PokeSearchResult