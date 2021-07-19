import React from "react";
import { useCountryList } from "../../utils/custom-hooks";

import CountryCard from "./country-card/CountryCard";

import "./Countries.style.scss";
import CountryFilter from "./country-settings/CountryFilter";
import CountryPages from "./country-settings/CountryPages";

export default function CountriesContainer() {
  const { resData, isLoading } = useCountryList(
    "https://restcountries.eu/rest/v2/all"
  );

  return (
    <div className="countries">
      <CountryFilter />
      <div className="countries__container">
        {resData.map((country, index) => {
          if (index < 20) {
            return <CountryCard cardData={country} />;
          }
        })}
      </div>
      <CountryPages />
    </div>
  );
}
