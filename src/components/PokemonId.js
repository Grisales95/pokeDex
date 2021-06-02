import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PokemonId = () => {
  const [pokemonN, setPokemonN] = useState("");
  const [id] = useState(useParams().id);

  useEffect(() => {
    const fetchFunc = async () => {
      const getData = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemonN(getData?.data);
      return;
    };

    fetchFunc();
  }, []);

  console.log(pokemonN);
  return (
    <div className="container-id">
      <div>
        <div className="container py-4">
          <h1>
            #{pokemonN.id} - {pokemonN.name}
          </h1>
          <div className="card-id">
            <div className="container-img my-4">
              <img
                src={pokemonN.sprites?.other.dream_world.front_default}
                alt={pokemonN.name}
              />
            </div>
            <div className="container-type">
              Type:<span>{pokemonN.types[0]?.type}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonId;
