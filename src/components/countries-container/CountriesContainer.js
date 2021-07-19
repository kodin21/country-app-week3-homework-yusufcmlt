import axios from "axios";
import React, { useEffect, useState } from "react";

import CountryCard from "./country-card/CountryCard";

import "./Countries.style.scss";
export default function CountriesContainer() {
  const [countryList, setCountryList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://restcountries.eu/rest/v2/all?fields=name;capital;languages;population;region;flag"
      )
      .then(({ data }) => {
        setCountryList(data);
      });
  }, []);

  return (
    <div className="countries">
      <div className="countries__filter">FILTER HERE</div>
      <div className="countries__container">
        {countryList.map((country, index) => {
          if (index > 230) {
            return <CountryCard cardData={country} />;
          }
        })}
      </div>
      <div className="countries__paging">PAGES HERE</div>
    </div>
  );
}
