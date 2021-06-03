import { useState, useEffect } from "react";
import Location from "./Location";
import axios from "axios";

const PokemonId2 = ({ pokemonN, id, colorsType }) => {
  const [species, setSpecies] = useState("");

  useEffect(() => {
    const getData = async () => {
      const data = await axios(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      setSpecies(data.data);
    };
    getData();
  }, [id]);

  if (!species) {
    return null;
  }

  return (
    <div className="mt-4">
      <div className="shiny">
        <span>Shiny Version:</span>
        {pokemonN.sprites.front_shiny && (
          <div className=" shiny-img text-center">
            <img src={pokemonN.sprites.front_shiny} alt={pokemonN.name} />
          </div>
        )}
      </div>
      <div className="about mt-4">
        <p>{species.flavor_text_entries[0]?.flavor_text}</p>
        <p>{species.generation?.name}</p>
        <Location id={id} colorsType={colorsType} pokemon={pokemonN} />
      </div>
    </div>
  );
};

export default PokemonId2;
