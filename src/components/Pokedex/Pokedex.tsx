import React from 'react'
import PokeList from '../PokeList/PokeList'

import PokeSearchResult from '../PokeSearchResult/PokeSearchResult'
import SearchBox from '../SearchBox/SearchBox'

import './Pokedex.css'

const Pokedox = ()=> {
  return (
    <div className="pokedex-container">
      <div className="pokelist-container">
        <SearchBox />
        <PokeList />
      </div>
      <div className="pokesearchresult-container">
        <PokeSearchResult />
      </div>
    </div>
  )
}

export default  Pokedox