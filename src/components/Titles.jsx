import React from "react";
import Button from "./Button";

function Titles(props) {
  return (
    <div>
      <div>
        <h2>Shares</h2>
      </div>
      <div className="title-container">
        <div className="title-head">Ticker</div>
        <div className="title-head">Units</div>
        <div className="title-head">Price</div>
        <div className="title-head">Value</div>
        <div>
          <Button onClick={props.addRow} />
          <button>Calculate</button>
        </div>
      </div>
    </div>
  );
}

export default Titles;
