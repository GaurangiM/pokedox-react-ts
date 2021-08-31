import React from 'react'
import { PokemonSchema } from '../../model'
import PokeCard from '../PokeCard/PokeCard'

import './PokeList.css'

interface PokelistProps {
  searchedPokemons: PokemonSchema[]
}

const PokeList = ({ searchedPokemons }: PokelistProps)=> {
  return (
    <div className="pokelist">
      {
        searchedPokemons.map((pokemon)=> {
          return (
            pokemon.name &&
            (<PokeCard key={pokemon.id} name={pokemon.name}
                            spriteUrl={pokemon.sprites.normal}/>)
            )}
        )
        
      }
    </div>
  )
}

export default PokeList