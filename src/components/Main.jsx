import React from "react";
import NavBar from "./NavBar";
import CardList from "./CardList";
import CompareCards from "./CompareCards";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Main = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <NavBar />
      <CompareCards />
      {/* <SearchBar onChange={(userInput) => setSearchTerm(userInput)} /> */}
      <CardList
        userSearch={searchTerm}
        onChange={(userInput) => setSearchTerm(userInput)}
      />
    </>
  );
};

export default Main;
