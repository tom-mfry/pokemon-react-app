import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const CardList = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  // type colors
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDEO",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "# 98d7a5",
    bug: "#f8d5a3",
    dragon: "# 97b3e6",
    psychic: "#eaedal",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  };
  // retrieve pokemon data
  const getPokeDex = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((cardA, cardB) => (cardA.id > cardB.id ? 1 : -1));
        return state;
      });
    });
  };

  useEffect(() => {
    getPokeDex();
    // console.log(`useEffect Called`);
  }, [url]);

  return (
    <>
      <div className="flex  flex-col justify-center items-center bg-[#FFFDF1] border-t-2 border-black">
        <div className="w-full h-full bg-primary-color flex flex-wrap items-center justify-center max-w-[1200px] py-2 px-4 border-solid border-transparent outline-none">
          {/* create visual array of pokemon */}
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(pokemon) => setPokeDex(pokemon)}
            colors={colors}
          />
        </div>

        {/* pagination */}
        <div className="flex items-center justify-evenly bg-[#FFFDF1] mb-5 mt-5">
          {prevUrl && (
            <button
              className="bg-red-500 max-w-[1200px] py-1 px-4 mx-5 outline-none rounded-md"
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}
          {nextUrl && (
            <button
              className="bg-red-500 items-center justify-center max-w-[1200px] py-1 px-4 outline-none rounded-md mx-5"
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardList;
