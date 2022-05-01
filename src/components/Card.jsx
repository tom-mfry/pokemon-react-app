import React from "react";

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
              className="card h-[250px] w-[200px] bg-[#dfdfdf] rounded-3xl p-[20px] m-[10px] flex flex-col items-center justify-between"
              key={pokemon.id}
              onClick={() => infoPokemon(pokemon)}
            >
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
            </div>
          );
        })
      )}
    </>
  );
};

export default Card;
