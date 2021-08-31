import React from 'react'
import { PokemonSchema } from '../../model'
import PokeList from '../PokeList/PokeList'

import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'

import './Pokedex.css'

interface PokedexProps {
  searchedPokemons: PokemonSchema[]
}

const Pokedox = ({ searchedPokemons } : PokedexProps)=> {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox />
        <PokeList searchedPokemons={searchedPokemons}/>
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  )
}

export default  Pokedox