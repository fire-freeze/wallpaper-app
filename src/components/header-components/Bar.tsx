import React from "react";
import logo from "../../assets/logo.png";
import SearchBar from "./SearchBar";
interface PropTypes {}

const Bar: React.FC<PropTypes> = () => {
  return (
    <>
      <div className="bar-logo">
        <img src={logo} alt="app-logo" />
      </div>
      <SearchBar />
    </>
  );
};

export default Bar;
