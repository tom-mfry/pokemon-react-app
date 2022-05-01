import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const SearchBar = () => {
  return (
    <>
      <div
        name="search-box"
        className="flex items-center justify-center w-full text-gray-600 my-2"
      >
        <input
          name="search-input"
          className="h-full border-none py-[5px] px-[20px] text-xl text-center my-1"
          type="text"
          placeholder="Search Pokemon"
        />
        <i name="search-clear" className="">
          <AiOutlineClose size={20} />
        </i>
      </div>
    </>
  );
};

export default SearchBar;
