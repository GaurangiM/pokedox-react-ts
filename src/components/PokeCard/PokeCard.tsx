import React from 'react'

import './PokeCard.css'

interface PokeCardProps {
  name: string;
  spriteUrl?: string;
}

const PokeCard = (props: PokeCardProps)=> {
  return(
    <div className="pokecard">
      <img className="pokemon-sprite" alt="pokemon" src={props.spriteUrl} />
      <p>{props.name}</p>
    </div>
  )
}

export default PokeCard