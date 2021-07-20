import React, { useEffect, useState } from "react";

import CountryCard from "./country-card/CountryCard";

import "./Countries.style.scss";
import CountryFilter from "./country-settings/CountryFilter";
import CountryPageNumbers from "./country-settings/CountryPageNumbers";
import { useFadeAnimation } from "../../utils/custom-hooks";

export default function CountriesContainer({ countryList }) {
  const { fadeAnimation } = useFadeAnimation(" countries--enter-right");
  const [filteredCountries, setFilteredCountries] = useState(countryList);
  const [page, setPage] = useState({
    pageCount: 1,
    currentPage: 1,
  });

  useEffect(() => {
    getPageNumbers(filteredCountries.length);
  }, [filteredCountries]);

  //Page number setter.
  const handlePageNumber = (pageNumber) => {
    setPage({ ...page, currentPage: pageNumber });
  };
  //Filter List using entered search term
  const filterByName = (searchTerm) => {
    setFilteredCountries(
      countryList.filter(({ name }) => name.toLowerCase().includes(searchTerm))
    );
  };
  //Filter List using given region buttons
  const filterByRegion = (regionName) => {
    setFilteredCountries(
      countryList.filter(({ region }) =>
        region.toLowerCase().includes(regionName)
      )
    );
  };

  //Calculating pages using max item quantity(25 item default)
  //Example: Page 1 ---> 0-24   Page 3 ---> 50-75
  const filterByPage = () => {
    const startItem = (page.currentPage - 1) * 25;
    const endItem = page.currentPage * 25;
    return [startItem, endItem];
  };

  //Getting page number count using filtered (or base) country list
  const getPageNumbers = (listLength, maxItem = 25) => {
    const calculatedPageCount =
      Math.floor(listLength / maxItem) + (listLength % maxItem > 0 ? 1 : 0);
    setPage({ ...page, pageCount: calculatedPageCount });
  };

  return (
    <div className={`countries${fadeAnimation}`}>
      <h2 className="countries__heading">Country List</h2>
      <CountryFilter />
      <CountryPageNumbers
        pageCount={page.pageCount}
        handlePageNumber={handlePageNumber}
      />
      <div className="countries__container">
        {filteredCountries.slice(...filterByPage()).map((country, index) => {
          if (index < 25) {
            return <CountryCard key={index} cardData={country} />;
          }
        })}
      </div>
      <CountryPageNumbers
        pageCount={page.pageCount}
        handlePageNumber={handlePageNumber}
      />
    </div>
  );
}
