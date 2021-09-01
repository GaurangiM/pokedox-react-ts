import React from 'react'

import './PokeCard.css'

interface PokeCardProps {
  name: string;
  spriteUrl?: string;
  onPokemonClick: (pokemonName: string) => void
}

const PokeCard = (props: PokeCardProps) => {
  return (
    <div className="pokecard"
      onClick={() => {
        props.onPokemonClick(props.name)
      }}>
      <img className="pokemon-sprite" alt="pokemon" src={props.spriteUrl} />
      <p>{props.name}</p>
    </div>
  )
}

export default PokeCard