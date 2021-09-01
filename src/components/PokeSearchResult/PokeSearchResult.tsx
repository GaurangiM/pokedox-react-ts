import React from 'react'
import { PokemonSchema } from '../../model';

import './PokeSearchResult.css'

interface PokeSearchResultProps {
  selectedPokemon: PokemonSchema | undefined
}

const PokeSearchResult = ({ selectedPokemon }: PokeSearchResultProps) => {

  const { name, id, height, weight, base_experience, sprites } = selectedPokemon || {};
  return (
    <div className="poke-result-card">
      {selectedPokemon ? (
        <div>
          <img src={sprites?.animated || sprites?.normal}
            alt="pokemon"
            className="pokemon-animated-sprite" />
          <p>Name: {name}</p>
          <p>Id: {id}</p>
          <p>Weight: {weight}</p>
          <p>Height: {height}</p>
          <p>Base Experience: {base_experience}</p>
        </div>
      ) : (
        <h2>Welcome to the Pokedex</h2>
      )}
    </div>
  )
}

export default PokeSearchResult