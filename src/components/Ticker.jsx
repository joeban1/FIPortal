import React from "react";
import TickerOptions from "./TickerOptions";

function Ticker(props) {
    return (
      <select className={props.className} onChange={(e) => props.setSelectedStock(e.target.value)}>
  <TickerOptions />
      </select>
    );
  }

export default Ticker;
