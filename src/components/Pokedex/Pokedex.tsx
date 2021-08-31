import React from 'react'
import { PokemonSchema } from '../../model'
import PokeList from '../PokeList/PokeList'

import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'

import './Pokedex.css'

interface PokedexProps {
  searchedPokemons: PokemonSchema[]
  onInputChange: (inputValue: string) => void
}

const Pokedox = ({ searchedPokemons, onInputChange } : PokedexProps)=> {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox onInputChange={onInputChange}/>
        <PokeList searchedPokemons={searchedPokemons}/>
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  )
}

export default  Pokedox