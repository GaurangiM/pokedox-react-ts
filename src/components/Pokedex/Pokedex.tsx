import React from 'react'
import { PokemonSchema } from '../../model'
import PokeList from '../PokeList/PokeList'

import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'

import './Pokedex.css'

interface PokedexProps {
  searchedPokemons: PokemonSchema[]
  selectedPokemon: PokemonSchema | undefined
  onInputChange: (inputValue: string) => void
  onPokemonClick: (pokemonName: string) => void
}

const Pokedox = ({ searchedPokemons, selectedPokemon,
  onInputChange, onPokemonClick }: PokedexProps) => {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox onInputChange={onInputChange} />
        <PokeList searchedPokemons={searchedPokemons}
          onPokemonClick={onPokemonClick} />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult selectedPokemon={selectedPokemon} />
      </div>
    </div>
  )
}

export default Pokedox