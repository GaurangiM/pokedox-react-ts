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
  //const [pokeData, setPokeData] = useState(pokemonData);
  const [searchField, setSearchField] = useState<string>("");
  const [allPokemons, setAllPokemons] = useState<PokemonSchema[]>([])
  const [searchedPokemons, setSearchedPokemons] = useState<PokemonSchema[]>([])
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonSchema>();
  //console.log(pokeData)

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

  useEffect(()=> {
    // patch the stringified pokemons
    const patchedPokemons: PokemonSchema[] = patchPokemonData(pokemonData);
    console.log(patchedPokemons)
    setAllPokemons(patchedPokemons);
    setSearchedPokemons(patchedPokemons)
  }, [])

  const handleInputChange = (inputValue: string) => {
    console.log(inputValue)
  }

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex searchedPokemons= {searchedPokemons}
                onInputChange={handleInputChange}/>
    </div>
  )
}

export default App