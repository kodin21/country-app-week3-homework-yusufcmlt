import React from "react";

import "./NavButton.style.scss";

export default function NavButton({ children, icon }) {
  return (
    <button className="nav__button">
      <span className={`nav__icon nav__icon-${icon}`} />
      <p className="nav__text">{children}</p>
    </button>
  );
}
