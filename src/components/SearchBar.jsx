import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = (props) => {
  // Reset Input Field handler
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
            // console.log(e.target.value);
          }}
        />
        <i name="search-clear" className="hidden" onClick={resetInputField}>
          <AiOutlineClose size={20} />
        </i>
      </div>
    </>
  );
};

export default SearchBar;
