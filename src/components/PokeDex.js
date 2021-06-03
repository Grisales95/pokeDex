import React, { useState, useEffect } from "react";
import axios from "axios";

import PokeCard from "./PokeCard";
import SearchBox from "./SearchBox";
import ByName from "./ByName";

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [pokemonN, setPokemonN] = useState("");

  const [type, setType] = useState("");

  const [name, setName] = useState("");

  useEffect(() => {
    setPokemons([]);
    setPokemonN("");

    if (type) {
      const getPokemonUrl = async () => {
        try {
          const getData = await axios(`https://pokeapi.co/api/v2/type/${type}`);
          setPokemons(getData.data.pokemon.slice(0, 4));
        } catch (error) {
          console.log(error);
        }
      };
      getPokemonUrl();
    }
  }, [type]);

  useEffect(() => {
    if (name) {
      const getPokemonByName = async () => {
        try {
          const getData = await axios(
            `https://pokeapi.co/api/v2/pokemon/${name}`
          );
          setPokemonN(getData.data);
        } catch (error) {
          console.log(error);
        }
      };
      getPokemonByName();
    }
    setPokemons([]);
    setPokemonN("");
  }, [name]);

  return (
    <div className="container-main">
      <div className="container">
        <div className="py-4 text-center">
          <SearchBox handleSearch={setType} setName={setName} />
        </div>
        <div className="d-flex flex-wrap py-3 justify-content-center row">
          <ByName pokemon={pokemonN} />
          {pokemons ? (
            pokemons.map((poke) => (
              // cambiar nombre de PokeDex a PokeCard
              <PokeCard url={poke.pokemon.url} key={poke.name} />
            ))
          ) : (
            <h2 className="d-none">Pokemon</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokeDex;
