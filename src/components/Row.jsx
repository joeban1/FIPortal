import React from "react";
import Input from "./Input";
import CurrencyInput from 'react-currency-input-field';
import Ticker from "./Ticker";
import Multiply from "./Multiply";

function Row(props) {
  return (
    <div className="input-container">
      <Ticker className="Ticker" />
      <Input
        className="input"
        type="text"
        placeholder="Units"
        value1={props.value1}
        onChange={props.handleUnitsChange}
      />
      <Input
        className="input"
        type="text"
        placeholder="Price"
        value2={props.value2}
        onChange={props.handlePriceChange}
      />
      <Multiply value1={props.value1} value2={props.value2} updateTotalValue={props.updateTotalValue}>
        {props.children}
      </Multiply>
    </div>
  );
}

export default Row;