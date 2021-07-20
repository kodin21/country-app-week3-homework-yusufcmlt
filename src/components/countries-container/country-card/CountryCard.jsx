import React, { useEffect, useState } from "react";

import "../Countries.style.scss";

export default function CountryCard({ cardData }) {
  const { name, languages, population, region, flag, capital } = cardData;
  const [createAnimation, setAnimation] = useState("");

  useEffect(() => {
    let randomTimeout = createRandomAnimation();

    return () => {
      clearTimeout(randomTimeout);
    };
  }, []);

  //Add creation animation with random delay
  const createRandomAnimation = () => {
    let randomTime = Math.round(Math.random() * 1500) + 1;
    let creatorTimeout = setTimeout(() => {
      setAnimation(" card--animation");
    }, randomTime);

    return creatorTimeout;
  };

  return (
    <div className={`card${createAnimation}`}>
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
