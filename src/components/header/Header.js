import React from "react";
import NavButton from "../nav-button/NavButton";

import "./Header.style.scss";

export default function Header() {
  return (
    <header className="header">
      <h1 className="header__heading">
        <span className="header__heading--firstline">All countries,</span>{" "}
        <span className="header__heading--secondline">one place.</span>
      </h1>
      <div className="header__buttons">
        <NavButton icon="world">Get All Countries</NavButton>
        <NavButton icon="statistics">Check Statistics</NavButton>
      </div>
    </header>
  );
}
