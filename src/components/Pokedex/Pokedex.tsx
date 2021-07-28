import React from 'react'
import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'

import './Pokedex.css'

const Pokedox = ()=> {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <p>List of Pokemons</p>
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  )
}

export default  Pokedox