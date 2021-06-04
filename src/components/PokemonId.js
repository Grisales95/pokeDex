import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import PokemonId2 from "./PokemonId2";

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
  }, [id]);

  if (!pokemonN) {
    return null;
  }

  const colorsIcons = {
    fairy: "#EE90E6",
    dark: "#595761",
    dragon: "#0C69C8",
    ice: "#75D0C1",
    psychic: "#FA8581",
    electric: "#F2D94E",
    grass: "#5FBD58",
    water: "#539DDF",
    fire: "#FBA54C",
    steel: "#5695A3",
    ghost: "#5F6DBC",
    bug: "#92BC2C",
    rock: "#C9BB8A",
    ground: "#DA7C4D",
    poison: "#B763CF",
    flying: "#A1BBEC",
    fighting: "#D3425F",
    normal: "#A0A29F",
  };

  const colorsType = colorsIcons[pokemonN.types[0]?.type.name];
  const colorsType2 = colorsIcons[pokemonN.types[1]?.type.name];

  console.log(id);

  return (
    <div className="container-id" style={{ background: `${colorsType}` }}>
      <div className=" py-4">
        <div className="title-id">
          <h1>
            #{pokemonN.id} - {pokemonN.name}{" "}
            <img src={pokemonN.sprites?.front_default} alt={pokemonN.name} />
          </h1>
        </div>
        <div className="row d-flex  justify-content-center">
          <div className="card-id col-5">
            <div className="container-img my-4">
              <img
                src={pokemonN.sprites?.other.dream_world.front_default}
                alt={pokemonN.name}
              />
            </div>
            <div className="container-type my-4">
              <span>Type: </span>
              <div className="type-id">
                <div
                  className="span-type ms-4"
                  style={{ background: `${colorsType}` }}
                >
                  {pokemonN.types[0]?.type.name}
                </div>
                <div
                  className="span-type ms-2"
                  style={{ background: `${colorsType2}` }}
                >
                  {pokemonN.types[1]?.type.name}
                </div>
              </div>
            </div>
            <div className="details">
              <div className="details-id">
                <span>Height: </span>
                {pokemonN.height}
              </div>
              <div className="details-id">
                <span>Weigth: </span>
                {pokemonN.weight}
              </div>
            </div>
            <div className="container-atributes my-4">
              <p>Attributes</p>
              <div className="atributes">
                <div className="atri  me-2 mb-2 bg-color-hp">
                  HP: {pokemonN.stats[0]?.base_stat}
                </div>
                <div className="atri  me-2 mb-2 bg-color-atk">
                  ATK: {pokemonN.stats[1]?.base_stat}
                </div>
                <div className="atri  me-2 mb-2 bg-color-def">
                  DEF: {pokemonN.stats[2]?.base_stat}
                </div>
                <div className="atri  me-2 mb-2 bg-color-spd">
                  SPD: {pokemonN.stats[3]?.base_stat}
                </div>
                <div className="atri  me-2 mb-2 bg-color-sp-a">
                  SP.ATK: {pokemonN.stats[4]?.base_stat}
                </div>
                <div className="atri  me-2 mb-2 bg-color-sp-d">
                  SP.DEF: {pokemonN.stats[5]?.base_stat}
                </div>
              </div>
            </div>
          </div>
          <div className="col-7">
            <PokemonId2 pokemonN={pokemonN} id={id} colorsType={colorsType} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonId;
