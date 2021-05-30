import React from 'react'
import { useState } from "react"

const SearchBox = ({handleSearch}) => {

  const [valueName, setValueName] = useState("fire")
  const [valueType, setValueType] = useState()

  const pokeApiLogo = "../icons/pokeapi.png"
  return (
    <div className="container-search card p-3 py-4 text-start">
        <div className="poke-api-logo">
          <img src={pokeApiLogo} alt="pokeApi" /> 
        </div>
        <label htmlFor="type" className="my-2" id="typ">Search Pokemon By Type</label>
         <select className="form-control" name ="type" id="typ" onChange = {e=>setValueName(e.target.value)}>
          <option value="fire">Fire</option>
          <option value="water">Water</option>
          <option value="normal">Normal</option>
          <option value="fighting">Fighting</option>
          <option value="flying">Flying</option>
          <option value="poison">Poison</option>
          <option value="dragon">Dragon</option>
          <option value="ghost">Ghost</option>
          <option value="rock">Rock</option>
          <option value="steel">Steel</option>
          <option value="bug">Bug</option>
          <option value="electric">Electric</option>
          <option value="psychic">Psychic</option>
          <option value="grass">Grass</option>
          <option value="ground">Ground</option>
          <option value="ice">Ice</option>
          <option value="dark">Dark</option>
          </select>
          <button  className = "btn btn-primary mt-2" onClick={()=>handleSearch(valueName)}>Search</button>
        <form  onChange = {e=>setValueType(e.target.value)}>
            <label htmlFor="name" className="my-2">Search Pokemon By Name</label>
            <input type="text" className="form-control mb-2" id="name" />
          <div className="d-grid gap-2">
            <button className="btn btn-primary">Search</button>
          </div>
        </form>
    </div>
  )
}

export default SearchBox
