import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import { AiOutlineClose } from "react-icons/ai";

const CardList = (props) => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [testInput, setTestInput] = useState("");
  // type colors

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

  const resetInputField = () => {
    console.log("Reset Input");
    // setSearchTerm("");
  };

  return (
    <>
      <div
        name="search-box"
        className="flex items-center justify-center w-full text-gray-600 my-2"
      >
        <input
          name="search-input"
          className="h-full border-none py-[5px] px-[20px] text-xl text-center my-1 outline-none focus:placeholder:text-transparent"
          type="text"
          placeholder="Search Pokemon ..."
          onChange={(e) => {
            props.onChange(e.target.value);
            setTestInput(e.target.value);
          }}
        />
        <i name="search-clear" className="hidden" onClick={resetInputField}>
          <AiOutlineClose size={20} />
        </i>
      </div>
      <div className="flex  flex-col justify-center items-center bg-[#FFFDF1]">
        <div className="w-full h-full bg-[#d1cfc3] flex flex-wrap items-center justify-center max-w-[1200px] py-10 px-4 border-2 border-black outline-none">
          {/* create visual array of pokemon */}
          <Card
            pokemon={pokeData}
            loading={loading}
            userSearch={testInput}
            infoPokemon={(pokemon) => setPokeDex(pokemon)}
          />
        </div>

        {/* pagination */}
        <div className="flex items-center justify-evenly bg-[#FFFDF1] mb-5 mt-5">
          {prevUrl && (
            <button
              className="nav-main items-center justify-center max-w-[1200px] min-w-[30px] py-1 px-4 outline-none mx-5"
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
              className="nav-main items-center justify-center max-w-[1200px] min-w-[30px] py-1 px-4 outline-none mx-5"
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
