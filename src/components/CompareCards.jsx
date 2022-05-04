import React from "react";

const CompareCards = () => {
  const handleClick = () => {
    console.log(2);
  };

  return (
    <>
      <div id="compare-section" className="card-comparison w-full h-full">
        <div
          className="w-full h-[40vh] bg-gray-600  flex justify-center items-center"
          onClick={() => {
            console.log("div clicked");
          }}
        >
          <p className="text-gray-400 text-2xl">
            Compare Cards - Under Development
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="relative bg-transparent h-0 w-[40%] flex justify-center"
          style={{
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderTop: "35px solid #a4a4a4",
          }}
        >
          <div
            id="toggle-tab"
            className="absolute -top-[32px] text-xl tracking-wider opacity-75 "
            onClick={() =>
              document
                .querySelector("#compare-section")
                .classList.toggle("hidden")
            }
          >
            Compare
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareCards;
