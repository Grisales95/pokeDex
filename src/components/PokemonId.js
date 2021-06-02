import React from 'react'
import { useParams } from "react-router-dom"

const PokemonId = () => {
  const {id} = useParams()
  return (
    <div>
      <h1>Hola</h1>
      {id}
    </div>
  )
}

export default PokemonId
