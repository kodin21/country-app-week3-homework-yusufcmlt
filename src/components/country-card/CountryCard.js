import React from "react";

import "./CountryCard.style.scss";

export default function CountryCard({ cardData }) {
  const { name, language, population, region, flag } = cardData;

  return (
    <div className="card">
      <h3 className="card__heading">{name}</h3>
      <img src={flag} alt={`${name} flag`} className="card__flag" />
      <div className="card__content">
        <span className="card__content__info">
          Name:<i>{name}</i>
        </span>
        <span className="card__content__info">
          Language:<i>{language}</i>
        </span>
        <span className="card__content__info">
          Population:<i>{population}</i>
        </span>
        <span className="card__content__info">
          Region:<i>{region}</i>
        </span>
      </div>
    </div>
  );
}
