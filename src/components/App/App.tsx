import React, { useState, useEffect } from 'react'

import { pokemonData } from '../../data/pokemonData'
import Pokedex from '../Pokedex/Pokedex'
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../../../src/model";
import './App.css'

const App = () => {
  const [allPokemons, setAllPokemons] = useState<PokemonSchema[]>([])
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonSchema[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSchema>();

  const patchPokemonData = (pokemons: UnpatchedPokemonSchema[]) => {
    const patchedPokemons = pokemons.map((pokemon) => {
      let parsedSprites: PokemonSpritesSchema = {
        normal: undefined,
        animated: undefined,
      };

      try {
        parsedSprites = pokemon.sprites && JSON.parse(pokemon.sprites);
      } catch (e) {
        console.log("Exception while parsing sprites: ", e);
      }

      const patchedPokemon: PokemonSchema = {
        ...pokemon,
        sprites: parsedSprites,
      };

      return patchedPokemon;
    });

    return patchedPokemons;
  };

  useEffect(() => {
    // patch the stringified pokemons
    const patchedPokemons: PokemonSchema[] = patchPokemonData(pokemonData);
    setAllPokemons(patchedPokemons);
    setSearchedPokemons(patchedPokemons)
  }, [])

  const handleInputChange = (inputValue: string) => {
    const matchedPokemons: PokemonSchema[] = allPokemons.filter((pokemon: PokemonSchema) => {
      return (pokemon.name &&
        pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
      )
    })
    setSearchedPokemons(matchedPokemons)
  }

  const handleClickEvent = (pokemonName: string) => {
    const matchedPokemon = allPokemons.find(
      (pokemon: PokemonSchema) => pokemon.name === pokemonName
    )
    setSelectedPokemon(matchedPokemon)
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex searchedPokemons={searchedPokemons}
        selectedPokemon={selectedPokemon}
        onInputChange={handleInputChange}
        onPokemonClick={handleClickEvent} />
    </div>
  )
}

export default App