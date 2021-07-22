import React from "react";
import { useFadeAnimation, useLanguageData } from "../../utils/custom-hooks";
import StatisticCard from "./statistic-card/StatisticCard";

import "./Statistics.style.scss";

/**
 * Statistics container component
 * Renders statistic cards based on given config data
 * Config has card heading,unit and sort property datas.
 */

export default function StatisticsContainer({ countryList }) {
  const { fadeAnimation } = useFadeAnimation(" statistics--enter-left");

  const statisticsConfig = [
    {
      name: "Most spoken languages",
      statisticProperty: "languages",
      unit: "-countries",
    },
    {
      name: "Largest countries",
      statisticProperty: "area",
      unit: "-km²",
    },
    {
      name: "Countries with highest population",
      statisticProperty: "population",
      unit: "",
    },
    {
      name: "Countries with highest wealth inequality",
      statisticProperty: "gini",
      unit: "",
    },
  ];

  return (
    <div className={`statistics${fadeAnimation}`}>
      <h2 className="statistics__heading">Statistics</h2>
      <div className="statistics__container">
        {statisticsConfig.map((statConfig, index) => (
          <StatisticCard
            key={index + statConfig.name}
            data={statConfig}
            countryList={countryList}
          />
        ))}
      </div>
    </div>
  );
}
