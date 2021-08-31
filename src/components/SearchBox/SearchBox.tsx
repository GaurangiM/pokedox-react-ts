import React from 'react'

import './SearchBox.css'

interface SearchBoxProps {
  onInputChange: (inputValue: string) => void
}
const SearchBox = (props: SearchBoxProps)=> {
  return (
    <input type="search" className="search" 
            placeholder="Search pokemons"
            onChange={(e)=> {
              props.onInputChange(e.target.value)
            }} />
  )
}

export default SearchBox