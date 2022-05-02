import React from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(pokemon.types);
  // const [pokeTypes, setPokeTypes] = useState([]);
  // setPokeTypes(
  //   pokemon.types.map((pokemon) => {
  //     pokemon.type.name;
  //   })
  // );

  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };
  const main_types = Object.keys(colors);

  return (
    <>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        pokemon.map((pokemon) => {
          const pokemon_types = pokemon.types.map(
            (pokemon) => pokemon.type.name
          );
          const type = main_types.find(
            (type) => pokemon_types.indexOf(type) > -1
          );
          const color = colors[type];
          console.log(color);

          return (
            <>
              <div
                className={`card-front relative card h-[250px] w-[200px] rounded-3xl p-[20px] m-[10px] flex flex-col items-center justify-between border-2 border-gray-500`}
                key={pokemon.id}
                style={{ backgroundColor: `${color}` }}
              >
                {/* favourite toggle */}
                <div className="absolute left-3 top-2 opacity-80">STATS</div>
                <div className="absolute right-3 top-2 text-black">
                  <i name="favourite-outline" className="absolute">
                    <BsStar size={24} />
                  </i>
                  <i name="favourite" className="text-yellow-400">
                    <BsStarFill size={24} />
                  </i>
                </div>
                {/* sprite */}
                <div className="w-[70%] bg-white bg-opacity-50 rounded-full mb-2">
                  <img
                    className="w-full h-full opacity-100"
                    src={pokemon.sprites.front_default}
                    alt=""
                  />
                </div>

                {/* pokemon id */}
                <div className="bg-white px-2 py-1 rounded-xl">{`#${pokemon.id
                  .toString()
                  .padStart(3, "0")}`}</div>
                {/* pokemon name */}
                <h2>
                  {`${String(pokemon.name).at(0).toUpperCase()}${String(
                    pokemon.name
                  ).slice(1)}`}
                </h2>
                <div className="bg-white px-2 rounded-xl">{`Type: ${String(type)
                  .at(0)
                  .toUpperCase()}${String(type.slice(1))}`}</div>
              </div>
              <div className="card-back"></div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
