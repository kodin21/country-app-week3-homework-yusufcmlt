import "./App.scss";
import React, { useEffect, useState } from "react";
import CountriesContainer from "./components/countries-container/CountriesContainer";
import Header from "./components/header/Header";
import { useCountryList } from "./utils/custom-hooks";
import StatisticsContainer from "./components/statistics-container/StatisticsContainer";
import Loading from "./components/loading/Loading";

function App() {
  const { resData, isLoading } = useCountryList(
    "https://restcountries.eu/rest/v2/all"
  );
  const [tab, setTab] = useState("countries");

  const handleTabs = (tabRoute) => {
    window.scrollTo(0, 300);
    setTab(tabRoute);
  };

  return (
    <div className="app">
      <h1 className="app__heading">All countries in one place.</h1>
      <Header handleTabs={handleTabs} />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {tab === "countries" ? (
            <CountriesContainer countryList={resData} />
          ) : (
            <StatisticsContainer />
          )}
        </>
      )}
    </div>
  );
}

export default App;
