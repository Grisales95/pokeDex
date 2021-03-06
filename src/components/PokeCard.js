import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PokeCard = ({ url, colorBg }) => {
  const [pokemon, setPokemon] = useState("");

  useEffect(() => {
    const getPokemon = async () => {
      const data = await axios(url);
      setPokemon(data.data);
    };

    getPokemon();
  }, [url]);

  if (!pokemon) {
    return null;
  }

  const colors = {
    fairy: "#f6ccd5",
    dark: "#b7aba3",
    dragon: "#b79bfb",
    ice: "#cbebeb",
    psychic: "#fbabc3",
    electric: "#fbe797",
    grass: "#bbe3a7",
    water: "#DEF3FD",
    fire: "#f7bf97",
    steel: "#dbdbe7",
    ghost: "#a897e6",
    bug: "#b7abcb",
    rock: "#dbcf9b",
    ground: "#efdfb3",
    poison: "#cf9fcf",
    flying: "#d3c7f7",
    fighting: "#df9793",
    normal: "#d3d3bb",
  };

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

  const color = colors[pokemon.types[0]?.type.name];
  const icon = `../icons/${pokemon.types[0]?.type.name}.svg`;
  const icon2 = `../icons/${pokemon.types[1]?.type.name}.svg`;
  const colorsType = colorsIcons[pokemon.types[0]?.type.name];
  const colorsType2 = colorsIcons[pokemon.types[1]?.type.name];

  colorBg(colorsType);

  const atk = "../icons/atk.png";
  const hp = "../icons/hp.png";
  const def = "../icons/def.png";
  const spd = "../icons/spd.png";
  return (
    <div
      className="card py-2 mx-3 my-2 text-center col-3 pb-3"
      style={{ backgroundColor: `${color}` }}
    >
      <div>
        <p className="id-number">#{pokemon.id}</p>
        <h4>{pokemon.name}</h4>
      </div>
      <div className="card-body">
        {pokemon.sprites.other.dream_world.front_default ? (
          <div className="card-img">
            <img
              src={pokemon.sprites.other.dream_world.front_default}
              width="130px"
              height="130px"
              alt={pokemon.name}
            />
          </div>
        ) : (
          <div className="card-img">
            <img
              src={pokemon.sprites.front_default}
              width="130px"
              height="130px"
              alt={pokemon.name}
            />
          </div>
        )}
        <div className="d-flex justify-content-center">
          <div
            className="icon-type me-1"
            style={{ background: `${colorsType}` }}
          >
            <img src={icon} alt="element" />
          </div>
          {pokemon.types[1] && (
            <div className="icon-type" style={{ background: `${colorsType2}` }}>
              <img src={icon2} alt="element2" />
            </div>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p>
            <img
              src={hp}
              style={{ width: "25px", height: "25px" }}
              alt="heart"
            />{" "}
            {pokemon.stats[0].base_stat}
          </p>
          <p>
            <img
              src={atk}
              style={{ width: "25px", height: "25px" }}
              alt="sword"
            />
            {pokemon.stats[1].base_stat}
          </p>
        </div>
        <div className="col-6">
          <p>
            <img
              src={def}
              style={{ width: "25px", height: "25px" }}
              alt="shield"
            />{" "}
            {pokemon.stats[2].base_stat}
          </p>
          <p>
            <img
              src={spd}
              style={{ width: "30px", height: "30px" }}
              alt="thunder"
            />{" "}
            {pokemon.stats[3].base_stat}
          </p>
        </div>
      </div>

      <Link
        className="btn"
        style={{ background: `${colorsType}`, color: "#fff" }}
        to={`/pokeDex/${pokemon.name}`}
      >
        Go
      </Link>
    </div>
  );
};

export default PokeCard;
