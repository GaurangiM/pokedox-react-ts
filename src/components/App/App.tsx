import React, {useState} from 'react'

import { pokemonData } from '../../data/pokemonData'
import Pokedex from '../Pokedex/Pokedex'
import {
  PokemonSchema,
  PokemonSpritesSchema,
  UnpatchedPokemonSchema,
} from "../../../src/model";
import './App.css'

const App = () => {
  const [pokeData, setPokeData] = useState(pokemonData);
  const [searchField, setSearchField] = useState<string>("");
  const [searchedPokemons, setSearchedPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState("");
  console.log(pokeData)

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

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  )
}

export default App