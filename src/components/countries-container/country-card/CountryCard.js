import React from "react";

import "../Countries.style.scss";

export default function CountryCard({ cardData }) {
  const { name, languages, population, region, flag, capital } = cardData;

  return (
    <div className="card">
      <h3 className="card__heading">{name}</h3>
      <img src={flag} alt={`${name} flag`} className="card__flag" />
      <div className="card__content">
        <span className="card__content__info">
          Name:<i>{name}</i>
        </span>
        <span className="card__content__info">
          Capital:<i>{capital}</i>
        </span>
        <span className="card__content__info">
          Language:<i>{languages[0].name}</i>
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
