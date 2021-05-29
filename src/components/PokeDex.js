import React from 'react'
import { useState, useEffect} from "react"
import axios from "axios"

const PokeDex = ({url}) => {

  const [pokemon, setPokemon] = useState("")

  useEffect(()=>{

      const getPokemon = async () => {
      const data = await axios(url);
      setPokemon(data.data);
      }

      getPokemon()
  },[url])
  
  if(!pokemon){
    return null
  }

  return (
    <div className="card p-4 me-3 my-2 text-center col-3">
      <div className="card-body">
          <h4>{pokemon.name}</h4>
        <div>
          <img src={pokemon.sprites.other.dream_world.front_default} width="120px" height="120px" alt="pokemons"/> 
          <div className="d-flex justify-content-between">
            <div>
              <p> Type:</p>
            </div>
            <p>{pokemon.types[0]?.type.name}</p>
            <p>{pokemon.types[1]?.type.name} </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokeDex
