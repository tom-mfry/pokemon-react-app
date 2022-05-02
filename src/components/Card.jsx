import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Card = ({ pokemon, loading, infoPokemon, colors }) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        pokemon.map((pokemon) => {
          return (
            <div
              className="relative card h-[250px] w-[200px] bg-[#dfdfdf] rounded-3xl p-[20px] m-[10px] flex flex-col items-center justify-between"
              key={pokemon.id}
              onClick={() => infoPokemon(pokemon)}
            >
              <div className="absolute left-[80%] text-black">
                <i name="favourite-outline" className="absolute">
                  <BsStar size={24} />
                </i>
                <i name="favourite" className="text-yellow-400">
                  <BsStarFill size={24} />
                </i>
              </div>
              <img
                className="w-[80%]"
                src={pokemon.sprites.front_default}
                alt=""
              />
              <div className="bg-white px-2 py-1 rounded-xl">{`#${pokemon.id
                .toString()
                .padStart(3, "0")}`}</div>

              {/* pokemon number - sentence case */}
              <h2>{`${String(pokemon.name).at(0).toUpperCase()}${String(
                pokemon.name
              ).slice(1)}`}</h2>
              <h2>Test text</h2>
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
