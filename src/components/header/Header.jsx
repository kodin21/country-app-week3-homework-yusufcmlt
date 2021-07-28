import React, { memo } from "react";
import NavButton from "../nav-button/NavButton";

import "./Header.style.scss";

function Header({ handleTabs }) {
  console.log("RENDERED");
  return (
    <header className="header">
      <NavButton handleTabs={handleTabs} route="countries" icon="world">
        Get All Countries
      </NavButton>
      <NavButton handleTabs={handleTabs} route="statisctics" icon="statistics">
        Check Statistics
      </NavButton>
    </header>
  );
}
//Small optimizing tries
export default memo(Header);
