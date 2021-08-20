import React, {useState} from 'react'
import { pokemonData } from '../../data/pokemonData'

import Pokedex from '../Pokedex/Pokedex'
import './App.css'

interface AppState {
  searchField: string;
    allPokemons: any;
    searchedPokemons: any;
    selectedPokemon: any;
}

const App = () => {
  const [pokeData, setPokeData] = pokemonData;
  const [searchField, setSearchField] = useState<string>("");
  const [searchedPokemons, setSearchedPokemons] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState("");

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  )
}

export default App