import React, { useMemo, useState } from "react";
import {
  languageSorter,
  statPropertySorter,
} from "../../../utils/statistic-utils";
import Loading from "../../loading/Loading";

/**
 * Statistic card component:
 * Calculates and renders statistics based on given property data
 */

export default function StatisticCard({ data, countryList }) {
  const { name, statisticProperty, unit } = data;

  const [loadStatus, setLoadStatus] = useState("idle");
  const [statisticData, setStatisticData] = useState([]);
  const [headingTransform, setHeadingTransform] = useState("");

  //Get sorted statics data based on property name
  //I've added small delay to see loading animation
  const getSortedProperty = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (statisticProperty === "languages") {
          resolve(languageSorter(countryList));
        } else {
          resolve(statPropertySorter(countryList, statisticProperty));
        }
      }, 1000);
    });
  };

  //Clicking on statistic card.
  //Calculates data then sets states.
  const handleCardClick = () => {
    if (loadStatus === "idle") {
      setLoadStatus("loading");
      getSortedProperty().then((resolvedData) => {
        setStatisticData(resolvedData);
        setLoadStatus("loaded");
        setHeadingTransform(" statcard__heading-2--loaded");
        console.log(resolvedData);
      });
    }
  };

  return (
    <div className="statcard" onClick={handleCardClick}>
      <h2 className={`statcard__heading-2${headingTransform}`}>{name}</h2>
      {loadStatus === "idle" ? null : loadStatus === "loading" ? (
        <Loading />
      ) : (
        <div className="statcard__content">
          {
            <ul className="statcard__list">
              {statisticData.map((stat, index) => (
                <li key={index + stat.name} className="statcard__list__item">
                  <span>{index + 1}-</span>
                  <span>{stat.name}</span>
                  <span>{stat[statisticProperty]} </span>
                  <span>{unit}</span>
                </li>
              ))}
            </ul>
          }
        </div>
      )}
    </div>
  );
}
