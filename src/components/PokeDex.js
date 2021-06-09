import React, { useState, useEffect } from "react";
import axios from "axios";

import PokeCard from "./PokeCard";
import SearchBox from "./SearchBox";
import ByName from "./ByName";
import Pagination from "./Pagination"

const PokeDex = () => {
  const [pokemons, setPokemons] = useState([]);

  const [pokemonN, setPokemonN] = useState("");

  const [type, setType] = useState("");

  const [name, setName] = useState("");

  const [colorTypes, setColorTypes] = useState();

  const [currentPage, setCurrentPage] = useState(1)
  let [perPage] = useState(4)

  useEffect(() => {
    setPokemons([]);
    setPokemonN("");

    if (type) {
      const getPokemonUrl = async () => {
        try {
          const getData = await axios(`https://pokeapi.co/api/v2/type/${type}`);
          setPokemons(getData.data.pokemon);
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

  const indexOfLastPoke = currentPage * perPage;
  const indexOfFirstPoke = indexOfLastPoke - perPage;
  const currentPoke = pokemons.slice(indexOfFirstPoke, indexOfLastPoke)

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)

  }
  if(pokemons.length >= 100){
    perPage = 8
}
  

  return (
    <div className="container-main">
      <div className="container">
        <div className="py-4 text-center">
          <SearchBox handleSearch={setType} setName={setName} />
        </div>
        <div className="d-flex flex-wrap py-3 justify-content-center row">
          <ByName pokemon={pokemonN} />
          {currentPoke ? (
            currentPoke.map((poke) => (
              <PokeCard url={poke.pokemon.url} key={poke.name} colorBg={setColorTypes}/>
            ))
          ) : (
            <h2 className="d-none">Pokemon</h2>
          )}
        </div>
        <Pagination  perPage={perPage} totalPokemons={pokemons.length} paginate={paginate} color={colorTypes}/>
      </div>
    </div>
  );
};

export default PokeDex;
