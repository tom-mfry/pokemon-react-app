import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Reset Input Field handler
  const resetInputField = () => {
    setSearchTerm("");
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
          onChange={async (e) => {
            await setSearchTerm(e.target.value);
            console.log(searchTerm);
          }}
        />
        <i name="search-clear" className="" onClick={resetInputField}>
          <AiOutlineClose size={20} />
        </i>
      </div>
    </>
  );
};

export default SearchBar;
