import React from "react";
import NavBar from "./NavBar";
import CardList from "./CardList";
import CompareCards from "./CompareCards";
import SearchBar from "./SearchBar";
import { useState } from "react";

const Main = () => {
  return (
    <>
      <NavBar />
      <CompareCards />
      <SearchBar />
      <CardList />
    </>
  );
};

export default Main;
