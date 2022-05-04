import React from "react";

const CompareCards = () => {
  return (
    <>
      {/* card compare section */}
      <div id="compare-section" className="card-comparison w-full h-full">
        <div className="w-full h-[40vh] bg-gray-600  flex justify-center items-center">
          <p className="text-gray-400 text-2xl">UNDER DEVELOPMENT</p>
        </div>
      </div>
      <div className="bg-[#FFFDF1] flex justify-center items-center">
        <div
          id="tab-div"
          className="relative bg-transparent h-0 w-[40%] flex justify-center"
          style={{
            borderLeft: "25px solid transparent",
            borderRight: "25px solid transparent",
            borderTop: "35px solid #555555",
          }}
        >
          {/* toggle tab */}
          <div
            id="toggle-tab"
            className="absolute -top-[30px] text-l tracking-wider opacity-75 w-[100%] text-center bg-transparent"
            onClick={() =>
              document
                .querySelector("#compare-section")
                .classList.toggle("hidden")
            }
          >
            <p className="text-[#FFFDF1] font-medium ">COMPARE</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareCards;
