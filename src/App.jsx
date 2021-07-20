import "./App.scss";
import React, { useEffect, useState } from "react";
import CountriesContainer from "./components/countries-container/CountriesContainer";
import Header from "./components/header/Header";
import { useTabs } from "./utils/custom-hooks";
import StatisticsContainer from "./components/statistics-container/StatisticsContainer";

function App() {
  const [tab, setTab] = useState("countries");

  const handleTabs = (tabRoute) => {
    setTab(tabRoute);
  };

  return (
    <div className="app">
      <h1 className="app__heading">All countries in one place.</h1>
      <Header handleTabs={handleTabs} />
      {tab === "countries" ? <CountriesContainer /> : <StatisticsContainer />}
    </div>
  );
}

export default App;
