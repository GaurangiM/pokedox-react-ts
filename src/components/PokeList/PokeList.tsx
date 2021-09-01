import React from 'react'
import { PokemonSchema } from '../../model'
import PokeCard from '../PokeCard/PokeCard'

import './PokeList.css'

interface PokelistProps {
  searchedPokemons: PokemonSchema[]
  onPokemonClick: (pokemonName: string) => void
}

const PokeList = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
  return (
    <div className="pokelist">
      {
        searchedPokemons.map((pokemon) => {
          return (
            pokemon.name &&
            (<PokeCard key={pokemon.id} name={pokemon.name}
              spriteUrl={pokemon.sprites.normal}
              onPokemonClick={onPokemonClick} />)
          )
        }
        )

      }
    </div>
  )
}

export default PokeList