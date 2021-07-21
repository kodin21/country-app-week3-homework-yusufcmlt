import React, { useState } from "react";
import debounce from "../../../utils/debounce";

export default function CountryFilter({ filterByName, filterByRegion }) {
  const regionFilters = [
    "All",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const [searchInput, setSearchInput] = useState("");

  const handleRegionClick = (event) => {
    const clickedRegion = event.target.textContent;
    filterByRegion(clickedRegion);
    setSearchInput("");
  };

  const handleSearchCountry = (event) => {
    const searchTerm = event.target.value.trim();
    setSearchInput(searchTerm);
    //Debounce search function
    debounce(() => {
      filterByName(searchTerm);
    })();
  };

  return (
    <div className="countries__filter">
      <input
        className="countries__filter__input"
        placeholder="Search..."
        onChange={handleSearchCountry}
        value={searchInput}
      />
      <>
        <h2>Region:</h2>
        {regionFilters.map((region) => (
          <button
            onClick={handleRegionClick}
            type="button"
            className="countries__filter__button"
          >
            {region}
          </button>
        ))}
      </>
    </div>
  );
}
