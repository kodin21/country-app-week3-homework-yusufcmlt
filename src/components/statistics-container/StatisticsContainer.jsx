import React from "react";
import { useFadeAnimation } from "../../utils/custom-hooks";

import "./Statistics.style.scss";

export default function StatisticsContainer() {
  const { fadeAnimation } = useFadeAnimation(" statistics--enter-left");
  return (
    <div className={`statistics${fadeAnimation}`}>
      <h2 className="statistics__heading">Statistics</h2>
      <div className="placeholderTest">TEST</div>
    </div>
  );
}
