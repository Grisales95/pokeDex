import { useState, useEffect } from "react"
import axios from "axios"

const PokemonId2 = ({ pokemonN, id }) =>{

  const [species, setSpecies] = useState("")


  useEffect (()=>{
    const getData = async () =>{
      const data = await axios(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
      setSpecies(data.data)
    }
    getData()
  },[])

  if(!species){
    return null
  }

  console.log(species)

  return(
    <div className="mt-4">
      <div className="shiny">
        <span>Shiny Version:</span>
        {
          pokemonN.sprites.front_shiny &&
          <div className=" shiny-img text-center">
            <img src={pokemonN.sprites.front_shiny}/>
          </div>
        }
      </div>
      <div className="about mt-4">
            <p>
              {species.flavor_text_entries[0]?.flavor_text}
            </p>
            <p>
              {species.generation?.name}
            </p>
      </div>
    </div>
  )
}

export default PokemonId2