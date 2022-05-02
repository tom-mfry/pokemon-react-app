import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  // Input Field handler
  const handleUserInput = (e) => {
    setInputValue(e.target.value);
  };

  // Reset Input Field handler
  const resetInputField = () => {
    setInputValue("");
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
          value={inputValue}
          onChange={handleUserInput}
        />
        <i name="search-clear" className="" onClick={resetInputField}>
          <AiOutlineClose size={20} />
        </i>
      </div>
    </>
  );
};

export default SearchBar;
