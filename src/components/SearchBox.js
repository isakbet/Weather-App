import React from "react";

import StyledSearchBox from "./styles/StyledSearchBox";

const SearchBox = ({ handleInput, handleSubmit }) => (
  <StyledSearchBox>
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          handleInput(e);
        }}
        autoComplete="off"
        placeholder="Search for a city..."
      />
      <br></br>
      <button type="submit">Search</button>
    </form>


  </StyledSearchBox>
);

export default SearchBox;
