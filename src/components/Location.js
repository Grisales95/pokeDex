import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const Location = ({ id, colorsType, pokemon }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (id) {
      const getData = async () => {
        const data = await axios(
          `https://pokeapi.co/api/v2/pokemon/${id}/encounters`
        );
        setLocation(data.data);
      };
      getData();
    }
  }, [id]);

  return (
    <div className="location-container">
      <p>location Area..</p>
      {location[0]?.location_area.name ? (
        <div className="span-container d-flex">
          <div
            className="location-span"
            style={{ background: `${colorsType}` }}
          >
            {location[0]?.location_area.name}
          </div>
          {location[1]?.location_area.name && (
            <div
              className="location-span"
              style={{ background: `${colorsType}` }}
            >
              {location[1]?.location_area.name}
            </div>
          )}
          {location[2]?.location_area.name && (
            <div
              className="location-span"
              style={{ background: `${colorsType}` }}
            >
              {location[2]?.location_area.name}
            </div>
          )}
        </div>
      ) : (
        <div className="alert alert-danger text-center">No location..</div>
      )}
      <div className="abilities mt-3">
        <p>Abilities.</p>
        <div
          className="d-flex justify-content-center cont-abilities"
          style={{ background: `${colorsType}` }}
        >
          <span className="me-3">{pokemon.abilities[0]?.ability.name}</span>
          <span>{pokemon.abilities[1]?.ability.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Location;
